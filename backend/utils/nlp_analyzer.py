import re

def detect_sensitive_content(text):
    risky_keywords = ["password", "credit card", "address", "phone", "location"]
    findings = []

    # Check for keywords
    for word in risky_keywords:
        if word.lower() in text.lower():
            findings.append(f'Sensitive keyword detected: "{word}"')

    # Check for 10-digit phone numbers
    phone_matches = re.findall(r'\b\d{10}\b', text)
    for num in phone_matches:
        findings.append(f'Phone number detected: {num}')

    return findings
