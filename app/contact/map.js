'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [Map, setMap] = useState(null);

  useEffect(() => {
    import('react-leaflet').then(({ MapContainer, TileLayer, Marker, Popup }) => {
      setMap({ MapContainer, TileLayer, Marker, Popup });
    });
  }, []);

  if (!Map) {
    return (
      <div className="h-full w-full bg-[#1C2526] flex items-center justify-center">
        <div className="text-[#F4E1B9]">Loading map...</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = Map;

  return (
    <MapContainer
      center={[-7.2575, 112.7521]} // Koordinat Surabaya
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      className="z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-7.2575, 112.7521]}>
        <Popup>
          Duta Budaya Jawa Timur <br /> Jl. Veteran No. 123, Surabaya
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default dynamic(() => Promise.resolve(MapComponent), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#1C2526] flex items-center justify-center">
      <div className="text-[#F4E1B9]">Loading map...</div>
    </div>
  ),
}); 