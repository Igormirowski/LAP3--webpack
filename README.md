# LAP3--webpack
WEBPACK:
- merge code into one bundle

STEPS:
- `npm innit -y`
- `npm install webpack webpack-cli --save-dev`
- `webpack (or npx webpack)` (#dist folder appear)
- `touch webpack.config.js`

3 MODES: 
- development 
- production 
- none


## Adding logo /CSS 
- Loaders - to process the file
- TO INSTALL:
    - `npm i -D file-loader`
    - update webpack.config.js
    - [rubular](https://rubular.com/
    
- INSTALL CSS loader:
    - `npm install css-loader --save-dev`
    - `add  { test: /\.css$/, use: 'css-loader' } to webpac.condig.js`

    - `npm i style-loader --save-dev`
    -  ` add { test: /\.css$/, use: ['style-loader', 'css-loader'] }` ORDER IMPORTANT!

![css loader](assets/igor.png)

### BALEL LOADER: (allows to deal with class properties)
- `npm i @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties --save-dev`
- add rules to webpack.config.js



