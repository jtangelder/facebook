// run at any page..!
var likes = document.querySelectorAll(".UFILikeLink");
Array.prototype.forEach.call(likes, function(l) { 
  if(!l.innerText.match(/unlike/i)) { 
    l.click() 
  } 
});
