#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , name        = 'test-workshop'

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
    name        : name
  , exerciseDir : fpath('./exercises/')
  , appDir      : __dirname
  , languages   : ['en', 'fr']
  , helpFile    : fpath('help.txt')
  , menuItems   : []
  , menu        : {fg: 'black', bg: /^win/.test(process.platform) ? 'yellow' : 220}
})
