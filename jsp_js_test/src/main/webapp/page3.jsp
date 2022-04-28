<%@page import="test1.TestData"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<%
		int itemList[] = new int[] { 1, 2, 3, 4, 5 };
		TestData td = new TestData(itemList);
		for (int i = 0; i < td.getSize(); i++) {
			out.println(td.getItem(i));
		}
		%>
	</div>
	<div>
		<jsp:useBean id="td2" scope="page" class="test1.TestData" />
		<%
		td2.push(6);
// 		td2.setItems(new int[] { 6, 7, 8, 9, 10 });
		for (int i = 0; i < td2.getSize(); i++) {
			out.println(td2.getItem(i));
		}
		%>
	</div>
	<div>
		<%
// 		out.println(request.getParameter("in4"));
		out.println(request.getSession().getAttribute("in4"));
		request.getSession().removeAttribute("in4");
		out.println(request.getSession().getAttribute("in4"));
		%>
	</div>
</body>
</html>