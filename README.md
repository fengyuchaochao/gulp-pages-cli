# gulp-pages-cli

gulp-pages-cli是一款基于gulp的脚手架，用于初始化gulp项目结构


## 第一步: 全局安装
```
npm i gulp-page-cli --g
```

## 第二步：初始化项目

```
mkdir page-demo
cd page-demo
gulp-page-cli // 执行该命令，生成初始化文件
```
## 第三步：安装gulp打包调试工具

```
npm i gulp-config-tool --save-dev //该工具也基于gulp自己封装的打包调试工具
```
然后修改package.json中scripts，添加build/dev命令
```
"build": "gulp-config-tool build",
"dev": "gulp-config-tool dev"
```

## 第四步：开启本地服务

```
npm run dev // 打开localhost:7000预览效果
```
