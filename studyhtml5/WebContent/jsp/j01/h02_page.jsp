<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %><%--html출력 상단 2줄 공백 제거--%>
<%
  Date d = new Date();
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <h2>page속성</h2>
  <hr/>
  
  <div>
    <%-- 날짜 데이터 출력 --%>
    날짜: <%=d %><br/>
    
    <%
      //java code
      for(int i=1;i<=10;i++){
    	  
    %>
      <p><%=i %></p>
    <%
      }
    %>
  </div>
</body>
</html>