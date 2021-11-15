function citySet(selectedCity) {
  return localStorage.setItem("city", selectedCity)
}

function initMap() {
  let city = localStorage.getItem("city")
  let locations;
  let map = new google.maps.Map(document.getElementById('map'));

  switch (city) {
    case "London":
      locations = [{
          label: "Coffee & Science",
          lat: 51.51130051843234,
          lng: -0.1264144301168318
        },
        {
          label: "Lecture",
          lat: 51.52558226631843,
          lng: -0.1221202043368674
        },
        {
          // laboratory
          label: "Laboratory open day",
          lat: 51.5249418889357,
          lng: -0.13250695188833084
        }
      ]
      break;
    case "Glasgow":
      locations = [{
          // laboratory
          label: "Laboratory open day",
          lat: 55.908466874609694,
          lng: -4.312559023261887
        },
        {
          // lecture theatre
          label: "Lecture",
          lat: 55.862924151045334,
          lng: -4.248479000542656
        },
      ]
      break;
    case "Dublin":
      locations = [{
          label: "Laboratory Open Day",
          lat: 53.39413320626776,
          lng: -6.359222602385262
        },
        {
          // cafe
          label: "Coffee & Science",
          lat: 53.35098396883487,
          lng: -6.253264302810794
        }
      ]
      break;
    default:
      locations = [{
          label: "Coffee & Science",
          lat: 51.51130051843234,
          lng: -0.1264144301168318
        },
        {
          label: "Lecture",
          lat: 51.52558226631843,
          lng: -0.1221202043368674
        },
        {
          // laboratory
          label: "Laboratory open day",
          lat: 51.5249418889357,
          lng: -0.13250695188833084
        },
        {
          // laboratory
          label: "Laboratory open day",
          lat: 55.908466874609694,
          lng: -4.312559023261887
        },
        {
          // lecture theatre
          label: "Lecture",
          lat: 55.862924151045334,
          lng: -4.248479000542656
        },
        {
          label: "Laboratory Open Day",
          lat: 53.39413320626776,
          lng: -6.359222602385262
        },
        {
          // cafe
          label: "Coffee & Science",
          lat: 53.35098396883487,
          lng: -6.253264302810794
        }
      ]
      return locations;
  }

  map.setCenter(new google.maps.LatLng(locations[0].lat, locations[0].lng));
  map.setZoom(8);

  var markers = locations.map(function (location) {
    return new google.maps.Marker({
      position: location,
      label: location.label
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}