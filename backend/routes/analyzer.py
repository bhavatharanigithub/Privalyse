from utils.nlp_analyzer import detect_sensitive_content
from utils.score_calculator import calculate_score

def analyze_text(text):
    findings = detect_sensitive_content(text)
    score = calculate_score(findings)
    return {
        "score": score,
        "flags": findings
    }
