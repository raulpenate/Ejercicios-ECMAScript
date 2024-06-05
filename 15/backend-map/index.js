const express = require('express')
const flotaJson = require('./mock/mock.json')
const app = express()
const port = 4000
const cors = require('cors')

app.use(cors())
app.use(express.json())


let flotaVehiculos = [...flotaJson];

app.get('/flota', (req, res) => {
    console.log(flotaVehiculos);
    res.json(flotaVehiculos)
})


app.post('/flota', (req, res) => {

    console.log('se guardo', req.body);
    const { nombre, ubicacion: { lat, lon }, ubicacionFinal: { latF, lonF } } = req.body

    const newFlota = {
        id: flotaVehiculos.length + 1,
        nombre,
        estado: "Sin ruta",
        ubicacion: {
            lat,
            lon
        },
        ubicacionFinal: {
            latF,
            lonF
        },
        rendimiento: {
            gas: "100",
            velocidad: "100",
            kilometraje: "50000"
        },
    }

    flotaVehiculos.push(newFlota)

    res.json(newFlota)
})

app.put('/flota/:id', (req, res) => {
    
    console.log('hago el put', req.body);

    const { nombre, estado, ubicacion: { lat, lon },  ubicacionFinal: { latF, lonF }, rendimiento: { gas, velocidad, kilometraje } } = req.body
    const { id } = req.params


    const vehiculo = flotaVehiculos.find((e) => e.id == id)

    if (vehiculo) {
        vehiculo.nombre = nombre || vehiculo.nombre
        vehiculo.estado = estado || vehiculo.estado
        vehiculo.ubicacion.lon = lon || vehiculo.ubicacion.lon
        vehiculo.ubicacion.lat = lat || vehiculo.ubicacion.lat
        vehiculo.ubicacionFinal.latF = latF || vehiculo.ubicacion.latF
        vehiculo.ubicacionFinal.lonF = lonF || vehiculo.ubicacion.lonF
        vehiculo.rendimiento.gas = gas || vehiculo.rendimiento.gas
        vehiculo.rendimiento.velocidad = velocidad || vehiculo.rendimiento.velocidad
        vehiculo.rendimiento.kilometraje = kilometraje || vehiculo.rendimiento.kilometraje

        res.json(vehiculo);
    } else {
        res.status(404).send('No se agrego el cambio a vehiculo')
    }

})


app.listen(port, () => {
    console.log(`Servidor corriendo en la url http://localhost:${port}`)
})