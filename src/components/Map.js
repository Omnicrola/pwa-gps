import * as React from "react";
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";
import MapboxGl from 'mapbox-gl';

const Mapbox = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoib21uaWNyb2xhIiwiYSI6ImNqdWRndjhnOTB6NGs0NHJ2amp2amtrNmIifQ.XtgzL2OpZdveqq2DHsInRg"
});

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.onStyleLoad = this.onStyleLoad.bind(this);
        this.state = {};
    }

    onStyleLoad(map) {
        map.addControl(new MapboxGl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    }

    render() {
        return (<div className="mapboxgl-canvas-container">
            <Mapbox
                style="mapbox://styles/mapbox/streets-v9"
                center={[-83.641777, 42.2425949]}
                onStyleLoad={this.onStyleLoad}
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }}>
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{"icon-image": "marker-15"}}>
                    <Feature coordinates={[42.2425949, -83.641777]}/>
                </Layer>
            </Mapbox>
        </div>);
    }
}