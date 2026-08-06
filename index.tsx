import { getContainerEl, setupHooks } from "@cypress/mount-utils";
import { type ComponentBody, createRoot } from "octane";

let dispose: () => void;

function cleanup() {
  dispose?.();
}

interface MountingOptions {
  log?: boolean;
}

export function mount(component: Parameters<ComponentBody>[0], options: MountingOptions = {}) {
  const container = getContainerEl();

  if (!container) {
    throw new Error("'root' element not found");
  }

  const root = createRoot(container);
  dispose = root.unmount;
  root.render(component);

  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

setupHooks(cleanup);
