const postsSpace = document.querySelector('.postsSpace');

const createElement = (tag, classname, parent) => {
  const item = document.createElement(tag);
  item.className = classname;
  parent.appendChild(item);
  return item;
};

fetch('/getpost')
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);
    posts.forEach((item) => {
      const post = createElement('article', 'post', postsSpace);
      const postHeader = createElement('header', 'postHeader', post);
      const userInfo = createElement('div', 'userInfo', postHeader);
      const username = createElement('a', 'username', userInfo);
      username.href = '/home';
      username.textContent = item.username;
      const postTime = createElement('div', 'postTime', userInfo);
      const title = createElement('div', 'title', post);
      title.textContent = item.title;
      const postDetails = createElement('p', 'postDetails', post);
      postDetails.textContent = item.content;
    });
  });
