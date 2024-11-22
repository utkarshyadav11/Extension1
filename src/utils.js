export const fakeAPIs = [
  // Data Category
  { url: "https://jsonplaceholder.typicode.com/posts", category: "Data" },
  { url: "https://reqres.in/api/users", category: "Data" },
  { url: "https://fakestoreapi.com/products", category: "Data" },
  { url: "https://randomuser.me/api/", category: "Data" },
  { url: "https://dummyjson.com/products", category: "Data" },
  { url: "https://jsonplaceholder.typicode.com/comments", category: "Data" },
  { url: "https://jsonplaceholder.typicode.com/albums", category: "Data" },
  { url: "https://jsonplaceholder.typicode.com/todos", category: "Data" },
  { url: "https://api.publicapis.org/entries?category=Data", category: "Data" },
  { url: "https://dog.ceo/api/breeds/image/random", category: "Data" },
  { url: "https://api.chucknorris.io/jokes/random", category: "Data" },
  
  // Animals Category
  { url: "https://api.thedogapi.com/v1/breeds", category: "Animals" },
  { url: "https://api.thecatapi.com/v1/images/search", category: "Animals" },
  { url: "https://randomuser.me/api/", category: "Animals" },
  { url: "https://api.api-ninjas.com/v1/dogs?limit=10", category: "Animals" },
  { url: "https://api.openai.com/v1/images/generations", category: "Animals" },
  { url: "https://dog.ceo/api/breeds/list/all", category: "Animals" },
  { url: "https://api.petfinder.com/v2/animals", category: "Animals" },
  { url: "https://www.pets-api.com/v1/animals", category: "Animals" },
  { url: "https://api.thedogapi.com/v1/images/search", category: "Animals" },
  { url: "https://api.publicapis.org/entries?category=Animals", category: "Animals" },

  // Weather Category
  { url: "https://api.openweathermap.org/data/2.5/weather", category: "Weather" },
  { url: "https://api.weatherapi.com/v1/current.json", category: "Weather" },
  { url: "https://api.weatherstack.com/current", category: "Weather" },
  { url: "https://api.met.no/weatherapi/locationforecast/2.0/compact", category: "Weather" },
  { url: "https://api.apixu.com/v1/current.json", category: "Weather" },
  { url: "https://www.metaweather.com/api/location/44418/", category: "Weather" },
  { url: "https://api.weather.gov/points", category: "Weather" },
  { url: "https://api.climacell.co/v3/weather/realtime", category: "Weather" },
  { url: "https://api.meteomatics.com/v1/", category: "Weather" },
  { url: "https://api.openweathermap.org/data/2.5/forecast", category: "Weather" },

  // Finance Category
  { url: "https://api.coinbase.com/v2/prices", category: "Finance" },
  { url: "https://api.exchangerate-api.com/v4/latest/USD", category: "Finance" },
  { url: "https://api.cryptonator.com/api/ticker/btc-usd", category: "Finance" },
  { url: "https://api.blockchain.info/ticker", category: "Finance" },
  { url: "https://api.cryptocompare.com/data/price", category: "Finance" },
  { url: "https://www.alphavantage.co/query", category: "Finance" },
  { url: "https://api.polygon.io/v2/aggs/ticker", category: "Finance" },
  { url: "https://api.nomics.com/v1/currencies/ticker", category: "Finance" },
  { url: "https://api.coinlore.net/api/tickers", category: "Finance" },
  { url: "https://api.publicapis.org/entries?category=Finance", category: "Finance" },

  // Space Category
  { url: "https://api.spacexdata.com/v4/launches/latest", category: "Space" },
  { url: "https://api.le-systeme-solaire.net/rest/bodies", category: "Space" },
  { url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", category: "Space" },
  { url: "https://api.spacexdata.com/v3/launches", category: "Space" },
  { url: "https://api.spacexdata.com/v4/dragons", category: "Space" },
  { url: "https://launchlibrary.net/1/2/launch", category: "Space" },
  { url: "https://api.open-notify.org/astros.json", category: "Space" },
  { url: "https://www.nasa.gov/api/planetary", category: "Space" },
  { url: "https://api.fairdata.io/space-exploration", category: "Space" },
  { url: "https://api.publicapis.org/entries?category=Space", category: "Space" },

  // Entertainment Category
  { url: "https://official-joke-api.appspot.com/jokes/random", category: "Entertainment" },
  { url: "https://api.themoviedb.org/3/movie/popular", category: "Entertainment" },
  { url: "https://api.spoonacular.com/recipes/random", category: "Entertainment" },
  { url: "https://api.unsplash.com/photos", category: "Entertainment" },
  { url: "https://api.publicapis.org/entries?category=Entertainment", category: "Entertainment" },
  { url: "https://api.tvmaze.com/search/shows", category: "Entertainment" },
  { url: "https://api.opendota.com/api/players", category: "Entertainment" },
  { url: "https://api.coindesk.com/v1/bpi/currentprice.json", category: "Entertainment" },
  { url: "https://www.omdbapi.com/?i=tt3896198&apikey=2a19c6d3", category: "Entertainment" },
  { url: "https://api.spotify.com/v1/albums", category: "Entertainment" },

  // Fun Category
  { url: "https://api.chucknorris.io/jokes/random", category: "Fun" },
  { url: "https://official-joke-api.appspot.com/jokes/ten", category: "Fun" },
  { url: "https://api.funtranslations.com/translate/yoda.json?text=hello", category: "Fun" },
  { url: "https://dog.ceo/api/breeds/image/random", category: "Fun" },
  { url: "https://api.coinpaprika.com/v1/coins", category: "Fun" },
  { url: "https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=funny", category: "Fun" },
  { url: "https://www.boredapi.com/api/activity", category: "Fun" },
  { url: "https://api.humorapi.com/jokes/random", category: "Fun" },
  { url: "https://www.randomuser.me/api/", category: "Fun" },
  { url: "https://www.reddit.com/r/funny.json", category: "Fun" },
  { url: "https://www.thedogapi.com/v1/images/search?limit=1", category: "Fun" },
  { url: "https://api.wit.ai/message?v=2024-11-13&q=fun", category: "Fun" },
  { url: "https://icanhazdadjoke.com/slack", category: "Fun" },
  { url: "https://www.randomfactgenerator.net/api/fact", category: "Fun" },
  { url: "https://www.splashbase.co/api/v1/images/search?query=fun", category: "Fun" },
  { url: "https://yesno.wtf/api", category: "Fun" },
  { url: "https://api.tronalddump.io/random/quote", category: "Fun" },
  { url: "https://www.jokes.one/api", category: "Fun" },
  { url: "https://v2.jokeapi.dev/joke/Any?lang=en", category: "Fun" },
  { url: "https://pokeapi.co/api/v2/pokemon", category: "Fun" },
  { url: "https://api.duckduckgo.com/?q=funny&format=json", category: "Fun" },
  { url: "https://api.api-ninjas.com/v1/jokes", category: "Fun" },
  { url: "https://www.icndb.com/api/", category: "Fun" },
  { url: "https://funtranslations.com/api/translate", category: "Fun" },
  { url: "https://api.funnyapi.com/v1/jokes", category: "Fun" },
  { url: "https://api.randomdatatools.me/api", category: "Fun" },
  { url: "https://api.webmd.com/v1/funfacts", category: "Fun" },
  { url: "https://api.ai-jokes.com/v1/jokes", category: "Fun" },

  // Predictive Category
  { url: "https://api.agify.io/?name=michael", category: "Predictive" },
  { url: "https://api.genderize.io?name=michael", category: "Predictive" },
  { url: "https://api.ourspace.uregina.ca/bitstream/handle/10294/13069/DT1776.pdf?sequence=1", category: "Predictive" },
  { url: "https://api.predicthq.com/v1/forecast", category: "Predictive" },
  { url: "https://api.synthego.com/v1/data", category: "Predictive" },
  { url: "https://api.insights.samsung.com/v1/", category: "Predictive" },
  { url: "https://api.sensorsdata.cn/api/v1", category: "Predictive" },
  { url: "https://api.weatherstack.com/predictive", category: "Predictive" },
  { url: "https://api.metacognitive.com/v1", category: "Predictive" },
  { url: "https://api.publicapis.org/entries?category=Predictive", category: "Predictive" },

  // Food Category
  { url: "https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=food", category: "Food" },
  { url: "https://api.openai.com/v1/engines/davinci-codex/completions", category: "Food" },
  { url: "https://api.apis.guru/foodservice", category: "Food" },
  { url: "https://api.food.com", category: "Food" },
  { url: "https://api.coopfoodservice.com", category: "Food" },
  { url: "https://www.acloudyfood.com/api/recipe", category: "Food" },
  { url: "https://mealdb.com/api/meal-data", category: "Food" },
  { url: "https://api.allrecipes.com", category: "Food" },
  { url: "https://tasty.co/api/recipes", category: "Food" },
  { url: "https://www.mykitchenapi.com", category: "Food" },
  { url: "https://api.recipepuppy.com", category: "Food" },
  { url: "https://api.foodpanda.com", category: "Food" },
  { url: "https://www.hungryapi.com", category: "Food" },
  { url: "https://api.yelp.com/v3/businesses/search?term=food", category: "Food" },
  { url: "https://api.foodnetwork.com", category: "Food" },
  { url: "https://api.cookingapi.com", category: "Food" },
  { url: "https://recipesapi.com", category: "Food" },
  { url: "https://api.recipeapi.com/v1", category: "Food" },
  { url: "https://api.plantbasedapi.com", category: "Food" },
  { url: "https://api.chefdb.com", category: "Food" },
  { url: "https://cookbook-api.herokuapp.com/recipes", category: "Food" },
  { url: "https://api.cookpad.com", category: "Food" },
  { url: "https://www.mashed.com/api/recipe", category: "Food" },
  { url: "https://www.epicurious.com/api", category: "Food" },
  { url: "https://api.delish.com", category: "Food" },
  { url: "https://foodish-api.herokuapp.com", category: "Food" },
  { url: "https://api.cookinglight.com", category: "Food" },
  { url: "https://www.cookpad.com/api", category: "Food" },
  { url: "https://www.cooks.com/api", category: "Food" },
  { url: "https://api.sugarlove.com", category: "Food" },
  { url: "https://api.bonappetit.com", category: "Food" },
  { url: "https://api.thekitchn.com", category: "Food" },
  { url: "https://www.food52.com/api", category: "Food" },
  { url: "https://www.wellplated.com/api", category: "Food" },
  { url: "https://www.forksoverknives.com/api", category: "Food" },
  { url: "https://www.eatingwell.com/api", category: "Food" },
  { url: "https://www.tasteofhome.com/api", category: "Food" },
  { url: "https://www.bhg.com/api/recipes", category: "Food" },
  { url: "https://www.seriouseats.com/api", category: "Food" },
]
