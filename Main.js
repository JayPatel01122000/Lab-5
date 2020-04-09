function initMap() {

    let Theatre = [
        ["Cineplex", 44.413295, -79.6816842, 1],
        ["Five point Theatre", 44.3891111, -79.6924577, 2]
    ];

    let div = document.querySelector("div");

    //create new map object
    let map = new google.maps.Map(div, {
        zoom: 10,

        center: {
            lat: 44.3591179,
            lng: -79.7357625
        },
        styles: [{
                elementType: "geometry",
                stylers: [{
                    color: "#242f3e"
                }]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#242f3e"
                }]
            },
            {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#746855"
                }]
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#d59563"
                }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    color: "#38414e"
                }]
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#212a37"
                }]
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#9ca5b3"
                }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: "#746855"
                }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#1f2835"
                }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#f3d19c"
                }]
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#2f3948"
                }]
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#d59563"
                }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#17263c"
                }]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#515c6d"
                }]
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#17263c"
                }]
            }
        ]
    });

    //create a new marker object
    for (let i = 0; i < Theatre.length; i++) {
        let mark = Theatre[i];
        let marker = new google.maps.Marker({
            position: {
                lat: mark[1],
                lng: mark[2]
            },
            map: map,
            title: mark[0],
            animation: google.maps.Animation.BOUNCE
        });
    }
}
