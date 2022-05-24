<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<fmt:setLocale value="en"/> <!-- locale 지역값 -->
<fmt:bundle basename="resource.message"> <!-- 참조할 properties경로 지정 -->
<fmt:message key="TITLE" var="title"/> <!-- title변수에 TITLE값 저장 -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title }</title>
</head>
<body>
  <h2>${title }</h2>
  <hr/>
<!-- http://localhost:8081/studyhtml5/jsp/j07/j01_fmt.jsp?id=gooman get방식으로 id받기-->
  <fmt:message key="GREETING"/><br/>
  <c:if test="${not empty param.id }">
    <fmt:message key="VISITOR"> <!-- VISITOR값에 param전달해 출력 -->
      <!-- VISITOR = YOUR ID IS {0} -->
      <fmt:param value="${param.id }"/>
    </fmt:message>
  </c:if>

</body>
</html>

</fmt:bundle>