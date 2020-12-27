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

    usersProfile(userId) {
        return instance.get(`profile/ ` + userId,)


            .then(response => {
                return response.data;
            })

    },
    followUser(u) {
        return instance.delete(`follow/${u.id}`, {})
    },
    unfollowUser(u) {
        return instance.post(`follow/${u.id}`, {}, {})
    },

}