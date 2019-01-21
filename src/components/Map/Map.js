import React from "react";
import "./Map.css";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLocations: [
        {
          name: "Areoporto di Bari / Bari Airport",
          title: "Areoporto di Bari",
          position: { lat: 41.137799, lng: 16.765148 },
          description: "L'areoporto più vicino.",
          englishdescription: "Bari airport is the closest airport to Foggia.",
          image: "/images/Mapimages/maps_bari.jpg",
          icon: "/images/Mapicons/yellow-dot.png"
        },
        {
          name: "Centro storico / City center",
          title: "Centro storico",
          position: { lat: 41.463693, lng: 15.543502 },
          description:
            "Nel centro della città, sorge la cattedrale duecentesca, intorno a cui si concentra la movida. Da qui si parte alla scoperta di eleganti architetture, come la Chiesa di San Tommaso, la più antica, Palazzo Belvedere, Teatro Giordano e la Villa Comunale.",
          englishdescription:
            "This is the heart of Foggia. Additionally to the many bars and restaurants, some of the highlights of the city center are the Cathedral, Chiesa di San Tommaso (the oldest church of the city), Palazzo Belvedere, Teatro Giordano and the Villa Comunale.",
          image: "/images/Mapimages/cattedrale.jpg",
          icon: "/images/Mapicons/blue-dot.png"
        },
        {
          name: "Via Arpi",
          title: "Via Arpi",
          position: { lat: 41.46522, lng: 15.545183 },
          description:
            "È via Arpi il cuore storico della città. Sulla caratteristica strada, un tempo si affacciava il palazzo imperiale di Federico II, di cui rimangono un arco e la fontana, dove oggi sorge Palazzo Arpi, sede del Museo Civico.",
          englishdescription:
            "Via Arpi is one of the historic streets of Foggia. The imperial palace of the Holy Roman Emperor Fredrick II used to overlook this pebble street. Only one arch and a fountain of his palace remain on this street, right next to the Civic Museum where some other artifacts are exhibited.",
          image: "/images/Mapimages/Tre archi.jpg",
          icon: "/images/Mapicons/blue-dot.png"
        },
        {
          name: "Stazione dei treni / Train station",
          title: "Stazione di Foggia",
          position: { lat: 41.465685, lng: 15.554431 },
          description:
            "La stazione dei treni di Foggia. Gli autobus dall'areoporto di Bari vi porteranno qui.",
          englishdescription:
            "Foggia train station. The bus from Bari Airport will take you here.",
          image: "/images/Mapimages/stazione.jpg",
          icon: "/images/Mapicons/yellow-dot.png"
        },
        {
          name: "Vieste",
          title: "Vieste",
          position: { lat: 41.881745, lng: 16.18063 },
          description:
            "La perla del Gargano. Se volete trascorrere una giornata al mare, Vieste sarebbe sicuramente in cima alla lista delle destinazioni consigliate. Fate un giro nella città vecchia.",
          englishdescription:
            "If you are looking for a day trip at the beach, you can go to Vieste. The city center with its lovely pebble streets is also highly recommended.",
          image: "/images/Mapimages/Vieste.jpg",
          icon: "/images/Mapicons/green-dot.png"
        },
        {
          name: "Castel del Monte",
          title: "Castel del Monte",
          position: { lat: 41.084613, lng: 16.271145 },
          description:
            "Una fortezza del XIII secolo fatta costruire dall'imperatore Federico II nell'altopiano delle Murge. È stato nominato patrimonio dell'umanità dell'UNESCO ed è rappresentato sulla moneta da un centesimo di euro.",
          englishdescription:
            "A 13th-century citadel and castle situated on a hill in Andria. It was build by Emperor Frederick II. It is protected as a World Heritage Site and it appears on the Italian version of the one cent euro coin.",
          image: "/images/Mapimages/castel del monte.jpg",
          icon: "/images/Mapicons/green-dot.png"
        },
        {
          name: "Sassi di Matera",
          title: "Sassi di Matera",
          position: { lat: 40.665934, lng: 16.611521 },
          description:
            "Una piccola città scavata nella roccia che per secoli ha ospitato il popolo materano, il quale ha adattato gli aspri fianchi di uno sperone roccioso per ricavarne un labirinto di grotte e vicoli.",
          englishdescription:
            "One of the most unique landscapes in Europe. The city center of Matera is flanked by the hillside Sassi, a peasant neighborhood that boasts an incredible assemblage of cave houses. They are considered the longest-occupied cave dwellings in the Earth’s history, inhabited since prehistoric times right up until today.",
          image: "/images/Mapimages/matera.jpg",
          icon: "/images/Mapicons/green-dot.png"
        },
        {
          name: "Basilica di Santa Maria Maggiore, Manfredonia",
          title: "Manfredonia",
          position: { lat: 41.608403, lng: 15.889355 },
          description:
            "Una delle chiese più fotogeniche del Gargano. La sua particolarità consiste nella struttura in rete metallica a cura dell'artista Edoardo Tresoldi, che ricostruisce in 3D parte dell'antica basilica esattamente sopra i suoi resti. ",
          englishdescription:
            "One of the most unique churches in Gargano. After the remains of part of this church were discovered, the artist Edoardo Tresoldi created a 'ghost church' using a metallic structure. This structure represents a replica of the destroyed church, right above its remains.",
          image: "/images/Mapimages/Manfredonia.jpg",
          icon: "/images/Mapicons/green-dot.png"
        },
        {
          name: "Lucera",
          title: "Lucera",
          position: { lat: 41.508554, lng: 15.344996 },
          description:
            "Sorge a 240 metri sul livello del mare, su un’ampia collina che domina il vasto Tavoliere delle Puglie e vanta origini antichissime, tanto che ne parla anche lo storico greco Polibio e dopo di lui Cicerone, Cesare, Livio. Da non perdere l'Anfiteatro romano e il Castello di Lucera.",
          englishdescription:
            "Lucera is a treasure trove of art and culture, located on three hills from which it overlooks the Tavoliere tableland, a land full of vineyards, 18 km away from Foggia. Highlights are the Roman Amphitheatre and the Castle of Lucera.",
          image: "/images/Mapimages/Castello-Lucera.jpg",
          icon: "/images/Mapicons/green-dot.png"
        }
      ]
    };
  }

  //lifecycle event to call the render map function
  componentDidMount() {
    this.loadMap();
  }
  //load the script
  loadMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCNn_ezyRyN-r88ZLhixrorglnHwu1ATng&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.451774, lng: 15.616402 },
      zoom: 7
    });

    //initializing the info wondow
    const infowindow = new window.google.maps.InfoWindow();

    this.state.mapLocations.forEach(location => {
      //getting the content of the info window from within the loop
      const contentString = `<div class="container">
      <h2>${location.name}</h2>

      <p><img src="${location.image}" />${location.description}
      <br /><em>${location.englishdescription}</em></p>
      `;

      const marker = new window.google.maps.Marker({
        position: { lat: location.position.lat, lng: location.position.lng },
        map: map,
        title: location.title,
        icon: location.icon
      });

      marker.addListener("click", function() {
        infowindow.setContent(contentString);
        //linking the marker and the info window with a click event
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

//Creating the script to access Google Maps API
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Map;
