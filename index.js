//Array Principal

const productos = [
	//ABARROTES

	{
		id: "aceite 123 1L",
		titulo: "Aceite 123", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/aceite123-1l-min.png", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "ABARROTES",
			id: "abarrotes"	
		},
		precio: 46.00
	},
	
	//ENLATADOS
		{
		id: "aceite sabrosano 800ml",
		titulo: "aceite Sabrosano", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/aceite-sabrosano.jpeg", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "850 ml",
		marca: "sabrosano",
		categoria: {
			nombre: "ENLATADOS",
			id: "enlatados"
		},
		precio: 39.50
	},

	//LACTEOS
		{
		id: "Aceite Nutrioli",
		titulo: "aceite 123", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/aceite-nutrioli.jpeg", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "LÁCTEOS",
			id: "lacteos"
		},
		precio: 41.33
	},

	{
		id: "Arroz verde valle",
		titulo: "Arroz Blanco", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/arroz-verde-valle.jpeg", /*ruta de la imagen*/
		departamento:"Frutas y Verduras",
		contenido: "800 gr",
		marca: "verde valle",
		categoria: {
			nombre: "OFERTAS",
			id: "ofertas"
		},
		precio: 18
	},

	{
		id: "aceite 123",
		titulo: "Aceite 123", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/aceite123-1l-min.png", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "ABARROTES",
			id: "abarrotes"	
		},
		precio: 100
	},
	
	//ENLATADOS
		{
		id: "aceite sabrosano 800ml",
		titulo: "aceite Sabrosano", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/aceite-sabrosano.jpeg", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "850 ml",
		marca: "sabrosano",
		categoria: {
			nombre: "ENLATADOS",
			id: "enlatados"
		},
		precio: 100
	},

	//LACTEOS
		{
		id: "aser",
		titulo: "aceite 123", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/duraludon.jpg", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "LÁCTEOS",
			id: "lacteos"
		},
		precio: 170
	},

	{
		id: "lechuga",
		titulo: "lechuga 1/2 kg", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/delphox.jpg", /*ruta de la imagen*/
		departamento:"Frutas y Verduras",
		contenido: "1/2 kg",
		marca: "123",
		categoria: {
			nombre: "OFERTAS",
			id: "ofertas"
		},
		precio: 18
	},

	{
		id: "aceite 123 1L",
		titulo: "Aceite 123", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/aceite123-1l-min.png", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "ABARROTES",
			id: "abarrotes"	
		},
		precio: 100
	},
	
	//ENLATADOS
		{
		id: "aceite sabrosano 800ml",
		titulo: "aceite Sabrosano", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/aceite-sabrosano.jpeg", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "850 ml",
		marca: "sabrosano",
		categoria: {
			nombre: "ENLATADOS",
			id: "enlatados"
		},
		precio: 100
	},

	//LACTEOS
		{
		id: "aser",
		titulo: "aceite 123", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/duraludon.jpg", /*ruta de la imagen*/
		departamento:"Abarrotes",
		contenido: "1L",
		marca: "123",
		categoria: {
			nombre: "LÁCTEOS",
			id: "lacteos"
		},
		precio: 170
	},

	{
		id: "lechuga",
		titulo: "lechuga 1/2 kg", /*este titulo se va a ver en el dom*/
		imagen: "./imagenes/abarrotes/aceites-comestibles/delphox.jpg", /*ruta de la imagen*/
		departamento:"Frutas y Verduras",
		contenido: "1/2 kg",
		marca: "123",
		categoria: {
			nombre: "OFERTAS",
			id: "ofertas"
		},
		precio: 18
	},


];

const contenedorImagenes = document.querySelector("#contenedor-imagenes");//imagenes=productos
const botonesCategorias = document.querySelectorAll(".boton-clases");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
const numerito = document.querySelector("#numerito");
let barraBusqueda = document.querySelector("#buscador");

function cargarProductos(productosElegidos) {

	contenedorImagenes.innerHTML = "";

	productosElegidos.forEach(producto => {
		const div = document.createElement("div");
		div.classList.add("producto");
		div.innerHTML = `


			<div class="producto">
				<div class="producto-detalles">
					<div class="imagen">
						<img src="${producto.imagen}">
					</div>
					<div class="descripcion">
						<p>Des:${producto.titulo}</p>
						<p>Cont: ${producto.contenido}</p>
						<p>Cod:75020356078</p>
						
					</div>
					<p>Precio</p>
					<div class="precio">
						
						<button class="boton-precio">$${producto.precio}</button>
					</div>

					<div class="agregar-carrito">
						<button class="boton-agregar" id="${producto.id}">Agregar Al Carrito</button>
					</div>
					
				</div>
				
			</div>
				
		`;
		contenedorImagenes.append(div);



	})

	actualizarBotonesAgregar();

} 

function buscarArticulos() {
	buscador.addEventListener("input", e => {
		const inputText = e.target.value.toLowerCase().trim();
		console.log(inputText);
		
		const mostrarFiltrado = productos.filter(producto => 
			producto.titulo.toLowerCase().startsWith(inputText)||
			producto.marca.toLowerCase().startsWith(inputText)||
			producto.contenido.toLowerCase().startsWith(inputText)||
			producto.precio.toString().startsWith(inputText)
			)
			;

		
		cargarProductos(mostrarFiltrado)
	})

}

cargarProductos(productos);
buscarArticulos();

botonesCategorias.forEach(boton => {
	boton.addEventListener("click", (e) => {

		botonesCategorias.forEach(boton => {
			boton.classList.remove("active")
		})
		e.currentTarget.classList.add("active");

		if (e.currentTarget.id !=  "todos") {
			const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

			tituloPrincipal.innerText = productoCategoria.categoria.nombre;
			const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);


		cargarProductos(productosBoton);
		} else {
			tituloPrincipal.innerText = "Todos los productos";
			cargarProductos(productos);
		}
	})
});

function actualizarBotonesAgregar(){
	botonesAgregar = document.querySelectorAll(".boton-agregar");

	botonesAgregar.forEach(boton => {
		boton.addEventListener("click", agregarAlCarrito);
	});
}

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
	productosEnCarrito = productosEnCarritoLS;
	actualizarNumerito();
}
else{
	productosEnCarrito = [];
}
 

function agregarAlCarrito(e) {
	Toastify({
  		text: "Producto agregado al carrito",
  		duration: 2000,
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
	const productoAgregado = productos.find(producto => producto.id === idBoton);

	if (productosEnCarrito.some(producto => producto.id === idBoton)) {
		const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
		productosEnCarrito[index].cantidad++;

	}
	else{
		productoAgregado.cantidad = 1;
		productosEnCarrito.push(productoAgregado);	
	}

	actualizarNumerito();

		localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito(){
	let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
	numerito.innerText = nuevoNumerito;
}

window.onload = actualizarPagina();

        function actualizarPagina() {
            let actualizar = false;
            momentoActual = new Date();
            hora = momentoActual.getHours();
            minuto = momentoActual.getMinutes();
            segundo = momentoActual.getSeconds();

            str_segundo = new String (segundo);
            if (str_segundo.length == 1) {
                segundo = "0" + segundo;
            }
            str_minuto = new String (minuto);
            if (str_minuto.length == 1){
                minuto = "0" + minuto;
            }
            str_hora = new String (hora);
            if (str_hora.length == 1){
                hora = "0" + hora;
            }
            horaImprimible = hora + ":" + minuto + ":" + segundo;
            if(horaImprimible == "12:49:00") {
                actualizar = true;
            }
            setTimeout("actualizarPagina()",1000);
            if(actualizar == true) {//Comprueba que la hora es igual a la que quieres y actualiza
                location.reload();
            }
        }




