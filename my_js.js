var x;
var m=0;
function start(){
  x = setInterval(run,100);
 
  function run(){
        console.log(m);
        if(m==1200)
        {
          clearInterval(x);           
          m=0;
        } else{  
            m=m+5;
            document.getElementById("img").style.visibility = "visible";
            var target = document.getElementById("img");
            target.style.marginLeft = m+'px';
        }
   }

}

function stop(){

    clearInterval(x);
}