const { switchVersion, loadModule } = require('./utils')
const { readPackageJSON } = require('pkg-types')

const VueRouter = loadModule('vue-router')
if (!VueRouter) {
  console.warn('[vue-router-demi] VueRouter is not found. Please run "npm install vue-router" to install.')
  return
}

readPackageJSON('vue-router').then(({ version }) => {
  if (version.startsWith('3.6.')) {
    switchVersion(3.6)
  } else if (version.startsWith('4.')) {
    switchVersion(4)
  } else {
    console.warn(`[vue-router-demi] VueRouter version v${VueRouter.version} is not suppported.`)
  }
})
