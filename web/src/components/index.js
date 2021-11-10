const modulesFiles = require.context('./', false, /\.vue$/)

// it will auto require all component from specified directory
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const install = (vm) => {
  for (let com in modules) {
    vm.component(com, modules[com])
  }
}

export default { install }
