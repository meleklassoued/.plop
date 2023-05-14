# Plop Component Generator

This is a [Yeoman generator](https://yeoman.io/) that creates a new React component file for your application. The generator prompts the user for the component type and name and generates a component file with a template.

## Getting Started (contributing)

To get started with this project, you will need to have Node.js and NPM installed on your computer.

1. Clone this repository to your local machine
2. Run `yarn` to install the required dependencies
3. Run `yarn generate` to start the Plop CLI and create a new component file

## Usage & installation

### To install this package, run the following command:

```sh
yarn add react-plop-gen-component
```

### To use the generator, add the following command to your package.json file:

```sh
"generate": "yarn plop --plopfile ./node_modules/react-plop-gen-component/plopfile.js"
```

### To generate a new component, run the following command:

```sh
yarn generate
```

When you run the yarn generate command, you will be prompted to choose a component type and name. Once you have provided this information, the generator will create a new component file in the src/components directory.

### Available Component Types

- View
- Common
- Layout

# Example Component

Here's an example component created with this generator:

```js
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useState } from "react";
// UI Components

// UI lib components (antD)

// Custom Hooks & Utils

// Redux Funcs

// Style (not required) use Boostrap

/* -------------------------------------------------------------------------- */
/*                            Common Component                      */
/* -------------------------------------------------------------------------- */

const TestComponent = () => {
  /* ---------------------------------- Hooks --------------------------------- */
  const [counter, setCounter] = useState(1);

  /* -------------------------------- Callbacks ------------------------------- */
  const handleChange = (e) => {
    e.preventDefault();
    // Do something...
  };

  const incrementCounter = () => {
    setCounter((count) => count + 1);
  };

  /* --------------------------------- Rendering ------------------------------ */
  return (
    <div>
      <h1>TestComponent</h1>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default TestComponent;
```

# About the Author

This generator was created by Melek Lassoued, an experienced JavaScript developer.You can find more of my projects on my [GitHub Account](https://github.com/meleklassoued).

## Contributing

If you want to contribute to this project, please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
