[View the deployed project here](https://game-of-life-msinnema.vercel.app/game)

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.13.1-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

CS Build Week:  [CS Build week #1](https://github.com/LambdaSchool/CS-Build-Week-1)
 GitHub repo with instructions


## Rules of "Life" (for this instance)

1. Any live cell with fewer than two live neighbors dies. (underpopulation)
2. Any live cell with two or three neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies. (overpopulation)
4. Any dead cell with exactly three live neighbors becomes alive. (reproduction) 

## Turing Completeness 

    A computing system is "Turing Complete" if it can
    perform arbitrary general purpose calculations.
While the Game of Life system isn't Turing Complete in its current form, given an infinite grid size
and unlimited computing resources (memory, CPU cycles, and storage) it could be considered Turing
Complete and the JavaScript language itself is generally considered Turing Complete.
    Taken from [Wikipedia](https://en.wikipedia.org/wiki/Turing_completeness).    

## Celular automata

    Basically defined as:
Computational models that are typically represented by a grid with values. <br />
In this case the values are 0 and 1 (dead, alive). Each cells state will change in accordance with 
the rules lised above.
    Taken from [Towards Data Science](https://towardsdatascience.com/algorithmic-beauty-an-introduction-to-cellular-automata-f53179b3cf8f)<br />
Another famous example is the Sierpinski trangle (fractal) [Sierpinski](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify