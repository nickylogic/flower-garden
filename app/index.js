import express from 'express';
const app = express();

import Redis from 'redisng';
const redis = new Redis();

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log(`Example app listening on port 3000!`));


/*redis.connect().then(function() {
  return redis.set('KEY', 'VALUE').then(function() {
    return redis.get('KEY')
  }).then(function(result) {
    console.log(result)
    redis.close()
  })
}, function(e) {
  console.log(e.message, e.stack)
})*/