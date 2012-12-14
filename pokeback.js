setInterval(function() { 
  var pokes = document.querySelectorAll("#contentArea a[ajaxify*='/ajax/pokes/']");
  Array.prototype.forEach.call(pokes, function(p) { 
    if(p.innerText.toLowerCase().match('poke back')){ 
      p.click(); } 
    }); 
  }, 5000);
