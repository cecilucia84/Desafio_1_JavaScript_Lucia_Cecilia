let costoServicio = 0;
const interesAdicional = 0.66;

function mostrarServicios(servicio) {
  switch (servicio) {
    case 1:
      alert("La Carpa por Temporada para 6 personas cuesta $1.200.000");
      costoServicio = 1200000;
      break
    case 2:
      alert("La Carpa por el mes de ENERO para 6 personas cuesta $780.000");
      costoServicio = 780000;
      break
    case 3:
      alert("La Carpa por el mes de FEBRERO para 6 personas cuesta $620.000");
      costoServicio = 620000;
      break
    case 4:
      alert("La Sombrilla por Temporada para 4 personas cuesta $1.000.000");
      costoServicio = 1000000;
      break
    case 5:
      alert("La Sombrilla por el mes de ENERO para 4 personas cuesta $660.000");
      costoServicio = 660000;
      break
    case 6:
      alert("La Sombrilla por el mes de FEBRERO para 4 personas cuesta $530.000");
      costoServicio = 530000;
      break
    default:
      alert("Tu selección no es válida ⛔ Intenta otra vez❗😊");
      costoServicio = 0;
  }
}

function consultarPrecios() {
  let Prestaciones = parseInt(
    prompt(
      "Selecciona el servicio que deseas contratar para ver su financiación:\n" +
      "1. Carpa por Temporada para 6 personas\n" +
      "2. Carpa por el mes de ENERO para 6 personas\n" +
      "3. Carpa por el mes de FEBRERO para 6 personas\n" +
      "4. Sombrilla por Temporada para 4 personas\n" +
      "5. Sombrilla por el mes de ENERO para 4 personas\n" +
      "6. Sombrilla por el mes de FEBRERO para 4 personas"
    )
  );
  if (Prestaciones >= 1 && Prestaciones <= 6) {
    mostrarServicios(Prestaciones);
    calcularCuotas();
    let respuesta = confirm("¿Deseas consultar el precio de otra prestación?");
    if (respuesta === true) {
      consultarPrecios();
    }
  } else {
    console.warn("🚫Selección inválida. Ingresa un número del 1 al 6❗");
    alert ("🚫Selección inválida. Ingresa un número del 1 al 6❗" )
  }
}

function calcularCuotas() {
  if (costoServicio > 0) {
    console.log("💵 Financiación en cuotas con un interés adicional del 66%:");
    let cuotas = parseInt(prompt("Ingresa la cantidad de cuotas (2-12) para calcular el pago de tu espacio de sombra 👇"));
    if (cuotas >= 2 && cuotas <= 12) {
      for (let i = 1; i <= cuotas; i++) {
        const valorCuota = (costoServicio * (1 + interesAdicional)) / cuotas;
        console.log("Pagas cuota " + i + " de : " + "  $  " + valorCuota.toFixed(2));
      }
      console.log("Se aceptan pagos con todas las tarjetas de crédito 💳");
    } else {
      console.warn("🚫 Cantidad de cuotas no válida. Debes ingresar un número entre 2 y 12.");
      alert("🚫 Cantidad de cuotas no válida. Debes ingresar un número entre 2 y 12." )
    }
  }
}
// Inicia el proceso
consultarPrecios();
