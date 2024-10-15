const basicInfo = require('./basicInfo')
const components = require('./components')
const task = require('./tasks')

module.exports = {
    ...basicInfo,
    ...components,
    ...task,
}