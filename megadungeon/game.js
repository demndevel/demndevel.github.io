var DEF = 1;
var damage = 3;
var name = "Новичок";
var progress = 0;
var lvl = 0;
var xp = 0;
var need_xp = 1000; // кол-во опыта для след. уровня
var state = 1; //1 - normal; 2 - enemy; 3- shop.
var shopEl = document.getElementById("shop");
var fightEl = document.getElementById("fighting");
var normalEl = document.getElementById("normalState");
var potions = 0;
var moneys =100;
var hp = 100;
var enemyHp = 10;
var enemyDef = 10;
var enemyDamage = 10;
var swordCost = 50;
var shieldCost = 50;
var enemyXp = 9;
var turns =  0;
log("Добро пожаловать в непонятное подземелье...");
next();

function hideAll()
{
    shopEl.style.display = "none";
    fightEl.style.display = "none";
    normalEl.style.display = "none";
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function tryEscape(){
    
    var i = getRandomInt(1,4);
    if(i == 2){
       next();
       }
    enemDam = enemyDamage-DEF
    if(enemDam >0)
       {
        log("Враг наносит вам "+ enemDam);
        hp -=enemDam;
       }
    else{
        log("Вы отбились от атаки врага");
    }
    if(hp<1)
        {
            alert("ХАХАХАХАХ, ты проиграл!");
            window.location.reload()
        }
    
    show();
    
    
}
function usePotion(){
    if(potions>0){
       
        potions -=1;
        if(hp>50){
           hp = 100;
           }
        else{
            hp+=50;
        }
        
        log("Вкусное зелье.");
    }
    
    show();
}
function next() {
    state = getRandomInt(1,4);
    hideAll();
    if(state === 1)
    {
       normal();
        log("Тут ничего интересного...");
    }
    else if(state === 2)
    {
         log("Вам попался враг");
         fighting();   
    }
    else {
        log("Добро пожаловать в магазин");
        shop();
    }
    show();
    turns+=1;
    document.getElementById("turns").innerHTML = "Ходы: "+turns;
    if(xp>=need_xp){
       xp = 0;
        lvl++;
        alert("офигеть, у вас новый уорвень");
        log("ОООО, вы значит дожил до 2 уровня? значит вам будет куда хуже.......)))");
        need_xp +=1500;
        lvlup();
        show();
    }
}
function lvlup(){
    log("У вас увеличился урон и защита.");
    damage+=10;
    DEF +=20;
}
function show()
{
    var lvlEl = document.getElementById("lvl"); 
    var hpEl = document.getElementById("hp");
    var currentMoneyEl = document.getElementById("currentMoney");
    var xpEl = document.getElementById("xp");
    var damageEl = document.getElementById("damage");
    var defEl = document.getElementById("def");
    var potionsEl = document.getElementById("potions");
    lvlEl.innerHTML = "Уровень: "+lvl;
    hpEl.innerHTML = "ХП: "+hp;
    currentMoneyEl.innerHTML = "Деньги: "+moneys;
    xpEl.innerHTML = "Опыт: "+xp+"/"+need_xp;
    damageEl.innerHTML = "Урон: "+damage;
    defEl.innerHTML = "Защита: "+DEF;
    potionsEl.innerHTML = "Зелья: "+potions;
    
}
function buyPotion() {
    if(moneys >= 100) {
       potions+=1;
        moneys-=100;
        show();
       }
} 
function normal() {
    normalEl.style.display = "block";
}
function fighting() {
    
    var enem = 0;
    fightEl.style.display = "block";
    if(lvl === 0)
    {
        
       var currEnem;
       enem = getRandomInt(0, zeroEnemys.length);
       currEnem = zeroEnemys[enem];
       console.log(currEnem.name);
        document.getElementById("enemyName").innerHTML = "Имя врага: "+currEnem.name;
        document.getElementById("enemyHp").innerHTML = "ХП врага: "+currEnem.health;
        enemyHp = currEnem.health;
        enemyDef = currEnem.def;
        enemyDamage = currEnem.damage;
        enemyXp = currEnem.xp;
        
    }
    else if(lvl===1){
        var currEnem;
       enem = getRandomInt(0, firstEnemys.length);
       currEnem = firstEnemys[enem];
       console.log(currEnem.name);
        document.getElementById("enemyName").innerHTML = "Имя врага: "+currEnem.name;
        document.getElementById("enemyHp").innerHTML = "ХП врага: "+currEnem.health;
        enemyHp = currEnem.health;
        enemyDef = currEnem.def;
        enemyDamage = currEnem.damage;
        enemyXp = currEnem.xp;
    }
}
function shop() {
    shopEl.style.display = "block";
    document.getElementById("sword").innerHTML = "Меч получше - "+swordCost;
    document.getElementById("shield").innerHTML = "Щит получше - "+ shieldCost;
}
function attack(){
    var nowDamage = damage - enemyDef;
    if(nowDamage < 1){
       log("ВАМ ЭТОГО ВРАГА НЕ ОДОЛЕТЬ, БЕГИ ПОКА НЕ ПОЗДНО!!!");
       }
    else{
        if(nowDamage>1){
            nowDamage = getRandomInt(nowDamage-2,nowDamage+2);
        }
        enemyHp -= nowDamage;
        log("Вы наносите "+nowDamage);
    }
    enemDam = enemyDamage-DEF
    if(enemDam >0)
       {
           if(enemDam>2){
              enemDam = getRandomInt(enemDam-2,enemDam+2);
              }
           
        log("Враг наносит вам "+ enemDam);
        hp -=enemDam;
       }
    else{
        log("Вы отбились от атаки врага");
    }
    show();
    
    if(enemyHp <1){
       next();
        log("Поздравляю, вы завалили врага");
        if(lvl == 0){
            m = getRandomInt(1,200);
        }
        else{
             m = getRandomInt(1,2000);
        }
        
        
        log("Вы получате: "+enemyXp+" опыта и "+m+" долларов");
        moneys+=m;
        xp+=enemyXp;
        show();
       }
    if(hp<1)
        {
            alert("ХАХАХАХАХ, ты проиграл!");
            window.location.reload()
        }
    document.getElementById("enemyHp").innerHTML = "ХП врага: "+enemyHp;
    
}
function log(text){
    var el = document.createElement("h4");
    var date = new Date();
    el.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"  "+text;
    document.getElementById("log").appendChild(el);
    document.getElementById("log").scrollTop = 99999999;
;
    
}
function buySword(){
    if(swordCost<=moneys){
        damage+=2;
        log("Спасибо за покупку!");
        moneys-=swordCost;
        swordCost+=50;
       }
    else{
        log("ты чего сюда без денег пришел, а?");
    }
    document.getElementById("sword").innerHTML = "Меч получше - "+swordCost;
    document.getElementById("shield").innerHTML = "Щит получше - "+ shieldCost;
    show();
    
}
function buyShield(){
    
    if(shieldCost<=moneys){
       DEF+=2;
        log("Спасибо за покупку!");
        
        moneys-=shieldCost;
        shieldCost+=50;
    }
    else{
        log("ты чего сюда без денег пришел, а?");
        
    }
    document.getElementById("sword").innerHTML = "Меч получше - "+swordCost;
    document.getElementById("shield").innerHTML = "Щит получше - "+ shieldCost;
    show();
    
}