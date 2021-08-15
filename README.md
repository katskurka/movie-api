# Movie API

## Instructions

In the initial commit to this project, you have been provided with data for the AFI Top 100 movies. Your task is to implement an Express driven REST API that allows a user to retrieve this data. Your API should support three requests types 1) A request for all data, 2) A request for all movies by a director, 3) A request for a movie by title. Note that you should support partial matches as shown below.

## Requests and Expected Respones

### Get All

**GET** `http://localhost:1337/movies`

**Response**
```JSON
[{
  title: "12 Angry Men",
  directors: ["Sidney Lumet"],
  releaseDate: "4/10/1957",
  rating: "Not Rated",
  runTime: "95 mins",
  genres: ["Drama"],
},
... all other movies
]
```

### Get By Title

**GET** `http://localhost:1337/movies/lord`

**Response**
```JSON
[{
  title: "The Lord Of The Rings: The Fellowship Of The Ring",
  directors: ["Peter Jackson"],
  releaseDate: "12/19/2001",
  rating: "PG-13",
  runTime: "178 mins",
  genres: ["Adventure", "Drama", "Fantasy"],
}]
```

### Get By Director

**GET** `http://localhost:1337/movies/darabont`

**Response**
```JSON
[{
  title: "The Shawshank Redemption",
  directors: ["Frank Darabont"],
  releaseDate: "10/14/1994",
  rating: "R",
  runTime: "142 mins",
  genres: ["Drama"],
}]
```

### Create New

**POST** `http://localhost:1337/movies`

**Body**
```JSON
{
  title: "Cabin in the Woods",
  directors: ["Drew Goddard"],
  releaseDate: "04/13/2012",
  rating: "R",
  runTime: "95 mins",
  genres: ["Horror"],
}
```

**Response**
```JSON
{
  title: "Cabin in the Woods",
  directors: ["Drew Goddard"],
  releaseDate: "04/13/2012",
  rating: "R",
  runTime: "95 mins",
  genres: ["Horror"],
}
```
## Question Answers
* **Identify the component of this assignment you did the best on, and why:** 
* **Describe in plain English what problem this assignment was posing, and what your solution to it was:** 
* **What was your approach or process:** 
* **What were your challenges:** 
* **What resources did you use:** Stackoverflow, fuse classroom videos, youtube video about mvc
* **What does the repo project do and what is the impact it has:** 
* **Technologies used in project:** JavaScript, ESLint, Node.js, Express.js, Postman
* **Main Author:** Kat Skurka
* **Credits:** Hollis for helping troubleshoot some errors during office hours