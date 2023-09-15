import api from './api';

class UserService {
  getUserObject() {
    return api.get('/building/object')
  }
  getUserData() {
    const userId = JSON.parse(localStorage.getItem("user")).userId
    return api.get(`/users/${userId}`)
  }
}

export default new UserService();