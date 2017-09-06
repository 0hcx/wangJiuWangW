<?php
	header("Content-type: text/html; charset=utf-8");
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	$conn = mysql_connect("localhost","root","123456");
	
	if(!$conn){
		die("亲，connect fail");
	}else{
		//echo "connect success";
	}

	mysql_select_db("mydbwjw",$conn);

	$sqlStr="select * from userinfo where userName='".$userName."' and userPass='".$userPass."'";
    $result = mysql_query($sqlStr,$conn);
    $rowCount = mysql_num_rows($result);
    if($rowCount==0){
    	echo "0";//登录失败
    }else{
    	echo "1";//登录成功！
    }
    mysql_close($conn); 
?>