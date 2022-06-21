git init
mkdir -p .vscode dist docs src/models src/views src/controllers src/public src/routes src/server src/__tests__

curl -o .gitignore https://gist.githubusercontent.com/Leandroido/0aa3e8aa4ce355951fe15903cfb3eba1/raw/.gitignore
curl -o .vscode/extensions.json https://gist.githubusercontent.com/Leandroido/a758bc67ff165fa3f0a8443052a25a9a/raw/.vscode_extensions.json
curl -o .vscode/settings.json https://gist.githubusercontent.com/Leandroido/ea044ccd526db1f641705d0dd0d297d7/raw/.vscode_settings.json
curl -o .vscode/launch.json https://gist.githubusercontent.com/Leandroido/fd27948bd07239e8e2079aef15ff91d5/raw/.vscode_launch.json
curl -o package.json https://gist.githubusercontent.com/Leandroido/47de1c349499584f6bab9aa56f15c62d/raw/package.json
curl -o .editorconfig https://gist.githubusercontent.com/Leandroido/1717c029dd0bb5ad020fcdab4144399d/raw/.editorconfig
curl -o .prettierrc https://gist.githubusercontent.com/Leandroido/692b4de158b4669a38e1bd7f316419ad/raw/.prettierrc
curl -o .prettierignore https://gist.githubusercontent.com/Leandroido/93c658df607283d533473f662345e764/raw/.prettierignore
curl -o .eslintrc.json https://gist.githubusercontent.com/Leandroido/01dc53c604e0318cb3fc38135ff34f04/raw/.eslintrc.json
curl -o .eslintignore https://gist.githubusercontent.com/Leandroido/fdae4785455e167a90c6b1220c5a86cc/raw/.eslintignore
curl -o babel.config.js https://gist.githubusercontent.com/Leandroido/5366a9efc06123113f127d2c4b66e9da/raw/babel.config.js
curl -o jest.config.js https://gist.githubusercontent.com/Leandroido/c4cc12734ded7331c32bb62cf3187522/raw/jest.config.js
curl -o LICENSE https://gist.githubusercontent.com/Leandroido/74cc3c198021993dd2f86d63bd970f0d/raw/LICENSE
curl -o tsconfig.json https://gist.githubusercontent.com/Leandroido/ff4e22a0f2b956845b69c7041d235db6/raw/tsconfig.json

npm i express \
  ejs \
  dotenv
  
npm i typescript \
  @types/typescript \
  ts-node-dev \
  @types/node \
  tsconfig-paths \
  @types/express -D

npm i @babel/core \
  @babel/cli \
  @babel/node \
  @babel/preset-env \
  @babel/preset-typescript \
  @babel/plugin-transform-typescript \
  @babel/plugin-proposal-class-properties \
  babel-plugin-module-resolver -D

npm i eslint \
  babel-eslint \
  eslint-plugin-node \
  eslint-plugin-promise \
  eslint-plugin-import \
  eslint-plugin-flowtype \
  eslint-plugin-jest \
  eslint-plugin-prettier \
  eslint-config-prettier \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser -D

npm i jest \
  ts-jest \
  @types/jest \
  supertest \
  @types/supertest -D