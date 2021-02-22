
var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWNvc2NvIiwiYSI6ImNrbDhqaGtlczBnZG4yb3J2azNnNzNpMHIifQ.nl1HB3is0YkTBjeWwCu2ZA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Ciutat de Iesso',
    subtitle: 'Un recorregut per la ciutat romana de la Segarra',
    //byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'Iesso1',
            alignment: 'left',
            hidden: false,
            title: 'Ciutat de Iesso, Guissona',
            image: 'http://museudeguissona.cat/wp-content/uploads/2017/02/parc-arqueologic-002.jpg',
            description: 'Lantiga ciutat romana de Iesso es troba sota de lentramat urbà de Guissona, a la Segarra. Fou mencionada pels autors clàssics Plini el Vell i Ptolemeu que situaren Iesso en el territori dels lacetans. Els ibers de la zona, inicialment, van oferir resistència a locupació romana, però lany 195 aC lexèrcit de Cató va conquerir el territori. Actualment Iesso sidentifica amb el jaciment arqueològic conservat a la vila de Guissona.',
            location: {
                center: [1.28987, 41.78719],
                zoom: 14.26,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]

        },{
            id: 'Iesso2',
            alignment: 'right',
            hidden: false,
            title: 'El parc arqueologic',
            image: 'http://museudeguissona.cat/wp-content/uploads/2017/01/MAPA-AUDIOGUIES.jpg',
            description: 'Lantiga ciutat romana de Iesso es troba sota de lentramat urbà de Guissona, a la Segarra. Fou mencionada pels autors clàssics Plini el Vell i Ptolemeu que situaren Iesso en el territori dels lacetans. Els ibers de la zona, inicialment, van oferir resistència a locupació romana, però lany 195 aC lexèrcit de Cató va conquerir el territori. Actualment Iesso sidentifica amb el jaciment arqueològic conservat a la vila de Guissona.',
            location: {
                    center: [1.28979, 41.78720],
                    //center: [1.28979, 41.78710],
                    zoom: 17.50,
                    pitch: 60.00,
                    bearing: -180.77
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'Iesso3',
            alignment: 'left',
            hidden: false,
            title: 'Entrada muralla i part nord',
            image: ' http://museudeguissona.cat/wp-content/uploads/2017/02/parc-arqueologic-003.jpg',
            description: 'Lantiga ciutat romana de Iesso es troba sota de lentramat urbà de Guissona, a la Segarra. Fou mencionada pels autors clàssics Plini el Vell i Ptolemeu que situaren Iesso en el territori dels lacetans. Els ibers de la zona, inicialment, van oferir resistència a locupació romana, però lany 195 aC lexèrcit de Cató va conquerir el territori. Actualment Iesso sidentifica amb el jaciment arqueològic conservat a la vila de Guissona.',
            location: {
                center: [1.28977, 41.78800],
                zoom: 19.67,
                pitch: 50.00,
                bearing: -180.77
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'Iesso4',
            alignment: 'left',
            hidden: false,
            title: 'Casa senyorial',
            image: 'http://museudeguissona.cat/wp-content/uploads/2017/02/parc-arqueologic-024.jpg',
            description: 'Lantiga ciutat romana de Iesso es troba sota de lentramat urbà de Guissona, a la Segarra. Fou mencionada pels autors clàssics Plini el Vell i Ptolemeu que situaren Iesso en el territori dels lacetans. Els ibers de la zona, inicialment, van oferir resistència a locupació romana, però lany 195 aC lexèrcit de Cató va conquerir el territori. Actualment Iesso sidentifica amb el jaciment arqueològic conservat a la vila de Guissona.',
            location: {
                center: [1.29075, 41.787589],
                zoom: 19.00,
                pitch: 50.00,
                bearing: -180.77
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'Iesso5',
            alignment: 'left',
            hidden: false,
            title: 'Les termes',
            image: 'http://museudeguissona.cat/wp-content/uploads/2017/02/parc-arqueologic-027.jpg',
            description: 'Lantiga ciutat romana de Iesso es troba sota de lentramat urbà de Guissona, a la Segarra. Fou mencionada pels autors clàssics Plini el Vell i Ptolemeu que situaren Iesso en el territori dels lacetans. Els ibers de la zona, inicialment, van oferir resistència a locupació romana, però lany 195 aC lexèrcit de Cató va conquerir el territori. Actualment Iesso sidentifica amb el jaciment arqueològic conservat a la vila de Guissona.',
            location: {
                center: [1.28959, 41.78729],
                zoom: 19.00,
                pitch: 50.00,
                bearing: -180.77
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }

    ]
};
