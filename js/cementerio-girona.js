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
                3, "#F0F8FF",
                4, "#DEB887",
                5, "#BDB76B",
                6, "#DAA520",
            ],
        }
    }
        //,"road-label"
    );

} //fin funcion
