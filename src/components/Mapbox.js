import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { proxyRequest } from "./Functions"
mapboxgl.accessToken = 'pk.eyJ1IjoibHVpc2ZscyIsImEiOiJjbDR0eHFrYXYwcDU1M2JxcWFzYmN1MGd0In0.a95eerbzZD5JNkVYiHcLmg';

const Mapbox = forwardRef((props, ref) => {
    console.log(props.mainInfo)

    



    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(props.mainInfo.longitude);
    const [lat, setLat] = useState(props.mainInfo.latitude);
    const [zoom, setZoom] = useState(10);
    const [layers, setLayers] = useState(props.map)

    console.log(props.projectDetails)
    //console.log(props.map)
    //console.log(layers)
    //console.log(props.mainInfo)
    if (props.map != layers) setLayers(props.map)

    
 
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        //console.log("build map")
        setLayers(props.map)               
    });

    useEffect(()=>{
        if (!map.current || layers == undefined) return;
        if (map.current.loaded())updateLayers()
        else map.current.on('load', () => {updateLayers()})
    }, [layers])


    const updateLayers = () => {
        //console.log(map.current.loaded())
        
        if (layers == undefined) return
        let layerss = layers.map.layers
        console.log(layerss) 
        //return
        for (let i = 0; i<layerss.length; i++){

            if (map.current.getSource(layerss[i].label) != undefined) continue
            map.current.addSource(layerss[i].label, {
                'type': 'geojson',
                'data': layerss[i].layer
            })
            
            map.current.addLayer({
                'id': 'layerid'+i,
                'type': layerss[i].type,
                'source': layerss[i].label,
                'paint': layerss[i].paint,
                'filter': ['==', '$type', 'Polygon']
            });
        }            
        
    }

    useImperativeHandle(ref, () => ({
        
        addLayer (mix_id) {
            
            let {auth_key, model, project_id, scenario_id} = props.projectDetails
            let layerUrl = `https://apidemo.swissai.com/api/v1/management/stage1_simulation/model/model_getMap?auth_key=${auth_key}&project_id=${project_id}&scenario_id=${scenario_id}&model=${model}&mix_id=${mix_id}`
            proxyRequest(layerUrl)
            .then(r=>{})
        },
    
        removeLayer (mix_id) {  
            console.log("remove layer")
        }
    }));

    // fazer uma legenda no mapa para manipular as layers

    return <div>
            <div ref={mapContainer} className="map-container" />
        </div>
})

export default Mapbox