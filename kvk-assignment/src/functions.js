var fetch = require('isomorphic-fetch');


/**
* handle state change in context's state
*/
export function handleChange(context, state_name, e) {
  var newState = {};
  newState[state_name] = (typeof e.target !== "undefined") ? e.target.value : e;
  context.setState(newState);
}

/**
* generic API GET Request
*/
export function apiGET(api_url, error_id) {
  return new Promise(function(resolve, reject) {
    fetch(
      api_url,
      {}
    )
    .then(function(response) {
        resolve(response.json());
      },
      function(err) {
        // Error WHILE fetching
        let err_key = "apiGET_error_while";
        console.error("["+new Date()+"]["+err_key+"] "+api_url);
        reject(err_key);
        // this is also thrown if the database or the API is offline/unreachable
      }
    );;
  });
}