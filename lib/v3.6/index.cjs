var VueRouterComposables = require('vue-router/composables')

Object.keys(VueRouterComposables).forEach(function(key) {
  exports[key] = VueRouterComposables[key]
})

exports.isVueRouter3 = true
exports.isVueRouter4 = false
