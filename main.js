const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

$("#boton").click(() => {
    $.get(URLGET, (respuesta, estado) => {
        if(estado === "success"){
            let info = respuesta;
            for (const infoDolar of info){
                $("body").preprend(`<div>
                                      <h3>agencia: ${infoDolar.agencia}</h3>
                                      <p>nombre dolar: ${infoDolar.nombre}</p>
                                      <p>precio compra: ${infoDolar.compra}</p>
                                      <p>precio venta: ${infoDolar.venta}</p></div>`);
            }
        }
    });
});

