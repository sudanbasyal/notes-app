import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/auth/authService";
import { logoutUser } from "../features/auth/authSlice";
import { User } from "../interface/user";
import { errorHandler } from "../lib/utils";



const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();
  
  const [user, setUser] = useState<User | null>(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  });

  const updateUser = (userData: User) => {
    try {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const logout = async () => {
    try {
      await logoutApi().unwrap();
      localStorage.removeItem('user');
      dispatch(logoutUser());
      setUser(null);
      navigate("/login");
    } catch (error) {
      errorHandler(error,'Logout Failed');
      localStorage.removeItem('user');
      dispatch(logoutUser());
      setUser(null);
      navigate("/login");
    }
  };

  return {
    user,
    updateUser,
    logout,
  };
};

export default useUser;
