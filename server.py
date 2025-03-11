from flask import Flask, send_file
from config import config

app = Flask(__name__, static_url_path='/', static_folder='client')

@app.route('/')
def serve_index():
    return send_file(f'client/index.html')

if __name__ == '__main__':
    app.run(port=config['PORT'], debug=config['DEBUG'])
