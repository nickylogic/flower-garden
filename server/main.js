import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello from Flower Garden server'));
app.listen(process.env.SERVER_PORT, () => console.log(`Flower Garden server listening on port 3000!`));


/*import Redis from 'redisng';
const redis = new Redis();
redis.connect().then(function() {
  return redis.set('KEY', 'VALUE').then(function() {
    return redis.get('KEY')
  }).then(function(result) {
    console.log(result)
    redis.close()
  })
}, function(e) {
  console.log(e.message, e.stack)
})*/