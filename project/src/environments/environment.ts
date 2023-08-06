// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const api_url_node = 'https://backnews.onrender.com/api/';
export const api_url_spring = 'https://mbdsp9-32-59-60-backjava.onrender.com/api/';

export const userConnected = {
  id: 0,
  token: '',
  nom: '',
  prenom: '',
  email: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.