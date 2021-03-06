import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import { MAPBOX_STYLE, MapboxAccessToken } from 'constants/MapboxConstants';

const Map = ReactMapboxGl({
  accessToken: MapboxAccessToken,
});

class AddCrossingMap extends Component {
  onStyleLoad = map => {
    map.resize();
  };

  render() {
    const { lat, lng, crossingMoved } = this.props;
    return (
      <Map
        className="CrossingStaticMap"
        // eslint-disable-next-line
        style={MAPBOX_STYLE}
        center={[lng, lat]}
        onStyleLoad={this.onStyleLoad}
      >
        <Layer
          type="symbol"
          id="newCrossing"
          layout={{
            'icon-image': 'marker-open-small',
            'icon-allow-overlap': true,
          }}
        >
          <Feature
            coordinates={[lng, lat]}
            draggable={true}
            onDragEnd={crossingMoved}
          />
        </Layer>
      </Map>
    );
  }
}

export default AddCrossingMap;
