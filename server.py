from flask import Flask, send_file, request, jsonify
from chat import get_api_response
from config import config

app = Flask(__name__, static_url_path='/', static_folder='client')

@app.route('/')
def serve_index():
    return send_file(f'client/index.html')

@app.route('/chat', methods=['POST'])
def handle_chat():
    data = request.get_json()
    response = get_api_response(data['message'])
    
    return jsonify({"received": response}), 200

if __name__ == '__main__':
    app.run(port=config['PORT'], debug=config['DEBUG'])

