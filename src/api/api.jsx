import React, { useState } from "react";
import axios from "axios";
import userProfileStore from "../store/userProfile";

export const createNewAccount = async (credentials = null) => {
  if (!credentials) return;
  await axios
    .post("http://206.189.91.54/api/v1/auth", {
      email: credentials.email,
      password: credentials.password,
      password_confirmation: credentials.password_confirmation,
    })
    .then((res) => {
      console.log(res);
      alert("Successfully Created");
    })
    .catch((ex) => {
      alert("Something went wrong. Please check the server API and try again");
      console.error(ex);
    });
};



export const useLoginAccount = async (credentials = null) => {
  // const { overwriteProfile } = userProfileStore(
  //   (state) => ({ overwriteProfile: state.overwriteProfile })
  // );
  const [isSuccess, setIsSuccess] = useState(false);

  try {
    const response = await axios.post("http://206.189.91.54/api/v1/auth/sign_in", {
      email: credentials.email,
      password: credentials.password,
    })
  
    const headers = await response.headers
    // overwriteProfile({...headers})
    alert("Successful Login")

  } catch (ex) {
    alert("Something went wrong. Please check the server API and try again");
    console.error(ex);
  }
  return <></>;
};

export const createChannel = (credentials = null) => {};

export const addUserToChannel = (credentials = null) => {};

export const sendChannelMessage = (credentials = null) => {};

export const getChannelMessage = (credentials = null) => {};

export const sendDirectMessage = (credentials = null) => {};

export const getDirectMessages = (credentials = null) => {};

export const getAllUsers = async (credentials = null) => {
  if (!credentials) return  
  const {data} = await axios.get("http://206.189.91.54/api/v1/users",{ headers: credentials});
  return data.data
};

export default useLoginAccount;