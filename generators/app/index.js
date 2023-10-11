const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  prompting() {
    // yeoman使用次方法和用户输入命令行进行交互
    // 此方法调用父类方法的prompt方法,此方法是一个promise
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your progress name',
        default:this.appname
      }
    ]).then(answers => {
      this.answers = answers
    })
  }
  writing() {

    // this.fs.write(
    //   this.destinationPath('temp.txt'),
    //   Math.random().toString()
    // )

    // 模版文件路径
    // const tmpl = this.templatePath('foo.txt')
    // // 输出文件路径
    // const output = this.destinationPath('foo.txt')
    // // 模版数据上下文
    // const context = { title: 'hello world', success: false}

    // // copyTpl复制模版上下文到输出文件
    // this.fs.copyTpl(tmpl,output,context)

    const template = [
      'public/favicon.ico',
      'public/index.html',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/App.vue',
      'src/main.js',
      'jsconfig.json',
      'package-lock.json',
      'package.json',
      'README.md',
      'vue.config.js'
    ]

    template.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}
