let open = document.getElementById('open'),
	close = document.getElementById('close'),
	shadow = document.getElementById('shadow'),
	modal = document.getElementById('modal');

console.log(open);
	open.addEventListener('click', function(){
		shadow.classList.remove('hidden');
		modal.classList.remove('hidden');
	})

	close.addEventListener('click', function(){
		shadow.classList.add('hidden');
		modal.classList.add('hidden');
	})