const cells = document.querySelectorAll('td');
cells.forEach(cell => {
  cell.addEventListener('click', function(){
	//console.log("Row index: " + cell.closest('tr').rowIndex + " | Column index: " + cell.cellIndex));

	if(cell.cellIndex == 0){
		
		window.parent.location = "../showcase.html";
		
	}
	
	if(cell.cellIndex == 1){
		
		window.parent.location = "../index.html";
		
	}
	
	if(cell.cellIndex == 2){
		
		window.parent.location = "../contact.html";
		
	}
	
	if(cell.cellIndex == 3){
		
		window.parent.location = "../partner.html";
		
	}
	

	
  })
    
});
