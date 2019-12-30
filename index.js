import express from 'express';
const app = express();

app.use(express.static('vue',{extensions:['js','vue']}));
app.use(express.static('css',{extensions:['css']}));
app.use(express.static('img',{extensions:['jpg','jpeg','gif','png','svg','ico']}));
app.use(express.static('doc',{extensions:['html','css','img','graphql']}));

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