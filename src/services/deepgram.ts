export async function transcribeAudio(blob: Blob): Promise<string> {
  const apiKey = import.meta.env.VITE_DEEPGRAM_API_KEY;

  if (!apiKey) {
    throw new Error("Deepgram API key missing");
  }

  const arrayBuffer = await blob.arrayBuffer();

  const response = await fetch(
    "https://api.deepgram.com/v1/listen?model=nova-2&smart_format=true",
    {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "audio/webm",
      },
      body: arrayBuffer,
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text);
  }

  const data = await response.json();

  return (
    data.results?.channels?.[0]?.alternatives?.[0]?.transcript || ""
  );
}
