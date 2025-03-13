from dotenv import dotenv_values

_env = dotenv_values('.env')

_API_KEY = _env.get('API_KEY', _env.get(f'{_env.get("API")}_KEY'))

config = {
    'PORT': _env.get('PORT', 8080),
    'API_KEY': _API_KEY,
    'API': _env.get("API"),
    'DEBUG': _env.get('DEBUG') == 'TRUE',
    'ENABLE_API': _env.get('ENABLE_API') == 'TRUE',
}
