document.getElementById("analyzeButton").addEventListener("click", () => {
  const text = document.getElementById("textInput").value;
  const resultDiv = document.getElementById("resultContainer");

  const riskyWords = ["password", "address", "credit card", "phone", "location"];
  const regexPhone = /\b\d{10}\b/g;

  let risks = [];

  // Check for sensitive keywords
  riskyWords.forEach(word => {
    if (text.toLowerCase().includes(word)) {
      risks.push(`Sensitive keyword detected: "${word}"`);
    }
  });

  // Check for phone number patterns
  const phoneMatches = text.match(regexPhone);
  if (phoneMatches) {
    phoneMatches.forEach(match => {
      risks.push(`Warning! You are sharing your phone number, which is sensitive data: ${match}`);
    });
  }

  // Calculate a basic privacy exposure score
  const score = Math.max(0, 100 - (risks.length * 10));

  // Show results in popup
  resultDiv.innerHTML = `
    <h3>Privacy Exposure Score: ${score}</h3>
    ${risks.length > 0
      ? '<ul>' + risks.map(r => `<li>${r}</li>`).join('') + '</ul>'
      : '<p style="color: green;">✅ No sensitive data detected!</p>'
    }
  `;
});

