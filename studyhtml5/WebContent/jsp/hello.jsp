<%@page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
  <!-- 
  *.jsp -> *.java(Servlet) -> *.class -> 브라우저에 노출
   -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h2>Hello,world</h2>
<hr/>
오늘의 날짜<%= new Date() %>
</body>
</html>