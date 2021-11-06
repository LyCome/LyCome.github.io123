document.getElementById("btn").onclick=function(){
    localStorage.removeItem("photo");
    var name=document.getElementById("name").value;
    var sex=document.getElementsByName("sex");
    var dept=document.getElementById("department").value;
    var banji=document.getElementById("class").value;
    var num=document.getElementById("number").value;
    var smon=document.getElementById("startmonth").value;
    var sd=document.getElementById("startday").value;
    var sh=document.getElementById("starthour").value;
    var smin=document.getElementById("startmin").value;
    var emon=document.getElementById("endmonth").value;
    var ed=document.getElementById("endday").value;
    var eh=document.getElementById("endhour").value;
    var emin=document.getElementById("endmin").value;
    var photo=document.getElementById("photo").files[0];
    var pic;
    if (photo){
        var file=new FileReader();
        file.readAsDataURL(photo);
        file.onload=function(){
            var dataurl=file.result;
            localStorage.setItem("photo",dataurl);
        }
    }
    else{
        if (sex[0].checked){
            var boypic=new Image();
            boypic.src="https://xdgclub.com/resources/boys.jpg";
            pic=boypic.src;
        }
        if (sex[1].checked){
            var girlpic=new Image();
            girlpic.src="https://xdgclub.com/resources/girls.jpg";
            pic=girlpic.src;
        }
    }    
    document.cookie="name="+encodeURIComponent(name)+";path=crz/";
    document.cookie="dept="+encodeURIComponent(dept)+";path=crz/";
    document.cookie="banji="+encodeURIComponent(banji)+";path=crz/";
    document.cookie="num="+num+";path=crz/";
    document.cookie="photo="+pic+";path=crz/";
    document.cookie="smon="+smon+";path=crz/";
    document.cookie="sd="+sd+";path=crz/";
    document.cookie="sh="+sh+";path=crz/";
    document.cookie="smin="+smin+";path=crz/";
    document.cookie="emon="+emon+";path=crz/";
    document.cookie="ed="+ed+";path=crz/";
    document.cookie="eh="+eh+";path=crz/";
    document.cookie="emin="+emin+";path=crz/";
    window.open("crz/index.html");
}