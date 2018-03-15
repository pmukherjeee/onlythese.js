const _ = require('lodash')

module.exports = function (obj, props) {
  let keys = _.keys(obj)
  let cloned = _.cloneDeep(obj)
  for (let prop of keys) {
    if (_.indexOf(props, prop) === -1) { // AKA if prop isn't in props
      delete cloned[prop]
    }
  }
  return cloned
}
