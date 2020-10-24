//Variables
const brand = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimum = document.querySelector('#minimo');
const maximum = document.querySelector('#maximo');
const doors = document.querySelector('#puertas');
const transmission = document.querySelector('#transmision');
const color = document.querySelector('#color');
// Min and max date
const max = new Date().getFullYear();
const min = max - 10; 
// Results of search
const result = document.querySelector('#resultado');
//obj search
const dateSearch = {
	brand:'',
	year:'',
	price:'',
	doors:'',
	transmission:'',
	color:''
}
//Events
document.addEventListener('DOMContentLoaded', () =>{
	seeCars(autos);
	fillSelect();
});

// events for select search
brand.addEventListener('change', (e) => {
	dateSearch.brand = e.target.value
	filterBrand();
});
year.addEventListener('change', (e) => {
	dateSearch.year = parseInt(e.target.value);
	filterBrand();
});
minimum.addEventListener('change', (e) => {
	dateSearch.minimum = e.target.value
	filterBrand();
});
maximum.addEventListener('change', (e) => {
	dateSearch.maximum = e.target.value
	filterBrand();
});
doors.addEventListener('change', (e) => {
	dateSearch.doors = parseInt(e.target.value);
	filterBrand();
});
transmission.addEventListener('change', (e) => {
	dateSearch.transmission = e.target.value
	filterBrand();
});
color.addEventListener('change', (e) => {
	dateSearch.color = e.target.value
	filterBrand();
});


function seeCars (autos) {
	// Empty html
	clearHTML();

	autos.forEach(car => {
		const carHTML = document.createElement('p');
		const { 
			marca, modelo, 
			year, puertas, 
			transmision, precio, color 
		} = car
		
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


// Clear HTML
function clearHTML() {
	while (result.firstChild) {
		result.removeChild(result.firstChild);
	}
}
// filter for car
function filterBrand() {
	const result = autos.filter(oneBrand).filter(
		oneYear).filter(oneMinimum).filter(
			oneMaximum).filter(oneDoors).filter(oneTransmission).filter(oneColor);
	//console.log(result);
	seeCars(result);
}

function oneBrand(auto) {
	const { brand } = dateSearch;
	if (brand) {
		return auto.marca === brand;
	}
	return auto;
}

function oneYear(auto) {
	const { year } = dateSearch;
	if (year) {
		return auto.year === year;
	}
	return auto;
}

function oneMinimum(auto) {
	const { minimum } = dateSearch;
	if (minimum) {
		return auto.precio >= minimum;
	}
	return auto;
}

function oneMaximum(auto) {
	const { maximum } = dateSearch;
	if (maximum) {
		return auto.precio <= maximum;
	}
	return auto;
}

function oneDoors(auto) {
	const { doors } = dateSearch;
	if (doors) {
		return auto.puertas === doors;
	}
	return auto;
}

function oneTransmission(auto) {
	const { transmission } = dateSearch;
	if (transmission) {
		return auto.transmision === transmission;
	}
	return auto;
}

function oneColor(auto) {
	const { color } = dateSearch;
	if (color) {
		return auto.color === color;
	}
	return auto;
}