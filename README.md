# Lendi Technical Assignment

## Get Started

Get started developing...

```shell
# install deps
yarn

# run in development mode
yarn dev

# run tests
yarn test
```

## Install Dependencies

Install all package dependencies (one time operation)

```shell
yarn
```

## Run It

#### Run in _development_ mode:

Runs the application is development mode. Should not be used in production

```shell
yarn dev
```

or debug it

```shell
yarn dev:debug
```

#### Run in _production_ mode:

Compiles the application and starts it in production production mode.

```shell
yarn compile
yarn start
```

## Test It

Run the Mocha unit tests

```shell
yarn test
```

or debug them

```shell
yarn test:debug
```

## Try It

- Open you're browser to [http://localhost:3000](http://localhost:3000)
- Invoke the `/applications` endpoint
  ```shell
  curl http://localhost:3000/api/v1/applications
  ```

## Debug It

#### Debug the server:

```
yarn dev:debug
```

#### Debug Tests

```
yarn test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file

## Lint It

View prettier linter output

```
yarn lint
```

Fix all prettier linter errors

```
yarn lint
```
