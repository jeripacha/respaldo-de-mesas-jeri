// Función para abrir el modal
function openModal(info) {
    var modal = document.getElementById('modal');
    var modalText = document.getElementById('modal-text');
    var modalTitle = document.getElementById('modal-title');  // Título del modal

    modal.style.display = "block";
    // Definir la variable 'porcentajes' con valores inventados
    const porcentajes = {
        pacha: 33.33,
        parrales: 66.67,
        lounge: 18.18,
        cholet: 0.00,
        camel: 33.33,
        extras: 0.00,
        Vip: 0.00
    };

    if (info === 'cuenta 1') {
        modalTitle.innerHTML = "Resumen de Cuentas"; // Título para "MESAS"
        modalText.innerHTML = `
            <div style="display: flex; justify-content: center;">
                <table class="table" style="width: 830px;">
                    <thead>
                        <tr>
                            <th>Cuenta</th>
                            <th>Monto Depositado (bs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ignacio Aguilar (150*****327)</td>
                            <td>13,880 bs</td>
                        </tr>
                        <tr>
                            <td>Mama (N/A)</td>
                            <td>1,680 bs</td>
                        </tr>
                        <tr style="font-weight: bold; color: black;">
                            <td>Total:</td>
                            <td>15,560 bs</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card-container">
                <div class="card">
                    <div class="card-content">
                        <div class="card-title">Mesas de 980 bs:</div>
                        <div class="card-value">7</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="card-title">Mesas de 900 bs:</div>
                        <div class="card-value">1</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="card-title">Mesas de 680 bs:</div>
                        <div class="card-value">1</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="card-title">Mesas de 750 bs:</div>
                        <div class="card-value">0</div>
                    </div>
                </div>
                <div class="card" id="otros-montos-card">
                    <div class="card-content">
                        <div class="card-title">Mesas de otros montos:</div>
                        <div class="card-value">9</div>
                    </div>
                    <div class="otros-montos-list" style="display: none;">
                        <!-- Aquí se añaden los otros montos al hacer clic -->
                    </div>
                </div>
            </div>

            <div class="porcentaje-container">
                <h3>Porcentaje de áreas Vendidas</h3>
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
                        <p>Lounge: ${porcentajes.lounge.toFixed(2)}%</p>
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
                        <p>Vip: ${porcentajes.Vip.toFixed(2)}%</p>
                    </div>
                </div>
            </div>

            <!-- GANANCIAS MAMA -->
            <!-- Contenedor para la palabra Combo y la tabla -->
            <div style="display: flex; flex-direction: column; align-items: center;">

                <!-- Título "Combo" centrado -->
                <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
                 GANANCIAS MAMA
                </div>

            <div style="display: flex; justify-content: center; margin-top: 20px;">
                <table class="table" style="width: 830px;">
                    <thead>
                        <tr>
                            <th>Mesa</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>parrales 5</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>parrales 7</td>
                            <td>400</td>
                        </tr>
                        <tr style="font-weight: bold; color: black;">
                            <td>Depositar a MAMA:</td>
                            <td>800 bs</td>
                        </tr>
                    </tbody>
                </table>
            </div>
<!-- Contenedor para la palabra Combo y la tabla -->
<div style="display: flex; flex-direction: column; align-items: center;">

    <!-- Título "Combo" centrado -->
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
        DEPOSITOS QUE MAMA DEBE REALIZAR A PACHA
    </div>
            <!-- DEPOSITOS QUE MAMA DEBE REALIZAR A PACHA -->
            <div style="display: flex; justify-content: center; margin-top: 20px;">
                <table class="table" style="width: 830px;">
                    <thead>
                        <tr>
                            <th>Mesa</th>
                            <th>Cantidad Extraída</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>parrales 6</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>parrales 16</td>
                            <td>500</td>
                        </tr>
                        <tr style="font-weight: bold; color: black;">
                            <td>Total que deben depositar a PACHA:</td>
                            <td>1000 bs</td>
                        </tr>
                    </tbody>
                </table>
            </div>
<!-- Contenedor para la palabra Combo y la tabla -->
<div style="display: flex; flex-direction: column; align-items: center;">

    <!-- Título "Combo" centrado -->
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
        Combo
    </div>

               <div style="display: flex; justify-content: center; margin-top: 20px;">
                   <table class="table" style="width: 830px;">
                       <thead>
                           <tr>
                               <th>Combo</th>
                               <th>Cantidad</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>cumpleañero</td>
                               <td>6</td>
                           </tr>
                           <tr>
                               <td>cascabel</td>
                               <td>4</td>
                           </tr>
                           <tr>
                               <td>jager</td>
                               <td>3</td>
                           </tr>
                           <tr>
                               <td>singani</td>
                               <td>3</td>
                           </tr>
                           <tr>
                               <td>pachamama</td>
                               <td>2</td>
                           </tr>
                           <tr style="font-weight: bold; color: black;">
                               <td>Total:</td>
                               <td>18</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
                       <!-- BEBIDAS -->
                       <!-- Contenedor para la palabra Combo y la tabla -->
                           <div style="display: flex; flex-direction: column; align-items: center;">

                               <!-- Título "Combo" centrado -->
                               <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
                               BEBIDAS
                               </div>
                       <div style="display: flex; justify-content: center; margin-top: 20px;">
                           <table class="table" style="width: 830px;">
                               <thead>
                                   <tr>
                                       <th>Bebida</th>
                                       <th>Cantidad</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       <td>singani parrales</td>
                                       <td>17</td>
                                   </tr>
                                   <tr>
                                       <td>flor de caña 5 años</td>
                                       <td>6</td>
                                   </tr>
                                   <tr>
                                       <td>jager</td>
                                       <td>3</td>
                                   </tr>
                                   <tr>
                                       <td>vodka</td>
                                       <td>1</td>
                                   </tr>
                                   <tr>
                                       <td>gin republica</td>
                                       <td>1</td>
                                   </tr>
                                   <tr style="font-weight: bold; color: black;">
                                       <td>Total:</td>
                                       <td>28</td>
                                   </tr>
                               </tbody>
                           </table>
                       </div>
                   <style>
                           /* Media Query para pantallas pequeñas (móviles) */
                           @media (max-width: 600px) {
                               table {
                                   width: 100% !important; /* Hace que la tabla ocupe todo el ancho */
                                   table-layout: fixed; /* Ajusta las celdas para que se adapten */
                               }
                               th, td {
                                   word-wrap: break-word; /* Permite que el texto largo se ajuste */
                                   padding: 8px; /* Reduce un poco el padding para que quepa mejor */
                               }
                           }
                       </style>
        `;
        const otrosMontosCard = document.getElementById("otros-montos-card");
        if (otrosMontosCard) {
            const listaContainer = otrosMontosCard.querySelector(".otros-montos-list");

            otrosMontosCard.addEventListener("click", () => {
                if (listaContainer.style.display === "none" || listaContainer.style.display === "") {
                    // Expandir
                    listaContainer.style.display = "block";

                    // Añadir más mesas extras
                    listaContainer.innerHTML = `
                        <div style="color: black; font-weight: bold; font-size: 18px;">IGNACIO AGUILAR: 650 bs</div>
                        <div style="color: black; font-weight: bold; font-size: 18px;">IGNACIO AGUILAR: 800 bs</div>
                        <div style="color: black; font-weight: bold; font-size: 18px;">IGNACIO AGUILAR: 700 bs</div>
                        <div style="color: black; font-weight: bold; font-size: 18px;">IGNACIO AGUILAR: 1000 bs</div>
                        <div style="color: black; font-weight: bold; font-size: 18px;">MAMA: 780 bs</div>
                        <div style="color: black; font-weight: bold; font-size: 18px;">IGNACIO AGUILAR: 760 bs</div>
                        <div style="color: black; font-weight: bold; font-size: 18px;">IGNACIO AGUILAR: 800 bs</div>
                        <div style="color: black; font-weight: bold; font-size: 18px;">IGNACIO AGUILAR: 830 bs</div>
                        <div style="color: black; font-weight: bold; font-size: 18px;">IGNACIO AGUILAR: 800 bs</div>
                    `;

                    // Ajustar la altura
                    listaContainer.style.maxHeight = listaContainer.scrollHeight + "px"; // Ajustar la altura al contenido actualizado

                    setTimeout(() => {
                        listaContainer.style.transition = "max-height 0.5s ease-in-out"; // Activar la transición
                        listaContainer.style.maxHeight = listaContainer.scrollHeight + "px"; // Establecer la nueva altura
                    }, 0);
                } else {
                    // Contraer
                    listaContainer.style.transition = "max-height 0.5s ease-in-out"; // Animación suave
                    listaContainer.style.maxHeight = "0"; // Reducir la altura a 0

                    setTimeout(() => {
                        listaContainer.style.display = "none"; // Ocultar completamente después de la animación
                    }, 500); // Debe coincidir con el tiempo de transición
                }
            });
        }
        } else if (info === 'informacion 2') {
         modalTitle.innerHTML = "Total de Ingresos Netos por Ventas de Mesas"; // Título para "GANACIAS"
            modalText.innerHTML = `
            
                <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
                    <!-- Tarjeta Total de Ingresos -->
                    <div class="tarjeta" style="width: 250px; background-color: white; color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
                        <div class="tarjeta-content">
                            <!-- Ícono -->
                            <div class="tarjeta-icon" style="font-size: 40px; color: #4CAF50; margin-bottom: 10px;">
                                <i class="fa fa-dollar-sign"></i> <!-- Usando FontAwesome -->
                            </div>
                            <!-- Título -->
                            <div class="tarjeta-title" style="font-size: 18px; font-weight: bold;">Total de Ingresos</div>
                            <!-- Cantidad -->
                            <div class="tarjeta-value" style="font-size: 22px;">13,880 bs</div>
                        </div>
                    </div>
                    <!-- Tarjeta Inversión -->
                    <div class="tarjeta" style="width: 250px; background-color: white; color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
                        <div class="tarjeta-content">
                            <!-- Ícono -->
                            <div class="tarjeta-icon" style="font-size: 40px; color: #FF9800; margin-bottom: 10px;">
                                <i class="fa fa-arrow-down"></i> <!-- Usando FontAwesome -->
                            </div>
                            <!-- Título -->
                            <div class="tarjeta-title" style="font-size: 18px; font-weight: bold;">Inversión</div>
                            <!-- Cantidad -->
                            <div class="tarjeta-value" style="font-size: 22px;">2,603 bs</div>
                        </div>
                    </div>
                    <!-- Tarjeta Ganancias Netas -->
                    <div class="tarjeta" style="width: 250px; background-color: white; color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
                        <div class="tarjeta-content">
                            <!-- Ícono -->
                            <div class="tarjeta-icon" style="font-size: 40px; color: #2196F3; margin-bottom: 10px;">
                                <i class="fa fa-chart-line"></i> <!-- Usando FontAwesome -->
                            </div>
                            <!-- Título -->
                            <div class="tarjeta-title" style="font-size: 18px; font-weight: bold;">Ganancias Netas</div>
                            <!-- Cantidad -->
                            <div class="tarjeta-value" style="font-size: 22px;">11,277 bs</div>
                        </div>
                    </div>
                </div>
<!-- Detalles de Inversión -->
    <div style="display: flex; justify-content: center; margin-top: 30px;">
        <table class="table" style="width: 830px;">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad Usada</th>
                    <th>Costo Invertido</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jager</td>
                    <td>3</td>
                    <td>456 Bs</td>
                </tr>
                <tr>
                    <td>Singani Parrales</td>
                    <td>17</td>
                    <td>1,054 Bs</td>
                </tr>
                <tr>
                    <td>Vodka</td>
                    <td>1</td>
                    <td>85 Bs</td>
                </tr>
                <tr>
                    <td>Flor de Caña 5 años</td>
                    <td>6</td>
                    <td>438 Bs</td>
                </tr>
                <tr>
                    <td>Gin República</td>
                    <td>1</td>
                    <td>120 Bs</td>
                </tr>
                <tr>
                    <td>Coca-Cola</td>
                    <td>6</td>
                    <td>54 Bs</td>
                </tr>
                <tr>
                    <td>Schweppes Ginger Ale 1.5L</td>
                    <td>17</td>
                    <td>255 Bs</td>
                </tr>
                <tr>
                    <td>Monster</td>
                    <td>8</td>
                    <td>120 Bs</td>
                </tr>
                <tr>
                    <td>Agua Tónica</td>
                    <td>2</td>
                    <td>12 Bs</td>
                </tr>
                <tr>
                    <td>Simba Pomelo</td>
                    <td>1</td>
                    <td>9 Bs</td>
                </tr>
            </tbody>
        </table>
    </div>
               <style>
                   /* Estilo para pantallas pequeñas (móviles) */
                   @media (max-width: 768px) {
                       .tarjeta {
                           width: 100%; /* Hacer las tarjetas ocupar todo el ancho disponible */
                           margin-bottom: 20px; /* Espacio entre tarjetas */
                       }

                       /* Asegurarse de que el contenedor de las tarjetas se ajuste bien */
                       .tarjeta-content {
                           padding: 15px;
                       }

                       table {
                           width: 100% !important; /* Hacer que la tabla ocupe todo el ancho */
                           table-layout: fixed; /* Ajustar las celdas para que se adapten */
                       }
                       th, td {
                           word-wrap: break-word; /* Permite que el texto largo se ajuste */
                           padding: 8px; /* Reduce un poco el padding para que quepa mejor */
                       }
                   }
                </style>
            `;
        }



        // Añadir la clase 'open' para activar la animación de apertura
        modal.classList.add('open');

        // Mostrar el modal de forma gradual
        modal.style.visibility = 'visible'; // Asegurarse de que el modal sea visible
        }

        function closeModal() {
        const modal = document.getElementById('modal');

        // Eliminar la clase 'open' para activar la animación de cierre
        modal.classList.remove('open');

        // Esperar a que termine la transición antes de ocultar el modal completamente
        setTimeout(() => {
            modal.style.visibility = 'hidden'; // Ocultar el modal después de la animación
        }, 100); // Este tiempo debe coincidir con la duración de la transición
        }
