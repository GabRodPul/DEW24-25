@echo off

IF NOT "%~1"=="" GOTO COMPILE-SINGLE

:COMPILE-ALL
echo Compiling all files...
FOR /D %%d IN ("Activity *") DO (
    FOR /f "tokens=* delims=" %%f IN ('dir /b "%%d\*.ts"') DO npx tsc "./%%d/%%f" --outDir "./%%d/" --target "es2016"
)

GOTO END

:SET-ARG
SET NUM=%1

:COMPILE-SINGLE
FOR /f "tokens=* delims=" %%f IN ('dir /b "Activity %1\*.ts"') DO npx tsc "Activity %1/%%f" --outDir "./Activity %1/" --target "es2016"

:END
echo Done