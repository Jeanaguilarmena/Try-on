import React from "react";
function App() {
  return (
    <main className="app">
      <h1>Virtual Try-On</h1>
      <p className="subtitle">
        Upload a full-body photo and a garment to preview how it might look on
        you.
      </p>

      <div className="upload-section">
        <h1>Upload your photo</h1>
      </div>

      <button className="generate-btn">Generate preview</button>
    </main>
  );
}

export default App;
