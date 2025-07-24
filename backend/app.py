from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from routes.analyzer import analyze_text

app = Flask(__name__)
CORS(app)  # ✅ Allow cross-origin requests from frontend (React)

@app.route('/')
def home():
    return "PrivAlyze API is running."  # Remove render_template unless using templates

@app.route('/analyze', methods=['GET', 'POST'])
def analyze():
    if request.method == 'GET':
        return jsonify({ "message": "Use POST with JSON { text: \"...\" }" }), 200

    data = request.get_json()
    text = data.get("text", "")
    result = analyze_text(text)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
