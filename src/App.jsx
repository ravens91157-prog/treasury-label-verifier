import { useState } from "react";
import Tesseract from "tesseract.js";

function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const analyzeLabel = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    setLoading(true);

    const result = await Tesseract.recognize(
      file,
      "eng"
    );

  const extractedText = result.data.text;

setText(extractedText);

const checks = [
  {
   const upperText = text.toUpperCase();

const hasGovernmentWarning =
  upperText.includes("GOVERNMENT WARNING") ||
  upperText.includes("SURGEON GENERAL");

const hasAlcoholContent =
  upperText.includes("ALC") ||
  upperText.includes("BY VOL") ||
  upperText.includes("%");

const hasNetContents =
  upperText.includes("ML") ||
  upperText.includes("750");
];

setResults(checks);

setLoading(false);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Treasury AI Label Verification</h1>

      <p>Upload an alcohol label for review.</p>

      <input type="file" onChange={handleFileChange} />

      <br />
      <br />

      <button onClick={analyzeLabel}>
        Analyze Label
      </button>
<h2>Verification Results</h2>

<ul>
  {results.map((item, index) => (
    <li key={index}>
      {item.name}: {item.status}
    </li>
  ))}
</ul>
      {loading && <p>Reading label...</p>}

      <h2>Extracted Text</h2>

      <textarea
        rows="15"
        cols="100"
        value={text}
        readOnly
      />
    </div>
  );
}

export default App;
