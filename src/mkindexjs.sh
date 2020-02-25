filelist=$(ls components)
for filename in $filelist
do
  touch components/$filename/index.js
done
