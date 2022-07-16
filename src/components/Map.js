import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';

class Map extends Component {
  render() {
    const AnyReactComponent = ({ text }) => <div style={{color: 'red'}}>{text}</div>;

    const defaultProps = {
      center: {
        lat: 39.90761223438849,
        lng: 32.816293338639476
      },
      zoom: 16
    };

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDGc-7oXHI683D9IIxwa1GtJ60C8PeHLg8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={39.90761223438849}
            lng={32.816293338639476}
            text="3B PROTECTION - YUKSEL GÜVENLİK"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
