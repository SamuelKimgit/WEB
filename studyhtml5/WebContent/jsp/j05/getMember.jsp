<%@page import="com.pcwk.board.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <h2>세션 읽기</h2>
  <hr/>
  <%
    //세션 가져오기
    String userId = (String)session.getAttribute("userId");
    String userName = (String)session.getAttribute("userName");
    out.print("userId: "+userId+"<br/>");
    out.print("userName: "+userName+"<br/>");
    //board
    BoardVO board = (BoardVO)session.getAttribute("board");
    out.print("board: "+board.toString());
  %>
</body>
</html>