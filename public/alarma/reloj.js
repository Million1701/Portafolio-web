window.addEventListener('load',()=>{
	Swal.fire({
		icon:"warning",
		title:"En caso de que la alarma no funcione tiene que hacer un click o presionar cualquier tecla",
		confirmButtonColor:"#dc3545",
		confirmButtonText:"Confirmar"
	})
})
						// ---------------------------------PARTE DEL RELOJ---------------------------------//
const llamarHora = () => {
	const obtenerHora = () => {
		let dates = new Date();
		let d = document;
		let fecha = d.querySelector(".fecha"),
		reloj = d.querySelector(".reloj"),
		horas = dates.getHours(),
		minutos = dates.getMinutes(),
		segundos = dates.getSeconds();

		let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
		semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

		fecha.querySelector(".dia-semana").textContent = `${semana[dates.getDay()]},`;
		fecha.querySelector(".numero-mes").textContent = dates.getDate();
		fecha.querySelector(".mes").textContent = meses[dates.getMonth()];
		fecha.querySelector(".año").textContent = dates.getFullYear();


		if (horas >= 12) {
			horas = horas - 12;
			reloj.querySelector(".am-pm").textContent = 'P.M.';
		}else{
			reloj.querySelector(".am-pm").textContent = 'A.M.'	
		}

		if (horas < 10) {
			reloj.querySelector(".horas").textContent = `0${horas}`;
			if (horas == 0) {
				reloj.querySelector(".horas").textContent = `12`;
			}
		}else{
			reloj.querySelector(".horas").textContent = `${horas}`;
		}
		minutos < 10?reloj.querySelector(".minutos").textContent = `0${minutos}`:reloj.querySelector(".minutos").textContent = `${minutos}`;
		segundos < 10?reloj.querySelector(".segundos").textContent = `0${segundos}`:reloj.querySelector(".segundos").textContent = `${segundos}`;

	};

	let intervalo = setInterval(obtenerHora, 0)
}
document.addEventListener('load',llamarHora())




// 				//---------------------------------PARTE DE LA ALARMA---------------------------------//

let btnEnviar = document.querySelector('.btn-enviar');
let sonido = document.querySelector('.sonido'),
inputs = document.querySelector('.inputs');

let temple = document.querySelector(".plantilla").content;
let btnEliminar = document.querySelector(".eliminar");
let btnEditar = document.querySelector(".editar");
let fragment = document.createDocumentFragment();


const consultasFetch = (options) =>{
	let {url,method,sucsess,error,data} = options;

	fetch(url,{
		method: method || "GET",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(data)
	})	
	.then(res => res.ok? res.json():Promise.reject(error))
	.then(datos => sucsess(datos))
	.catch(err => console.log(err))

}

consultasFetch({
	url:"http://localhost:3000/alarmas",
	method:"GET",
	sucsess:(res => {

			btnEnviar.addEventListener('click',(e)=>{
			let resultHora = parseInt(inputs.querySelector('.inputHoras').value)
			let resultMinutos = parseInt(inputs.querySelector('.inputMinutos').value)
			let resultAmpm = inputs.querySelector('.tiempo').value;
			let am = 'a.m.';
			inputs.querySelector('.inputHoras').value = '';
			inputs.querySelector('.inputMinutos').value = '';

			if (!isNaN(resultHora) && !isNaN(resultMinutos)) {
				if (resultHora > 0 && resultHora <= 12 && resultMinutos >= 0 && resultMinutos < 60) {

				if (resultHora < 10 && resultHora !== '00') {
					resultHora = `0${resultHora}`;
				}
				if (resultMinutos < 10 && resultMinutos !== '00') {
					resultMinutos = `0${resultMinutos}`;
				}

				consultasFetch({
					url:"http://localhost:3000/alarmas",
					method:"POST",
					sucsess:(res => location.reload()),
					error:(err => console.log(err)),
					data:{
						hora:resultHora,
						minuto:resultMinutos,
						ampm:resultAmpm,
						message:"Programando"
					}
				})

				}else{
					Swal.fire({
						icon:"error",
						title:"Oops...",
						text:"Valores no validos",
						confirmButtonColor:"#dc3545"
					})
				}
			}else{
				Swal.fire({
						icon:"error",
						title:"Oops...",
						text:"Introduce un valor",
						confirmButtonColor:"#dc3545"
					})
			}
		})

			res.forEach(el => {
			let horario = el.ampm;
			let datoHora = temple.querySelector(".hora");
			let datoMinuto = temple.querySelector(".minuto");
			let datoHorario = temple.querySelector(".ampm-text");

			datoHora.textContent = el.hora;
			datoMinuto.textContent = el.minuto;
			datoHorario.textContent = horario;
			temple.querySelector(".content-total").dataset.id = el.id;
			temple.querySelector(".eliminar").dataset.id = el.id;
			temple.querySelector(".editar").dataset.id = el.id;
			let clone = temple.cloneNode(true)
			fragment.appendChild(clone)
			sonido.appendChild(fragment)

			let horas = parseInt(el.hora);
			let minutos = parseInt(el.minuto);
			let sumar = horas + 12
			let mensajeAletorio;
			let contenido = document.querySelector('.sonido')

			for(i=0; i<contenido.children.length; i++){
				mensajeAletorio = contenido.children[i].children[1].firstElementChild
			}
				
			 time = setInterval(()=>{
				let datesAlarma = new Date();
				let horasAlarma = datesAlarma.getHours();
				let minutosAlarma = datesAlarma.getMinutes();
				if (horasAlarma >= 12) {
					am = 'p.m.'
				}else{
					am = 'a.m.'
				}
				
				if (horario == 'p.m.') {	
					horas = sumar
					if (horas == 24) horas = 12
						if (horasAlarma == horas && minutosAlarma == minutos && horario == am) {
							const Toast = Swal.mixin({								
								toast: true,
								position: 'top-end',
								showConfirmButton: false,
								timer: 2500
							})

							Toast.fire({
								background:"#3E3D3D",
								color:"#fff",
								icon: 'info',
								title: 'SONANDO!',
								text:"Alarma ejecutada"
							})
							setTimeout(()=>{
								let audio = new Audio('alarm.mp3')
								audio.play()
							},0)
							mensajeAletorio.textContent = "Sonando"

					}else if (horas > horasAlarma && minutos <= minutosAlarma ||
						horas >= horasAlarma && minutos >= minutosAlarma) {
						mensajeAletorio.textContent = "Se ejecuta mas tarde"								

					}else if (horas <= horasAlarma && minutos <= minutosAlarma ||
						horas <= horasAlarma && minutos >= minutosAlarma) {	
						mensajeAletorio.textContent = "Se ejecuta mañana"																		
					}
						

				}else if (horario == 'a.m.'){
					if (horas == 24) horas - 24
						if (horas == 12) horas = 0

							if (horasAlarma == horas && minutosAlarma == minutos && horario == am) {
								const Toast = Swal.mixin({								
									toast: true,
									position: 'top-end',
									showConfirmButton: false,
									timer: 2500
								})

								Toast.fire({
									background:"#3E3D3D",
									color:"#fff",
									icon: 'info',
									title: 'SONANDO!',
									text:"Alarma ejecutada"
								})
								setTimeout(()=>{
									let audio = new Audio('alarm.mp3')
									audio.play()
								},0)
								mensajeAletorio.textContent = "Sonando"


							}else if (horas > horasAlarma && minutos <= minutosAlarma ||
								horas >= horasAlarma && minutos >= minutosAlarma) {
								mensajeAletorio.textContent = "Se ejecuta mas tarde"								

							}else if (horas <= horasAlarma && minutos <= minutosAlarma ||
								horas <= horasAlarma && minutos >= minutosAlarma) {	
								mensajeAletorio.textContent = "Se ejecuta mañana"																		
							}
						}	
					},2500)
			})
		})
})


document.addEventListener("click", e =>{
	if (e.target.matches(".eliminar")) {

		let padre = e.target.parentNode.parentNode.firstElementChild
		let horas = padre.children[0].textContent
		let minutos = padre.children[2].textContent
		let horario = padre.children[3].textContent.toUpperCase()

		Swal.fire({
			title: 'Eliminar esta alarma?',
			html: `hora: <b style="color:#f00; font-size:22px"> ${horas} </b> minutos: <b style="color:#f00; font-size:22px"> ${minutos} </b> 
			horario: <b style="color:#f00; font-size:22px"> ${horario} </b>`,
			icon: 'warning',
			showCancelButton: true,
			cancelButtonColor: '#d33',
			confirmButtonText: 'Eliminar'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title:'Eliminado',
					text:'La alarma se elimino correctamente',
					icon:'success',
					timer: 1350,
					timerProgressBar: true,
					showConfirmButton: false,
					}).then((res) => {
						consultasFetch({
							url:`http://localhost:3000/alarmas/${e.target.dataset.id}`,
							method:"DELETE",
							sucsess:(res => {location.reload()}),
							error:(err => console.log(err)),
						})
					})
				}

		})
	}

	if (e.target.matches(".editar")) {

		(async () => {

			const { value: formValues } = await Swal.fire({
				title: 'Editar Alarma',
				html:
				`<div class="row py-2 w-75 m-auto">
				<label class="h4">Hora</label>
				<input type="number" min="1" max="12" id="horaEdit" class="swal2-input text-center w-75 m-auto">
				</div>` +
				`<div class="row py-2 w-75 m-auto">
				<label class="h4">Minuto</label>
				<input type="number" min="0" max="59" id="minutoEdit" class="swal2-input text-center w-75 m-auto">
				</div>` +
				`<div class="row py-2 w-75 m-auto">
				<label class="h4">Horario</label>
				<select id="horario" class="swal2-input text-center w-75 m-auto">
				<option>A.M.</option>
				<option>P.M.</option>
				</select>
				</div>`,
				focusConfirm: false,
				confirmButtonText: 'Modificar',
				showCancelButton: true,
				cancelButtonText: "Cancelar",
				cancelButtonColor: "#dc3545",
				preConfirm: () => {
					let horaEdit = parseInt(document.getElementById('horaEdit').value)
					let minutosEdit = parseInt(document.getElementById('minutoEdit').value)
					let horarioEdit = document.getElementById('horario').value.toLowerCase()
					
				
					if (horaEdit > 0 && horaEdit < 10) horaEdit = `0${horaEdit}`
						if (minutosEdit < 10) minutosEdit = `0${minutosEdit}`
							if (minutosEdit == 0 || isNaN(minutosEdit)) minutosEdit = "00"
								return {
									hora:horaEdit,
									minuto:minutosEdit,
									ampm:horarioEdit
								}								
							}
						})
			if (formValues) {
				if (formValues.hora > 0 && formValues.hora <= 12 && formValues.minuto >= 0 && formValues.minuto < 60) {
					if (!isNaN(formValues.hora) && !isNaN(formValues.minuto)) {
						Swal.fire({
							title:"Modificacion Exitosa!",
							text:"Tu alarma se sobreescribio con exito!",
							icon:'success',
							timer: 1350,
							timerProgressBar: true,
							showConfirmButton: false
						}).then((res)=>{
							consultasFetch({
								url:`http://localhost:3000/alarmas/${e.target.dataset.id}`,
								method:'PUT',
								sucsess:(res => location.reload()),
								error:(err => console.log(err)),
								data:(formValues)
							});
						})
					}
				}else{
					Swal.fire({
						title:"Valores No validos!",
						text:"Introduce valores en los campos!",
						icon:"error"
					})
				}
			}

		})()
	}

})











