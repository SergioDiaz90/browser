//Variables
const result = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10; 
//Events
document.addEventListener('DOMContentLoaded', () =>{
	seeCars();
	fillSelect();
});

function seeCars () {
	autos.forEach(car => {
		const carHTML = document.createElement('p');
		const { 
			marca, modelo, 
			year, puertas, 
			transmision, precio, color } = car
		
		carHTML.textContent = `
			${marca} ${modelo}
			${year} ${puertas}
			${transmision} ${precio}
			${color}
		`

		//Add in the div
		result.appendChild(carHTML);
	});
}

// Add year options to select
function fillSelect () {
	for (let i = max; i >= min; i--) {
		const option = document.createElement('option');
		option.value = i;
		option.textContent = i;
		year.appendChild(option);
	}
}