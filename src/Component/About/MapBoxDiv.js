import React from 'react';
import mapboxgl from 'mapbox-gl';

import dotenv from 'dotenv'
import './MapBox.css'

dotenv.config()
mapboxgl.accessToken =process.env.REACT_APP_MapBoxenv
class MapBoxDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: 115.171006,
        lat: -8.335590,
        zoom: 12
        };
    }
    componentDidMount() {    
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        })
        map.on('load', () => {
            new mapboxgl.Marker().setLngLat([115.3233, -8.5366]).addTo(map)
         })
        map.on('move', () => {
        this.setState({
        lng: map.getCenter().lng.toFixed(6),
        lat: map.getCenter().lat.toFixed(6),
        zoom: map.getZoom().toFixed(2)
    });        
        }); 
         
    }
        render() {
        return (
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    <div className="mapboxc mt-5 mb-5">
                        <div className='sidebarStyle'>
                        <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                    </div>
                    <div className='mapContainer' ref={el => this.mapContainer = el}  />
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>
        )
            }
        }
export default MapBoxDiv
