#!/usr/bin/env node
'use strict'

const commander = require('commander')
const ghToPages = require('gh-to-pages')
const pkgJSON = require('./package.json')

commander
  .version(pkgJSON.version)
  .usage('<url>')
  .parse(process.argv)

const url = commander.args[0]

if (!url) {
  throw new Error('No URL Provided')
}

try {
  const output = ghToPages(url)
  console.log(output)
} catch (e) {
  throw new Error(e)
}

module.exports = commander
