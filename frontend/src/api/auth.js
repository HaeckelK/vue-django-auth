export default {
  logout() {
    console.log('api/auth logout called.');
  },
  getCSRFToken(callback) {
    fetch('/auth/csrf/', {
      credentials: 'same-origin',
    })
      .then((res) => {
        const csrfToken = res.headers.get('X-CSRFToken');
        callback(csrfToken);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
