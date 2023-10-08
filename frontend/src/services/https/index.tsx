import { UsersInterface } from '../../interfaces/IUser';

const apiUrl = "http://localhost:8080";

async function createUser(data: UsersInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${apiUrl}/register`, requestOptions);
    const responseData = await response.json();

    if (response.status === 200) {
      // Successful response
      return { status: true, message: responseData.data };
    } else {
      // Error response
      return { status: false, message: responseData.error };
    }
  } catch (error) {
    throw error;
  }
}

export {
  createUser
};