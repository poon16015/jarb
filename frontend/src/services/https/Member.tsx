import { MemberInterface } from "../../interfaces/IMember";

const apiUrl = "http://localhost:8080";


async function getMember() {
  const id = localStorage.getItem("uid");
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${apiUrl}/getMember/${id}`, requestOptions);
    const responseData = await response.json();

    if (response.status === 200) {
      // Successful response
      return { status: true, data: responseData.data };
    } else {
      // Error response
      return { status: false, error: responseData.error };
    }
  } catch (error) {
    throw new Error("An error occurred while fetching member information.");
  }
}
async function updatedMemberData(data: MemberInterface) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/updatedMemberData`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

async function DeleteMember(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE",
  };

  try {
    const response = await fetch(
      `${apiUrl}/deleteMember/${id}`,
      requestOptions
    ); //*****
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


export {  getMember, updatedMemberData, DeleteMember };
