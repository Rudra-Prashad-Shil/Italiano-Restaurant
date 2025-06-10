import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle } from "react-icons/fa";
// import banner from "../../assets/Banner-compressed.jpg"
import { NavLink } from "react-router";

const SignUp = () => (
  <div className="min-h-screen bg-white flex flex-col">
    {/* Banner */}
    <div className="bg-[url({banner})] bg-cover bg-center py-16 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-2 font-serif">Sign Up</h1>
      <div className="text-white mt-2">Home <span className="mx-2">/</span> <span className="text-amber-400">Sign up</span></div>
    </div>
    {/* Form */}
    <div className="flex-1 flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow p-8">
        <h2 className="text-black text-2xl font-bold text-center mb-6 font-serif">Sign Up With</h2>
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
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="First name *"
              className="w-1/2 border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name *"
              className="w-1/2 border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Phone number *"
              className="w-1/2 border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-1/2 border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input
              type="password"
              placeholder="Password *"
              className="w-1/2 border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm password *"
              className="w-1/2 border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-300 to-orange-400 text-white font-semibold py-3 rounded-full text-lg shadow mb-2"
          >
            Create Account
          </button>
          <div className="text-center text-sm text-gray-400 mt-2">
            Already have an account? <NavLink to="/signin" className="text-amber-400">Log in</NavLink>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default SignUp;