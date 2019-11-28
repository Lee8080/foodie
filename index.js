const express = require('express')
const path = require('path')
const axios = require('axios')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const session = require('express-session')
var foodList;


const PORT = process.env.PORT || 8080

const db = "mongodb+srv://admin:admin@database-cya2z.mongodb.net/foodie?retryWrites=true&w=majority";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => 
console.log('connected'))

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser())
  .use(session({secret:'user',saveUninitialized:true,resave:true}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')


.get('/', (req, res) =>{
    res.render('pages/index',{
      username: req.session.username
    });
})

.get('/login', (req, res) =>{
  res.render('pages/login');
})

.get('/register', (req, res) =>{
  res.render('pages/register');
})

.get('/random', (req, res) =>{
  var querystr = 'https://www.themealdb.com/api/json/v1/1/random.php';
  axios.get(querystr).then((response)=>{
    var temp = response['data']['meals'];
    var food = [];
    var foodie = [];
    var ingre = [];
    for(x=0;x<temp.length;x++){
      var temp1 = temp[x].strIngredient1 + ' ' + temp[x].strMeasure1; 
      ingre.push(temp1);
      var temp2 = temp[x].strIngredient2 + ' ' + temp[x].strMeasure2; 
      ingre.push(temp2);
      var temp3 = temp[x].strIngredient3 + ' ' + temp[x].strMeasure3; 
      ingre.push(temp3);
      var temp4 = temp[x].strIngredient4 + ' ' + temp[x].strMeasure4; 
      ingre.push(temp4);
      var temp5 = temp[x].strIngredient5 + ' ' + temp[x].strMeasure5; 
      ingre.push(temp5);
      var temp6 = temp[x].strIngredient6 + ' ' + temp[x].strMeasure6; 
      ingre.push(temp6);
      var temp7 = temp[x].strIngredient7 + ' ' + temp[x].strMeasure7; 
      ingre.push(temp7);
      var temp8 = temp[x].strIngredient8 + ' ' + temp[x].strMeasure8; 
      ingre.push(temp8);
      var temp9 = temp[x].strIngredient9 + ' ' + temp[x].strMeasure9; 
      ingre.push(temp9);
      var temp10 = temp[x].strIngredient10 + ' ' + temp[x].strMeasure10; 
      ingre.push(temp10);
      var temp11 = temp[x].strIngredient11 + ' ' + temp[x].strMeasure11; 
      ingre.push(temp11);
      var temp12 = temp[x].strIngredient12 + ' ' + temp[x].strMeasure12; 
      ingre.push(temp12);
      var temp13 = temp[x].strIngredient13 + ' ' + temp[x].strMeasure13; 
      ingre.push(temp13);
      var temp14 = temp[x].strIngredient14 + ' ' + temp[x].strMeasure14; 
      ingre.push(temp14);
      var temp15 = temp[x].strIngredient15 + ' ' + temp[x].strMeasure15; 
      ingre.push(temp15);
      var temp16 = temp[x].strIngredient16 + ' ' + temp[x].strMeasure16; 
      ingre.push(temp16);
      var temp17 = temp[x].strIngredient17 + ' ' + temp[x].strMeasure17; 
      ingre.push(temp17);
      var temp18 = temp[x].strIngredient18 + ' ' + temp[x].strMeasure18; 
      ingre.push(temp18);
      var temp19 = temp[x].strIngredient19 + ' ' + temp[x].strMeasure19; 
      ingre.push(temp19);
      var temp20 = temp[x].strIngredient20 + ' ' + temp[x].strMeasure20; 
      ingre.push(temp20);
      foodie = [{
        "idMeal" : temp[x].idMeal,
        "strMeal" : temp[x].strMeal,
        "strCategory" : temp[x].strCategory,
        "strArea": temp[x].strArea,
        "strInstructions" : temp[x].strInstructions,
        "strMealThumb" : temp[x].strMealThumb,
        "strTags" : temp[x].strTags,
        "strYoutube" : temp[x].strYoutube,
        "strSource" : temp[x].strSource,
        "strIngredient" : ingre
      }]
      ingre=[]
      food.push(foodie);
      
    }
    res.render('pages/random',{
      food: food,
      username: req.session.username
    });
  });  
})

.post('/search', function(req,res){
  var querystr = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+req.body.search;
  axios.get(querystr).then((response)=>{

    if(response['data']['meals'] != null){
    var temp = response['data']['meals'];
    var food = [];
    var foodie = [];
    var ingre = [];
    for(x=0;x<temp.length;x++){
      var temp1 = temp[x].strIngredient1 + ' ' + temp[x].strMeasure1; 
      ingre.push(temp1);
      var temp2 = temp[x].strIngredient2 + ' ' + temp[x].strMeasure2; 
      ingre.push(temp2);
      var temp3 = temp[x].strIngredient3 + ' ' + temp[x].strMeasure3; 
      ingre.push(temp3);
      var temp4 = temp[x].strIngredient4 + ' ' + temp[x].strMeasure4; 
      ingre.push(temp4);
      var temp5 = temp[x].strIngredient5 + ' ' + temp[x].strMeasure5; 
      ingre.push(temp5);
      var temp6 = temp[x].strIngredient6 + ' ' + temp[x].strMeasure6; 
      ingre.push(temp6);
      var temp7 = temp[x].strIngredient7 + ' ' + temp[x].strMeasure7; 
      ingre.push(temp7);
      var temp8 = temp[x].strIngredient8 + ' ' + temp[x].strMeasure8; 
      ingre.push(temp8);
      var temp9 = temp[x].strIngredient9 + ' ' + temp[x].strMeasure9; 
      ingre.push(temp9);
      var temp10 = temp[x].strIngredient10 + ' ' + temp[x].strMeasure10; 
      ingre.push(temp10);
      var temp11 = temp[x].strIngredient11 + ' ' + temp[x].strMeasure11; 
      ingre.push(temp11);
      var temp12 = temp[x].strIngredient12 + ' ' + temp[x].strMeasure12; 
      ingre.push(temp12);
      var temp13 = temp[x].strIngredient13 + ' ' + temp[x].strMeasure13; 
      ingre.push(temp13);
      var temp14 = temp[x].strIngredient14 + ' ' + temp[x].strMeasure14; 
      ingre.push(temp14);
      var temp15 = temp[x].strIngredient15 + ' ' + temp[x].strMeasure15; 
      ingre.push(temp15);
      var temp16 = temp[x].strIngredient16 + ' ' + temp[x].strMeasure16; 
      ingre.push(temp16);
      var temp17 = temp[x].strIngredient17 + ' ' + temp[x].strMeasure17; 
      ingre.push(temp17);
      var temp18 = temp[x].strIngredient18 + ' ' + temp[x].strMeasure18; 
      ingre.push(temp18);
      var temp19 = temp[x].strIngredient19 + ' ' + temp[x].strMeasure19; 
      ingre.push(temp19);
      var temp20 = temp[x].strIngredient20 + ' ' + temp[x].strMeasure20; 
      ingre.push(temp20);
      foodie = [{
        "idMeal" : temp[x].idMeal,
        "strMeal" : temp[x].strMeal,
        "strCategory" : temp[x].strCategory,
        "strArea": temp[x].strArea,
        "strInstructions" : temp[x].strInstructions,
        "strMealThumb" : temp[x].strMealThumb,
        "strTags" : temp[x].strTags,
        "strYoutube" : temp[x].strYoutube,
        "strSource" : temp[x].strSource,
        "strIngredient" : ingre
      }]
      ingre=[]
      food.push(foodie);
      
    }
    res.render('pages/search',{
      food: food,
      username: req.session.username
    });
    }else{
      res.render('pages/search',{
        food: null,
        username: req.session.username
      });      
    }
  });
})

.post('/addList', function(req, res){
  var newlist = require('./userList');
  username = req.session.username;
  newrecipe = new newlist({
    username: username,
    idMeal: req.body.idMeal,
    strMealThumb: req.body.strMealThumb,
    strMeal: req.body.strMeal,
    strInstructions: req.body.strInstructions,
    strIngredient: req.body.strIngredient,
    strYoutube: req.body.strYoutube
  });

    newrecipe.save().then((result)=>{
      res.render('pages/index')
  })
})

.post('/deleteList', function(req, res){
 
  var newlist = require('./userList');
  username = req.session.username

  newlist.remove({idMeal : req.body.idMeal, username : username}).then(result=>{
    res.render('pages/userList',{ 
      username: req.session.username,
      foods: 0
    });
    res.redirect('/userList');
  })
})

.get('/userList',function(req, res){
  username = req.session.username;
  var userlist = require('./userList');

  userlist.find({
    username:username
  })
  .then(result=>{
    if((result.length) > 0){
      console.log(result)
      var foods = [];
      for(a=0;a<result.length;a++){
        var querystr = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + result[a].idMeal;
        axios.get(querystr).then((response)=>{
          var temp = response['data']['meals'];
          var foodie = [];
          var ingre = [];
          for(x=0;x<temp.length;x++){
            var temp1 = temp[x].strIngredient1 + ' ' + temp[x].strMeasure1; 
            ingre.push(temp1);
            var temp2 = temp[x].strIngredient2 + ' ' + temp[x].strMeasure2; 
            ingre.push(temp2);
            var temp3 = temp[x].strIngredient3 + ' ' + temp[x].strMeasure3; 
            ingre.push(temp3);
            var temp4 = temp[x].strIngredient4 + ' ' + temp[x].strMeasure4; 
            ingre.push(temp4);
            var temp5 = temp[x].strIngredient5 + ' ' + temp[x].strMeasure5; 
            ingre.push(temp5);
            var temp6 = temp[x].strIngredient6 + ' ' + temp[x].strMeasure6; 
            ingre.push(temp6);
            var temp7 = temp[x].strIngredient7 + ' ' + temp[x].strMeasure7; 
            ingre.push(temp7);
            var temp8 = temp[x].strIngredient8 + ' ' + temp[x].strMeasure8; 
            ingre.push(temp8);
            var temp9 = temp[x].strIngredient9 + ' ' + temp[x].strMeasure9; 
            ingre.push(temp9);
            var temp10 = temp[x].strIngredient10 + ' ' + temp[x].strMeasure10; 
            ingre.push(temp10);
            var temp11 = temp[x].strIngredient11 + ' ' + temp[x].strMeasure11; 
            ingre.push(temp11);
            var temp12 = temp[x].strIngredient12 + ' ' + temp[x].strMeasure12; 
            ingre.push(temp12);
            var temp13 = temp[x].strIngredient13 + ' ' + temp[x].strMeasure13; 
            ingre.push(temp13);
            var temp14 = temp[x].strIngredient14 + ' ' + temp[x].strMeasure14; 
            ingre.push(temp14);
            var temp15 = temp[x].strIngredient15 + ' ' + temp[x].strMeasure15; 
            ingre.push(temp15);
            var temp16 = temp[x].strIngredient16 + ' ' + temp[x].strMeasure16; 
            ingre.push(temp16);
            var temp17 = temp[x].strIngredient17 + ' ' + temp[x].strMeasure17; 
            ingre.push(temp17);
            var temp18 = temp[x].strIngredient18 + ' ' + temp[x].strMeasure18; 
            ingre.push(temp18);
            var temp19 = temp[x].strIngredient19 + ' ' + temp[x].strMeasure19; 
            ingre.push(temp19);
            var temp20 = temp[x].strIngredient20 + ' ' + temp[x].strMeasure20; 
            ingre.push(temp20);
            foodie = [{
              "idMeal" : temp[x].idMeal,
              "strMeal" : temp[x].strMeal,
              "strCategory" : temp[x].strCategory,
              "strArea": temp[x].strArea,
              "strInstructions" : temp[x].strInstructions,
              "strMealThumb" : temp[x].strMealThumb,
              "strTags" : temp[x].strTags,
              "strYoutube" : temp[x].strYoutube,
              "strSource" : temp[x].strSource,
              "strIngredient" : ingre
            }]
            ingre=[]
            // console.log(foodie);
            foods.push(foodie);           
            // return food2
            // console.log(req.session.food2);
          }
          setFood(foods);
        });  
        
      }    
      var fd = getFood();
      console.log(fd);      
      res.render('pages/userList',{
        foods: fd,
        username: req.session.username
      });
    }else{
      res.render('pages/userList',{
        foods: null,
        username: req.session.username
      })
    }
  })

})

.post('/signup',(req,res) =>{
  var newlogin = require('./userdb');
    newuser = new newlogin({
      username : req.body.username,
      password  : req.body.password,
      name : req.body.name,
      email : req.body.email
    }) 
    newuser.save().then((result) => {
      res.render('pages/login')
    })
})

.post('/signin',(req,res) =>{
  var login = require('./userdb');
  login.find({
    username : req.body.username,
    password : req.body.password
  })
  .then((response) =>{
    if(response[0] !=  null){
      req.session.username = req.body.username 
      res.render('pages/index',{
        username: req.session.username
      })
    }else{
      console.log('No user found')
    }
  })
})

.get('/logout',  function(req,res){
  req.session.destroy();
  res.redirect('/login')  
})

.listen(PORT, () => console.log(`Listening on ${ PORT }`))

function setFood(f) {
  foodList = f;
  console.log(foodList);
}

function getFood(){
  // console.log(req.session.foodList);
  return foodList;
}
