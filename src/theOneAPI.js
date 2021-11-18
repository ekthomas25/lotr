export default class TheOne {
  static character(name) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer jPfPgbaSQGmObc8HixcC");
    
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    return fetch(`https://the-one-api.dev/v2/character?name=${name}`, requestOptions)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  } 
}



