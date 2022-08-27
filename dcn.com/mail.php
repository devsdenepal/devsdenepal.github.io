<?php
require '../PHPMailer/PHPMailerAutoload.php';
if(1==1) {
	$name = "test";
	$toEmail = "useronelaptop001@gmail.com";
	$message = "hi";
	try {
		$mail = new PHPMailer;
		$mail->AddAddress($toEmail);
		$mail->From = "useronelaptop001@gmail.com";
		$mail->Subject = "Email with attachment";
		$body = "<table>
			<tr>
			<th colspan='2'>This is a test email with attachment</th>
			</tr>
			<tr>
			<td>Name :</td>
			<td>".$name."</td>
			</tr>			
			<tr>
			<td>Message : </td>
			<td>".$message."</td>
			</tr>
			<table>";
			$body = preg_replace('/\\\\/','', $body);
			$mail->MsgHTML($body);
			$mail->IsSendmail();
			$mail->AddReplyTo("admin@webdamn.com");
			$mail->AltBody = "To view the message, please use an HTML compatible email viewer!";
			$mail->WordWrap = 80;
			
			$mail->IsHTML(true);
			$mail->Send();
			header("Location: index.php?success=1");
	} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}
}
?>