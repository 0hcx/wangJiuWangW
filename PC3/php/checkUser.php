<?php
	$userName = $_GET['userName'];

	$conn = mysql_connect("localhost","root","123456");
	
	if(!$conn){
		die("connect fail");
	}else{
		//echo "connect success";
	}
	mysql_select_db("mydbwjw",$conn);
	
	$sqlStr="select * from userinfo where userName='".$userName."'";
    $result = mysql_query($sqlStr,$conn);
    $rowCount = mysql_num_rows($result);
   	
    if($rowCount==0){
    	echo "0";//用户名不存在    	
    }else{
    	echo "1";//用户名存在
    }
	
    mysql_close($conn); 
?>