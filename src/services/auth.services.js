import axios from "axios";

/**
 * Metodo para crear un usuario.
 * @param {email:String,fullname:String,password:string} User: User to be created.
 * @returns number: 201: User created | 400: Bad request: user repeated| 500: Internal server error.
 */
export const signUpService = async (user) => {
    try {
        //Peticion de login a la api
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/auth/signup',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "email": user.email,
                "fullName": user.fullName,
                "password": user.password
            }
        });
        if (response.status === 201) {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            return response.status;
        }
    } catch (error) {
        console.error("Error: ", error.response.data.message);
        return error.response.status;
    }
};


/**
 * Metodo para iniciar sesión.
 * @param {email:String,password:string} User: User to be authenticated.
 * @returns {200: User authenticated | 401: User not authenticated. | 500: Internal server error.}
 */

export const loginService = async (email, password) => {//TODO: usar env para url
    try {
        //Peticion de login a la api
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { email, password }
        });
        if (response.status === 200) {
            console.log("usuario logueado", response.data)
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            return response.status;
        }
    } catch (error) {
        return error.response.status;
    }
};

export const logout = async () => {
    let token = localStorage.getItem("refreshToken");
    if (!token) {
        token = "";
    }
    console.log("refreshToken: ",token)

    const data = JSON.stringify({ "token": token });

    const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/logout', // Cambia esto según la URL correcta
        headers: { 'Content-Type': 'application/json' },
        data: data
    };

    try {
        await axios.request(config);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return;
    } catch (error) {
        console.error("Error: ", error);
        return;
    }
}
