function CheckLoginInput()
{
    if( document.loginform.id_input.value == "" )
    {
        alert( "ID를 입력하세요" );
        document.loginform.id_input.focus();
        return false;
    }
 
    if( document.loginform.pw_input.value == "" )
    {
        alert( "비밀번호를 입력하세요" );
        document.loginform.pw_input.focus();
        return false;
    }

    if( document.loginform.pw_input.value != "1111" )
    {
        alert( "비밀번호가 일치하지 않습니다. 다시 입력하세요. (hint:1111)" );
        document.loginform.pw_input.focus();
        return false;
    }
 
    document.loginform.setAttribute( "action", "home.html"  );
    document.loginform.submit();
 
}