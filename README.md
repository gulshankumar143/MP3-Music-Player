# MP3 Music Player

## Description

MP3 Music Player is a modern, React-based web application designed to deliver a seamless and enjoyable music listening experience directly in your browser. With a clean user interface and intuitive controls, users can easily play, pause, and navigate through their favorite MP3 tracks. Whether you're looking to curate custom playlists or just enjoy a few songs, this player provides all the essential features in a lightweight, responsive package.

## Features

- **Play, Pause, and Stop:** Easily control audio playback with dedicated buttons.
- **Track Navigation:** Move between tracks using next and previous controls.
- **Playlist Management:** Create and manage playlists to organize your music collection.
- **Progress Bar & Seeking:** Visual progress bar with the ability to seek within the track.
- **Volume Control:** Adjust the volume using a slider for the perfect listening level.
- **Responsive Design:** Works seamlessly on both desktop and mobile devices.
- **Track Information Display:** Shows current track name, duration, and playback progress.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Framework:** React (with functional components and hooks)
- **Audio Handling:** Uses the native HTML5 `<audio>` element for smooth playback
- **Styling:** CSS modules or styled-components for modular and maintainable styles

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gulshankumar143/MP3-Music-Player.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd MP3-Music-Player
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run locally on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Add Songs:** Drag and drop MP3 files into the player or use the upload button to add them to your playlist.
2. **Playback Controls:** Use the play, pause, next, previous, and stop buttons to control playback.
3. **Adjust Volume:** Move the volume slider to set your preferred volume.
4. **Track Info:** View current track details and progress.

## Folder Structure

```
MP3-Music-Player/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Player.js
│   │   ├── Playlist.js
│   │   └── TrackInfo.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── App.css
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements, new features, or bug fixes.

---

**Note:** Please ensure MP3 files are DRM-free and you have the rights to use them. This project is for educational and personal use.