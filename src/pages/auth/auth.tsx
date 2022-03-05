import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(email, password);

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      alert("error signing in");
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-2">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-col justify-center items-center flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(supabase.auth.user());
  }, []);

  const handleSubmit = async () => {};

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-2">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign Up</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-col justify-center items-center flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>
                Sign Up
              </button>
              {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={}>
                Sign Up
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
