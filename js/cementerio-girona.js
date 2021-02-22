function addCementerioCapa() {

    map.addSource("cementerio_source", {
        "type": "vector",
        "url": "mapbox://styles/mcosco/cklbbizty2pts17k453nkbe4u"  // Nuestor ID Tileset

    }); //fin map source

    map.addLayer({
        "id": "cementerio",
        "type": "fill-extrusion",
        "source": "cementerio",
        "source-layer": "constru-cementerio-dqgg5b", // Nuestro nombre Tileset
        "maxzoom": 22,
        "minzoom": 17,
        "paint": {
            "fill-extrusion-color": [
                "interpolate", ["linear"], ["number", ["get", "extrusion"]],
                0, "#FFFFFF",
                3, "#6fa591",
                4, "#8AC973",
                5, "#9AE6CA",
                6, "#9E80A6",

            ],
            "fill-extrusion-height": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 0,
                12.5, 0,
                17, ["*", 1, ["to-number", ["get", "extrusion"]]],
                20, ["*", 1.5, ["to-number", ["get", "extrusion"]]],
                22, ["*", 2, ["to-number", ["get", "extrusion"]]]
            ],
            "fill-extrusion-opacity": 0.8
        }
    }
        //,"road-label"
    );

} //fin funcion
