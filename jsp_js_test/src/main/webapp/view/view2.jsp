<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="org.json.simple.JSONObject,
org.json.simple.JSONArray,
org.json.simple.parser.JSONParser,
org.json.simple.parser.ParseException,
java.util.Map,
java.util.Iterator" %>
<!DOCTYPE html>
<html>
<head>
<script src="/test1/lib/jquery/jquery-3.4.1.js"></script>
<script src="/test1/view/view2.js"></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String in1 = request.getParameter("in1");
String in2 = (String)request.getSession().getAttribute("in1");
String received = (String)request.getSession().getAttribute("data");
out.println(received);
System.out.print("received = ");
System.out.println(received);
JSONParser jsonParser = new JSONParser();
JSONObject jsonObj = null;
JSONArray jsonArr = null;

try{
	jsonObj = (JSONObject)jsonParser.parse(received);
	out.println("<div>");
	out.println(jsonObj.get("pageUrl"));
	out.println("</div>");
	out.println("<div>");
	out.println(jsonObj.get("data"));
	out.println("</div>");
	out.println("<div>");
	out.println(jsonObj.get("nullKey"));
	out.println("</div>");
	out.println("<div>");
	out.println(jsonObj.getOrDefault("nullKey", "null Value"));
	out.println("</div>");
	
}
catch(ParseException e){
	out.println(e.getMessage());
	out.println("</div>");
}

if(jsonObj != null){
	out.println(jsonObj.entrySet());
	
}

%>
<%= in1 %>
<%= in2 %>
</body>
</html>