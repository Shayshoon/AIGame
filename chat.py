import sys

from google import genai
from openai import OpenAI

from config import config

# TODO: Clean this module
class ClientHandler:
    def __init__(self):
        self._KEY = config['API_KEY']
        self._API = config['API']
        self._client, self._query = self._init_client()

    def _init_client(self):
        if not config['ENABLE_API']:
            return None, lambda msg: f'Using dummy API\nYou wrote: {msg}'

        if self._API == 'GEMINI':
            return genai.Client(api_key=self._KEY), self.get_gemini_response
        elif self._API == 'OPENAI':
            return OpenAI(api_key=self._KEY), self.get_GPT_response
        else:
            raise ValueError(f'Couldn\'t resolve API client {self._API}')

    def get_response(self, message):
        try:
            return self._query(message)
        except Exception as e:
            raise ConnectionError(f'Problem occured when tried to query {self._API}')
        
    def get_gemini_response(self, message):
        response = self._client.models.generate_content(
            model="gemini-2.0-flash",
            contents=message,
        )

        return response.text

    def get_GPT_response(self, message):
        completion = self._client.chat.completions.create(
            model="gpt-3.5-turbo",
            store=True,
            messages=[
                {"role": "user", "content": message}
            ]
        )

        return completion.choices[0].message

_handler = ClientHandler()

def get_api_response(message):
    try:
        return _handler.get_response(message)
    except Exception as e:
        print(e.strerror, file=sys.stderr)
        raise SystemExit(1)
