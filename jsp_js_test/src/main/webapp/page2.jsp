<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	String item = request.getParameter("in4");
	if (item.length() > 0) {
	%>
	<jsp:forward page="/MyServlet1">
		<jsp:param name="in4" value="<%=item%>" />
	</jsp:forward>
	<%
	}
	%>
</body>
</html>