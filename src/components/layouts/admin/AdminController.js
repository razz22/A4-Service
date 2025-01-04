import Login from "@/pages/admin/Login";
import React from "react";
import AdminLayout from "./AdminLayout";
import { useSelector } from "react-redux";

const AdminController = ({ children }) => {
  const loginStatus = useSelector((state) => state.adminAuthSlice.token);
  return loginStatus ? <AdminLayout children={children} /> : <Login />;
};

export default AdminController;
