#!/usr/bin/env node
const packageVersion = require('../package.json').version,
  process = require('process'),
  program = require('commander')

let run = () => {
  program
    .version(packageVersion)
    .usage('<command> [options]')
    .command('init-component', 'init component')
    .command('init-offlinepackage', 'init offlinepackage')
    .command('init-page', 'init page')
    .parse(process.argv)
}

run()
