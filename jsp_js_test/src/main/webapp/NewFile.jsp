<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="servlet.MyServlet1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<p>hello</p>
	<form action="page1.jsp" method="post">
		<input id="input1" name="in1"> <input id="input2" name="in2">
		<input id="input3" name="in3"> <input id="submit1"
			type="submit" value="send">
	</form>
	<div>
<!-- 		<form action="page2.jsp" method="post"> -->
<!-- 			<input id="input4" name="in4"> -->
<!-- 			<input type="submit" value="servlet"> -->
<!-- 		</form> -->

		<form action="MyServlet1" method="post">
			<input id="input4" name="in4">
			<input type="submit" value="servlet">
		</form>
	</div>
	<jsp:useBean id="td2" scope="session" class="test1.TestData" />
	<%
	td2.setItems(new int[] { 1, 2, 3, 4, 5 });
	%>
</body>
</html>