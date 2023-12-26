// JUEGO NÚMERO GANADOR CON .RANDOM 

let intentosRestantes = 3;
let continuar;

while (intentosRestantes > 0) {
  let eleccionDelJugador = prompt("Ingrese su número entre 1 y 10, acertá el número y obtené un código de descuento. Tenes 3 intentos");

  eleccionDelJugador = parseInt(eleccionDelJugador);

  if (isNaN(eleccionDelJugador) || eleccionDelJugador < 1 || eleccionDelJugador > 10) {
    alert("Por favor, ingrese un número entre 1 y 5");
  } else {
    let numeroGanador = Math.floor(Math.random() * 10) + 1;

    console.log("Número seleccionado: ", eleccionDelJugador);
    console.log("Número ganador: ", numeroGanador);

    if (eleccionDelJugador === numeroGanador) {
      alert("🔥 ¡Felicitaciones, acertaste! 🔥 El código de descuento es 'GaneElDesafio'");
      break;
    } else {
      alert("No coincide 😥");
      continuar = prompt("¿Desea seguir intentando? 🤔").toLowerCase();

      if (continuar === "no") {
        alert("¡En otra ocasión lo intentaremos! 👋");
        break;
      }
    }
  }

  intentosRestantes--;
}

if (intentosRestantes === 0) {
  alert("Se acabaron los intentos. ¡Mejor suerte la próxima vez! 👋");
}




/************************************************************************************************************ */
/* CREAMOS PEQUEÑO CATALOGO CON CONSTRUCTOR + ARRAY  */
class Producto {
    constructor(nombre, precio, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}


const PROD1 = new Producto("Ibupirac 400 x 12 caps", "$1280", "img/ibupirac400x12caps.png")
const PROD2 = new Producto("Ibupirac Plus Max x10cmpr", "$1060", "img/ibupiracPlusMax.png")
const PROD3 = new Producto("Ibupirac Fem x10cmpr", "$950", "img/ibupiracFem.png")
const PROD4 = new Producto("Ibupirac Antigripal x10cmpr", "$1630", "img/ibupiracAntigripal.png")
const PROD5 = new Producto("Ibupirac 2% jbe x90ml", "$1965", "img/ibupiracJbe.png")

const arrayProductos = [PROD1, PROD2, PROD3, PROD4, PROD5];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(producto => {                    
    const div = document.createElement("div");          

    div.className = "card";   
    
    div.innerHTML = `                                   
                    
                        <img class="card-img" src="${producto.img}" alt="">
                        <div>
                        <h2 class="h2-card">${producto.nombre}</h2>
                        <p class="precio-card">${producto.precio}</p>
                        <button>Comprar</button>
                        </div>
                        
                    `;

    contenedorProductos.appendChild(div);           
})



