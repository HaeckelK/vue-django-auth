export default {
  logout() {
    console.log('api/auth logout called.');
  },
  getCSRFToken(commit, action) {
    fetch('/auth/csrf/', {
      credentials: 'same-origin',
    })
      .then((res) => {
        const csrfToken = res.headers.get('X-CSRFToken');
        commit(action, csrfToken);
        console.log(csrfToken);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
