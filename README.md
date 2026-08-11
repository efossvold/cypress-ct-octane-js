<a href="https://octanejs.dev/">Octane</a> framework definition and mount adapter for <a href="https://docs.cypress.io/app/component-testing/">component testing</a> with <a href="https://www.cypress.io/">Cypress</a>

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

## Configuration

Add `cypress-ct-octane-js` framework to your `cypress.config.{ts,js}` file

```ts
export default defineConfig({
  component: {
    devServer: {
      framework: "cypress-ct-octane-js",
      bundler: "vite",
      //...more config if necessary
    },
  },
});
```

If you use Typescript, you may get a type error when setting the framework property. To fix it, type cast the property to `any` like this:

```ts
framework: 'cypress-ct-octane-js' as any,
```

## Adding mount command

Add the following lines to your `component.ts` in the `cypress` directory.

```ts
import { mount } from "cypress-ct-octane-js";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);
```

## Usage example

You can now use the `cy.mount` function to mount octane components in Cypress.

```javascript
import { Greeting } from "my-octane-components";

it("should display 'Hello World'", () => {
  cy.mount(<Greeting text="Hello World!" />);
  cy.contains("Hello World!").should("be.visible");
});
```
