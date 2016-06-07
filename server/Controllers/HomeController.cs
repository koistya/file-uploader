// Copyright © 2016 Konstantin Tarkus <hello@tarkus.me>
// This source code is licensed under the MIT license found in the
// LICENSE.txt file in the root directory of this source tree.

using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Xml.Linq;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace server.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment env;

        public HomeController(IHostingEnvironment env)
        {
            this.env = env;
        }

        public IActionResult Index()
        {
            dynamic assets;

            using (var stream = System.IO.File.OpenRead(Path.Combine(this.env.WebRootPath, "./assets/assets.json")))
            using (var reader = new StreamReader(stream))
            {
                assets = JsonConvert.DeserializeObject(reader.ReadToEnd());
                ViewData["bundle"] = (string)assets.main.js; // e.g. /assets/main-d41d8cd98f00.js (prevents issues with caching)
            }

            return View();
        }

        [HttpPost("/upload")]
        public async Task<IActionResult> Upload()
        {
            if (Request.Form.Files.Count == 0)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = "The file filed cannot be empty." });
            }

            string fileName = Request.Form.Files[0].FileName;

            try
            {
                using (var ms = new MemoryStream())
                {
                    await Request.Form.Files[0].CopyToAsync(ms);
                    ms.Position = 0;

                    using (var zip = new ZipArchive(ms, ZipArchiveMode.Read))
                    {
                        var contentTypesXml = zip.Entries.First(x => x.Name == "[Content_Types].xml");
                        var xml = XDocument.Load(contentTypesXml.Open());
                        var sheetContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml";
                        var node = xml.Root.Descendants().First(x => (string)x.Attribute("ContentType") == sheetContentType);
                        var sheetFileName = ((string)node.Attribute("PartName")).Substring(1);
                        var sheetFile = zip.Entries.FirstOrDefault(x => x.Name == sheetFileName);
                        // TODO: Read the worksheet and convert it to CSV
                    }
                }

                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = "This feature had not been implemented." });
            }
            catch
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = $"Failed to read '{fileName}' file. Make sure that it's a valid Excel document." });
            }
        }
    }
}
