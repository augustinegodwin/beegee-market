import { get } from "http";
import { useAuthStore } from "../store/auth.store";
import axiosInstance from "./axios";
import Cookies from "js-cookie";
const serverConfig = {
  base_Url: "https://beegee-backend-1.onrender.com/api",
};



const getCookie = (name: string) => {
    const value = Cookies.get(name);
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  const signedCookies1 = {
  accessToken: getCookie("RFTFL"),
  refreshToken: getCookie("ACTFL"),
};
const signedCookies = JSON.stringify(signedCookies1);
export const getAllProducts = async (searchparam: string) => {
  try {
    const products = await axiosInstance.post(`/v1/products/category/?search=${searchparam}`);
  const data= await products.data;
    if (!data) throw Error;
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const getAllOrders = async () => {
  try {
    const orders = await axiosInstance.post(`/v1/orders/showAllMyOrders`);
    const data = await orders.data;
    if (!data) throw Error;
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
export const loginUser = async ({
  phoneNumber,
  password,
}: {
  phoneNumber: string;
  password: string;
}) => {
  try {
    const user = await axiosInstance.post(`/v1/auth/login`, {
      phoneNumber,
      password,
      // matricNumber:matric.toLowerCase()
    });
    const data = await user;
    return data.data;
  } catch (error) {
    return   error; 
  }
};

export const getAuthenticatedUser = async () => {
  try {
    const user = await axiosInstance.post(`/v1/auth`, {
      signedCookies,
    });
    const data = await user.data;
    if (!data) throw Error;
    return data;
  } catch (error) {
    console.error("Error fetching authenticated user:", error);
    throw error;
  }
};

const signUp = async (FormData: any) => {
  const refreshToken = 'Cookies.get("RFTFL");';
  const accessToken = 'Cookies.get("ACTFL");';
  const signedCookies = {
    refreshToken,
    accessToken,
  };
  FormData.append("signedCookies", JSON.stringify(signedCookies));
  for (const [key, value] of FormData.entries()) {
    console.log(`${key}:`, value);
  }
  try {
    const request = await axiosInstance.post("/products/create", FormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const response = await request;
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
