<%@ page contentType="application/vnd.ms-excel;charset=UTF-8" pageEncoding="utf-8"%>

<%     
    response.setHeader("Content-Disposition", "attachment; filename=diary.xls"); 
    response.setHeader("Content-Description", "JSP Generated Data"); 
    response.setContentType("application/vnd.ms-excel");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <h2>contentType: 현재 jsp 내용에 대한 유형을 결정</h2>
  <hr/>

</body>
</html>