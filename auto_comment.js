var comment = window.prompt("Enter your comment:");
var links = document.querySelectorAll(".comment_link input");
Array.prototype.forEach.call(links, function(l) { 
  l.click();
});

setTimeout(function() { 
  var textareas = document.querySelectorAll("textarea[name=add_comment_text_text]");
  Array.prototype.forEach.call(textareas, function(t) { 
    t.value = comment;    
    t.form.add_comment_text.value = comment;
    t.form.submit();
  });
}, 1000);
