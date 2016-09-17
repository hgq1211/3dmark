/**
 * Created by Administrator on 2016/8/16.
 */
// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    return gulp.src('public/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});
// create a default task and just log a message
gulp.task('default', function() {
    gulp.src('public/stylesheets/style.css',{base:'public/stylesheets'})         // 获取流的api
        .pipe(gulp.dest('test/foo')); // 写放文件的api
    return gutil.log('Gulp is running!')

});
gulp.watch('public/stylesheets/*.css', function(event){
    console.log(event.type); //变化类型 added为新增,deleted为删除，changed为改变
    console.log(event.path); //变化的文件的路径
});
