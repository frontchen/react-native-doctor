export default {
  list: () => {
    return api.get('/', {
      body: {
        code: 'utf-8',
        q: '书籍'
      }
    });
  }
};
