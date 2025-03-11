from openai import OpenAI
from config import config

_client = OpenAI(
  api_key=config['API_KEY']
)

def get_GPT_response(message):
    completion = _client.chat.completions.create(
        model="gpt-3.5-turbo",
        store=True,
        messages=[
            {"role": "user", "content": message}
        ]
    )

    return completion.choices[0].message