# todoApp
```
web app to create and manage todo tasks lists based on logged in users, designed using NodeJS server and angularJS UI. 
```

 ## Getting Started
 
 Let's go with step by step procedure starting from installing node  

## Step 1: Installing node
```
npm init [-f|--force|-y|--yes]
```
This will ask you a bunch of questions, and then write a package.json for you.

It attempts to make reasonable guesses about what you want things to be set to, and then writes a package.json file with the options you've selected.

If you already have a package.json file, it'll read that first, and default to the options in there.

If you invoke it with -f, --force, -y, or --yes, it will use only defaults and not prompt you for any options.

At this point you will see the "package.json" file created. The file looks something like this,
 
 
 {
  "name": "todoapp",
  "version": "1.0.0",
  "description": "todo application",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.0",
    "express": "^4.13.4"
  }
}

this is the initial setting for any nodeJS project. We will have to install few additional capabilities for this porject.

## express framework 

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Installation

```
npm install express --save

```
Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
Please refer https://github.com/expressjs/body-parser for further info on express framework.

## body-parser 

The nodeJS body-parser middleware basically parses JSON.

##Installation

```
npm install body-parser --save

```

please refer https://www.npmjs.com/package/body-parser-json for further info.


