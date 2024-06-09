# Pokemon Catalogue

Preview list of our Pokemon, filter the result by name and view additional details about each Pokemon!

## Prerequisites

Make sure you have installed:

```
node v20
yarn
```

## Installation

To get started first install dependencies by running the following command in the terminal from the root directory of the project:
`yarn`

## Running

To run the app from root directory run the following command:
`yarn dev`

## Building

To build the app from root directory run the following command:
`yarn build`

You can find the build in dist folder

## Technical overview

The app is written using vite react-ts starter with tailwind css and tanstack/react-router libraries
tanstack/react-router provides file based routing, together with Vite plugin it automatically generates configuration needed all you have to do is add a new file to routes directory
App structure is divided by type due to simplicity of the project

## Features

The app consumes data from poke api https://pokeapi.co/api/v2/ and shows it in:

- List view on the home page
- Detailed view when selecting a Pokemon from the list or going directly to /pokemon/:pokemonName

Pokemon displayed in the list view can be filtered by name

## Pages

- / - Home page
- /pokemon/:pokemonName - Pokemon details page
