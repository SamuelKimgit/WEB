<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- JSTL core -->
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>    
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
<link rel="stylesheet" type="text/css" href="<%=contPath%>/asset/css/reset.css">
<!-- bootstrap CDN -->
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<link rel="stylesheet" type="text/css" href="<%=contPath%>/asset/css/jquery-ui.css">
<!-- jQuery -->
<script type="text/javascript" src="<%=contPath%>/asset/js/jquery-1.12.4.js"></script>
<!-- jQuery UI -->
<script type="text/javascript" src="<%=contPath %>/asset/js/jquery-ui.js"></script>
<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<script type="text/javascript" src="<%=contPath %>/asset/js/common.js"></script>
<!--스타일 시트 -->
<style type="text/css">
</style>
<title>게시 등록</title>
</head>
<body>
  <!-- div container -->
  <div class="container">
    <!-- 제목  -->
    <div class="page-header">
	  <h2>게시 등록</h2>
    </div>
    <!--// 제목  ---------------------------------------------------------------->

    <!-- 버튼 -->
    <div class="row text-right">
      <label class="col-sm-3 col-md-2 col-lg-2"></label>
      <div class="col-sm-9 col-md-10 col-lg-10">
        <input type="button" class="btn btn-primary btn-sm" value="목록" onclick="goList();"/>
        <input type="button" class="btn btn-primary btn-sm" value="등록" onclick="doSave();"/>
      </div>
    </div>
    <!--// 버튼  ---------------------------------------------------------------->

    <!-- form -->
	  <form action="<%=contPath%>/board/board.do" name="boardFrm" id="boardFrm" class="form-horizontal">
	   <input type="hidden" name="work_div" id="work_div" value="doSave"><br/>
	    <div class="form-group">
        <label for="seq" class="col-sm-3 col-md-2 col-lg-2">순번</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <input type="text" maxlength="100" name="seq" id="seq" placeholder="순번" class="form-control">
        </div>
      </div>
	    
	    <div class="form-group">
        <label for="title" class="col-sm-3 col-md-2 col-lg-2 ">제목</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <input type="text" maxlength="20" name="title" id="title" placeholder="제목" class="form-control">
        </div>
      </div>
      
      <div class="form-group">
        <label for="regId" class="col-sm-3 col-md-2 col-lg-2 ">등록자</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <input type="text" maxlength="20" name="reg_id" id="reg_id" placeholder="등록자" class="form-control">
        </div>
      </div>
      
      <!-- 내용 -->
      <div class="form-group">
        <label for="contents" class="col-sm-3 col-md-2 col-lg-2 ">내용</label>
        <div class="col-sm-9 col-md-10 col-lg-10">
          <textarea rows="5" cols="20" name="contents" id="contents" class="form-control"></textarea>
        </div>
      </div>
      <!--// 내용  -------------------------------------------------------------->
      
	  </form>
	  <!--// form  -------------------------------------------------------------->
  </div>
  <!--// div container -------------------------------------------------------->	  
<script type="text/javascript">
  function goList(){
	    const listURL = "/studyhtml5/board/board.do?work_div=doRetrieve";
	    window.location.href = listURL;
  }
  
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