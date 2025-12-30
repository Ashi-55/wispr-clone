let mediaRecorder: MediaRecorder;
let audioChunks: BlobPart[] = [];

export async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  mediaRecorder = new MediaRecorder(stream, {
    mimeType: "audio/webm"
  });

  audioChunks = [];

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.start();
}

export function stopRecording(): Promise<Blob> {
  return new Promise((resolve) => {
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      resolve(audioBlob);
    };

    mediaRecorder.stop();
  });
}
