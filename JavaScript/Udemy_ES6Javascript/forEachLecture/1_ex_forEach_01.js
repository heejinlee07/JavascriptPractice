//for문을 forEach형태로 바꾸어라.

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}

//forEach
function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  posts.forEach(function (post) {
    savePost(post);
  });
}

//다른 ver.
var posts = [
  { id: 23, title: "Daily JS News" },
  { id: 52, title: "Code Refactor City" },
  { id: 105, title: "The Brightest Ruby" },
];

function handlePosts() {
  posts.forEach(function (post) {
    savePost(post);
  });
}
function savePost(post) {
  console.log("save post " + post.title);
}

handlePosts();
