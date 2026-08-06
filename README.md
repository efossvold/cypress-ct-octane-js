<div><a href="https://octanejs.dev/">Octane</a> framework definition and mount adapter for <a href="https://docs.cypress.io/app/component-testing/">component testing</a> with <a href="https://www.cypress.io/">Cypress</a></div>

## Installation

#### With bun

```sh
bun i cypress-ct-octane-js
```

#### With pnpm

```sh
pnpm add cypress-ct-octane-js
```

#### With NPM

```sh
npm cypress-ct-octane-js
```

## Usage example

```javascript
import { mount } from "cypress-ct-octane-js";

it("example test", () => {
  mount(<>Hello World!</>);
  cy.contains("Hello World!").should("be.visible");
});
```
