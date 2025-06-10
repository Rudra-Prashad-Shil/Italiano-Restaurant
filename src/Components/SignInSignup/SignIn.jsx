import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router";

const SignIn = () => (
  <div className="min-h-screen bg-white flex flex-col">
    {/* Banner */}
    <div className="bg-[url('../../assets/Banner-compressed.jpg')] bg-cover bg-center py-16 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-2 font-serif">Sign In</h1>
      <div className="text-white mt-2">Home <span className="mx-2">/</span> <span className="text-amber-400">Sign in</span></div>
    </div>
    {/* Form */}
    <div className="flex-1 flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow p-8">
        <h2 className="text-black text-2xl font-bold text-center mb-6 font-serif">Log In With</h2>
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-blue-600 text-white rounded-full p-3"><FaFacebookF /></button>
          <button className="bg-blue-800 text-white rounded-full p-3"><FaLinkedinIn /></button>
          <button className="bg-sky-400 text-white rounded-full p-3"><FaTwitter /></button>
          <button className="bg-red-500 text-white rounded-full p-3"><FaGoogle /></button>
        </div>
        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <form className="text-black">
          <input
            type="text"
            placeholder="Username or Email *"
            className="w-full border border-gray-300 rounded-full px-5 py-3 mb-4 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password *"
            className="w-full border border-gray-300 rounded-full px-5 py-3 mb-4 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-300 to-orange-400 text-white font-semibold py-3 rounded-full text-lg shadow mb-2"
          >
            Log In
          </button>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>No account? <NavLink to="/signup" className="text-amber-400">Register now</NavLink></span>
            <a href="#" className="text-amber-400">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default SignIn;