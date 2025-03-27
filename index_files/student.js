$(document).ready(function(){

    document.getElementById("uploadButton").addEventListener("click", function (event){
       event.stopImmediatePropagation();


        var fileInput = document.getElementById("fileInput");
        var file = fileInput.files[0];
        var enroll = document.getElementById("ENROLL").value;
        var publickey  = document.getElementById("sessionid").value;

     var WEB_SERVICE_URL   = document.getElementById("websserviceurl").value;

      
        if (!file) {
            alert("Kindly Select JEE-MAINS result pdf");
            return false;
        }
        var jsonData = {
            "publicKey": publickey,
            "service": "Student",
            "action": "storeStudentScoreCard",
            "accessToken": "",
            "parameter": {
                "enrollment_no": enroll
            }
        };


        var formData = new FormData();
        formData.append("file", file); 
        formData.append("data", JSON.stringify(jsonData)); 


        var xhr = new XMLHttpRequest();
        // // let  WEB_SERVICE_URL =  "http://dsatwebservicedevelopment.thinkexam.com/api/v1/";
       //  let  WEB_SERVICE_URL = "http://localhost/allendsatwebservice2018/api/v1/";// for local purpose
        // //let WEB_SERVICE_URL="https://allenrace.thinkexam.com/api/v1/"; // for live


        xhr.open("POST", WEB_SERVICE_URL, true);


        //xhr.open("POST", "constant::$WEB_SERVICE_URL", true);


        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert("Upload successfully");
                    window.location.reload();
                } else {
                    alert("Upload failed: " + xhr.statusText);
                }
            }
        };

        xhr.send(formData); 
    });

    
    $("#hidebuttonOnline").hide();
    errornoticeprofile = $("#profile-error1");//here profile-error to profile-error1 change by navneet
    erronNotice2=$("#errorformail");
    $("#packageperPage").change(function(){

        var id=$(this).val();

        location.href="index.php?pageName=package&id="+id;


    });

    $("#submitprofile").click(function(){
        document.submitprofile.submit();
    });

    $("#openBuyPackage").click(function(){
        alert("hi")
    });

    $("#submitpackage").click(function(){
        alert("yyyyyyyyyy")
        document.packageform.submit();
    });
       

    $("#newsperPage").change(function(){
        var id=$(this).val();
        location.href="index.php?pageName=recentNews&id="+id;
    });

    $("#couponforhide").click(function(){
        $("#buyonlineforhid").attr("checked",false);
        $("#couponforhide").attr("checked",true);
        $("#hideOffline").show();
        $("#hidebuttonOnline").hide();
        document.getElementById("getSubmitType").value=2;
    })

    $("#buyonlineforhid").click(function(){
        $("#couponforhide").attr("checked",false);
        $("#buyonlineforhid").attr("checked",true);
        $("#hideOffline").hide();
        $("#hidebuttonOnline").show();
        document.getElementById("getSubmitType").value=3;
    })/* End */

    $("#submitcoupon").click(function(){
        checkcoupon();
        $("#couponmode").focus();
    })
    $("#submit_Online").click(function(){
        if(typeof(document.payment)!=undefined && document.payment!=null){
            onlineBuyCCavanue();
        }else{
            onlineBuy();
        }
    });

    $("#referfriend").click(function(){
        document.friendform.submit();
    });

    $("#control_1").change(function(){
        erronNotice2.fadeOut(750);
    });

    $("#subject").keyup(function(){
        if($("#subject").val()!=""){
            erronNotice2.fadeOut(750);
        }
    });

     $("#sendmail").click(function(){
            
            var to='csat@allen.in';
            var subject=$("#subject").val();
            var editemailid=document.getElementById('edit').value;         
            var msgQta=CKEDITOR.instances.msgQta.getData();                       
            if(editemailid==""){
                if(to==null){
                    $("#errorformail").html("Please select email id")
                    erronNotice2.fadeIn(750);
                    $("#search").focus();
                    return false;
                }
//                else if(isEMaillog(to)){
//                    $("#errorformail").html("Please enter valid email id")
//                    erronNotice2.fadeIn(750);
//                    $("#search").focus();
//                    return false;
//                }
            }
            else{
                if($("#control").val()==""){
                    $("#errorformail").html("Please enter email id")
                    erronNotice2.fadeIn(750);
                    $("#search").focus();
                    return false;
                }
                else if(isEMaillog($("#control").val())){
                    $("#errorformail").html("Please enter valid email id")
                    erronNotice2.fadeIn(750);
                    $("#search").focus();
                    return false;
                }
            }
            if(subject==""){
                $("#errorformail").html("Please  enter Subject")
                erronNotice2.fadeIn(750);
                $("#subject").focus();
                return false;
            }if(trim(msgQta)==""){
                $("#errorformail").html("Please enter Description.")
                erronNotice2.fadeIn(750);
                CKEDITOR.instances.msgQta.setData('');
                $('#cke_msgQta').focus();
                return false;
            }
            
            document.inbox.submit();
            
             
        // return false;
        })

    $("#nextBtn").click(function(){
        alert("hhhhhhhhhhhhh");
    })

    $("#search").blur(function(){
        if($("#search").val()!=""){
            erronNotice2.fadeOut(750);
        }
    });

    $("#invoice").click(function(){
        var invoiceno=$("#invoiceno").val();
        var studentid=$("#studentid").val();
        $(this).attr('target','_blank');
            
        window.open("source/util/packageTransaction.php?id="+invoiceno+"&studentid="+studentid); //
         
    })

    $('#username').click(function() {
        if(this.value=="Enter Email Id"){
            this.value='';
        }else if(this.value==""){
            this.value='Enter Email Id';
        }
    });

    $('#username').blur(function() {
        if(this.value==""){
            this.value='Enter Email Id';
        }
    });

    $('#password').blur(function() {
        if(this.value==""){
            $('#password').get(0).type = 'text';
            this.value='Enter Password';
        }
    });

    $('#password').focus(function() {
        $('#password').get(0).type = 'password';
    });

    $('#password').click(function() {
        if(this.value=="Enter Password"){
            this.value='';
            $('#password').get(0).type = 'password';             
        } else if(this.value!="" && this.value!="Enter Password" ){
                          
        } else if(this.value==""){
            this.value='Enter Password';
        }
    });
    
    $("#control").keypress(function(){
        if($("#control").val()!=""){
            erronNotice2.fadeOut(750);
        }
    });

    $('#testtype').change( function(){         
        var testType=this.value;
        url2="testType="+testType;
        $.ajax({
            type: "post",
            url: "index.php?pageName=dashboard/dashboardAjax",
            data: url2 ,
            error:
            function() {                  
            },
            success: function(result){
                $("#testStatus").html(result)
            }
        });

    });

    $('#testtype1').change( function(){/*This script add by navneet*/
        var testType=this.value;
        var urlData="testType="+testType;
        $.ajax({
            type: "post",
            url: "index.php?pageName=dashboard/dashboardTakeTest",
            data: urlData ,
            error:function() {

            },
            success: function(result){
                $("#testStatus1").html(result)
            }
        });
    });

    $("#pass").keyup(function() {
        var pass=$("#pass").val();
        if(pass!=""){
            errornoticeprofile.fadeOut(300);
        }
    });

    $("#conpass").keyup(function() {
        var pass=$("#conpass").val();
        if(pass!=""){
            errornoticeprofile.fadeOut(300);
        }

    });

    $("#savepassword").click(function(){
        var pass=$("#pass").val();
        var conpass=$("#conpass").val();
        var passName=$("#passName").val();
        var passConfName=$("#passConfName").val();
        if(pass==""){
            $("#profile-error1").html("Please Enter "+passName);//here profile-error to profile-error1 change by navneet            errornoticeprofile.fadeIn(750);
            return false;
        }
           
        if(conpass==""){
            $("#profile-error1").html("Please Enter "+passConfName);//here profile-error to profile-error1 change by navneet
            errornoticeprofile.fadeIn(750);
            return false;
        }
        if($("#pass").val().length<=5){
            $("#profile-error1").html("Please Enter "+passName+" Six Characters.");//here profile-error to profile-error1 change by navneet
            errornoticeprofile.fadeIn(750);
            return false;
        }
        if(pass!=conpass){
            $("#profile-error1").html(passName+" and "+passConfName+" is Not Match");//here profile-error to profile-error1 change by navneet
            errornoticeprofile.fadeIn(750);
            return false;
        } else{
            var url="pass="+pass+"&mode="+'savepass';
            $.ajax({
                type: "post",
                url: "index.php?pageName=profile/saveProfileAjax",
                data: url ,
                error: function(data) {
                },
                success: function(data){
                    location.reload();
                    $("#closesecurity").show();
                    security.style.display="none";                  // alert(data)
                }              
            })
        }
    });

   


});

function validation(){      
    var url1="";
    var email= $("#loginId").val();
    var password=$("#password").val();
    document.loginForm.submit();
}

function cancel(){    
    location.href="index.php?pageName=package";
}

function report(testid){     
    location.href="index.php?pageName=timeManagementReport&testid="+testid;
}
var inputs = 0;

function addContact(){
    var count=1;
    
    var table = document.getElementById('contacts');

    var tr    = document.createElement('TR');
    var td1   = document.createElement('TD');
    var td2   = document.createElement('TD');
    var td3   = document.createElement('TD');

    var inp1  = document.createElement('INPUT');
    var inp2  = document.createElement('INPUT');
    if(inputs==0){
        var img     = document.createElement('IMG');
        img.setAttribute('src', 'student/images/delete.png');
        img.setAttribute('class','attach_down');
        img.onclick = function(){
            removeContact(tr);
        }
        td3.appendChild(img);
    }
    if(inputs > 0){
        var img = document.createElement('IMG');
        img.setAttribute('src', 'student/images/delete.png');
        img.setAttribute('class','attach_down');
        img.onclick = function(){
            removeContact(tr);
        }
        td3.appendChild(img);
    }

    inp1.setAttribute("type", "text");
    inp1.setAttribute("name", "text[]");
    inp1.setAttribute("class", "refer-textfield1");
    inp1.setAttribute("id", "text"+count);
    inp2.setAttribute("type", "text");
    inp2.setAttribute("name", "text1[]");
    inp2.setAttribute("class", "refer-textfield2");
    inp2.setAttribute("id", "text1"+count);
    
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);


    td1.appendChild(inp1);
    td2.appendChild(inp2);
    
    inputs++;

   
}

function removeContact(tr){
    tr.parentNode.removeChild(tr);
}

function no_image_change(){
    if($('#no_image').length < 1)return;
    if($('#no_image')[0].checked){
        // hide image block, and remove image url.
        old_image_url = $('#image_url').val();
        $('#image_url').val('');
        $('#images').hide();
        $('#image_nav_left').hide();
        $('#image_nav_right').hide();
    }else{
        if(old_image_url!='')$('#image_url').val(old_image_url);
        $('#images').show();
        $('#image_nav_left').show();
        $('#image_nav_right').show();
    }
}

function images_nav_go(dir){
    current_image_id += dir;
    if(current_image_id<1){
        current_image_id = number_of_images;
    }else if(current_image_id>number_of_images){
        current_image_id = 1;
    }
    $('ul#images li').hide();
    $('ul#images li:nth-child('+current_image_id+')').show();
    $('#image_url').val($('ul#images li:nth-child('+current_image_id+') img').attr('src'));
    return false;
}

function validate_form(){
    var email=$('#your_email').val();
    if(email == '' || !email.match('@')){
        $('#your_email')[0].focus();
        alert('Please enter your email address');
        return false;
    }
    var friend=false;
    $('.friend_email').each(function(){
        var email = $(this).val();
        if(email != '' && email.match('@')){
            friend=true;
        }
    });
    if(!friend){
        $('.friend_email')[0].focus();
        alert('Please enter at least 1 friends email address');
        return false;
    }
    return true;
}

function set_add_del(id){
    $("#"+id+' .remove_addit').show();
    $("#"+id+' .remove_addit:last').hide();
    $("#"+id+' .add_addit').hide();
    $("#"+id+' .add_addit:last').show();
}

function selrem(clickety,id){
    $(clickety).parents('.dynamic_block').remove();
    set_add_del(id);
    return false;
}

function seladd(clickety,id){
    var box = $('#'+id+' .dynamic_block:last').clone(true);
    $('input',box).val('');
    $('#'+id+' .dynamic_block:last').after(
        box);
    set_add_del(id);
    return false;
}

function mail(mailId,date,co,admin){
    url2="mailid="+mailId+"&date="+date+"&admin="+admin+"&mode="+'mail'; 
    $.ajax({
        type: "post",
        url: "index.php?pageName=insertAjaxProfile",
        data: url2 ,
        error:
        function() {
        },
        success: function(result){                   
            $("#subdate"+co).html(result);
        }
    });

}

function questionShowFullText(divid,testid,serialno,testType,testflag){         
    var url2="testid="+testid+"&serialno="+serialno+"&testType="+testType+"&testflag="+testflag+"&mode="+'questiontext';
    var moveLeft = 20;
    var moveDown = 10;       
    $("img#triggerA"+divid).hover(function(e) {
        /*start code added by Saurabh Jaiswal.*/
        if(e.pageX==undefined){
            var moveLeft =e.clientX+10;
            var moveDown = e.clientY+1;
        } else{
            var moveLeft =e.pageX+10;
            var moveDown = e.pageY+1;
        }
        if(e.pageY>700){
            moveDown=moveDown-$("div#pop-up").height();
        }
        $("div#pop-up").css("top",moveDown).css("left",moveLeft);
        $('div#pop-up').show();

        $.ajax({
            type: "post",
            url: "index.php?pageName=ajaxReport",
            data: url2 ,
            error:
            function() {
            },
            success: function(result){
                $("#questiondetai2").html(result);
                var resultA=$("#questiondetai2").css('height');
                if(parseInt(resultA)>350){
                    $("#questiondetai2").css({
                        height:"200px",
                        overflowY:"scroll"
                    });
                }
            }
        })
    });
}

function showPopUpDiv(){//added by Saurabh Jaiswal.
    $('div#pop-up').show();
}

function hidePopUpDiv(i){//added by Saurabh Jaiswal.
    $('div#pop-up').hide();
}

function profile(profile,studentid){
    var profile=document.getElementById(profile);
    if(profile.style.display=="none"){
        $("#closeprofile").hide();
        profile.style.display="block";       
        url2="studentid="+studentid+"&mode="+'editPro';
        $.ajax({
            type: "post",
            url: "index.php?pageName=profile/profileAjax",
            data: url2 ,
            error:
            function() {               
            },
            success: function(result){
                $("#editProfile").html(result);
            }
        })
    } else  {
        $("#profile-error").fadeOut(300);
        $("#closeprofile").show();
        profile.style.display="none";
    }    
}

function security5(security){
    var security=document.getElementById(security);
    if(security.style.display=="none"){
        security.style.display="block";
        $("#closesecurity").hide();
    } else {
        errornoticeprofile.fadeOut(300);
        $("#closesecurity").show();
        security.style.display="none";         
        document.getElementById("conpass").value="";
        document.getElementById("pass").value="";
        return false;
    }    
}

function enrollment(enrollment){
    var enrollment=document.getElementById(enrollment);
    if(enrollment.style.display=="none"){
        enrollment.style.display="block";
        $("#closeenrollment").hide();
        $("#profile").hide();
        $("#closeprofile").show();
        $("#security").hide();
        $("#closesecurity").show();
    } else {
        $("#closeenrollment").show();
        enrollment.style.display="none";
    }
}

function passcancel(){
    errornoticeprofile.fadeOut(300);
    var security=document.getElementById('security');
    security.style.display="none";
    $("#closesecurity").show();
    document.getElementById("conpass").value="";
    document.getElementById("pass").value="";
}

function profilecancel(){
    $("#profile-error").fadeOut(300);
    var profile=document.getElementById('profilecol');    
    profile.style.display="none";
    $("#closeprofile").show();      
}

function searchTest2(){
    var subid=$("#sub2").val();
    var topicid=$("#topic2").val();
    var subid1=$("#sub1").val();
    var topicid1=$("#topic1").val();
    if($("#sub1").val()==null){
        subid1="";
    }
    if($("#topic1").val()==null){
        topicid1="";
    }
    if($("#sub2").val()==null){
        alert("Please select subject");
        return false;
    } else if($("#topic2").val()==null){
        alert("Please select topic");
        return false;
    } else{
        location.href='index.php?pageName=test/testSummary&id=10&id1=10&exam='+2+'&subid='+subid+'&topicid='+topicid+'&subid1='+subid1+'&topicid1='+topicid1;// &exam1=2 change on place of &exam1=page1 by Gaurav on-8/8 for bug(1601)
    }
}

function searchTest1(){
    var subid=$("#sub2").val();
    var topicid=$("#topic2").val();
    var subid1=$("#sub1").val();
    var topicid1=$("#topic1").val();
    if($("#sub2").val()==null){
        subid="";
    }
    if($("#topic2").val()==null){
        topicid="";
    }
    if($("#sub1").val()==null){
        alert("Please select subject");
        return false;
    } else if($("#topic1").val()==null){
        alert("Please select topic");
        return false;
    } else{
        location.href='index.php?pageName=test/testSummary&id=10&id1=10&exam='+1+'&subid='+subid+'&topicid='+topicid+'&subid1='+subid1+'&topicid1='+topicid1;// &exam1=1 change on place of &exam1=page1 by Gaurav on-8/8 for bug(1601)
    }
}


function testTabs(id){
    var elements=["cont-1","cont-2"];
    if(id=="cont-1"){
        $("#exam").attr("style", "display: block;");
        $("#prac").attr("style", "display: none;");
        $("#prac").hide();
        location.href='index.php?pageName=test/testSummary&exam=2';
          
    }
    if(id=="cont-2"){
        $("#exam").attr("style", "display:none ;");
        $("#prac").attr("style", "display:block ;");
        $("#exam").hide();
        location.href='index.php?pageName=test/testSummary&exam=1';
    }
}

function next(next){
    var report=document.getElementById(next);
    if (report.style.display=="none"){
        report.style.display="block"
        $("#next1").hide();
        $("#nex").show();
        $("#pre").hide();
    } else  {
        report.style.display="none";
        $("#next1").show();
        $("#nex").hide();
        $("#pre").show();
    }
}

function checkcoupon(){ 
    var  coupontext=$.trim($("#couponmode").val());
    var packcost=$("#packagecost").val();
    var packageid=document.getElementById("packageid").value;
    if(coupontext=='' || coupontext=='Enter Your Coupon Code'){
        alert("Please enter Coupon no.");
        return false;
    }else{
        var url2="coupon="+coupontext+"&mode="+'newcouponcheck'+'&packageid='+packageid;
        $.ajax({
            type: "post",
            url: "index.php?pageName=insertAjaxProfile",
            data: url2 ,
            async:false,
            error:function (){
            } ,
            success: function(result){
                $("#tempdiv").html(result)
                var status=document.getElementById('status').value;
                var couponno =document.getElementById('couponNO').value;
                var amount=document.getElementById('couponamount').value;
                var type=document.getElementById('type').value;
                var endDate=document.getElementById('endDate').value;
                var validity=document.getElementById('validity').value;
                var check=document.getElementById('check').value;
                var checkTemp=document.getElementById('tempCheck').value;
                if(type=='P'){
                    check=0;
                }
                var today = new Date();
                if(status=="" && couponno=="" && amount==""){
                    alert("Coupon no is invalid. Please Check");
                    return false;
                }else if(check==1){
                    alert("Coupon has been expired.");
                    return false;
                }else if(status==0){
                    alert("Coupon no. has already been used.");
                    return false;
                }
                else if(packcost!=amount){
                    alert("Amount is not equal to package cost.")
                    return false;
                }else if(checkTemp!=0 && type=='T'){
                    alert("This package is already activated using Temporary Coupon");
                    return false;
                }else{
                    var packageid=document.getElementById("packageid").value;
                    var packagecost=document.getElementById("packagecost").value;
                    var couponmode=document.getElementById("couponmode").value;
                    location.href="index.php?pageName=insertAjax&couponType="+type+"&couponEndDate="+endDate+"&couponValidity="+validity+"&packageid="+packageid+"&packagecost="+packagecost+"&couponmode="+couponmode;
                }
            }


        });
    }
}

function onlineBuy(){
    alert("Not activated till now");
}

function trim(myString){
    return myString.replace(/\s/g,'');
}

function testSummaryPageChange(id,type){
    var subid = document.getElementById("forsub").value;
    var topicid = document.getElementById("fortopic").value;
    var page = document.getElementById("page").value;
    document.getElementById("perPage").value=id;
    updateSummary(type,page,id);
}

function isEMaillog(s){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var booleanValue=emailPattern.test(s);
    if(!booleanValue){
        return true ;
    } else{
        return false;
    }
}

function onlineBuyCCavanue(){
    document.payment.submit();
}

function reportsPdf(testId,studentId,testType,merge,rType){//Edited by sumit
    //alert(testId+"==="+studentId+"==="+testType+"==="+merge+"==="+rType);
    window.open("index.php?pageName=allChartsForPdf&testId="+testId+"&studentId="+studentId+"&testType="+testType+"&merge="+merge+"&rType="+rType, "reportsPDF", '');
}

function pdfAfterMerge(testId1,studentId1,testType1){
    window.open("index.php?pageName=allChartsForMergePdf&testId="+testId1+"&studentId="+studentId1+"&testType="+testType1, "reportsPDF", '');
}

function printSprReport(studentid){
    window.open("index.php?pageName=allChartsForSpr&sid="+studentid, " ", '');
}

function downloadPdf(id,type){
    var urldata;
    if(type == 'Question'){
        urldata = "document/test/question/Question_Report_"+id+".pdf";
    } else{
        urldata = "document/test/solution/Solution_Report_"+id+".pdf";
    }
    $.ajax({
        url:urldata,
        type:'HEAD',
        async:false,
        error: function(){
            alert("Pdf Not found");
        },
        success: function(){
            window.open('source/util/downloadPdf.php?id='+id+"&type="+type,'_blank');
           // location.href=urldata;
        }
    });
}



