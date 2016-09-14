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
    gulp.src('public/stylesheets/style.css',{base:'public/stylesheets'})         // ��ȡ����api
        .pipe(gulp.dest('test/foo')); // д���ļ���api
    return gutil.log('Gulp is running!')

});
gulp.watch('public/stylesheets/*.css', function(event){
    console.log(event.type); //�仯���� addedΪ����,deletedΪɾ����changedΪ�ı�
    console.log(event.path); //�仯���ļ���·��
});
