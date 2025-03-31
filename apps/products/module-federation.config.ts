import { ModuleFederationConfig } from '@nx/module-federation';

const coreLibraries = new Set([
  'bootstrap',
  'bootstrap-icons'
]);

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './Routes': 'apps/products/src/app/remote-entry/entry.routes.ts',
  },
  shared: (libraryName, defaultConfig) => {
    console.log("RUNTIME Product  ===>", libraryName, defaultConfig)
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return defaultConfig;
  },

  additionalShared: [
    'bootstrap',
    'bootstrap-icons'
  ],
  disableNxRuntimeLibraryControlPlugin: true
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
