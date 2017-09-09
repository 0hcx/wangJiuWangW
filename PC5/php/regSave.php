<?php
	header("Content-type: text/html; charset=utf-8");
	$phone = $_POST['phone'];
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	$userPass1 = $_POST['userPass1'];
	
	$conn = mysql_connect("localhost","root","123456");
	
	if(!$conn){
		die("connect fail");
	}else{
		echo "connect success";
	}

	mysql_select_db("mydbwjw",$conn);

	$sqlStr="insert into userinfo(phone,userName,userPass,userPass1)
    	values('".$phone."','".$userName."','".$userPass."','".$userPass1."')";
	
    mysql_query($sqlStr,$conn);

    mysql_close($conn); 
?>