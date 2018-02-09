Improving Your Workflow with Gulp.js - Working Files
====================================================


//gulp instagg global
npm install gulp -g

//start project
npm init

//gulp install
npm install gul --save-dev

//get version gulp
gulp -v


==> cmd Windows
mkdir souce //create folder
md source soi //create ewo fikder "source" "soi"
cls //clear windows
del p.js //remove file
rmdir source //remove dir fource
notepad file.txt //open with notepad
copy file1.txt file1Copy.txt //copy file
rename file1.txt file1_rename.txt //rename
PhpStorm.exe C:\SamplesProjects\MetersToInchesConverter --line 3 C:\SamplesProjects\MetersToInchesConverter\src\javascript\numbers.js //open file with phpstorm
start notepad++ //start notepad++
start notepad++ <filename> // open file with notepad++
dir //show list
type nul > 3.txt | echo. > 5.txt //create empty file 

//show content file in cmd windows
more package.json

//create file gulpfile.js
type nul > gulpfile.js

//run default task in gulp
gulp


====> gulp images [task]

plugins list :
gulp-imagemin //https://www.npmjs.com/package/gulp-imagemin برای کاهش حجم تصاویر
gulp-newer //https://www.npmjs.com/package/gulp-newer تنها فایل های جدید را پیدا میکند و کم حجم میکند

//for all subfolder
in: source + 'images/**/*.*',
  
====> gulp watch [task]
  ctrl + c  //for back from watch

===> gulp clean [task]
del //https://www.npmjs.com/package/del همهی فایل های یک فولدر را پاک میکند برای ریست کردن پروژه

===>Development Or Production

//for set global
set NODE_ENV=development

//for show varible
echo %NODE_ENV%


===> gulp html [task]

plugins list :
gulp-preprocess //https://www.npmjs.com/package/gulp-preprocess حالت ضمیمه و چند تیکه کردن فایل اچ تی ام ال
gulp-htmlclean  //https://www.npmjs.com/package/gulp-htmlclean برای فشرده سازی فایل های html

