'use strict';

const input = document.getElementById('input_url');
const submit = document.getElementById('submit_url');

submit.addEventListener('click', () =>
	fetch('/', {
		body: input.value,
		method: 'POST'
	})
		.then(res => res.text())
		.then(val => prompt('Ctrl+C', val))
		.catch(err => alert(err.name + ': ' + err.message)));
