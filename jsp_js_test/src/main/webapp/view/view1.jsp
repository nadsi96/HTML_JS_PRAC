<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html>
<head>
<script src="/test1/lib/jquery/jquery-3.4.1.js"></script>
<script src="/test1/js/common.js"></script>
<script src="/test1/view/view1.js"></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body onload="onload()">
	<form action="/test1/v1ctrlr1" method="post">
		in1: <input name="in1"> <input type="submit" value="send">
	</form>
	
	
	<button id="btn">asdf</button>
	<button id="btn2">btn2</button>
	<form action="/test1/v1ctrlr1" method="post" id="form2">
		<input name="form2" value="1">
		<input type="submit" value="form2">
	</form>
</body>
</html>