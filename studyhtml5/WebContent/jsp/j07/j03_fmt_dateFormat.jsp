<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="now" value="<%=new Date() %>"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <h2>JSTL:fmt>formatDate</h2>
  <hr/>
  전체날짜: <fmt:formatDate value="${now }" type="date" dateStyle="full"/><br/>
  요약날짜: <fmt:formatDate value="${now }" type="date" dateStyle="short"/><br/>
  시간: <fmt:formatDate value="${now }" type="time" /><br/>
  둘 다: <fmt:formatDate value="${now }" type="both" dateStyle="full" timeStyle="full"/><br/>
  양식지정: <fmt:formatDate value="${now }" pattern="z a h:mm" /><br/><!-- z:지역 a:오전오후 h:mm 시:분 -->
</body>
</html>