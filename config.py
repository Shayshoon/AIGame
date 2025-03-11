from dotenv import dotenv_values

_env = dotenv_values('.env')

config = {
    'PORT': _env.get('PORT', 8080),
    'API_KEY': _env.get('API_KEY'),
    'DEBUG': _env.get('DEBUG', False)
}
