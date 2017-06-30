# Description

Coding Challenge - Large dataset data table

Built using React with Hot reloading. CSS uses postcss and CSS Modules for componentized CSS. Babel is used to transpile the JS to es2015 for running in browsers. Axios is used for the XHTMLRequest and webpack-dev-server is used as the web server. Uses eslint for linting using the Standard Javascript spec.

## Instructions

Once you clone the repo run this command to install the dependencies

```
npm install
```

After the dependencies are installed you will need to generate a sample data file. To do this run the following command, the `-n` flag lets you define how many rows to generate.

```
node generate-data.js -n 1000
```

Once the data file is generated you can start up the development server

```
npm start
```
When the build completes you can access the project at [http://localhost:8080](http://localhost:8080)

## TODO

- Better styles
- More detailed documentation
- Column Sorting
- Client Side Filtering
- Better build
  - production build
  - More scripts
- More cell Components
- Better cell width setting based on content type
- Tests
- Better column mapping, right now assuming all objects will have all 40 properties
- Better file organization, right now very flat
