import { UsersInterface } from '../../interfaces/IUser';


const apiUrl = "http://localhost:8080";

async function createUser(data: UsersInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${apiUrl}/register`, requestOptions);
  const responseData = await response.json();
  
  if (response.status === 200) {
    // Successful response
    return { status: true, message: responseData.data };
  } else {
    // Error response
    return { status: false, message: responseData.error };
  }
}

const login = async (data: UsersInterface) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/login`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("uid", res.data.id);
        console.log(res.data);
        return res.data;
      } else {
        return false;
      }
    });

  return res;
};


async function GetProducts() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    
  };
  let res = await fetch(`${apiUrl}/customPC`, requestOptions)

.then((response) => response.json())

.then((res) => {

if (res.data) {

return res.data;

} else {

return false;

}

});


return res;
}

export {
  createUser,
  login,
  GetProducts
};