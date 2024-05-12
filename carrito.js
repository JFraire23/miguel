const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
console.log(productosEnCarrito);
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");

function cargarProductosCarrito(){

	if (productosEnCarrito && productosEnCarrito.length > 0 ) {

		contenedorCarritoVacio.classList.add("disabled");
		contenedorCarritoProductos.classList.remove("disabled");
		contenedorCarritoAcciones.classList.remove("disabled");
		contenedorCarritoComprado.classList.add("disabled");
		contenedorCarritoProductos.innerHTML = "";



		productosEnCarrito.forEach(producto => {
			const div = document.createElement("div");
			div.classList.add("carrito-producto");
			div.innerHTML = `

					<img class="carrito-producto-imagen" src="${producto.imagen}">
					<div class="carrito-producto-titulo">
						<small>Titulo</small>
						<h5>${producto.titulo}</h5>
					</div>
					<div class="carrito-producto-cantidad">
						<small>Cantidad</small>
						<p class="textos-carrito">${producto.cantidad}</p>
					</div>
					<div class="carrito-producto-precio">
						<small>Precio</small>
						<p class="textos-carrito">$${producto.precio}</p>
					</div>
					<div class="carrito-producto-subtotal">
						<small>Subtotal</small>
						<p class="textos-carrito">$${producto.precio * producto.cantidad}</p>
					</div>
					<button class="carrito-producto-eliminar" id="${producto.id}"><i class="fa-regular fa-trash-can"></i></button>
				
				
		`;
		contenedorCarritoProductos.append(div);



		})
	
	
	}
	else {

		contenedorCarritoVacio.classList.remove("disabled");
		contenedorCarritoProductos.classList.add("disabled");
		contenedorCarritoAcciones.classList.add("disabled");
		contenedorCarritoComprado.classList.add("disabled");
	}

	actualizarBotonesEliminar();
	actualizarTotal();
}

cargarProductosCarrito();


function actualizarBotonesEliminar(){
	botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

	botonesEliminar.forEach(boton => {
		boton.addEventListener("click", eliminarDelCarrito);
	});
}

function eliminarDelCarrito(e){

	Toastify({
  		text: "Producto eliminado",
  		duration: 1000,
  		close: true,
  		gravity: "top", // `top` or `bottom`
  		position: "right", // `left`, `center` or `right`
  		stopOnFocus: true, // Prevents dismissing of toast on hover
  		style: {
    		background: "linear-gradient(to right, #00b09b, #96c93d)",
    		borderRadius: "2rem",
    		fontSize: '1rem',
  		},
  		onClick: function(){} // Callback after click
		}).showToast();

	const idBoton = e.currentTarget.id;
	const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

	productosEnCarrito.splice(index, 1);
	cargarProductosCarrito();

	localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito) );

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito(){

	Swal.fire({
 	 	title: "¿Estas Seguro?",
  		text: ` se van a borrar todos los productos`,
  		icon: "question",
  		showCancelButton: true,
  		confirmButtonColor: "#3085d6",
  		cancelButtonColor: "#d33",
  		confirmButtonText: "Sí",
  		cancelButtonText: "Cancelar",
		}).then((result) => {
  		if (result.isConfirmed) {
  			productosEnCarrito.length = 0;
			localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito) );
			cargarProductosCarrito();
    		Swal.fire({
      		title: "Borrado",
      		text: "Todos tus poductos fueron borrados",
      		icon: "success"
    	});
  }
});

	
}

function actualizarTotal(){
	const totalCalculado = productosEnCarrito.reduce((acc, producto)=> acc +(producto.precio * producto.cantidad), 0);

	total.innerText = `$${totalCalculado.toFixed(2)}`; 

}

window.onload = borrarPorTiempo();

function borrarPorTiempo(){
	let borrar = false;
	momentoActual = new Date();
	hora = momentoActual.getHours();
	minuto = momentoActual.getMinutes();
	segundo = momentoActual.getSeconds();

	str_segundo = new String (segundo);
	if (str_segundo.length == 1) {
		segundo = "0" + segundo;
	}

	str_minuto = new String (minuto);
	if (str_minuto.length == 1) {
		minuto = "0" + minuto;
	}

	str_hora = new String (hora);
	if (str_hora.length == 1) {
		hora = "0" + hora;
	}

	horaImprimible = hora + ":" + minuto + ":" + segundo;
            if(horaImprimible == "18:13:00") {
                borrar = true;
            }


    setTimeout("borrarPorTiempo()",1000);
            if(borrar == true) {//Comprueba que la hora es igual a la que quieres y actualiza
                vaciarCarrito2();
            }
	
}

function vaciarCarrito2(){
	productosEnCarrito.length = 0;
	localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito) );
	cargarProductosCarrito();
}


