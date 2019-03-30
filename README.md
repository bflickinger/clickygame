# Clicky Game - mmm, donuts!

This game can be accessed here:  https://bflickinger.github.io/clickygame/  No donuts were harmed in the creation of this simple game.

## Overview

This project is a simple memory game that was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  You should click only once on each image.  Each succesful click garners you one point and the array is randomized.  Clicking on an image that you've already chosen ends the game and resets the score (and also randomizes the images).  The score is kept in the navbar right side.

This website was helpful in publishing this app to git-hub pages - https://reactgo.com/deploy-react-app-github-pages/

### Technologies used

1. [Create React App](https://github.com/facebookincubator/create-react-app):

    a.  React, JSX, ES6, TypeScript and Flow syntax support.

    b. Language extras beyond ES6 like the object spread operator.

    c. Autoprefixed CSS, so you don’t need -webkit- or other prefixes.

    d. A fast interactive unit test runner with built-in support for coverage reporting.
    
    e. A live development server that warns about common mistakes.

    f. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

    g. An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria. (Note: 
        
    f. Using the service worker is opt-in as of react-scripts@2.0.0 and higher)

    g. Hassle-free updates for the above tools with a single dependency.

### React Components

1. Navbar with title and score (as props)

2. Jumbotron - instructions

3. Card - mapped with flexbox to display donuts (sent as props).

4. Footer - self explanatory

- - -