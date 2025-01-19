// Definición de stickers con nombre y cantidad
const areas = {
  pacha: [
    { name: "karen uzin", quantity: "900", drinks: "singani,",combos:"pachamama" },//PACHA 1
    { name: "karen uzin", quantity: "980", drinks: "ron,vodka",combos:"cumpleañero" },//PACHA 2
    { name: "", quantity: "", drinks: ",",combos:"" },//PACHA 3
    { name: "karen uzin", quantity: "980", drinks: "ron,singani",combos:"cumpleañero" },//PACHA 4
    { name: "", quantity: "", drinks: ",",combos:"" },//PACHA 5
    { name: "karen uzin", quantity: "760", drinks: "jager,",combos:"jager" },//PACHA 6
    { name: "", quantity: "", drinks: ",",combos:"" },//PACHA 7
    { name: "", quantity: "", drinks: ",",combos:"" },//PACHA 8
    { name: "karen uzin", quantity: "750", drinks: "singani,",combos:"parrales" },//PACHA 9
    
  ],
  lounge: [
    { name: "", quantity: "", drinks: ","  ,combos:""},//1
    { name: "", quantity: "", drinks: ","  ,combos:""},//2
    { name: "", quantity: "", drinks: ","  ,combos:""},//3
    { name: "", quantity: "", drinks: ","  ,combos:""},//4
    { name: "karen uzin", quantity: "680", drinks: "jager,"  ,combos:"jager"},//5
    { name: "karen uzin", quantity: "680", drinks: "jager,"  ,combos:"jager"},//6
    { name: "", quantity: "", drinks: ","  ,combos:""},//7
    { name: "karen uzin", quantity: "730", drinks: "ron,"  ,combos:"jager"},//8
    { name: "", quantity: "", drinks: ","  ,combos:""},//9
    { name: "karen uzin", quantity: "680", drinks: "jager,"  ,combos:"jager"},//10
  ],
  parrales: [
    { name: "karen uzin", quantity: "900", drinks: "ron,singani" ,combos:"normal" },
    { name: "karen uzin", quantity: "980", drinks: "ron,singani"  ,combos:"cumpleañero"},
    { name: "karen uzin", quantity: "900", drinks: "ron,singani" ,combos:"normal" },
    { name: "karen uzin", quantity: "980", drinks: "ron,singani" ,combos:"cumpleañero" },
    { name: "karen uzin", quantity: "650", drinks: "gin republica," ,combos:"gin"},
    { name: "karen uzin", quantity: "900", drinks: "singani,"  ,combos:"pachamama"},
    { name: "karen uzin", quantity: "980", drinks: "ron,singani"  ,combos:"cumpleañero"},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "karen uzin", quantity: "760", drinks: "jager,"  ,combos:"jager"},
    { name: "karen uzin", quantity: "980", drinks: "ron,singani" ,combos:"cumpleañero"},
    { name: "karen uzin", quantity: "760", drinks: "jager,"  ,combos:"jager"},
    { name: "karen uzin", quantity: "980", drinks: "ron,singani" ,combos:"cumpleañero"},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "karen uzin", quantity: "1030", drinks: "ron,singani"  ,combos:"cumpleañero"},
    { name: "karen uzin", quantity: "980", drinks: "singani,singani" ,combos:"cumpleañero" },
    { name: "karen uzin", quantity: "980", drinks: "singani,"  ,combos:"pachamama"},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    ],


  cholet: [
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: "," ,combos:"" },
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: "," ,combos:"" },
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    { name: "", quantity: "", drinks: ","  ,combos:""},
    //... (otros stickers de cholet)
  ],
  vipsocios: [
      { name: "karen uzin", quantity: "680", drinks: "jager," ,combos:"jager" },
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: "," ,combos:"" },
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
    //... (otros stickers de vipsocios)
  ],
  extras: [
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
    ],
    camel: [
      { name: "karen uzin", quantity: "680", drinks: "jager,"  ,combos:"jager"},
      { name: "", quantity: "", drinks: ","  ,combos:""},
      { name: "", quantity: "", drinks: ","  ,combos:""},
    //... (otros stickers de extras)
  ],
  };

// Lista de stickers
const stickers = {
  pacha: "icons8-table-top-view-96 (2).png",
  lounge: "icons8-table-top-view-96 (2).png",
  parrales: "icons8-table-top-view-96 (2).png",
  cholet: "icons8-table-top-view-96 (2).png", // Nuevo sticker para cholet
  vipsocios: "icons8-table-top-view-96 (2).png", // Nuevo sticker para cip socios
  extras: "icons8-table-top-view-96 (2).png", // Nuevo sticker para extras
  camel: "icons8-table-top-view-96 (2).png",
};

// Definición de números de cuenta
const accountNumbers = {
  "diego cardenas": "190*****817",
  "horcio arenas": "150*****407",
  "karen uzin": "131*****176",
};

// Seleccionar los contenedores para cada área
const pachaContainer = document.getElementById("pacha-container");
const loungeContainer = document.getElementById("lounge-container");
const parralesContainer = document.getElementById("parrales-container");

// Nuevas áreas
const choletContainer = document.getElementById("cholet-container");
const vipSociosContainer = document.getElementById("vipsocios-container");
const extrasContainer = document.getElementById("extras-container");
const camelContainer = document.getElementById("camel-container");



// Modifica la función createSticker para que primero verifique que el área tiene un valor válido
function createSticker(container, index, area, stickerUrl) {
  if (!area[index]) return; // Si no hay un elemento en el índice, no procedas

  const stickerDiv = document.createElement("div");
  stickerDiv.className = "sticker";

  const img = document.createElement("img");
  img.src = stickerUrl;
  img.alt = `Sticker ${index + 1}`;

  const numberLabel = document.createElement("span");
  numberLabel.className = "sticker-number";
  numberLabel.textContent = (index + 1).toString();

  const quantityLabel = document.createElement("span");
  quantityLabel.className = "sticker-quantity";
  quantityLabel.textContent = area[index].quantity;

  const nameLabel = document.createElement("span");
  nameLabel.className = "sticker-name";
  nameLabel.textContent = area[index].name;
  nameLabel.style.display = "none";

  stickerDiv.addEventListener("mouseover", () => {
    nameLabel.style.display = "block";
  });
  stickerDiv.addEventListener("mouseout", () => {
    nameLabel.style.display = "none";
  });

  stickerDiv.appendChild(img);
  stickerDiv.appendChild(numberLabel);
  stickerDiv.appendChild(quantityLabel);
  stickerDiv.appendChild(nameLabel);
  container.appendChild(stickerDiv);
}


// Generar los stickers para cada área, incluidas las nuevas
for (let i = 0; i < 18; i++) {  // Esto ahora será 18 en lugar de 10
  createSticker(pachaContainer, i, areas.pacha, stickers.pacha);
  createSticker(loungeContainer, i, areas.lounge, stickers.lounge);
  createSticker(parralesContainer, i, areas.parrales, stickers.parrales)
  createSticker(choletContainer, i, areas.cholet, stickers.cholet);
  createSticker(vipSociosContainer, i, areas.vipsocios, stickers.vipsocios);
  createSticker(extrasContainer, i, areas.extras, stickers.extras);
  createSticker(camelContainer,i,areas.camel, stickers.camel);
}


// Función para calcular el total de cada área y por nombre
function calcularTotal() {
  let totalPacha = areas.pacha.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) {
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);

  let totalLounge = areas.lounge.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) {
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);

  let totalParrales = areas.parrales.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) {
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);

  let totalCholet = areas.cholet.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) {
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);

  let totalCipSocios = areas.vipsocios.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) {
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);

  let totalExtras = areas.extras.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) {
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);
let totalcamel = areas.camel.reduce((acc, sticker) => {
  if (sticker.name && sticker.quantity) {
    return acc + (Number(sticker.quantity) || 0);
    }
      return acc;
    }, 0);
  // Calcular el total por nombre
  const totalPorNombre = areas.pacha.concat(areas.lounge, areas.parrales, areas.cholet, areas.vipsocios, areas.extras,areas.camel).reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) {
      acc[sticker.name] = (acc[sticker.name] || 0) + Number(sticker.quantity);
    }
    return acc;
  }, {});

  const totalGeneral = totalPacha + totalLounge + totalParrales + totalCholet + totalCipSocios + totalExtras +totalcamel;

  return {
    totalGeneral,
    totalPorNombre
  };
}

// Función para contar los combos
function contarCombos() {
  const totalCombos = {};
  let totalCountCombos = 0;

  // Recorremos las áreas para contar los combos
  [...areas.pacha, ...areas.lounge, ...areas.parrales, ...areas.vipsocios, ...areas.cholet, ...areas.extras, ...areas.camel].forEach(sticker => {
    const combo = sticker.combos ? sticker.combos.trim() : ''; // Obtenemos el tipo de combo

    if (combo) {
      totalCombos[combo] = (totalCombos[combo] || 0) + 1; // Contamos cada tipo de combo
    }
  });

  // Contamos cuántos combos en total hay
  totalCountCombos = Object.values(totalCombos).reduce((acc, count) => acc + count, 0);

  return { totalCombos, totalCountCombos };
}


// Función para contar total de bebidas y cuántas de cada tipo
function contarDrinks() {
  const totalDrinks = {};
  let totalCount = 0;

  // Recorremos las áreas para contar las bebidas
  [...areas.pacha, ...areas.lounge, ...areas.parrales, ...areas.vipsocios,...areas.cholet,...areas.extras,...areas.camel].forEach(sticker => {
    const drinksList = sticker.drinks ? sticker.drinks.split(",").map(d => d.trim()).filter(d => d) : []; // Filtramos entradas vacías

    drinksList.forEach(drink => {
      totalDrinks[drink] = (totalDrinks[drink] || 0) + 1; // Contamos cada tipo de bebida
    });

    // Acumulamos el total de bebidas solo si hay alguna bebida
    totalCount += drinksList.length;
  });

  return { totalDrinks, totalCount };
}

// Ejemplo de uso
const { totalDrinks, totalCount } = contarDrinks();
console.log('Total de bebidas:', totalCount); 
console.log('Cantidad por tipo de bebida:', totalDrinks);
 

// Función para calcular el porcentaje de ocupación de cada área
function calcularPorcentajeOcupacion() {
  const ocupadas = {
    pacha: areas.pacha.filter(sticker => sticker.name && sticker.quantity).length,
    lounge: areas.lounge.filter(sticker => sticker.name && sticker.quantity).length,
    parrales: areas.parrales.filter(sticker => sticker.name && sticker.quantity).length,
    cholet: areas.cholet.filter(sticker => sticker.name && sticker.quantity).length,
    vipsocios: areas.vipsocios.filter(sticker => sticker.name && sticker.quantity).length,
    extras: areas.extras.filter(sticker => sticker.name && sticker.quantity).length,
    camel: areas.camel.filter(sticker => sticker.name && sticker.quantity).length
  };;

  // El total de stickers por área se obtiene tomando la longitud del array de cada área
  const porcentajes = {};

  for (const area in ocupadas) {
    const totalArea = areas[area].length; // Total de stickers en cada área
    porcentajes[area] = (ocupadas[area] / totalArea) * 100; // Calcular el porcentaje
  }

  return porcentajes;
}

function mostrarDetalles() {
  // Limpiar el contenedor antes de agregar los nuevos detalles
  const totalContainer = document.getElementById("total-container");
  totalContainer.innerHTML = "";  // Esto borra el contenido anterior

  const totals = calcularTotal();
  const { totalDrinks, totalCount } = contarDrinks();
  const { totalCombos, totalCountCombos } = contarCombos(); // Llamada para contar combos
  const porcentajes = calcularPorcentajeOcupacion();
  const totalNames = Object.keys(totals.totalPorNombre);
  const totalNombreTitle = document.getElementById("total-nombre-title");

  // Mover la declaración de totalPorNombreContainer al principio
  const totalPorNombreContainer = document.getElementById("total-nombre-container");

  if (totalNames.length === 1) {
    const name = totalNames[0];
    const accountNumber = accountNumbers[name] || "N/A";
    const totalAmount = totals.totalGeneral;

    totalContainer.innerHTML = `
      <div class="card-credit">
        <div class="total-label">Total Registrado</div>
        <h2>${name}</h2>
        <div class="amount">${totalAmount} bs</div>
        <div class="account-number">Cuenta: ${accountNumber}</div>
      </div>
    `;

    totalPorNombreContainer.innerHTML = "";
    document.getElementById("nombre-table").style.display = "none";
    totalNombreTitle.style.display = "none";
  } else {
    totalPorNombreContainer.innerHTML = "";
    document.getElementById("nombre-table").style.display = "";
    totalNombreTitle.style.display = "";

    let totalMonto = 0;

    for (const [nombre, total] of Object.entries(totals.totalPorNombre)) {
      const accountNumber = accountNumbers[nombre] || "N/A";
      const row = document.createElement("tr");
      row.innerHTML = `<td>${nombre} (${accountNumber})</td><td>${total} bs</td>`;
      totalPorNombreContainer.appendChild(row);
      totalMonto += total;
    }

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td style="font-weight: bold; color:green;">Total:</td><td style="font-weight: bold;color:green;">${totalMonto} bs</td>`;
    totalPorNombreContainer.appendChild(totalRow);
  }

  // Crear un contenedor flex para alinear los cuadros de bebidas y combos uno al lado del otro
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container"); // Añadimos una clase para poder aplicar el CSS

  // Crear una hoja de estilos para la consulta de medios
  const style = document.createElement('style');
  style.innerHTML = `
    .flex-container {
      display: flex;
      justify-content: space-between;
      gap: 20px; /* Espacio entre los cuadros */
      flex-wrap: wrap; /* Asegura que se envuelvan cuando sea necesario */
    }

    .flex-container > div {
      flex: 1;
      min-width: 45%;
    }

    /* Estilo para pantallas pequeñas (móviles) */
    @media (max-width: 768px) {
      .flex-container {
        flex-direction: column; /* Apilar los elementos */
        gap: 10px; /* Menor espacio entre las tablas */
      }

      .flex-container > div {
        min-width: 100%; /* Hacer que cada tabla ocupe el 100% del ancho */
      }
    }
  `;
  document.head.appendChild(style);

  // Muestra los totales de bebidas en una tabla
  let drinksTable = `
    <div>
      <h3>Total de Bebidas</h3>
      <div style="display: flex; justify-content: center;">
        <table style="width: 100%; border-collapse: collapse; font-size: 19px; border: 1px solid #ddd;">
          <thead>
            <tr>
              <th style="border: 1px solid #ddd; background-color: black; padding: 4px; width: 70%; color: white;">Bebida</th>
              <th style="border: 1px solid #ddd; background-color: black; padding: 4px; width: 30%; color:white;">Cantidad</th>
            </tr>
          </thead>
          <tbody>`;

  let totalDrinksCount = 0; // Para el total general

  for (const [drink, count] of Object.entries(totalDrinks)) {
    drinksTable += `
      <tr>
        <td style="border: 1px solid #ddd;border-left: none; padding: 4px;">${drink}</td>
        <td style="border: 1px solid #ddd;border-right: none; padding: 4px;">${count}</td>
      </tr>`;
    totalDrinksCount += count; // Sumar al total general
  }

  drinksTable += `
      <tr style="font-weight: bold; color: #007bff;">
        <td style="border: 1px solid #ddd; padding: 4px;">Total:</td>
        <td style="border: 1px solid #ddd; padding: 4px;">${totalDrinksCount}</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>`;

  flexContainer.innerHTML += drinksTable;

  // Combinar todas las áreas y filtrar por 'pachamama'
  const allAreas = Object.values(areas).flat(); // Combina todos los arrays en uno solo
  const pachamamaCombos = allAreas.filter(item => item.combos === 'pachamama');

  // Calcular el total Pachamama (400 extraídos)
  let totalPachamama = 0;
  pachamamaCombos.forEach(combo => {
    let quantity = parseInt(combo.quantity); // Convertimos la cantidad a número
    while (quantity >= 900) {
      quantity -= 400; // Restamos 400 de la cantidad
      totalPachamama += 400; // Sumamos el total por cada 400 extraído
    }
  });

  console.log("Pachamama Combos:", pachamamaCombos);
  console.log("Total Pachamama (400 extraídos):", totalPachamama, "bs");

  // Solo creamos y agregamos la tabla si hay un total mayor a 0
  if (totalPachamama > 0) {
    const pachamamaContainer = document.createElement("div");
    pachamamaContainer.classList.add("pachamama-container"); // Añadimos una clase para darle estilos si es necesario

    const pachamamaTable = `
      <div style="text-align: center;"> 
        <h3>Pachamama</h3>
        <table style="width: 100%; max-width: 600px; margin: auto; border-collapse: collapse; font-size: 19px; table-layout: fixed;">
          <thead>
            <tr>
              <th style="border: 1px solid #ddd; background-color: black; padding: 8px; width: 60%; color: white;">TRATO PACHAMAMA</th>
              <th style="border: 1px solid #ddd; background-color: black; padding: 8px; width: 40%; color:white;">MONTO TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">Total Depositar a MAMA:</td>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; color: #007bff;">${totalPachamama} bs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style>
        /* Hacer que la tabla sea más flexible en pantallas pequeñas */
        @media (max-width: 768px) {
          table {
            font-size: 16px;
          }

          th, td {
            padding: 10px;
            text-align: center;
          }
        }

        /* Estilos adicionales para una visualización más responsiva */
        @media (max-width: 480px) {
          table {
            font-size: 14px;
          }

          th, td {
            padding: 6px;
          }
        }
      </style>
    `;


    pachamamaContainer.innerHTML = pachamamaTable;

    // Añadimos el contenedor de Pachamama a la página
    totalContainer.appendChild(pachamamaContainer); // Agregar la tabla Pachamama separada
  }

  // Mostrar los totales de los combos en una tabla
  let combosTable = `
    <div>
      <h3>Total de Combos</h3>
      <div style="display: flex; justify-content: center;">
        <table style="width: 100%; border-collapse: collapse; font-size: 19px;">
          <thead>
            <tr>
              <th style="border: 1px solid #ddd; background-color: black; padding: 4px; width: 70%; color:white;">Combos</th>
              <th style="border: 1px solid #ddd; background-color: black; padding: 4px; width: 30%; color: white">Cantidad</th>
            </tr>
          </thead>
          <tbody>`;

  let totalCombosCount = 0;

  for (const [combo, count] of Object.entries(totalCombos)) {
    combosTable += `
      <tr>
        <td style="border: 1px solid #ddd; padding: 4px;">${combo}</td>
        <td style="border: 1px solid #ddd; padding: 4px;">${count}</td>
      </tr>`;
    totalCombosCount += count;
  }

  combosTable += `
      <tr style="font-weight: bold; color: #007bff;">
        <td style="border: 1px solid #ddd; padding: 4px;">Total:</td>
        <td style="border: 1px solid #ddd; padding: 4px;">${totalCombosCount}</td>
      </tr>
    </tbody>
  </table>
  </div>`;

  flexContainer.innerHTML += combosTable;

  // Agregar el contenedor flex a `totalContainer`
  totalContainer.appendChild(flexContainer);


  // Aquí agregamos el mensaje de total dentro de un div con la clase CSS aplicada


  let count900 = 0;
  let count980 = 0;
  let countOthers = 0;

  const otrosMontos = []; // Para almacenar los montos de otras mesas

  [...areas.pacha, ...areas.lounge, ...areas.parrales,...areas.cholet,...areas.vipsocios,...areas.extras,...areas.camel].forEach(sticker => {
    const quantity = Number(sticker.quantity);
    if (quantity === 900) {
      count900++;
    } else if (quantity === 980) {
      count980++;
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
    <h3>Porcentaje de áreas vendidas</h3>
    <div class="porcentaje-area">
      <div class="area pacha">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.pacha ? porcentajes.pacha.toFixed(2) : 0}%;"></div>
        <p>Pacha: ${porcentajes.pacha ? porcentajes.pacha.toFixed(2) : 0}%</p>
      </div>
      <div class="area lounge">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.lounge ? porcentajes.lounge.toFixed(2) : 0}%;"></div>
        <p>Lounge: ${porcentajes.lounge ? porcentajes.lounge.toFixed(2) : 0}%</p>
      </div>
      <div class="area parrales">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.parrales ? porcentajes.parrales.toFixed(2) : 0}%;"></div>
        <p>Parrales: ${porcentajes.parrales ? porcentajes.parrales.toFixed(2) : 0}%</p>
      </div>
      <!-- Nuevas áreas añadidas -->
      <div class="area cholet">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.cholet ? porcentajes.cholet.toFixed(2) : 0}%;"></div>
        <p>Cholet: ${porcentajes.cholet ? porcentajes.cholet.toFixed(2) : 0}%</p>
      </div>
      <div class="area vipsocios">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.vipsocios ? porcentajes.vipsocios.toFixed(2) : 0}%;"></div>
        <p>vipSocios: ${porcentajes.vipsocios ? porcentajes.vipsocios.toFixed(2) : 0}%</p>
      </div>
      <div class="area extras">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.extras ? porcentajes.extras.toFixed(2) : 0}%;"></div>
        <p>Extras: ${porcentajes.extras ? porcentajes.extras.toFixed(2) : 0}%</p>
         </div>
          <div class="area camel">
          <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.camel ? porcentajes.camel.toFixed(2) : 0}%;"></div>
          <p>camel: ${porcentajes.camel ? porcentajes.camel.toFixed(2) : 0}%</p>
      </div>
    </div>
  `;
  
  countContainer.appendChild(porcentajeContainer);
  document.getElementById("modal").style.display = "block";
  modal.classList.add("show");
  }

// Cerrar el modal al hacer clic en la X para el modal principal
document.getElementById("close-modal").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");

   modal.addEventListener('animationend', () => {
      document.getElementById("modal").style.display = "none";
      modal.classList.remove("hide");
    }, { once: true });
  });
// Cerrar el modal de respaldo de mesas al hacer clic en la X
document.querySelector(".close-btn").addEventListener("click", () => {
  const modalRespaldo = document.getElementById("modal-respaldo");
  modalRespaldo.classList.remove("show");  // Eliminar la clase 'show'
  modalRespaldo.classList.add("hide"); // Agregar la clase 'hide' para la animación de salida

  modalRespaldo.addEventListener('animationend', () => {
    modalRespaldo.style.display = "none"; // Ocultar el modal después de la animación
    modalRespaldo.classList.remove("hide");
  }, { once: true });
});

// Cerrar el modal de respaldo de mesas al hacer clic fuera del modal
window.addEventListener("click", (event) => {
  const modalRespaldo = document.getElementById("modal-respaldo");
  if (event.target === modalRespaldo) {
    modalRespaldo.classList.remove("show");  // Eliminar la clase 'show'
    modalRespaldo.classList.add("hide"); // Agregar la clase 'hide' para la animación de salida

    modalRespaldo.addEventListener('animationend', () => {
      modalRespaldo.style.display = "none"; // Ocultar el modal después de la animación
      modalRespaldo.classList.remove("hide");
    }, { once: true });
  }
});
// Opción 1 del menú
document.getElementById("opcion-1").addEventListener("click", () => {
  mostrarDetalles();
  sideMenu.classList.remove("open");
});
document.getElementById("opcion-respaldo").addEventListener("click", () => {
  document.getElementById("modal-respaldo").style.display = "block"; // Muestra el modal
  sideMenu.classList.remove("open"); // Cierra el menú lateral si está abierto
});
// Abrir el modal de respaldo de mesas
document.getElementById("opcion-respaldo").addEventListener("click", () => {
  const modalRespaldo = document.getElementById("modal-respaldo");
  modalRespaldo.style.display = "block"; // Mostrar el modal
  setTimeout(() => {
    modalRespaldo.classList.add("show"); // Agregar la clase 'show' después de mostrar el modal
  }, 5); // Dar un pequeño retraso para asegurar que la animación se aplique
  sideMenu.classList.remove("open"); // Cierra el menú lateral si está abierto
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
 

 

