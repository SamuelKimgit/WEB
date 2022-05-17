<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/com/common.jsp" %>
<%
  LOG.debug("contPath: " + contPath);
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
<!--스타일 시트 -->
<style type="text/css">
</style>
<title>Insert title here</title>
<!-- jQuery -->
<script type="text/javascript" src="<%=contPath%>/asset/js/jquery-1.12.4.js"></script>
<!-- jQuery UI -->
<script type="text/javascript" src="<%=contPath %>/asset/js/jquery-ui.js"></script>

</head>
<body>
  <h2>View->Controller call</h2>
  <hr/>
  <div>
    <input type="button" value="전송" onclick="doSave();">
  </div>
  <form action="<%=contPath%>/board/board.do" name="boardFrm" id="boardFrm">
    작업구분:<input type="hidden" name="work_div" id="work_div" value="doSave"><br/>
    SEQ:<input type="text" name="seq" id="seq" /><br/>
    제목:<input type="text" name="title" id="title" maxlength="20"><br/>
    등록자:<input type="text" name="reg_id" id="reg_id" maxlength="20"><br/>
    내용:<textarea rows="5" cols="50" name="contents" id="contents"></textarea><br/>
  </form>
<script type="text/javascript">
  $(document).ready(function(){
    console.log(`document ready`);
  });
  
  function doSave(){
    console.log(`doSave()`);
    //document.boardFrm
    let frm = document.getElementById("boardFrm");
    
    //순번
    let seq = $('#seq').val();
    if(null === seq || seq.trim().length==0){
    	$('#seq').focus();
    	alert('순번을 입력하세요.');
    	return false;
    }
    
    //제목
    //jquery 방법으로 꺼내기
    //let title = $('#title').val();
    //javascript 방법으로 꺼내기
    let title = frm.title.value;
    //console.log('title: '+title);
    if(null ===title || title.trim().length==0){
    	$('#title').focus();
    	alert('제목을 입력 하세요.');
    	return false;
    }
    
    //등록자
    let regId = $('#reg_id').val();
    if(null === regId || regId.trim().length == 0){
       $('#reg_id').focus();
       alert('등록자 ID를 입력하세요.');
       return;
    }
    
    //내용
    let contents = $('#contents').val();
    if(null === contents || contents.trim().length == 0){
        $('#contents').focus();
        alert('내용을 입력하세요.');
        return;
      }

    if(false ==confirm('저장 하시겠습니까?')) return;
    
    //JAVASCRIPT FROM submit
    //frm.submit();
    
    //ajax
    $.ajax({
    	type: "POST",
      url:"/studyhtml5/board/board.do",
      asyn:"true",
      dataType:"html",
      data:{
    	  //변수name:값(value)
        work_div : $('#work_div').val(),
        seq : seq,
        title : title,
        reg_id : regId,
        contents : contents
      },
      success:function(data){//통신 성공
        //console.log("success data:"+data);
    	  // 문자열
    	  // success data:{"messageId":"1","msgContents":"등록 성공!","no":0}
    	  // 문자열 -> json으로 변환
    	  const jsonObj = JSON.parse(data);
    	  console.log('jsonObj: '+jsonObj.messageId);
    	  console.log('msgContents: '+jsonObj.msgContents);
    	  
    	  const listURLTest = "<%=contPath%>/board/board_list.jsp";
    	  console.log('listURLTest: '+listURLTest);
    	  //listURLTest: /studyhtml5/board/board_list.jsp
    	  
    	  if(null != jsonObj && jsonObj.messageId == '1'){ //등록 성공
    		  alert(jsonObj.msgContents);
    		  //board_list.jsp 이동
    		  //javascript코드 내에서도 자바코드
    		  const listURL = "/studyhtml5/board/board.do?work_div=doRetrieve";
    		  window.location.href = listURL;
    	  }else { //등록 실패
    		  alert(jsonObj.msgContents);
    	  }
      },
      error:function(data){//실패시 처리
        console.log("error:"+data);
      }
    });
    	  
  }
</script>
</body>
</html>