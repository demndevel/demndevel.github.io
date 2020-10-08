var canvas = document.getElementById("canvas");
var a = document.getElementById("1");
var b = document.getElementById("2");
var c = document.getElementById("3");
var d = document.getElementById("4");
var p = 0;
var v = 0;
var r = 0;
var ve = 0;
var ctx = canvas.getContext("2d");
var money = new Image();
var moneys = 0;
var boost = 0;

canvas.width = 200;
canvas.height = 200;
money.src = "icons-pow-up.svg";
money.onload = function(){
    ctx.drawImage(money, 0, 220,75,80,0,0,200,200);
}
canvas.onclick = function(e){
    click();
    
}
a.onclick = function(e){
    
    if(moneys>=1000000)
    {
        v++;
        boost+=10;
        document.getElementById("22").innerHTML = "Видеокарты: " + v;
        moneys-=1000000;
        document.getElementById("mon").innerHTML = "Деньги: "+moneys;
        
    }
}
b.onclick = function(e){
    
    if(moneys>=100000)
    {
        p++;
        boost+=5;
        document.getElementById("11").innerHTML = "Процессоры: "+ p;
        moneys-=100000;
        document.getElementById("mon").innerHTML = "Деньги: "+moneys;
    }
}
c.onclick = function(e){
    
    if(moneys>=5000)
    {
        r++;
        boost+=2;
        document.getElementById("33").innerHTML = "ОЗУ(ГБ): "+r;
        moneys-=5000;
        document.getElementById("mon").innerHTML = "Деньги: "+moneys;
    }
}
d.onclick = function(e){
    if(moneys>=500)
    {
        ve++;
boost+=1;
document.getElementById("44").innerHTML = "Вентиляторы: "+ve;
moneys-=500;
document.getElementById("mon").innerHTML = "Деньги: "+moneys;
    }
    
}
function click()
{
    moneys++;
    moneys+=boost;
    document.getElementById("mon").innerHTML = "Деньги: "+moneys;
}
