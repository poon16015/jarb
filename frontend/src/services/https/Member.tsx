import { MemberInterface } from '../../interfaces/IMember';

const apiUrl = "http://localhost:8080";

async function createMember(data: MemberInterface) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${apiUrl}/members`, requestOptions);
    const responseData = await response.json();

    if (response.status === 200) {
      // Successful response
      return { status: true, message: responseData.data };
    } else {
      // Error response
      return { status: false, message: responseData.error };
    }
  } catch (error) {
    throw new Error("An error occurred while creating a member.");
  }
}

async function getMember(memberId: string) {
  try {
    const response = await fetch(`${apiUrl}/members/${memberId}`);
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
async function updatedMemberData(memberId: number, data: MemberInterface) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${apiUrl}/member2/${memberId}`, requestOptions);
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

async function deleteMember(memberId: number) {
  const requestOptions = {
    method: "DELETE",
  };

  try {
    const response = await fetch(`${apiUrl}/member/${memberId}`, requestOptions); //*****
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

export { createMember,getMember, updatedMemberData, deleteMember };
