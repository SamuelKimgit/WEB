<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <h2>JSTL: functions</h2>
  <hr/>
  <c:set var="str1" value="afewgoodman오늘은 즐거운 목요일 2일전 ㅋㅋㅋ"/><br/>
  length(str1):${fn:length(str1) }<br/>
  toUpperCase(str1):${fn:toUpperCase(str1) }<br/>
  
</body>
</html>