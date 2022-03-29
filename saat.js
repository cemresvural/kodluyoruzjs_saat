function askName(){
    var name = prompt('Adınızı Girin');
    document.getElementById('myName').innerText = name

}

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var sezon = date.getDay();
  
    if(sezon == 1){
      sezon = "Pazartesi";
  }
  else if( sezon == 2){
      sezon = "Salı";
  }
  else if( sezon == 3){
      sezon = "Çarşamba";
  }
  else if( sezon == 4){
      sezon = "Perşembe";
  }
  else if( sezon == 5){
      sezon = "Cuma";
  }
  else if( sezon == 6){
      sezon = "Cumartesi";
  }
  else{
      sezon = "Pazar";
  }   
  
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + "" + sezon ;
  document.getElementById("myClock").innerHTML = time;
  setTimeout(showTime, 1000);
  
  }

  

askName();
showTime();