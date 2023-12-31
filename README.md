# Documentation

<h1 align="center" id="title">Javascript Ticket Challenge</h1>

<p id="description">The Volleyball Federation has decided to use an online selling platform for the next season and our company has been chosen for implementing that. This project represents a small version of this system. </p>

<p align="center"><img src="https://img.shields.io/badge/type-script-blue" alt="shields"><img src="https://img.shields.io/badge/react-js-green" alt="shields"><img src="https://img.shields.io/badge/jest-orange" alt="shields"></p>

<h2>Project Screenshots:</h2>

<img src="https://i.postimg.cc/25RcSw6P/Screenshot-2023-12-31-125313.png" alt="project-screenshot" width="800" height="400/">

<h2>Notice:</h2>

<p>This project uses 'MSW' as a mock server. msw will start when the project starts on development mode automatically. to make sure if it has started check the console, this message will show its start in console <span style="color:red">[MSW] Mocking enabled.</span</p>

<h2>🛠️ Installation Steps:</h2>

<p>1. clone the project</p>

```
git clone https://github.com/mhsamie/frontend-ticket-challenge.git
```

<p>2. go to the repository</p>

```
cd frontend-ticket-challenge
```

<p>3. install the requirments</p>

```
npm install
```

<p>4. run the server on dev mode</p>

```
npm run dev
```

<h2>💻 Built with</h2>

Technologies used in the project:

- react.js
- vite
- typescript
- msw
- jest
- husky

---

# Javascript Ticket Challenge

The Volleyball Federation has decided to use an online selling platform for the next season, and our company has been chosen for implementing that.

## Requirements

In this challenge, you are going to develop a **responsive web application** to display stadium seats randomly to the user. Users can select a seat and buy a ticket. After buying the ticket, you should redirect to **another page** that shows the ticket ID to the user.

## API Standard

### `GET /map`

Response body sample: `['m213', 'm654', 'm63', 'm6888']`

Get the list of map IDs. Use this endpoint to get the list and choose one of the stadium maps randomly.

### `GET /map/<map_id>`

Get map details and display seats.

Response body sample:

```json
[
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]
```

In the response, 1 means reserved, and 0 means the seat is available to buy.

### `POST /map/<map_id>/ticket`

Request body sample:

```json
{
  "x": 2,
  "y": 1
}
```

Buy tickets. `x` and `y` are seat coordinates in the request.

Suppose the backend APIs are concurrently in the development process. So mock APIs in some way to continue your work.

## Implementation details

Try to write your code as **reusable** and **readable** as possible. Also, don't forget to **document your code** and provide clear reasons for all your decisions in the code.

It is more valuable to us that the project comes with unit tests.

Please don't use any CSS framework (like Bootstrap, Material, ...).

Don't forget that many stadium seats are available (around 100k), so try to implement your code in a way that could display it smoothly. If your solution does not sample enough for implementing fast, you can just describe it in your documents.

Please fork this repository and add your code to that. Don't forget that your commits are important, so be sure that you're committing your code often with a proper commit message.
