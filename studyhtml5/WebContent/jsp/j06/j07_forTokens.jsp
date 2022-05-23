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
		<h2>jstl: forTokens</h2>
		<hr/>

    콤마와 점을 구분자로 사용:<br/>
    <c:forTokens var="token" items="빨강,노랑,파랑,초록" delims=",.-">
      ${token }<br/>
    </c:forTokens>

</body>
</html>