/*
Fetch is something that is a part of the browser 
and you don't really get to see 
the internal workings of it to do much.
*/

/*
we can use this fetch function right here 
to make Ajax requests across the Internet and fetch resources.
*/

url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url);

/*
위 상황에서 browser에 입력하면 pending상태이다.
promise whenever we create the request,this is a long running process.
This is something where we have to reach out to the Internet wait for something to happen 
and then only after we get a response back if it is successful 
the promise is going to enter the results state and
then we could register a dot then helper to get access to the data.
*/

//TODO:.then으로 data에 접근
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url).then((data) => console.log(data));

/*
Whenever you make a request the response did you immediately get back here 
does not immediately actually contain your data.

This is not our data right here. 
This is an object that represents the response that 
we got back from the server 
to actually get access to the data we have to call a method on it
*/

/*
we just got back from the server and 
it pulls some actual readable Jaison data out of the response that.

Again we're doing this because whenever we get that response back from the fetch 
it doesn't actually contain our data here to get access to the data we actually care about.

We have to call DOT Jaison.
*/

//TODO: 반드시 json을 호출하고, 그 이후에 실질적인 data에 접근할 수 있다.
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
