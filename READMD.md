echo node_modules > .gitignore
git init
git add .
git commit -m 'feat: generator'
git创建本地仓库


git 鉴权

github -> setting -> create token（记得选上需要用的权限）

git push 用生成的token 作为密码输入 账号使用邮箱

发布代码到npm或者yarn
yarn publish
npm publish

发布时修改淘宝镜像
yarn publish --registry=https://registry.yarnpkg.com