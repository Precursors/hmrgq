'use strict'

var fs = require('fs')
var path = require('path')
var root = process.cwd()

if (process.argv.length === 4) {
  root = path.resolve(root, process.argv[2])
}

var componentList = process.argv.slice(-1)[0].split(',')

for (let component of componentList) {
  let componentPath = path.join(root, component)
  let indexJs = `/* powered by jarvis */

import React, {Component} from 'react'
import style from './index.css'

class ${component} extends Component {
  render () {
    return (
      <div>
        ${component}
      </div>
    )
  }
}

export default ${component}
  `
  let indexScss = ``
  fs.mkdirSync(componentPath)
  fs.writeFileSync(path.join(componentPath, 'index.js'), indexJs)
  fs.writeFileSync(path.join(componentPath, 'index.scss'), indexScss)
}
