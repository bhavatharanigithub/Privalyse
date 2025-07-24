// PrivAlyze content script loaded
console.log("PrivAlyze content script loaded.");

// Get all visible text from the webpage
const bodyText = document.body.innerText.toLowerCase();

// Define sensitive keywords to look for
const riskyTerms = ["password", "credit card", "address", "phone"];

// Pattern to match 10-digit numbers (possible phone numbers)
const phonePattern = /\b\d{10}\b/g;

// Check for sensitive keywords
riskyTerms.forEach(term => {
  if (bodyText.includes(term)) {
    console.warn(`[PrivAlyze] Sensitive term found: "${term}"`);
  }
});

// Check for 10-digit numbers
const phoneMatches = bodyText.match(phonePattern);
if (phoneMatches) {
  console.warn(`[PrivAlyze] Potential phone numbers detected :`, phoneMatches);
}
