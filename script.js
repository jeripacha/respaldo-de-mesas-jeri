// D
  let containerStyle = `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
      <style>
        /* Cuando la pantalla es pequeña (menos de 768px), las tablas se apilan una debajo de la otra y se hacen más anchas */
        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr !important; /* Las tablas se apilan */
          }

          .table {
            width: 100% !important; /* Aumenta el ancho de la tabla */
            margin: 0 auto; /* Centra la tabla */
          }
        }
      </style>
  `;


  let combosTable = `<div><h3>COMBOS</h3>
    <div style="display: flex; justify-content: center;">
      <table class="table">
        <thead>
          <tr>
            <th>Combo</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>`;

  let totalCombosCount = 0;

  for (const [combo, count] of Object.entries(totalCombos)) {
    combosTable += `
        <tr>
          <td>${combo}</td>
          <td>${count}</td>
        </tr>`;
    totalCombosCount += count;
  }

  combosTable += `
    <tr style="font-weight: bold; color: black;">
      <td style="color: black;">Total:</td>
      <td style="color: black;">${totalCombosCount}</td>
    </tr>
  </tbody>
  </table>
  </div></div>`;


  // Obtener los detalles extraídos
  const { totalExtraido, detallesExtraidos } = calcularExtraidoPachamama();
  // Para la tabla de Pachamama
  let pachamamaTable = `<div><h3 style="color: white;">GANANCIAS MAMA</h3>
    <div style="display: flex; justify-content: center;">
      <table class="table">
        <thead>
          <tr>
            <th>Mesa</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>`;

  detallesExtraidos.forEach(detalle => {
    pachamamaTable += `
          <tr>
            <td>${detalle.mesa}</td>
            <td>${detalle.cantidadExtraida}</td>
          </tr>`;
  });

  pachamamaTable += `
          <tr style="font-weight: bold; color: white;">
          <td style="color: black;">Depositar a MAMA:</td>
          <td style="color: black;">${totalExtraido} bs</td>
          </tr>
        </tbody>
      </table>
    </div></div>`;
  
  // Llamada a la función calcularDepositoMama antes de usar 'detallesMama'
  const { totalDepositoMama, detallesMama } = calcularDepositoMama();

  // Generación de la tabla de MAMA
  let mamaTable = `<div><h3 style="color: white;">DEPOSITOS QUE MAMA DEBE REALIZAR A PACHA</h3>
      <div style="display: flex; justify-content: center;">
        <table class="table">
          <thead>
            <tr>
              <th>Mesa</th>
              <th>Cantidad Extraída</th>
            </tr>
          </thead>
          <tbody>`;

  detallesMama.forEach(detalle => {
    mamaTable += `
          <tr>
            <td>${detalle.mesa}</td>
            <td>${detalle.cantidadExtraida}</td>
          </tr>`;
  });

  mamaTable += `
          <tr style="font-weight: bold; color: white;">
            <td style="color: black;">Total que deben depositar a PACHA:</td>
            <td style="color: black;">${totalDepositoMama} bs</td>
          </tr>
        </tbody>
      </table>
    </div></div>`;


  let drinksTable = `<div><h3>BEBIDAS </h3>
    <div style="display: flex; justify-content: center;">
      <table class="table">
        <thead>
          <tr>
            <th>Bebida</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>`;

  let totalDrinksCount = 0;

  for (const [drink, count] of Object.entries(totalDrinks)) {
    drinksTable += `
          <tr>
            <td>${drink}</td>
            <td>${count}</td>
          </tr>`;
    totalDrinksCount += count;
  }

  drinksTable += `
          <tr style="font-weight: bold; color: white;">
             <td style="color: black;">Total:</td>
           <td style="color: black;">${totalDrinksCount}</td>
          </tr>
        </tbody>
      </table>
    </div></div>`;



  // Agregamos todas las tablas al contenedor
  totalContainer.innerHTML += containerStyle + combosTable + pachamamaTable + mamaTable + drinksTable + '</div>';





  let count900 = 0;
  let count980 = 0;
  let count680 = 0; // Nueva variable para contar mesas de 680 bs
  let count750 = 0; // Nueva variable para contar mesas de 750 bs
  let countOthers = 0;

  const otrosMontos = []; // Para almacenar los montos de otras mesas

  [...areas.pacha, ...areas.parrales, ...areas.lounge, ...areas.cholet, ...areas.camel, ...areas.extras, ...areas.Vip].forEach(sticker => {
    const quantity = Number(sticker.quantity);

    if (quantity === 900) {
      count900++;
    } else if (quantity === 980) {
      count980++;
    } else if (quantity === 680) { // Condición para mesas de 680 bs
      count680++;
    } else if (quantity === 750) { // Condición para mesas de 750 bs
      count750++;
    } else if (quantity) {
      countOthers++;
      otrosMontos.push(`${sticker.name}: ${quantity} bs`); // Agregar a la lista de otros montos
    }
  });


  const countContainer = document.getElementById("count-container");
  countContainer.innerHTML = `
    <div class="card-container">
      <div class="card">
        <div class="card-content">
          <div class="card-title">Mesas de 980 bs:</div>
          <div class="card-value">${count980}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-title">Mesas de 900 bs:</div>
          <div class="card-value">${count900}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-title">Mesas de 680 bs:</div>
          <div class="card-value">${count680}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-title">Mesas de 750 bs:</div>
          <div class="card-value">${count750}</div>
        </div>
      </div>
      <div class="card" id="otros-montos-card">
        <div class="card-content">
          <div class="card-title">Mesas de otros montos:</div>
          <div class="card-value">${countOthers}</div>
        </div>
        <div class="otros-montos-list" style="display: none;"></div>
      </div>
    </div>
  `;

  const otrosMontosCard = document.getElementById("otros-montos-card");
  const listaContainer = otrosMontosCard.querySelector(".otros-montos-list");

  otrosMontosCard.addEventListener("click", () => {
    if (listaContainer.style.display === "none" || listaContainer.style.display === "") {
      // Asegúrate de que se muestre primero
      listaContainer.style.display = "block";
      listaContainer.innerHTML = otrosMontos.map(monto => `<div style="color: black; font-weight: bold; font-size: 18px;">${monto}</div>`).join('');

      // Calcular y aplicar la altura máxima
      const height = listaContainer.scrollHeight + "px";
      listaContainer.style.maxHeight = height;

      // Esperar a que se establezca la altura antes de aplicar la transición
      setTimeout(() => {
        listaContainer.style.maxHeight = height; // Activar la transición
      }, 0);
    } else {
      // Para ocultar la lista
      listaContainer.style.maxHeight = listaContainer.scrollHeight + "px"; // Asegurarse de que tenga la altura actual

      // Luego, ajustar max-height a 0 para la transición
      setTimeout(() => {
        listaContainer.style.maxHeight = "0"; // Aplicar la transición a cero
      }, 0);

      // Esperar la finalización de la transición antes de ocultar completamente
      setTimeout(() => {
        listaContainer.style.display = "none"; // Ocultar completamente después de la transición
      }, 900); // Debe coincidir con el tiempo de transición de CSS
    }
  });


  // Mostrar porcentajes de ocupación
  const porcentajeContainer = document.createElement("div");
  porcentajeContainer.className = "porcentaje-container"; // Clase para CSS
  porcentajeContainer.innerHTML = `
    <h3>Porcentaje de áreas Ocupadas</h3>
    <div class="porcentaje-area">
      <div class="area pacha">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.pacha.toFixed(2)}%;"></div>
        <p>Pacha: ${porcentajes.pacha.toFixed(2)}%</p>
      </div>
      <div class="area parrales">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.parrales.toFixed(2)}%;"></div>
        <p>Parrales: ${porcentajes.parrales.toFixed(2)}%</p>
      </div>
      <div class="area lounge">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.lounge.toFixed(2)}%;"></div>
        <p>lounge: ${porcentajes.lounge.toFixed(2)}%</p>
         </div>
       <div class="area cholet">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.cholet.toFixed(2)}%;"></div>
        <p>Cholet: ${porcentajes.cholet.toFixed(2)}%</p>
      </div>
      <div class="area camel">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.camel.toFixed(2)}%;"></div>
        <p>Camel: ${porcentajes.camel.toFixed(2)}%</p>
      </div>
      <div class="area extras">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.extras.toFixed(2)}%;"></div>
        <p>Extras: ${porcentajes.extras.toFixed(2)}%</p>
      </div>
      <div class="area Vip">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.Vip.toFixed(2)}%;"></div>
        <p>Vip:     ${porcentajes.Vip.toFixed(2)}%</p>
      </div>
    </div>
  `;

  countContainer.appendChild(porcentajeContainer);
  document.getElementById("modal").style.display = "block";
  modal.classList.add("show");
}

// Cerrar el modal al hacer clic en la X
document.getElementById("close-modal").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");

  modal.addEventListener('animationend', () => {
    document.getElementById("modal").style.display = "none";
    modal.classList.remove("hide");
  }, { once: true });
});

// Opción 1 del menú
document.getElementById("opcion-1").addEventListener("click", () => {
  mostrarDetalles();
  sideMenu.classList.remove("open");
});

// Función para mostrar/ocultar el menú
const menuSticker = document.getElementById("top-left-sticker");
const sideMenu = document.getElementById("side-menu");

menuSticker.addEventListener("click", (event) => {
  sideMenu.classList.toggle("open");
  event.stopPropagation();
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (sideMenu.classList.contains("open") && !sideMenu.contains(event.target) && !menuSticker.contains(event.target)) {
    sideMenu.classList.remove("open");
  }
});

function mostrarGanancias() {
  // Puedes cambiar los valores de Coca-Cola, Schweppes y Monster aquí
  const cocaColaCantidad = 6;
  const schweppesCantidad = 17;
  const monsterCantidad = 8; // Cantidad de Monster
  const aguaTonicaCantidad = 2; // Cantidad de Agua Tónica
  const simbaPomeloCantidad = 1; // Cantidad de Simba Pomelo
  const spriteCantidad = 0; // Cantidad de Sprite

  const { totalQuantity, totalGanado, resultado, detalleVentas } =calcularGanancias(areas, cocaColaCantidad, schweppesCantidad, monsterCantidad, aguaTonicaCantidad, simbaPomeloCantidad, spriteCantidad);

  const gananciasContainer = document.getElementById("ganancias-container");

  // Limpiar contenido previo del modal
  gananciasContainer.innerHTML = "";

  // URLs de los íconos personalizados para cada tarjeta
  const iconoQuantityUrl = "https://img.icons8.com/?size=100&id=63196&format=png&color=000000";
  const iconoGanadoUrl = "https://img.icons8.com/?size=100&id=13013&format=png&color=000000";
  const iconoResultadoUrl = "https://img.icons8.com/?size=100&id=AyHHKGHt204t&format=png&color=000000";

  // Crear tarjetas con íconos personalizados
  const tarjetasHtml = `
    <div class="tarjeta">
      <img src="${iconoQuantityUrl}" alt="Total Quantity Icon" class="icono-quantity">
      <h3>Total De Ingresos</h3>
      <p>${totalQuantity.toLocaleString()} Bs</p>
    </div>
    <div class="tarjeta">
      <img src="${iconoGanadoUrl}" alt="Total Ganado Icon" class="icono-ganado">
      <h3>Inversión</h3>
      <p>${totalGanado.toLocaleString()} Bs</p>
    </div>
    <div class="tarjeta">
      <img src="${iconoResultadoUrl}" alt="Ganancias Neta Icon" class="icono-resultado">
      <h3>Ganancias Neta</h3>
      <p>${resultado.toLocaleString()} Bs</p>
    </div>
  `;

  gananciasContainer.innerHTML += tarjetasHtml;

  // Mostrar mensaje o tabla según las cantidades
  let detalleVentasHtml = `
    <div class="detalle-ventas">
      <h3>Detalles De Inversión</h3>
      <style>
        /* Asegurar que la tabla sea más ancha en dispositivos móviles */
        @media (max-width: 768px) {
          .table {
            width: 103% !important;
            margin: 0 auto;
            transform: translateX(-2%); /* Desplaza 10% hacia la izquierda */
          }
        }
      </style>
  `;

  if (cocaColaCantidad === 0 && schweppesCantidad === 0 && monsterCantidad === 0) {
    detalleVentasHtml += `<p>No hay productos añadidos.</p>`;
  } else {
    detalleVentasHtml += `
      <table class="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad Usada</th>
            <th>Costo Invertido</th>
          </tr>
        </thead>
        <tbody>
    `;

    // Filtrar las ventas donde la cantidad es mayor que 0
    detalleVentas.forEach((venta) => {
      if (venta.cantidad > 0) {
        detalleVentasHtml += `
          <tr>
            <td>${venta.producto}</td>
            <td>${venta.cantidad}</td>
            <td>${venta.ingreso} Bs</td>
          </tr>
        `;
      }
    });

    detalleVentasHtml += `
        </tbody>
      </table>
    `;
  }

  detalleVentasHtml += `</div>`;

  // Agregar el HTML generado al contenedor
  gananciasContainer.innerHTML += detalleVentasHtml;






  // Mostrar el modal
  const modal = document.getElementById("modal-ganancias");
  modal.style.display = "block";
  modal.classList.add("show");
}


// Asociar el evento al botón "ver ganancias"
document.getElementById("ver-ganancias").addEventListener("click", () => {
  mostrarGanancias();
  sideMenu.classList.remove("open");
});

// Cerrar el modal de ganancias al hacer clic en la X
document.getElementById("close-ganancias-modal").addEventListener("click", () => {
  const gananciasModal = document.getElementById("modal-ganancias");
  gananciasModal.classList.remove("show");
  gananciasModal.classList.add("hide");

  gananciasModal.addEventListener(
    "animationend",
    () => {
      gananciasModal.style.display = "none";
      gananciasModal.classList.remove("hide");
    },
    { once: true }
  );
});
