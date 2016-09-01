# Sud Web 2014 website [![Build Status](https://travis-ci.org/sudweb/2014.svg?branch=master)](https://travis-ci.org/sudweb/2014)


Just some good old static webpages. We like to KISS.

## Contribute

Just fork this repo, commit your changes and open a pull request.

## Requirements

This project uses Sass, Compass, node and Grunt because we are cool kids.

You shoud be able to install Compass and node in a few commands:

```bash
# OSX install of rbenv
brew install rbenv

# OSX install of Node
brew install nvm

# For all OS
nvm install 0.10
nvm alias default 0.10
```

## Install

```bash
bundle install
npm install
```

## Use

### Single time build

```
npm run build
```

### Continuous build

```bash
npm start
```

Happy coding!

## Thumbnails

You initially need to install [GraphicsMagick](http://www.graphicsmagick.org).

```bash
brew install graphicsmagick
```

Then run, each time you need to regenerate thumbnails:

```bash
npm run thumbs
```

They will be located in `img/orateurs/150`.

## Deploy

### Production

Once you are satisfied and are ready to deploy on `sudweb.fr/2014`, proceed as below:

```bash
npm run deploy-prod
ssh sudweb 'cd www/2014 && git pull'
```

**Notice**: `sudweb` is a hostname configured in `~/.ssh/config`.

### Development

To share what you have done without publishing it live, use the following command:

```bash
npm run deploy-dev
```

The content will be available on `http://<your username>.github.io/2014`.
