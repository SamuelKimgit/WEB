<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<h2>JSTL:url</h2>
		<hr/>
     
     <!-- https://search.daum.net/search?w=blog&q=%ed%95%98%eb%8a%98%ea%b3%b5%ec%9b%90 -->
     <c:url var="searchURL" value="https://search.daum.net/search">
         <c:param name="w" value="blog"/>
         <c:param name="q" value="하늘공원"/>
     
     </c:url>
     
     <ul>
       <li>${searchURL }</li>
       <li><c:url value="/jsp/j06/j01_jstl.jsp" /></li> <!--  url 정보 절대경로 -->
       <li><c:url value="./j01_jstl.jsp" /></li>  <!-- url정보 상대경로 -->
     </ul>
</body>
</html>