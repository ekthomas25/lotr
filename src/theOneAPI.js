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
  static quotes(quote) {
    const newHeaders = new Headers();
    newHeaders.append("Authorization", "Bearer jPfPgbaSQGmObc8HixcC");
    
    const requestOptions2 = {
      method: 'GET',
      headers: newHeaders,
      redirect: 'follow'
    };

    return fetch(`https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea0/quote`, requestOptions)
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


