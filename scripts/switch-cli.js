const { switchVersion } = require('./utils')

const version = process.argv[2]
const moduleEntry = process.argv[3] || 'vue-router'

if (version === '3.6') {
  switchVersion(3.6, moduleEntry)
  console.log(`[vue-router-demi] Switched for VueRouter 3.6 (entry: "${moduleEntry}")`)
} else if (version === '4') {
  switchVersion(4, moduleEntry)
  console.log(`[vue-router-demi] Switched for VueRouter 4 (entry: "${moduleEntry}")`)
} else {
  console.warn(`[vue-router-demi] expecting version "3.6" or "4" but got "${version}"`)
  process.exit(1)
}
