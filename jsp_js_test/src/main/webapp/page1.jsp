<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	String input1 = request.getParameter("in1");
	String input2 = request.getParameter("in2");
	%>
	<p><%= input1 %></p>
	<p><%= input2 %></p>
</body>
</html>