(function(rate){
  var frame = document.getElementById('iframeautoheight')
  var length = frame.contentDocument.querySelectorAll('#pjkc option').length
  rate = rate || 1
  var i = 1
  var _onload = frame.onload 
  frame.onload = function (events) {
	try {
	  _onload.apply(this, arguments)
	} catch (e) {}
	if (i < length) {
	  setRate()
	  ++ i
	} else {
	// frame.contentDocument.querySelector('#Button2').click()
	}
  }
  
  setRate()
  
  function setRate () {
	var j = 0
	Array.apply([], frame.contentDocument.querySelectorAll('.datelist select')).forEach(function(a){
	  a.querySelectorAll('option')[rate].selected = true
	  if ( ++j % 9 == 0) {
	    a.querySelectorAll('option')[rate == 2 ? 1 : 2].selected = true
	  }
	});
	frame.contentDocument.querySelector('#Button1').click()
  }

})(1)
