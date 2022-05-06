console.log("adding the canvas");
var canvas=document.querySelector('canvas')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
console.log(canvas);
var c=canvas.getContext('2d');
c.fillRect(100,100,100,100)
c.fillRect(200,300,100,100)       
c.fillRect(400,400,100,100)

//lines
c.beginPath();
c.moveTo(100,400);
c.lineTo(200,400)
c.lineTo(100,500)
c.strokeStyle="blue"
c.stroke()
//arc/circles
setTimeout(() => {
    for(let i=0; i<100; i++){
        let x=Math.random()*window.innerWidth
        let y=Math.random()*window.innerWidth
        c.beginPath();
        c.arc(x,y,30,0,Math.PI * 4  ,false);
        c.strokeStyle='red';
        c.stroke();
    }
    
},0);

var d = document.getElementById("myCanvas");
var ctx = d.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("this is bharat",10,50);


