import axios from "axios";

/**
 * Metodo para crear un usuario.
 * @param {email:String,fullname:String,password:string} User: User to be created.
 * @returns {email:String,fullName:String,_id:String} newUser: User created.
 */
export const createUser = async (user) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": user.email,
            "fullName": user.fullName,
            "password": user.password
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return await fetch("http://localhost:3000/api/users/", requestOptions);

    } catch (error) {
        console.error('error', error);
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
            url: 'http://localhost:3000/api/users/login',
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


