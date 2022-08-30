# TeamOut api interview

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
