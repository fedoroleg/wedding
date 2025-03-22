console.log("works");

const actualPage = 1;

const infiniteObserver = new IntersectionObserver(
  ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);

      loadPosts(actualPage + 1);
    }
  },
  { threshold: 0.5 }
);

function loadPosts(page = 1) {
  fetch(`http://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      posts.forEach((post) => {
        const postEl = document.createElement("div");
        postEl.classList.add("card");
        postEl.innerHTML = `
        <h3>${post.title}</h3>
        <small>${post.id}</small>
        <p>${post.body}</p>
      `;
        document.body.append(postEl);
      });
      const lastCard = document.querySelector(".card:last-child");
      console.log(lastCard);
      infiniteObserver.observe(lastCard);
    })
    .catch(console.error);
}

loadPosts();
