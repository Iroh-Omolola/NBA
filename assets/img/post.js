function getAllUserPost(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((json) => {
      return json.map((post) => {
        return {
          userId,
          post: [
            {
              id: post.id,
              title: post.title,
              body: post.body,
            },
          ],
        };
      });
      return posts;
    })
    .catch((err) => {
      console.log('err:', err);
    });
}

getAllUserPost(1).then((posts) => {
  console.log('posts:', posts);
});
