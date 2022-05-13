<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%  
    //post 한글 전송시 한글 깨짐 현상 처리
    request.setCharacterEncoding("utf-8"); //요청에 대한 utf-8 변환
    
    String id = (String)request.getParameter("id");
    out.print("id=" + id);
    out.print("<br/>");
    
    String pass = request.getParameter("contents");
    out.print("pass=" + pass);

%>