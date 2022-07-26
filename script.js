
		
	document.querySelectorAll('.row img').forEach(column => {
		column.oneclick = () =>{
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = column.getAttribute('src');
		}
	});

	document.querySelector('popup-image span').oneclick = () =>{
		document.querySelector('.popup-image').style.display = 'none';

	}
