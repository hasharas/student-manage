import { URL } from '../../config/const';
import HttpService from '../services/HttpService';

class UserService extends HttpService {
      // Create a new user
      async createUser(data) {
            const response = await this.sendRequest({
                  method: 'POST',
                  url: URL.POST_ID_USER,
                  data,
            });
            return response?.data || null;
      }

      // Fetch all users
      async fetchAllUsers() {
            const response = await this.sendRequest({
                  method: 'GET',
                  url: URL.GET_ALL_USERS,
            });
            return response?.data || [];
      }

      // Fetch a user by ID
      async fetchUserById(userId) {
            const response = await this.sendRequest({
                  method: 'GET',
                  url: URL.GET_ID_USER.replace('{user-id}', userId),
            });
            return response?.data || null;
      }

      // Update a user by ID
      async updateUserById(userId, data) {
            const response = await this.sendRequest({
                  method: 'PUT',
                  url: URL.UPDATE_ID_USER.replace('{user-id}', userId),
                  data,
            });
            return response?.data || null;
      }

      // Delete a user by ID
      async deleteUserById(userId) {
            const response = await this.sendRequest({
                  method: 'DELETE',
                  url: URL.DELETE_ID_USER.replace('{user-id}', userId),
            });
            console.log('Delete Response:', response);
            return response?.success ? response.data : null;
      }
}

const userService = new UserService();
export default userService;
