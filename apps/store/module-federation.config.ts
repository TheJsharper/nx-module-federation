import { ModuleFederationConfig } from '@nx/module-federation';


const coreLibraries = new Set([
  'bootstrap',
  'bootstrap-icons'
]);




const config: ModuleFederationConfig = {
  name: 'store',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: ['products', 'checkout'],
  shared: (libraryName, defaultConfig) => {
    console.log("RUNTIME SHARED LIB ===>", libraryName, defaultConfig)
    if (!coreLibraries.has(libraryName)) {
      return {eager:true, singleton:true};
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
