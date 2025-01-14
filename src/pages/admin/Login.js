import { setAdminToken } from "@/features/redux/slices/adminSlices/adminAuthSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/features/redux/apiQuery/admin/authApi";
const Login = () => {
  // state
  const [loginState, setLoginState] = useState({ email: "", password: "" });

  // rtk api login mutation query
  const [handleLoginApi, { isLoading }] = useLoginMutation();

  // onchange handle state
  const handleState = (e) => {
    const { name, value } = e.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  // declare dispatch
  const dispatch = useDispatch();

  // submit login handler
  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: loginState?.email,
      password: loginState?.password,
    };

    handleLoginApi(payload)
      .unwrap()
      .then((res) => {
        if (res?.success) {
          dispatch(
            setAdminToken({ token: res?.data?.token, user: res?.data?.user })
          );
        } else {
          alert(res?.message);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log("loading", isLoading);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-blue-600">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
          <div className="flex justify-center w-full my-2">
            <img src="/images/admin/logo.png" alt="" />
          </div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Admin Panel
          </h2>
          <p className="text-sm text-center text-green-500">
            Sign in to access your account
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleState}
                className="block w-full px-4 py-3 mt-2 text-gray-900 bg-gray-100 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleState}
                className="block w-full px-4 py-3 mt-2 text-gray-900 bg-gray-100 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="********"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-400"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-green-500 hover:text-green-600"
              >
                Forgot password?
              </a>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className="w-full px-4 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-800 focus:outline-none "
            >
              {isLoading ? (
                <span>Processing...</span>
              ) : (
                <span className="font-semibold">Sign In</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
