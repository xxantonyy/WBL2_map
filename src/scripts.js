import "../styles/style.css";

// Переменные
let type;
let name;
let description;
let color;
let store = [];
let map;
let marker;
let markers = [];
let eventIcon;

// Переменные цветов маркера
let blueMarker = L.ExtraMarkers.icon({
	icon: 'fa-number',
	number: '',
	markerColor: 'blue',
	shape: 'circle',
	prefix: 'fa'
});

let redMarker = L.ExtraMarkers.icon({
	icon: 'fa-number',
	number: '',
	markerColor: 'red',
	shape: 'circle',
	prefix: 'fa'
});

let greenMarker = L.ExtraMarkers.icon({
	icon: 'fa-number',
	number: '',
	markerColor: 'green',
	shape: 'circle',
	prefix: 'fa'
});


function getPosition() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(loadMap, function () {
			alert('Невозможно получить ваше местоположение');
		});
	}
}

function loadMap(position) {
	const { latitude } = position.coords;
	const { longitude } = position.coords;
	console.log(`https://www.google.com/maps/@${latitude},${longitude}z`);

	const cords = [latitude, longitude];
	map = L.map('map').setView(cords, 13);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	map.on('click', function (e) {
		marker = L.marker(e.latlng, { draggable: true });
		eventIcon = e;
		document.querySelector('.modal_create').style.display = 'flex';
	});


	document.querySelector('.submit_button').addEventListener('click', () => {
		type = document.querySelector('.input1').value;
		name = document.querySelector('.input2').value;
		description = document.querySelector('.input3').value;
		color = document.querySelector('.modal_create .color_select').value;

		let colorSet2;
		if (color == 'red') colorSet2 = redMarker;
		if (color == 'blue') colorSet2 = blueMarker;
		if (color == 'green') colorSet2 = greenMarker;

		marker = L.marker(eventIcon.latlng, { draggable: true, icon: colorSet2 });

		document.querySelector('.modal_create').style.display = 'none';
		document.querySelector('.input1').value = '';
		document.querySelector('.input2').value = '';
		document.querySelector('.input3').value = '';

		marker.addTo(map);
		markers.push(marker);
		marker.bindPopup(`<b>${type}</b><br>${name}<br>${description}`).openPopup();

		// Создаем новый объект без свойства _map
		const markerData = {
			latlng: marker.getLatLng(),
			type,
			name,
			description,
			color
		};

		store.push(markerData);

		// Сохраняем массив store в localStorage
		localStorage.setItem('markers', JSON.stringify(store));
		renderMarkerList();

	});


	document.querySelector('.close_create').addEventListener('click', () => {
		document.querySelector('.modal_create').style.display = 'none';
	});

};

function renderMarkers(data, index) {
	let colorSet;
	if (data.color == 'red') colorSet = redMarker;
	if (data.color == 'blue') colorSet = blueMarker;
	if (data.color == 'green') colorSet = greenMarker;

	marker = L.marker(data.latlng, { draggable: true, icon: colorSet })
		.addTo(map)
		.bindPopup(L.popup({
			autoClose: false,
			closeOnClick: false,
		}))
		.setPopupContent(`<b>${data.type}</b><br>${data.name}<br>${data.description}`)
		.openPopup();

		marker.on('dragend', function (event) {
			const newLatLng = event.target.getLatLng();
			const index = markers.indexOf(marker);
			store[index].latlng = newLatLng;
			localStorage.setItem('markers', JSON.stringify(store));
		 });
		 


	markers.push(marker);
}



function editMarker(data, index) {
	document.querySelector('.modal_reduct').style.display = 'flex';

	// Заполняем поля модального окна данными маркера
	document.querySelector('.input1_reduct').value = data.type;
	document.querySelector('.input2_reduct').value = data.name;
	document.querySelector('.input3_reduct').value = data.description;

	document.querySelector('.modal_reduct .color_select2').value = data.color;

	let colorSet3;
	if (data.color == 'red') colorSet3 = redMarker;
	if (data.color == 'blue') colorSet3 = blueMarker;
	if (data.color == 'green') colorSet3 = greenMarker;

	const submitButton = document.querySelector('.sb_reduct');
	submitButton.addEventListener('click', function () {
		// Получаем новые значения из полей модального окна
		const newType = document.querySelector('.input1_reduct').value;
		const newName = document.querySelector('.input2_reduct').value;
		const newDescription = document.querySelector('.input3_reduct').value;
		const newColor = document.querySelector('.modal_reduct .color_select2').value;

		// Обновляем данные маркера в массиве store
		store[index].type = newType;
		store[index].name = newName;
		store[index].description = newDescription;
		store[index].color = newColor;
		localStorage.setItem('markers', JSON.stringify(store));

		// Обновляем содержимое всплывающей подсказки маркера

		marker = L.marker(data.latlng, { draggable: true, icon: colorSet3 });

		marker.setPopupContent(`<b>${newType}</b><br>${newName}<br>${newDescription}`);

		// Закрываем модальное окно
		document.querySelector('.modal_reduct').style.display = 'none';
		renderMarkerList();
		window.location.reload();
	});

	document.querySelector('.close_reduct').addEventListener('click', () => {
		document.querySelector('.modal_reduct').style.display = 'none';
		document.querySelector('.input1_reduct').value = '';
		document.querySelector('.input2_reduct').value = '';
		document.querySelector('.input3_reduct').value = '';
	});
}

function deleteMarker(index) {
	let markkers = JSON.parse(localStorage.getItem('markers'));
	const markerItem = markkers[index]
	if (markerItem) {
		markkers.splice(index, 1);
		localStorage.setItem('markers', JSON.stringify(markkers));
		store.splice(index, 1);
		markers[index].remove();
		markers.splice(index, 1);
		renderMarkerList();
	}
}


function renderMarkerList() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.innerHTML = ''; // Очищаем содержимое sidebar

	store.forEach((markerData, index) => {
		const listItem = document.createElement('div');
		listItem.classList.add('marker-item');
		listItem.innerHTML =
			`<div class='wrapper_items'>

			<div class='item_wrapper'>
				<p>Название:</p>
				<div class='first'>${markerData.name}</div>
			</div>

			<div class='item_wrapper wrapper2'>
				<p>Описание:</p>
				<div class='second'>${markerData.description}</div>
			</div>
		</div>`;
		listItem.addEventListener('click', () => {
			let indexx = store.indexOf(markerData);
			centerMapOnMarker(indexx);
		})

		const editButton = document.createElement('button');
		editButton.textContent = 'Редактировать';
		editButton.classList = 'third';
		editButton.addEventListener('click', function () {
			editMarker(markerData, index);
		});

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Удалить';
		deleteButton.classList = 'third';
		deleteButton.addEventListener('click', function (event) {
			event.stopPropagation();
			deleteMarker(index);
		});


		const divdiv = document.createElement('div');
		divdiv.textContent = '';
		divdiv.classList = 'div_wrapper';


		divdiv.appendChild(editButton);
		divdiv.appendChild(deleteButton);
		listItem.appendChild(divdiv);
		sidebar.appendChild(listItem);

	});

	function centerMapOnMarker(index) {
		const marker = store[index];
		map.setView(marker.latlng, 13, {
			animate: true,
			pan: {
				duration: 1,
			}
		})
	}
}



getPosition();

window.addEventListener('load', function () {
	const savedMarkers = localStorage.getItem('markers');
	if (savedMarkers) {
		let marker_first;
		store = JSON.parse(savedMarkers);
		store.forEach((mark, index) => {
			renderMarkers(mark, index);
			marker_first = mark;
		});
		map.setView(marker_first.latlng, 13, {
			animate: true,
			pan: {
				duration: 1,
			}
		})
	}
	renderMarkerList();
	// Сортировка
	this.document.querySelector('.filter_item').addEventListener('click', () => {
		const sidebar = this.document.querySelector('.sidebar');
		const nodes = Array.from(sidebar.childNodes);
		const descriptionArr = nodes.map((node) => node.childNodes[0].childNodes[3].childNodes[3].textContent);
		
		// Переключение порядка сортировки
		let sortOrder = 1;
		if (sidebar.getAttribute('data-sort-order') === '1') {
		  sortOrder = -1;
		  sidebar.setAttribute('data-sort-order', '-1');
		} else {
		  sidebar.setAttribute('data-sort-order', '1');
		}
		
		// Сортировка элементов
		descriptionArr.sort((a, b) => a.localeCompare(b) * sortOrder);
		
		// Удалить существующие элементы из родительского контейнера
		while (sidebar.firstChild) {
		  sidebar.removeChild(sidebar.firstChild);
		}
		
		// Добавить элементы в правильном порядке
		descriptionArr.forEach((description) => {
		  const node = nodes.find((node) => node.childNodes[0].childNodes[3].childNodes[3].textContent === description);
		  sidebar.appendChild(node);
		});
	 });
	 
	 
	 
});
