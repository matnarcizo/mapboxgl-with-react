import React, { Component } from 'react';
import pin from './pin_green.svg';
import './App.css';
import mapboxgl from 'mapbox-gl'
// import Marker from './Marker.js'
// import style from './mininav8.json'
import style from './map-dark-theme.json'
import 'mapbox-gl/dist/mapbox-gl.css'
// import style from './map-style.json'

const MAPBOX_KEY = 'pk.eyJ1IjoibWF0bmFyY2l6byIsImEiOiJjajQ0ZGoyNDAwMHh4MzJtc3BzNHc0bjlmIn0.gJT2bolJ5tlVUyyGG9bc6g'

class App extends Component {
  constructor() {
    super()

    this.map = null

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    mapboxgl.accessToken = MAPBOX_KEY

    this.map = new mapboxgl.Map({
      container: 'map',
      style: style,
      // center: [-46.625290, -23.533773],
      center: [-46.7521589, -23.5149872],
      zoom: 13,
      maxZoom: 20
    })

    this.map.on('load', () => {
      let pino = document.createElement('img')
      pino.src = pin
      pino.width = 19
      pino.height = 26

      console.log(pino)

      this.map.addImage('pino', pino, {width: 19, height: 26})
      console.log(this.map)
      this.map.addLayer({
          "id": "polyline",
          "type": "line",
          "source": {
              "type": "geojson",
              "data": {
                  "type": "Feature",
                  "properties": {
                    "description": "<strong>EITA</strong>"
                  },
                  "geometry": {
                      "type": "LineString",
                      "coordinates": [
                        [-46.7521589, -23.5149872],
                        [-46.6901605, -23.5750533],
                        [-46.5790683, -23.5902685],
                        [-46.6466657, -23.576324],
                      ]
                  }
              }
          },
          "layout": {
              "line-join": "round",
              "line-cap": "round"
          },
          "paint": {
              "line-color": "#757575",
              "line-width": 3,
              "line-opacity": 0.8
          }
      });

      // this.map.addLayer({
      //   "id": "points",
      //   "type": "symbol",
      //   "source": {
      //     "type": "geojson",
      //       "data": {
      //         "type": "FeatureCollection",
      //         "features": [{
      //           "type": "Feature",
      //           "geometry": {
      //             "type": "Point",
      //             "coordinates": [-46.6466657, -23.576324]
      //           },
      //           "properties": {
      //             "title": "Mapbox DC",
      //             // "icon": "pin"
      //           }
      //         },
      //         {
      //           "type": "Feature",
      //           "geometry": {
      //               "type": "Point",
      //               "coordinates": [-46.7521589, -23.5149872]
      //           },
      //           "properties": {
      //               "title": "Mapbox SF",
      //               // "icon": "pin"
      //           }
      //         }]
      //       }
      //     },
      //   "layout": {
      //     "icon-image": "pino",
      //     "icon-size": 0.25,
      //     "text-field": "{title}",
      //     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      //     "text-offset": [0, 0.6],
      //     "text-anchor": "top"
      //   }
      // });


      // this.map.addLayer({
      //   "id": "points",
      //   "type": "circle",
      //   "source": {
      //     "type": "geojson",
      //       "data": {
      //         "type": "FeatureCollection",
      //         "features": [{
      //           "type": "Feature",
      //           "geometry": {
      //             "type": "Point",
      //             "coordinates": [-46.6466657, -23.576324]
      //           },
      //           "properties": {
      //             "title": "Mapbox DC",
      //             // "icon": "pin"
      //           }
      //         },
      //         {
      //           "type": "Feature",
      //           "geometry": {
      //               "type": "Point",
      //               "coordinates": [-46.7521589, -23.5149872]
      //           },
      //           "properties": {
      //               "title": "Mapbox SF",
      //               // "icon": "pin"
      //           }
      //         }]
      //       }
      //     },
      //     "paint": {
      //       "circle-radius": 20,
      //       "circle-color": "#B42222"
      //     }
      // });



      // const elements = []
      //
      let popup = null
      let el = document.createElement('div');
      // el.className = 'marker';
      el.style.background = 'url(' + pin + ') no-repeat';
      el.style.width = '19px'
      el.style.height = '26px'
      el.style.position = 'fixed'

      const m = new mapboxgl.Marker(el, {offset: [-(19 / 2), -26]})
      	.setLngLat([-46.7521589, -23.5149872])
      	.addTo(this.map)

      el.addEventListener('mouseenter', () => {
        el.style.cursor = 'pointer'

        popup = new mapboxgl.Popup({closeButton: false, anchor: 'bottom', offset: [0, -26]})
        .setHTML('<p>MININA</p>')
        .setLngLat([m.getLngLat().lng, m.getLngLat().lat])
        .addTo(this.map)
        console.log('minina')
        console.log(m.getLngLat())

      })

      el.addEventListener('mouseleave', () => {
        el.style.cursor = ''

        popup.remove()
        popup = null
      })
      //
      // elements.push(m)
      //
      let el2 = document.createElement('div');
      el2.className = 'marker2';
      el2.style.background = 'url(' + pin + ') no-repeat';
      el2.style.width = '19px'
      el2.style.height = '26px'


      const m2 = new mapboxgl.Marker(el2, {offset: [-(19 / 2), -26]})
      	.setLngLat([-46.6901605, -23.5750533])
      	.addTo(this.map);
      //
      // elements.push(m2)
      //
      let el3 = document.createElement('div');
      el3.className = 'marker3';
      el3.style.background = 'url(' + pin + ') no-repeat';
      el3.style.width = '19px'
      el3.style.height = '26px'

      const m3 = new mapboxgl.Marker(el3, {offset: [-(19 / 2), -26]})
      	.setLngLat([-46.5790683, -23.5902685])
      	.addTo(this.map);
      //
      // elements.push(m3)
      //
      let el4 = document.createElement('div');
      el4.className = 'marker4';
      el4.style.background = 'url(' + pin + ') no-repeat';
      el4.style.width = '19px'
      el4.style.height = '26px'

      const m4 = new mapboxgl.Marker(el4, {offset: [-(19 / 2), -26]})
      	.setLngLat([-46.6466657, -23.576324])
      	.addTo(this.map);
      //
      // elements.push(m4)
      //
      // console.log(elements)
      // let marker = new mapboxgl.Marker().setLngLat([-46.6466657, -23.576324]).addTo(this.map)

      // this.setState({ loaded: true })

      this.map.on('mouseenter', 'polyline', () => {
        this.map.getCanvas().style.cursor = 'pointer'

        this.map.setPaintProperty('polyline', 'line-color', '#75A21C')
        this.map.setPaintProperty('polyline', 'line-width', 10)
      })
      this.map.on('mouseleave', 'polyline', () => {
        this.map.getCanvas().style.cursor = ''

        this.map.setPaintProperty('polyline', 'line-color', '#F00')
        this.map.setPaintProperty('polyline', 'line-width', 5)
      })

    })// let marker = new mapboxgl.Marker().setLngLat().addTo(map)

  }

  render() {
    return (
      <span>
        <div className="App" id="map"></div>
      </span>
    );
  }
}

export default App;
