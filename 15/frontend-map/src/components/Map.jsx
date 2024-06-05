import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import useLocationStore from '../store/locationStore';
import 'mapbox-gl/dist/mapbox-gl.css';
2
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;


export const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [markerInicio, setMarkerInicio] = useState(null);
    const [markerFinal, setMarkerFinal] = useState(null);
    const [lng, setLng] = useState(-88.8965);
    const [lat, setLat] = useState(13.7942);
    const [zoom, setZoom] = useState(5);
    const [bounds, setBounds] = useState([lng, lat])

    const ubicationInicio = useLocationStore((state) => state.ubicacion);
    const ubicationFinal = useLocationStore((state) => state.ubicacionFinal);

    useEffect(() => {

        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false,
        });

        const markInicio = new mapboxgl.Marker()
            .setLngLat([-89.5566069, 13.9947753])
            .addTo(map.current);
        setMarkerInicio(markInicio);

        const markFinal = new mapboxgl.Marker()
            .setLngLat([-89.19143, 13.698965])
            .addTo(map.current);
        setMarkerFinal(markFinal);
    }, [zoom]);


    useEffect(() => {
        if (markerInicio && ubicationInicio.lat !== undefined && ubicationInicio.lon !== undefined) {
            const myLocationPopup = new mapboxgl.Popup()
                .setLngLat([ubicationInicio.lon, ubicationInicio.lat])
                .setHTML(`
              <h5>Inicio</>
              <h4>Longitud:</4>
              <p>${ubicationInicio.lon}</p>
              <h4>Latitud:</4>
              <p>${ubicationInicio.lat}</p>
            `)
            markerInicio.setLngLat([ubicationInicio.lon, ubicationInicio.lat]).setPopup(myLocationPopup);
            console.log('creo marker inicio', markerInicio);
        }
    }, [ubicationInicio, markerInicio]);

    useEffect(() => {
        if (markerFinal && ubicationFinal.lat !== undefined && ubicationFinal.lon !== undefined) {
            const myLocationPopup = new mapboxgl.Popup()
                .setLngLat([ubicationFinal.lon, ubicationFinal.lat])
                .setHTML(`
              <h5>Final</5>
              <h4>Longitud:</4>
              <p>${ubicationFinal.lon}</p>
              <h4>Latitud:</4>
              <p>${ubicationFinal.lat}</p>
            `)
            markerFinal.setLngLat([ubicationFinal.lon, ubicationFinal.lat]).setPopup(myLocationPopup);
            console.log('creo marker final', markerFinal);
        }
    }, [ubicationFinal, markerFinal]);


    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container .mapbox-improve-map .Mapbox .OpenStreetMap .mapboxgl-ctrl .mapboxgl-ctrl-attrib" />
        </div>
    );
};
