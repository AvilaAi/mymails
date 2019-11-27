let buttons = document.getElementsByClassName('trash');
let p = document.createElement('div');
p.className = 'contact';
document.body.appendChild(p);
let newText = document.createTextNode('Jogging avec Jules samedi 10h00');
p.appendChild(newText);
p.addEventListener('mouseover', function() {
	p.style.color = 'blue';
});

let contacts = document.getElementsByClassName('contact');

document.getElementById('nombre').textContent = contacts.length;

for (var i = 0; i < contacts.length - 1; i++) {
	buttons[i].addEventListener('click', function() {
		console.log('click détecté');
		this.parentElement.remove();
		document.getElementById('nombre').textContent = contacts.length;
	});
}

let first = document.body.firstChild;
document.body.insertBefore(p, first);

for (var u = 0; u < contacts.length; u++) {
	contacts[u].addEventListener('mouseover', function() {
		this.style.color = 'black';
	});
}
