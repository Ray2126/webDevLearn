const posts = [
  { title: "Post One", body: "this is post one" },
  { title: "Post Two", body: "this is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback(); //This means is waits for the post to push before it adds to DOM
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);
