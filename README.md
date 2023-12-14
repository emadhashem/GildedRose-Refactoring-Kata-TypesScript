This project contains my solution to the Gilded Rose refactoring kata. The goal of the kata is to take an existing codebase that models an inventory system for a shop and refactor it to improve various aspects like readability, maintainability and extensibility.

The original codebase models a basic shop inventory with a few types of items that change in price and quality each day. However, the code has some duplication and lacks organization, making it difficult to understand and maintain.

In my solution, I aimed to refactor the code in a way that:

Extracts duplicated logic into well-named methods and classes to reduce redundancy
Organizes code into logical modules based on responsibilities (e.g. items, updates)
Implements object-oriented principles like abstraction and encapsulation
Adds relevant tests to validate functionality and prevent regressions during refactoring
Improves readability through consistent formatting, naming and commenting
By refactoring incrementally and writing tests along the way, I was able to safely improve the design and structure of the codebase while preserving existing functionality. This makes the system easier to understand and maintain as new requirements are added in the future.

Please let me know if you need any clarification or have additional questions! I'd be happy to provide more details on my refactoring approach and solution design.





# Gilded Rose

This is the Gilded Rose kata in TypeScript.

## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

There are two unit test frameworks to choose from, Jest and Mocha.

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

Mocha

```sh
npm run test:mocha
```


## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).


## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python


