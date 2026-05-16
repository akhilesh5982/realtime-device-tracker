const socket = io();

let myMarker;

const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "OpenStreetMap contributors",
}).addTo(map);

const markers = {};

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      socket.emit("send-location", { latitude, longitude });

      if (myMarker) {
        myMarker.setLatLng([latitude, longitude]);
      } else {
        myMarker = L.marker([latitude, longitude], { title: "Me" }).addTo(map);
        map.setView([latitude, longitude], 15);
      }
    },
    (error) => {
      console.error("Geolocation error:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;

  if (id === socket.id) return;

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude], {
      title: `User ${id}`,
    }).addTo(map);
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});