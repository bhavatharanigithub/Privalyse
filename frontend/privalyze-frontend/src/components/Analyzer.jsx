import React, { useState } from 'react';

const Analyzer = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ score: 0, flags: ['Error analyzing text.'] });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analyzer-card">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your content here..."
        className="input-box"
      />
      <button onClick={handleAnalyze} disabled={loading} className="analyze-btn">
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>

      {result && (
        <div className="result-box">
          <h3>🧠 Exposure Score: <span>{result.score}</span></h3>
          <ul>
            {result.flags.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Analyzer;
