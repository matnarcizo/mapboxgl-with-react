import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

import pin from './logo.svg'

class Marker extends Component {
  constructor() {
    super()

    console.log('constructor')
    console.log(this.props)
  }

  ComponentWillMount(){
    console.log('ComponentWillMount')
  }

  buildMarker(map) {
    console.log('buildMarker')
    this.props.map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-46.7486972, -23.5050131]
            },
            "properties": {
              "title": "Mapbox DC",
              "icon": "monument"
            }
          }]
        }
      },
      "layout": {
        "icon-image": pin
      }
    })
  }

  render() {

    return (
        {
          this.props.map ?
          this.buildMarker(this.props.map)
          :
          null
        }
      </div>
    )
  }
}

export default Marker
