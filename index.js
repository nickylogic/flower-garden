import express from 'express';
import RedisServer from 'redis-server';

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

const rserver = new RedisServer(6379);
rserver.open().then(() => {
    app.listen(3000, () => console.log(`Example app listening on port 3000!`));
});

