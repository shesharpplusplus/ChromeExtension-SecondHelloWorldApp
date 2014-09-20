document.addEventListener('DOMContentLoaded', function () {
  dataGenerator.requestData();
});

var dataGenerator = {

	requestData : function() {

		var h1 = document.createElement('h1');
		var content = document.createTextNode('This is SheSharpPlusPlus saying hello! !');
		h1.appendChild(content);
		document.body.appendChild(h1);	
	}
};
