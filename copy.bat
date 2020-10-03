@echo off
set destpath=C:\Users\lw\OneDrive\blog\source\navi\

xcopy /y navi.css %destpath%
xcopy /y favorite.json %destpath%
xcopy /y oftenuse.json %destpath%
xcopy /y navi.js %destpath%

pause