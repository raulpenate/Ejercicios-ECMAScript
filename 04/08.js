function validarObjeto(objeto, propiedadesRequeridas) {
    return propiedadesRequeridas.every(propiedad => objeto.hasOwnProperty(propiedad));
}

const objeto = { nombre: "Juan", direccion: "Calle 123", telefono: "123456789" };

(() => {
    console.log(validarObjeto(objeto, ["nombre", "direccion", "telefono"]));
})()