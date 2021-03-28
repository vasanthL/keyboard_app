console.log('keyboard tone')
var btn1=document.getElementById('m1')
var btn2=document.getElementById('m2')
var btn3=document.getElementById('m3')
var btn4=document.getElementById('m4')
var btn5=document.getElementById('m5')
var btn6=document.getElementById('m6')
var btn7=document.getElementById('m7')
var btn8=document.getElementById('m8')
var btn9=document.getElementById('m9')
var musc1=document.getElementById('music1')
var musc2=document.getElementById('music2')
var musc3=document.getElementById('music3')
var musc4=document.getElementById('music4')
var musc5=document.getElementById('music5')
var musc6=document.getElementById('music6')
var musc7=document.getElementById('music7')
var musc8=document.getElementById('music8')
var musc9=document.getElementById('music9')
var value1=window.getComputedStyle(btn1)
console.log(value1.borderColor)
document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==97){
        musc1.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn1.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn1.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})
document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==98){
        musc2.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn2.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn2.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})
document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==99){
        musc3.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn3.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn3.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})
document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==100){
        musc4.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn4.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn4.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})

document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==101){
        musc5.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn5.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn5.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})

document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==102){
        musc6.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn6.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn6.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})

document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==103){
        musc7.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn7.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn7.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})


document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==104){
        musc8.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn8.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn8.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})


document.body.addEventListener('keypress',function(e){
    console.log(e.keyCode)
    if(e.keyCode==105){
        musc9.play();
        if(value1.borderColor=="rgb(128, 128, 128)")
        {
        btn9.style.borderColor="rgb(192, 192, 182)"
        console.log(value1.borderColor)
        }
        setTimeout(function(){
            btn9.style.borderColor="rgb(128, 128, 128)"
        console.log(value1.borderColor)
        },1000)
    }
})