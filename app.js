var a=" ";
function get_input(value){
    a+=value;
    document.getElementById("top").innerHTML=a;
}
function submit(){
    var expr=a;
    var out=eval(expr);
    document.getElementById("top").innerHTML=out;
    a=out;
}
function clr(){
    a="0";
    document.getElementById("top").innerHTML=a;
    a="";
}
function back(){
    var l=a.length;
    var e=l-1;
    var slice=a.slice(0,e);
    a=slice;
    document.getElementById("top").innerHTML=a;
}
function get_input(value){
    if(a.length>18){

    }
    else{
        a+=value;
        document.getElementById("top").innerHTML=a;
    }
}