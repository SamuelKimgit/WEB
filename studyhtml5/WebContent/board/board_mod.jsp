<%@page import="com.pcwk.board.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/com/common.jsp" %>
<%
  BoardVO vo = (BoardVO)request.getAttribute("vo");
  if(null == vo){
    vo = new BoardVO();
  }
%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta charset="UTF-8">
<link rel = "short icon" type="image/x-icon" href="<%=contPath%>/favicon.ico">

<!--reset 스타일 시트 -->
<!-- <link rel="stylesheet" type="text/css" href="<%=contPath%>/asset/css/reset.css"> -->
<link rel="stylesheet" type="text/css" href="<%=contPath%>/asset/css/jquery-ui.css">
<!-- jQuery -->
<script type="text/javascript" src="<%=contPath%>/asset/js/jquery-1.12.4.js"></script>
<!-- jQuery UI -->
<script type="text/javascript" src="<%=contPath %>/asset/js/jquery-ui.js"></script>

<!--스타일 시트 -->
<style type="text/css">
  table {
    width: 600px;
  }
</style>
<title>Insert title here</title>
</head>
<body>
<%--   <h2>vo:<%=vo %></h2> --%>
  <h2>게시 상세</h2>
  <hr/>
  <div style="text-align: right;">
    <input type="button" value="수정" id="doUpdate">
    <input type="button" value="삭제" id="doDelete">
    <input type="button" value="목록" id="moveToList">
  </div>
  <form action="<%=contPath%>/board/board.do" name="boardFrm" id="boardFrm">
    <input type="hidden" name="seq" id="seq" value="<%=vo.getSeq()%>">
    <input type="hidden" name="work_div" id="work_div">
    <table>
      <tr>
        <td width="100">제목</td>
        <td width="500"><input value="<%=vo.getTitle() %>" type="text" name="title" id="title" maxlength="200" size="50" ></td>
      </tr>
      <tr>
        <td>등록자</td>
        <td><input value="<%=vo.getRegId() %>" type="text" name="reg_id" id="reg_id" maxlength="50" size="50" readonly></td>
      </tr>
      <tr>
        <td>등록일</td>
        <td><input value="<%=vo.getRegDt() %>" type="text" name="regDt" id="regDt" maxlength="50" size="50" readonly></td>
      </tr>
      <tr>
        <td>수정자</td>
        <td><input value="<%=vo.getModId() %>" type="text" name="mod_id" id="mod_id" maxlength="50" size="50"></td>
      </tr>
      <tr>
        <td>수정일</td>
        <td><input value="<%=vo.getModDt() %>" type="text" name="modDt" id="modDt" maxlength="50" size="50" readonly></td>
      </tr>
      <tr>
        <td>조회수</td>
        <td><input value="<%=vo.getReadCnt() %>" type="text" name="readCnt" id="readCnt" maxlength="50" size="50" readonly></td>
      </tr>
      <tr>
        <td colspan="2">내용</td>
      </tr>
      <tr>
        <td colspan="2"><textarea rows="5" cols="68" name="contents" id="contents"><%=vo.getContents() %></textarea> </td>
      </tr>
    </table>
  </form>
<script type="text/javascript">
  //event감지
  $('#moveToList').on('click',function(){
    goList();
  });
  
  function goList(){
    const listURL = "/studyhtml5/board/board.do?work_div=doRetrieve";
    window.location.href = listURL;
  }
  $('#doUpdate').on('click',function(){
    console.log('#doUpdate');
    let title = $('#title').val();
    if(null === title || title.trim().length ==0){
      //focus
      $('#title').focus();
      alert('제목을 입력하세요.');
      return;
    }
    title = title.trim();
    
    let modId = $('#mod_id').val();
    if(null === modId || modId.trim().length ==0){
      //focus
      $('#mod_id').focus();
      alert('수정자 ID를 입력하세요.');
      return;
    }
    modId = modId.trim();
    
    let contents = $('#contents').val();
    if(null === contents || contents.trim().length ==0){
      //focus
      $('#contents').focus();
      alert('내용을 입력하세요.');
      return;
    }
    contents = contents.trim();
    
    if(false == confirm('수정하시겠습니까?'))return;
    
    //ajax
    $.ajax({
      type: "POST",
      url:"<%=contPath%>/board/board.do",
      asyn:"true",
      dataType:"html",
      data:{
        work_div:"doUpdate",
        seq: $('#seq').val(),
        title: title,
        modId: modId,
        contents: contents
      },
      success:function(data){//통신 성공
        console.log("success data:"+data);
        goList();
      },
      error:function(data){//실패시 처리
        console.log("error:"+data);
      }
    });
  });
  
  $('#doDelete').on('click',function(){
    //console.log('#doDelete');
    
    
    let seq = $('#seq').val();
    if(null == seq || seq.length ===0){
      alert('seq를 확인하세요.');
      return;
    }
     
    if(false ==confirm('삭제하시겠습니까?'))return;
    
    //ajax
    $.ajax({
        type: "GET",
        url:"<%=contPath%>/board/board.do",
        asyn:"true",
        dataType:"html",
        data:{
          work_div:"doDelete",
          seq: seq
        },
        success:function(data){//통신 성공
          console.log("success data:"+data);
          //string - json
          const jsonObj = JSON.parse(data);
          console.log('messageId: '+jsonObj.messageId);
          console.log('msgContents: '+jsonObj.msgContents);
          
          if(null != jsonObj && jsonObj.messageId =="1"){
            alert(jsonObj.msgContents);
            //Controller로 보낸 데이터 조회
            goList(); 
          }else {
            alert(jsonObj.msgContents);
          }
        },
        error:function(data){//실패시 처리
          console.log("error:"+data);
        }
    });
  });
</script>
</body>
</html>
