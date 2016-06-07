# File Uploader

> Sandbox project featuring ASP.NET Core, C#, Node.js, Webpack, React, JavaScript, Babel, CSS Modules.

https://github.com/koistya/file-uploader

### Directory Layout

```shell
.
├── /.vscode/                   # Visual Studio Code settings
├── /build/                     # The folder for compiled output
├── /client/                    # Client-side app (frontend)
├── /client.test/               # Unit and integration tests for the frontend app
├── /public/                    # Static files such as favicon.ico etc.
├── /server/                    # Web server and data API (backend)
├── /server.test/               # Unit and integration tests for the backend app
├── /tools/                     # Build automation scripts and utilities
│── jsconfig.json               # Visual Studio Code settings for JavaScript
│── LICENSE.txt                 # Licensing information
│── package.json                # The list of project dependencies and NPM scripts
└── README.md                   # Project overview / getting started guide
```


### Prerequisites

* OS X, Windows or Linux
* [Node.js](https://nodejs.org) v6 or newer
* [.NET Core v1.0 RC2](https://blogs.msdn.microsoft.com/dotnet/2016/05/16/announcing-net-core-rc2/)
* [Visual Studio Code](https://code.visualstudio.com/) with [C# extension](https://github.com/OmniSharp/omnisharp-vscode)
* or [Visual Studio 2015](https://www.visualstudio.com)


### Getting Started

`1`. Clone the project by running:

```shell
$ git clone https://github.com/koistya/file-uploader.git
$ cd file-uploader
```

`2`. Install project dependencies listed in [`project.json`](./server/project.json) and
[`package.json`](./package.json) files: 

```shell
$ dotnet restore                # Installs .NET dependencies listed in project.json
$ npm install                   # Installs Node.js dependencies listed in package.json
```

`3`. Finally, launch the web app by running:

```shell
$ npm start                     # Compiles and lanches the app
```

The app should become available at [http://localhost:5000/](http://localhost:5000/)


### How to Deploy

Before you can deploy your app to [Azure App Service](https://azure.microsoft.com/services/app-service/),
you need to open Web App settings in [Azure Portal](https://portal.azure.com/), go to "Deployment
Source", select "Local Git Repository" and hit [OK]. Then copy and paste "Git clone URL" of your
Web App into [`tools/deploy.js`](./tools/deploy.js) file. Then, whenever you need to compile your
app into a distributable format and upload that to Windows Azure App Service, simply run:

```shell
$ npm run deploy                # Same as running: node tools/deploy --production
```


### Get in Touch

* [@koistya](https://twitter.com/koistya) on [Codementor](https://www.codementor.io/koistya)


### License

Copyright © 2016 Konstantin Tarkus <hello@tarkus.me>. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/kriasoft/react-starter-kit/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license.
