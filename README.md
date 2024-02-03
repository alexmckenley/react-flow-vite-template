# Vite + React + Flow Template 

Simple React app template built with Flow component sytnax! 🔥

## Getting started

1. Create the project.

   ```bash
   npx degit alexmckenley/react-flow-vite-template my-app
   ```

2. Access the project directory.

   ```bash
   cd my-app
   ```

3. Initialize a git repository.

   ```bash
   git init
   ```

4. Install dependencies.

   ```bash
   yarn install
   ```

5. Start dev server with hot reload at http://localhost:3000.
   ```bash
   yarn run dev
   ```

## Other commands

### Lint

```bash
yarn run lint
```

### Format 

```bash
yarn run format
```

### Build

```bash
yarn run build
```

### Run the app in production mode

```bash
yarn run serve
```

## VSCode configuration
For real-time IDE hints in VSCode, install the [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) extension and set the following configuration value:
```json
{
  "flow.pathToFlow": "${workspaceFolder}/node_modules/flow-bin/vendor/flow",
}
```

## License

This project is licensed under the MIT License.
