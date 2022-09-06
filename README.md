# TeamOut fullstack interview

## Goal: build an API endpoint to simulate flights between cities

### Description

We're looking to build a simplified simulator that will be used in the next interview.
We are given 5 cities, each of them has an associated price, the API should be able to return the price of a flight between 2 cities following this method:
(Price[departureCity] + Price[arrivalCity]) x number of people

Example:

```
Los Angeles: $110,
San Francisco: $150
San Diego: $80
Miami: $95
New York: $160
```

A 10 person fligth between Los Angeles and New York: (110 + 160) x 10 = $2700

### About the tech stack

This repository uses [nx](https://nx.dev/) to build and run the application.

Install the project dependencies

```shell
npm install
```

Install `nx` globally

```shell
npm install nx -g
```

We already added 2 apps and a library to save you some time with the scaffolding. You should be able to run the following commands to launch and test the api:

```shell
nx serve api
```

```shell
nx test api
```

## Goal: Implement a flight search engine

Objective: Suggest and implement a ReactJS page to help Teamout customers look for their final destination.

Context: Customers are usually debating between 3 destinations. This page will help them compare prices between each destination and make a choice on where to organize their retreat.

Tips:
* You can use any library of your choice to implement your solution.
* You should reuse your endpoint to get fake prices between a departure and a destination.
* You should do everything necessary for a great user experience (error management, parallel requests, clear message)
* You can decide to implement your own design (The one provided is just an example)

![ui-challenge](https://user-images.githubusercontent.com/94411526/188523166-281aebb8-3574-45f5-8457-436721853c93.png)

### About the tech stack

`nx` can be used to start an app. The app is available in the `package` folder of this repository.

```shell
nx serve app
```


