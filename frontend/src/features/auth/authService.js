import axios from "axios";

const API_URL = "https://noah-twitter-clone.herokuapp.com/api/users/";

// Register
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("twitter-clone-user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("twitter-clone-user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout
const logout = () => {
  localStorage.removeItem("twitter-clone-user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
