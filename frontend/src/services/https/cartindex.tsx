
const apiUrl ="http://localhost:8080"


const GetCart = async () => {
    const id = localStorage.getItem("uid");
  
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(`${apiUrl}/cart/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result.data ? result.data : false;
      });
  
    return res;
  };
  const DeleteCart = async () => {
    const id = localStorage.getItem("uid");
  
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(`${apiUrl}/cart/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result.data ? result.data : false;
      });
  
    return res;
  };

  export {
    GetCart,
    DeleteCart
  };