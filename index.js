const { count } = require("console");
let express = require("express");
const { title } = require("process");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//1
let products = [
  {name: "Product A", inStock: true},
  {name: "Product B", inStock: false},
  {name: "Product C", inStock: true},
  {name: "Product D", inStock: false},
];
function filterInStockProducts(product) {
  return product.inStock;
}
app.get('/in-stock-products', (req, res) => {
  let result = products.filter(product => filterInStockProducts(product));
  res.json(result);
});
//in-stock-products

//2
let users = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30},
  {name: "Charlie", age: 17},
  {name: "Dave", age: 16},
];
function filterUsers(user) {
  return user.age >= 18;
}
app.get('/adult-users', (req, res) => {
  let result = users.filter(user => filterUsers(user));
  res.json(result);
});
//adult-users

//3
let productPrices = [
  {name: "Product A", price: 50},
  {name: "Product B", price: 150},
  {name: "Product C", price: 200},
  {name: "Product D", price: 90},
];
function filterExpensiveProducts(product, price) {
  return product.price > price;
}
app.get('/expensive-products', (req, res) => {
  let price = req.query.price;
  let result = productPrices.filter(product => filterExpensiveProducts(product, price));
  res.json(result);
});
//expensive-products?price=100

//4
let articles = [
  {title: "Article A", wordCount: 400},
  {title: "Article B", wordCount: 600},
  {title: "Article C", wordCount: 700},
  {title: "Article D", wordCount: 300},
];

function filterLongArticles(article, minWords) {
  return article.wordCount > minWords;
};
app.get('/long-articles', (req, res) => {
  let minWords = parseInt(req.query.minWords);
  let result = articles.filter(article => filterLongArticles(article, minWords));
  res.json(result);
});
//long-articles?minWords=500

//5
let movies = [
  {title: "Movie A", rating: 8.5},
  {title: "Movie B", rating: 7.0},
  {title: "Movie C", rating: 9.0},
  {title: "Movie D", rating: 6.5},
];
function filterMovies(movie, rating) {
  return movie.rating > rating;
}
app.get('/high-rated-movies', (req, res) => {
  let rating = parseFloat(req.query.rating);
  let result = movies.filter(movie => filterMovies(movie, rating));
  res.json(result);
});

//6
let employees = [
  {name:"Employee A", experiense: 3},
  {name:"Employee B", experiense: 6},
  {name:"Employee C", experiense: 10},
  {name:"Employee D", experiense: 2},
];

function filterExperincedEmployees(employee, years) {
  return employee.experiense > years;
}
app.get('/experienced-employees', (req, res) => {
  let years = parseFloat(req.query.years);
  let result = employees.filter(employee => filterExperincedEmployees(employee, years));
  res.json(result);
});
//experienced-employees?years=5