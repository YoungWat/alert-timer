// 使用打包后的文件做首页
const { execSync } = require("child_process")
const { readFileSync, writeFileSync } = require("fs")
const path = require("path")

const execShell = (string) => {
  return execSync(string, { stdio: "inherit" })
}

const build = () => {
  console.log(`npm run build`)
  execShell(`npm run build`)
}

const deleteOldFiles = () => {
  console.log(`delete old files`)
  execShell(`rm -rf ../precache-*`)
}

const copyFiles = () => {
  console.log(`copy files`)
  execShell(`cp -r ./build/* ../`)
}

const replacePathInHtml = () => {
  console.log(`replace path in html`)

  const htmlPath = path.join(__dirname, "../index.html")
  const html = readFileSync(htmlPath, {
    encoding: "utf8",
  })

  // /static 替换为 ./static
  writeFileSync(htmlPath, html.replace(/\"\/static/g, `"./static`), {
    encoding: "utf8",
  })
}

const commitAndPush = () => {
  console.log(`commit`)
  execShell(`git add -A`)
  execShell(`git commit -m "chore: page auto pub ${new Date()}"`)
  // execShell("git push")
}

build()
deleteOldFiles()
copyFiles()
replacePathInHtml()
commitAndPush()
