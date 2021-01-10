import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "25b67b35-72b9-4f04-bad1-4eb7a553eaee"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        return instance.get(`profile/ ` + userId,)


            .then(response => {
                return response.data;
            })

    },
    followUser(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}` )
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },

}
export const authAPI = {
    me() {
        return instance.get(`auth/me/`)

    }
}