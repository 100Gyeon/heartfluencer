function uploadImg() {

    let fileInfo = document.getElementById("upImgFile").files[0];
    //업로드할 이미지 파일 받아오기
    let reader = new FileReader();

    // onload로 받아서 출력
    reader.onload = function() {
        document.getElementById("my_img").src = reader.result;
    };

    if( fileInfo ) {
        // 파일 URL 읽기
        reader.readAsDataURL( fileInfo );
    }
}
