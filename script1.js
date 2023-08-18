let depSub1=document.getElementById("depSub1")
let depSub2=document.getElementById("depSub2")
let depSub3=document.getElementById("depSub3")
let depSub4=document.getElementById("depSub4")
let depSub5=document.getElementById("depSub5")

document.getElementById("dep1").classList.add("on-click")
function fun1(){

    depSub1.innerHTML="Data Structure & Application"
    depSub2.innerHTML="Analog & Digital Electronics"
    depSub3.innerHTML="Computer Oragnization"
    depSub4.innerHTML="21CSL35"
    depSub5.innerHTML="21CS38X"
    document.getElementById("dep1").classList.toggle("on-click")
    document.getElementById("dep2").classList.remove("on-click")
    document.getElementById("dep3").classList.remove("on-click")
    document.getElementById("dep4").classList.remove("on-click")
}
function fun2(){
    
    depSub1.innerHTML="Digital System Design using Verilog"
    depSub2.innerHTML="Basic Signal Processing"
    depSub3.innerHTML="Analog Electronics Circuits"
    depSub4.innerHTML="21ECL35"
    depSub5.innerHTML="21EC38X"
    document.getElementById("dep2").classList.toggle("on-click")
    document.getElementById("dep1").classList.remove("on-click")
    document.getElementById("dep3").classList.remove("on-click")
    document.getElementById("dep4").classList.remove("on-click")
}
function fun3(){
    
    depSub1.innerHTML="Metal Casting, Forming & Joining"
    depSub2.innerHTML="Material Science & Engineering"
    depSub3.innerHTML="Thermodynamics"
    depSub4.innerHTML="21MEL35"
    depSub5.innerHTML="21ME38X"
    document.getElementById("dep3").classList.toggle("on-click")
    document.getElementById("dep2").classList.remove("on-click")
    document.getElementById("dep1").classList.remove("on-click")
    document.getElementById("dep4").classList.remove("on-click")
}
function fun4(){
    
    depSub1.innerHTML="Geodetic Engineering"
    depSub2.innerHTML="Stregth of Materials"
    depSub3.innerHTML="Earth Resources & Engineering"
    depSub4.innerHTML="21CVL35"
    depSub5.innerHTML="21CV38X"
    document.getElementById("dep4").classList.toggle("on-click")
    document.getElementById("dep2").classList.remove("on-click")
    document.getElementById("dep3").classList.remove("on-click")
    document.getElementById("dep1").classList.remove("on-click")
    
}