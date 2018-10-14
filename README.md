

## Introduction

I :heart: key and peele.  I thought I'd use this as an opportunity to create a site containing some of my favourite sketches.

I wanted to create a purely static site, but I didn't want to have to repeat the markup for each sketch.  Therefore, I wrote a little bit of [node](https://nodejs.org/en/) to read data from a json file and pump to data into some [pug](https://pugjs.org) templates.  The benefit of using pug is that you get minified html out of the box and, with using [filters in pug](https://pugjs.org/language/filters.html), you can also get minified css with [jstransformer-clean-css](https://www.npmjs.com/package/jstransformer-clean-css).

I also wanted to be able to simply deploy the application from the command line and therefore, I opted to use [surge](https://surge.sh/)

[View Application](https://git .surge.sh/)

## Requirements

Install the following npm packages globally:

```
npm install -g browser-sync
npm install -g nodemon
npm install -g surge
```

### Install dependencies:

```
npm install 
```

### Start the app:

```
npm start
```

