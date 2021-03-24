const logout = () => {
  localStorage.removeItem('AUTH_TOKEN');
  window.location.assign('/');
};

export default logout;
