	var list = document.getElementById('Lista')
	var add = document.getElementById('addElem') 
	var listTable = document.getElementsByTagName('li')
	var listTableLength = (listTable.length);

	add.addEventListener('click', function() {
		list.innerHTML += '<li>item ' + listTableLength++ + '</li>'
		
	});
