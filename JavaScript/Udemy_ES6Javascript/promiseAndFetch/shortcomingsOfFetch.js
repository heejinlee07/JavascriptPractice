url = 'https://jsonplaceholder.typicode.com/posts123456/';

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error));

/*
If the request fails for any reason whatsoever 
the promise will enter the rejected state in which case
we expect it to go to this catch statement down here.

But that is not the case with fetch.
*/

//TODO:I've got no idea what domain you're trying
url = 'https://jsonplaceholder.typicode123.com/posts123456/';

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error));

//Err name not resolved in this time, and i see 'BAD' on browser console.
//this is the only case in which fetch is ever going to hit the catch case.
