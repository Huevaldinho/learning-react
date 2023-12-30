
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
