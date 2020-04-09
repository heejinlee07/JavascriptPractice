var post = { id: 4, title: "New Post" };

var comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was ok" },
  { postId: 4, content: "neat" },
];

//관련성 있는 data를 sort

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

/*
So whenever you're working on a client side application 
you've got a list of records and you need to filter it somehow
Definitely take a look at the filter helper.
*/
