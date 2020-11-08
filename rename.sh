for file in $(ls content/slides/); do
  f=$(echo "${file##*/}");
   filename=$(echo $f| cut  -d'.' -f 1); #file has extension, it return only filename
   if (( $filename > 126 )); then
      new=$(($filename + 1))
      echo $filename $new
      mv "content/slides/$file" "content/temp_slides/${new}.md" ;
    fi
done

for file in $(ls content/temp_slides/); do
   mv "content/temp_slides/$file" "content/slides/${file}" ;
done
