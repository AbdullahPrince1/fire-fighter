import { Link } from "react-router";
import MyContainer from "../components/MyContainer";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

export default function RegisterPage() {
  const { createAccountWithEmailPass, emailVerification, updateProfileInfo } =
    use(AuthContext);
  const handleRegisterForm = (evt) => {
    evt.preventDefault();
    const userName = evt.target.userName.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    createAccountWithEmailPass(email, password)
      .then((userInfo) => {
        const user = userInfo.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
    emailVerification();
    updateProfileInfo(userName);
  };
  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Register Now
            </h2>

            <form className="space-y-4" onSubmit={handleRegisterForm}>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Username"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 p-2 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 p-2 rounded-xl"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  name="password"
                  placeholder="Enter Password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400 p-2 rounded-xl"
                />
                <span className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                  {/* {show ? <FaEye /> : <IoEyeOff />} */}
                </span>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Register
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-pink-300 hover:text-white font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
}
