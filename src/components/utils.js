const USER = {
    userName: "hruday@gmail.com",
    password: "hruday123"
};
export function login(username, password) {
    if (username === USER.userName && password === USER.password) {
        localStorage.setItem("USER_INFO", JSON.stringify({ isLoggedIn: true }));
        return true;
    }
}