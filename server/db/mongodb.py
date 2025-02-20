from motor.motor_asyncio import AsyncIOMotorClient

client = AsyncIOMotorClient('mongodb+srv://juancodev:<lunchvtv123456789>@cluster0.lfvxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
# podemos crear una base de datos u obtenerla ya creada desde MongoDB atlas: db = client.lunchvtv
db = client.get_database('lunchvtv')

