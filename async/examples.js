function getUserProfile() {
    return fetch('https://api.example.com/user/123')
      .then(response => response.json())
      .then(user => {
        return fetch(`https://api.example.com/posts/${user.id}`);
      })
      .then(response => response.json())
      .then(posts => {
        console.log('User posts:', posts);
        return posts;
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
  


  //parallel execution? using async await 