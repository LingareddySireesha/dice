let di =document.getElementById("demo");
function generate()
{
    let a="&#";
    let num=9856;
    let r = Math.floor(Math.random()*6);
    num=num+r;
    a=a+num+";";
    di.innerHTML=a;
}
