import { useState } from "react";
import { startRecording, stopRecording } from "./services/audio";
import { transcribeAudio } from "./services/deepgram";
import "./App.css";
console.log("KEY CHECK:", import.meta.env.VITE_DEEPGRAM_API_KEY);


function App() {
  const [status, setStatus] = useState("Idle");
  const [text, setText] = useState("");

  const handleStart = async () => {
    setText("");
    setStatus("Recording...");
    await startRecording();
  };

  const handleStop = async () => {
    setStatus("Transcribing...");
    const audioBlob = await stopRecording();

    try {
      const transcript = await transcribeAudio(audioBlob);
      setText(transcript || "No speech detected");
      setStatus("Done");
    } catch (err) {
      setStatus("Error");
      setText("Transcription failed");
      console.error(err);
    }
  };

  return (
  <div className="app">
    <div className="card">
      <h1>Wispr Clone</h1>

      <div className="controls">
        <button onClick={handleStart} className="primary">
          Start
        </button>
        <button onClick={handleStop} className="danger">
           Stop
        </button>
      </div>

      <p className="status">
        Status: <span>{status}</span>
      </p>

      <textarea
        value={text}
        readOnly
        placeholder="Your transcribed text will appear here..."
      />
    </div>
  </div>
);

}

export default App;
