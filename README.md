# 📍 Realtime Device Tracker

A realtime location tracking app built with Node.js, Express, Socket.io, and Leaflet.js. 
Multiple devices can be tracked simultaneously on an interactive map.

## 🚀 Features
- Realtime location tracking using GPS
- Multiple device support on a single map
- Auto-removes marker when user disconnects
- Interactive map powered by Leaflet.js
- WebSocket communication via Socket.io

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, Socket.io
- **Frontend:** HTML, CSS, Leaflet.js
- **Template Engine:** EJS

## 📦 Installation

```bash
git clone https://github.com/akhilesh5982/realtime-device-tracker.git
cd realtime-device-tracker
npm install
npm start
```

Open http://localhost:3000 in your browser and allow location access.

## 📱 Usage
- Open the app on multiple devices on the same network
- Each device will appear as a marker on the map
- Markers update in realtime as devices move
