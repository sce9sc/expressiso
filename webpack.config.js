var path = require("path");

module.exports = [
  {
    name: "userClient",
    context: path.join(__dirname, "react"),
    entry: "clientRoutes",
    output: {
      path: path.join(__dirname, "public", "javascripts"),
      filename: "bundle.js",
      publicPath: "/javascripts/"
    },
    module: {
      loaders: [
        { test: /\.jsx?$/,query: {compact: false}, loader: "babel-loader"}
        //{ test: /\.jsx?$/, loader: "babel-loader"}
        //{ test: /\.jsx?$/, loader: "jsx-loader?harmony"}
      ]
    },
    resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ["", ".js", ".jsx"],
      root: [path.join(__dirname, "react"),path.join(__dirname, "node_modules")],
      modulesDirectories: ["node_modules"]
    }
  },
  {
    name: "adminClient",
    context: path.join(__dirname, "react"),
    entry: "clientAdminRoutes",
    output: {
      path: path.join(__dirname, "public", "javascripts"),
      filename: "bundleAdmin.js",
      publicPath: "/javascripts/"
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loader: "babel-loader"}
        //{ test: /\.jsx?$/, loader: "jsx-loader?harmony"}
      ]
    },
    resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ["", ".js", ".jsx"],
      root: [path.join(__dirname, "react"),path.join(__dirname, "node_modules")],
      modulesDirectories: ["node_modules"]
    }
  },
  /*{
    name: "server",
    context: path.join(__dirname, "public", "javascripts"),
    entry: "routes",
    output: {
      path: path.join(__dirname, "server"),
      filename: "server.js",
      publicPath: "/javascripts/"
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loader: "babel-loader"}
        //{ test: /\.jsx?$/, loader: "jsx-loader?harmony"}
      ]
    },
    resolve: {
      extensions: ["", ".js", ".jsx"],
      root: [path.join(__dirname, "public", "javascripts"),path.join(__dirname, "node_modules")],
      modulesDirectories: ["node_modules"]
    }
  }*/

];