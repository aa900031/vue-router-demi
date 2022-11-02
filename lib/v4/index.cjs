var VueRouter = require('vue-router')

Object.keys(Vue).forEach(function(key) {
  exports[key] = VueRouter[key]
})

exports.isVueRouter3 = false
exports.isVueRouter4 = true
