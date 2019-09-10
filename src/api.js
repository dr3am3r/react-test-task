export default {
  getUser: () =>
    fetch('https://randomuser.me/api')
      .then(res => res.json())
      .then(res => res.results[0])
}