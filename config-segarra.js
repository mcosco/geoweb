
var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWNvc2NvIiwiYSI6ImNrbDhqaGtlczBnZG4yb3J2azNnNzNpMHIifQ.nl1HB3is0YkTBjeWwCu2ZA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'La Segarra, terra de castells',
    subtitle: 'Un recorregut per tots els castells de la comarca lleidatana La Segarra',
    //byline: 'M2B ',
    footer: 'Source: Turisme la Segarra',
    chapters: [
        {
            id: 'Segarra1',
            alignment: 'left',
            hidden: false,
            title: 'La Segarra',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Localitzaci%C3%B3_de_la_Segarra.svg/1200px-Localitzaci%C3%B3_de_la_Segarra.svg.png',
            description: "La comarca de La Segarra és anomenada terra de castells pel gran nombre de fortificacions que s'hi aixequen. Els segles XI-XII en aquest indret, travessat per la vall del riu Sió, s'hi dibuixava la frontera entre els comptats catalans cristians i l'Al-Àndalus àrab. Aquest fet convertia aquesta zona en un espai insegur amb fortes necessitats defensives.",
            location: {
                center: [1.26667, 41.70530],
                zoom: 11.54,
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
            id: 'Segarra2',
            alignment: 'right',
            hidden: false,
            title: 'Montfalcó Murallat',
            image: 'https://pbs.twimg.com/media/EB1mTHKXYAIThYv?format=jpg&name=900x900',
            description: "El nucli de Montfalcó Murallat es troba situat al municipi de les Oluges, a la comarca de la Segarra (la Plana), enlairat al capdamunt d’un turó. Aquest llogaret és el millor exemple de vila closa medieval que hi ha a Catalunya. Conserva en bon estat el mur perimetral amb les cases adossades a l'interior i sense cap edificació fora dels seus murs. Les muralles de pedra serigeixen damunt del turó. Una proposta històrica per no deixar-se perdre!",
            location: {
                    center: [1.33972, 41.68863],
                    zoom: 16.70,
                    pitch: 70.00,
                    bearing: -60.77
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
            id: 'Segarra3',
            alignment: 'left',
            hidden: false,
            title: 'Castell de Malgrat',
            image: 'https://www.viladetora.net/images/fotos/original/1310636552.jpg',
            description: "El Castell de Malgrat és un edifici del petit nucli de Malgrat, o Malgrat de Segarra, declarat bé cultural d'interès nacional. Malgrat, entitat de població de Cervera, se situa al nordest de Cervera, a la riba dreta del Sió. L'edifici actual és un gran casalot molt reformat que salça en la paret més enlairada del llogaret.",
            location: {
                center: [1.30127, 41.70963],
                zoom: 16.70,
                pitch: 50.00,
                bearing: -60.77
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
            id: 'Segarra4',
            alignment: 'right',
            hidden: false,
            title: 'Castell de montcortès',
            image: 'https://www.somsegarra.cat/images/fotos/gran/1464344932.jpg',
            description: "El castell de Montcortès és un castell de Montcortès de Segarra, al municipi dels Plans de Sió, a la Segarra. És un monument històric declarat bé cultural d'interès nacional. Està situat aïlladament a la part més alta del nucli, sobre una gran cinglera i davant una petita capella, a la part baixa del qual es troben les cases que posteriorment conformaren el poble.",
            location: {
                center: [1.22994, 41.70642],
                zoom: 17.30,
                pitch: 70.00,
                bearing: -60.77
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
            id: 'Segarra5',
            alignment: 'left',
            hidden: false,
            title: 'Castell de ratera',
            image: 'https://www.catalunyamedieval.es/wp-content/gallery/castell-de-ratera/castell-de-ratera-051016_02.jpg',
            description: "El Castell de Ratera, també conegut com a Castell Molí de Ratera, és un molí fariner, antic castell, situat a Ratera, al municipi dels Plans de Sió, a la Segarra. És un monument declarat bé cultural dinterès nacional",
            location: {
                center: [1.22432, 41.75047],
                zoom: 17.70,
                pitch: 50.00,
                bearing: -60.77
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
            id: 'Segarra6',
            alignment: 'right',
            hidden: false,
            title: 'Castell de florejacs',
            image: 'https://www.somsegarra.cat/images/fotos/original/1471628669.jpg',
            description: "A 10 km per carretera a l'oest de Guissona, salça sobre un petit turó, el poble de Florejacs, antic cap de municipi que va ser unit en època moderna al de Torrefeta. La silueta del poble, emmarcada per la torre del castell i pel campanar de l'església, destacant contra el cel sobre un típic paisatge segarrenc, constitueix una de les perspectives més fascinadores de la comarca. Malgrat trobar-se pròxima a la transitada carretera que parteix de l'N-II, prop de Cervera en direcció Ponts/Andorra, la localitat és un oasi de pau, ja que el seu accés és mitjançant una petita carretera duns 4 km, pròxim al poble de Palou, que mor en arribar a Florejacs. Històricament, el castell de Florejacs, juntament amb el veí Castell de les Sitges, va formar part de la línia fronterera entre el món àrab i el món cristià a lèpoca de la Reconquesta i el repoblament de les terres de la zona.",
            location: {
                center: [1.21395, 41.80067],
                zoom: 17.59,
                pitch: 65.00,
                bearing: -60.77
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
            id: 'Segarra7',
            alignment: 'left',
            hidden: false,
            title: 'Castell de les Sitges',
            image: 'http://bookings.inerea.com/imager.php?id_media=104238&max=300&default=http://www.castellsdelleida.com/wp-content/uploads/2012/05/generic_cll.jpg',
            description: "Aquesta petita fortalesa residencial de planta rectangular, antigament coneguda com castrum des Ciges, data del segle XI, quan Arnau Mir de Tost va desplegar el poder defensiu del seu senyor, el comte Ermengol d’Urgell. Gràcies a la seva situació estratègica, es va convertir en protagonista durant les lluites cristianes i l’avanç cap a les terres de la Hispània musulmana.",
            location: {
                center: [1.22803, 41.81604],
                zoom: 17.99,
                pitch: 70.00,
                bearing: -60.77
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
            id: 'Segarra8',
            alignment: 'right',
            hidden: false,
            title: "Portal de l'Àngel",
            image: 'http://1.bp.blogspot.com/-axJheN1fvEg/TZ-UWvg6w8I/AAAAAAAAAEQ/sEVylXvf0Vc/s1600/guissona-lleida.jpg',
            description: "Dels tres portals que tenia la vila de Guissona en època medieval només nha quedat un, el conegut com a Portal de l'Àngel, a propòsit de l'estàtua moderna dun àngel que domina la façana de la plaça. Tota la part superior daquesta façana, amb els merlets i el matacà, és una recreació del segle XX. La part autèntica és el portal pròpiament dit, que sobre amb un arc de mig punt a la part exterior i un arc ogival a la interior.",
            location: {
                center: [1.28858, 41.78658],
                zoom: 18.77,
                pitch: 45.00,
                bearing: 100.77
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
            id: 'Segarra9',
            alignment: 'left',
            hidden: false,
            title: 'Torre de Vallforosa',
            image: 'https://viajes.chavetas.es/wp-content/uploads/2018/03/destacadotorrevallferosa.jpg',
            description: "La torre de Vallferosa és una torre de guaita que es troba al lloc de Vallferosa, pertanyent l'actual municipi de Torà, a la comarca de la Segarra. És un monument declarat bé cultural d'interès nacional. Fou construïda vers l'any 970 dC seguint lestratègia militar de bastir torres de vigilància en els punts clau conquerits als sarraïns. Lobjectiu era construir una línia de fortificacions connectades entre si visualment. Cap a l'any 1000 dC es construí una altra torre circular envoltant l'antiga a partir de tapieres per reforçar-la. A la part superior encara manté els merlets. És considerada un dels millors exemples de larquitectura militar europea del segle x i ha sobreviscut sense haver estat modificada des de la seva construcció. L'antiguitat, les dimensions i les característiques en fan una construcció única.",
            location: {
                center: [1.44546, 41.86160],
                zoom: 17.37,
                pitch: 70.00,
                bearing: -60.77
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
            id: 'Segarra10',
            alignment: 'center',
            hidden: false,
            title: 'La segarra',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Localitzaci%C3%B3_de_la_Segarra.svg/1200px-Localitzaci%C3%B3_de_la_Segarra.svg.png',
           // description: '<a "href=https://www.google.com/"> Per més informació',
           description: "Una terra plena d'història, vine i viu-la!" ,
            location: {
                center: [1.26667, 41.70530],
                zoom: 11.54,
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

        }

    ]
};
