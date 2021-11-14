// Map rendering


function initMap() {
    let city = localStorage.getItem("city")
    console.log(`city is ${city}`)
      let locations;
      let map = new google.maps.Map(document.getElementById('map'));
  
    let labels = ["Coffee & Science", "Lecture", "Laboratory open day"];
  
    switch (city) {
      case "London":
        locations = [{
            // cafe
            lat: 51.51130051843234,
            lng: -0.1264144301168318
          },
          {
            // lecture theatre
            lat: 51.52558226631843,
            lng: -0.1221202043368674
          },
          {
            // laboratory
            lat: 51.5249418889357,
            lng: -0.13250695188833084
          }
        ]
        break;
      case "Glasgow":
        locations = [{
            // laboratory
            lat: 55.908466874609694,
            lng: -4.312559023261887
          },
          {
            // lecture theatre
            lat: 55.862924151045334,
            lng: -4.248479000542656
          },
          {
            // cafe
            lat: 55.86002126619214,
            lng: -4.2458190578958455
          }
        ]
        break;
      case "Dublin":
        locations = [{
            // laboratory
            lat: 53.39413320626776,
            lng: -6.359222602385262
          },
          {
            // lecture theatre
            lat: 53.340531197993975,
            lng: -6.2554085149386625
          },
          {
            // cafe
            lat: 53.35098396883487,
            lng: -6.253264302810794
          }
        ]
      default:
        locations = [{
          // laboratory
            lat: 53.47751370244217,
            lng: -2.2425273858918637
          },
          {
            // cafe
            lat: 53.47888679239712,
            lng: -2.240825804926832
          },
          {
            // lecture theatre
            lat: 53.46906321037111,
            lng: -2.2349451436387806
          }
        ]
        return locations;
    }
    console.log(locations)
  
    map.setCenter(new google.maps.LatLng(locations[0].lat, locations[0].lng));
    map.setZoom(8);
  
    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
  });
  
  var markerCluster = new MarkerClusterer(map, markers, {
  imagePath:
  "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
  }
  