import axiosClient from './serviecBase';
const loginService = {
login:async (username, password) => {
    try {
        const response = await axiosClient.post('Login',{
            Username: username,
			Password: password,
		});
		if (response.data) {
			sessionStorage.setItem('token', response.data.newToken);
			sessionStorage.setItem('username',response.data.userInfo);
			sessionStorage.setItem('UserId',response.data.userId);
			sessionStorage.setItem('logined',true);
			sessionStorage.setItem('roles',JSON.stringify(response.data.roles));
		}
		return response.data;
		} catch (error) {
			throw error;
		}
}
};
export default loginService;