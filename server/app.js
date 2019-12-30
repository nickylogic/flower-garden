import express from 'express';
const app = express();

app.use(express.static('server',{extensions:['graphql','gql']}));
app.use(express.static('web/assets',{extensions:['css','jpg','jpeg','gif','png','svg','ico']}));

app.get('/', (req, res) => res.redirect('/index.html'));
app.listen(3000, () => console.log(`Flower Garden listening on port 3000!`));


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