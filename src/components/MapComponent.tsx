import React, { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const containerStyle = {
    height: "100vh",
    width: "100vw",
};

const tokyoStation = {
    lat: 35.681236,
    lng: 139.767125,
};

const MapComponent = () => {
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const handleMarkerClick = () => {
        setShowInfoWindow(true);
    };

    const handleCloseInfoWindow = () => {
        setShowInfoWindow(false);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyC8oW2KPcVBePKW4dKN23D6RMIXKBuI_ag">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={tokyoStation}
                zoom={17}
            >
                <MarkerF
                    position={tokyoStation}
                    label="東京駅"
                    onClick={handleMarkerClick}
                />

                {showInfoWindow && (
                    <InfoWindow
                        position={tokyoStation}
                        onCloseClick={handleCloseInfoWindow}
                        options={{ disableAutoPan: true }}
                    >
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6">東京駅のビデオ</Typography>
                            <iframe
                                width="200"
                                height="150"
                                src="https://www.youtube.com/embed/O0Tqm9ifxf0"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ marginTop: '16px' }}
                                onClick={handleCloseInfoWindow}
                            >
                                閉じる
                            </Button>
                        </Paper>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
