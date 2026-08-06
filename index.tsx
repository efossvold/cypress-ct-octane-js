import { getContainerEl } from "@cypress/mount-utils";
import { type ComponentBody, createRoot } from "octane";

// let dispose: () => void;

// function cleanup() {
//   dispose?.();
// }

interface MountingOptions {
  log?: boolean;
}

export function mount(component: Parameters<ComponentBody>[0], options: MountingOptions = {}) {
  const root = getContainerEl();

  if (!root) {
    throw new Error("'root' element not found");
  }

  createRoot(root).render(component);

  // dispose = render(component, root);

  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

// setupHooks(cleanup);
