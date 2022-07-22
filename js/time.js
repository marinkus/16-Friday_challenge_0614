function currentTime() {
  let clock = new Date(); 
  let hh = clock.getHours();
  let mm = clock.getMinutes();

   hh = (hh < 10) ? '0' + hh : hh;
   mm = (mm < 10) ? '0' + mm : mm;

    
   const time = hh + ":" + mm

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000); 
};

currentTime();