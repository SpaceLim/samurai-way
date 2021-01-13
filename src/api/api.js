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
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);

    },
    followUser(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}` )
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/ ` + userId).then(response => {
                return response.data;
            })
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status/', { status: status })
    }


}


export const authAPI = {
    me() {
        return instance.get(`auth/me/`);
    },
    login(email,password,rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login');
    }
}