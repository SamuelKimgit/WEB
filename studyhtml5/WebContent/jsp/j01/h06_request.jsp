<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%--
    request내장 객체: 웹 브라우저 요청에 대한 처리
    -클라이언트와 관련된 정보 읽기
    -서버와 관련된 정보
    -클라이언트가 요청한 전송 정보
    -클라이언트가 전송한 쿠키
--%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>request내장 객체</title>
</head>
<body>
  <h2>request내장 객체</h2>
  <hr/>
  서버포트 : <%=request.getServerPort() %><br/>
  서버이름 : <%=request.getServerName() %><br/>
  client ip : <%=request.getRemoteAddr() %><br/>
  요청 프로토콜 : <%=request.getProtocol() %><br/>
  요청 컨텍스 : <%=request.getContextPath() %><br/>
  서버URI : <%=request.getRequestURI() %>
</body>
</html>