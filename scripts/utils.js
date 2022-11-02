const fs = require('fs')
const path = require('path')

const dir = path.resolve(__dirname, '..', 'lib')

function loadModule(name) {
  try {
    return require(name)
  } catch (e) {
    return undefined
  }
}

function copy(name, version, moduleEntry) {
  moduleEntry = moduleEntry || 'vue-router'
  const src = path.join(dir, `v${version}`, name)
  const dest = path.join(dir, name)
  let content = fs.readFileSync(src, 'utf-8')
  content = content.replace(/'vue-router'/g, `'${moduleEntry}'`)
  try {
    fs.unlinkSync(dest)
  } catch (error) { }
  fs.writeFileSync(dest, content, 'utf-8')
}

function switchVersion(version, moduleEntry) {
  copy('index.cjs', version, moduleEntry)
  copy('index.mjs', version, moduleEntry)
  copy('index.d.ts', version, moduleEntry)
}


module.exports.loadModule = loadModule
module.exports.switchVersion = switchVersion
