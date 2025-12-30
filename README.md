# Wispr Clone – Voice to Text Desktop Application

This project is a simple voice-to-text desktop application built as part of a technical assignment.  
The purpose of this project is to demonstrate the core workflow of a desktop voice input application using modern tools like Tauri and Deepgram.

The application allows users to record audio from their system microphone and convert spoken words into text using speech recognition.

---

## Project Overview

Wispr Clone is a cross-platform desktop application that captures microphone audio and converts it into text using the Deepgram Speech-to-Text API.

The main focus of this project is:
- Functionality
- Clean architecture
- Proper integration of audio recording and transcription

UI design is intentionally kept simple to prioritize workflow and reliability.

---

## Tech Stack

- Tauri (Desktop application framework)
- React + TypeScript (Frontend)
- Vite (Development and build tool)
- Deepgram API (Speech-to-text transcription)
- Web Audio API / MediaRecorder (Audio capture)

---

## Core Features

- Push-to-talk voice recording
- Microphone permission handling
- Audio capture from system microphone
- Speech-to-text transcription using Deepgram
- Display of transcribed text
- Start and stop recording controls
- Basic error handling

---

## Application Flow

1. User clicks **Start Recording**
2. Microphone access is requested
3. Audio is recorded while the user speaks
4. User clicks **Stop Recording**
5. Audio is sent to Deepgram API
6. Transcribed text is displayed in the text area

---

## Real-Time Note

In this implementation, transcription happens after the recording is stopped.  
This approach ensures stability and clarity while demonstrating the complete voice-to-text workflow.

The project structure allows future extension to real-time streaming transcription if required.

---

## Project Structure

src/
├── services/
│ ├── audio.ts # Handles microphone recording
│ └── deepgram.ts # Handles transcription API calls
├── App.tsx # Main UI and logic
└── App.css # Basic styling

src-tauri/
└── Tauri configuration files

---

## Installation and Setup

### Prerequisites
- Node.js (v18 or higher)
- Rust (required for Tauri)
- Deepgram API key

### Install Dependencies

Clone the repository:
git clone https://github.com/Ashi-55/wispr-clone.git
cd wispr-clone

Install dependencies:
npm install

Create environment file:
.env.local

Add your Deepgram API key:
VITE_DEEPGRAM_API_KEY=your_api_key_here

Run the application:
npm run tauri dev

---

## Known Limitations

- Transcription is near real-time (after recording stops)
- Basic UI without advanced styling
- Limited audio format handling

These limitations were accepted to keep the implementation focused on core requirements.

---

## Future Improvements

- Real-time streaming transcription
- Keyboard push-to-talk support
- Improved UI and feedback
- Better error handling
- Text insertion into other applications

---

## Assignment Notes

This project was built to demonstrate:
- Desktop application development using Tauri
- Audio capture and AI integration
- Clean and maintainable code
- Practical problem-solving approach

The focus is on working functionality rather than visual design.

---

## Author

Ashiq MI

Built as part of a technical assignment for internship evaluation.
