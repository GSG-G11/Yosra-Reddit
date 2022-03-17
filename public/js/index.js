const postsSpace = document.querySelector('.postsSpace');
const submitPost = document.querySelector('.submitPost');
const title = document.querySelector('#title');
const content = document.querySelector('#content');

const createElement = (tag, classname, parent) => {
  const item = document.createElement(tag);
  item.className = classname;
  parent.appendChild(item);
  return item;
};

fetch('/getpost')
  .then((res) => res.json())
  .then((posts) => {
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


  submitPost.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
      title : title.value,
      content: content.value,
    };
    fetch('/addpost' , {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then((result) => result.json())
    .then(console.log);
  })
  
