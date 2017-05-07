var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    //自动刷新
    reload = browserSync.reload();    
gulp.task('server',function() {
    //1.自动创建webserver
    //2.自动打开浏览器
    //3.保证我们的代码与显示结果实时同步
    //更改默认端口
    browserSync.init({
        server: {
            //网站根目录
            baseDir: "./src/",
            //默认文件
            index: "index.html"
        },
        open: "external",
        port: 8080

    });
});
gulp.task('default',['server']);


