const express = require('express')
const mongoose = require('mongoose')
const Item = require('./models/items')
const app = express()
app.use(express.urlencoded({ extended: true })); //middleware
const mongodb = 'mongodb+srv://catahache:solodenoche10@cluster0.lga0k.mongodb.net/item-database?retryWrites=true&w=majority'

mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
    app.listen(3000) //recien cuando esta conectado que empiece a escuchar
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");



app.get('/', function (req, res) {
    // res.sendFile('./views/index.html',{root:__dirname})//current directory
    // res.render('index', {title2: 'some title2', title3: 'sdfsfd'})
    // const items = [
    //     {name: 'mobile phone', price: 1000},
    //     {name: 'book', price: 30},
    //     {name: 'computer', price: 2000},
    // ]
    // res.render('index', {items})
    res.redirect('/get-items')
})

app.get("/get-item", (req, res) => {
  Item.findById("60c5410342fcd39820008033")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/get-items", (req, res) => {
    Item.find()
      .then((result) => {
        // res.send(result);
        res.render("index", { items: result });
      })
      .catch((err) => console.log(err));
  });

app.get("/create-item", (req, res) => {
  const item = new Item({
    name: "computer",
    price: 2000,
  });
  item
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get('/add-item', function (req, res) {
    // res.sendFile('./views/add-item.html',{root:__dirname})
    res.render('add-item')
})

app.post('/items',(req,res)=>{
    console.log(req.body)
    const item = Item(req.body)
    item.save().then(()=>{
        res.redirect("./get-items")
    }).catch(err=>console.log(err))
})

app.get('/items/:id', (req, res)=> {
  const id = req.params.id
  Item.findById(id).then(result=>{
    console.log('result', result)
    res.render('item-detail', {item: result})
  })
})

app.use((req, res)=>{//no matter what path we type, if its incorrect it will render 404.html bc its in the bottom (after all the other gets)
    // res.sendFile('./views/404.html',{root:__dirname})
    res.render('404')
})

