# How to setup react with webpack

* `npm init`
* `npm i webpack -S`
* Add webpack config
* Setup Babel using `npm install babel-core babel-preset-es2015 babel-preset-react --save`
* create babel configuration file using > `touch .bablerc`
* add babel loader for webpack > `npm install babel-loader --save-dev`
* update webpack config to use babel-loader
* create index.html in distribution to load webpack bundle
* install webpack dev server > `npm install  webpack-dev-server --save-dev`
* add webpack dev server to start script
* now install react > `npm install react react-dom --save`

