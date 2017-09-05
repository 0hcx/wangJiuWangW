<?php
	header("Content-type: text/html; charset=utf-8");
	$phone = $_POST['phone'];
	$userName = $_POST['userName'];
	$passWord = $_POST['passWord'];
	$passWord1 = $_POST['passWord1'];
	
	$conn = mysql_connect("localhost","root","123456");
	
	if(!$conn){
		die("connect fail");
	}else{
		echo "connect success";
	}

	mysql_select_db("mydbwjw",$conn);

	$sqlStr="insert into userInfo(phone,userName,passWord,passWord1)
     values('".$phone."','".$userName."','".$userName."','".$passWord1."')";
    mysql_query($sqlStr,$conn);

    mysql_close($conn); 
?>