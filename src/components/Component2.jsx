import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Component2({ mode = "signup" }) {
  const isSignup = mode === "signup";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isSignup) {
      navigate("/page3", {
        state: { email: formData.email, mode: "signup" },
      });
    } else {
      navigate("/page11");
    }
  };

  return (
    <div className="bg-primary flex justify-center mt-8">
      <div className="max-w-3xl mx-auto px-4 w-full py-5">

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Getting Started!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto space-y-5"
        >
          {/* Email */}
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#6C6460] text-white pl-12 pr-4 py-3 rounded-xl placeholder-white focus:outline-none"
              placeholder="Email"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
  <Lock
    size={20}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
  />

  <input
    type={showPassword ? "text" : "password"}
    name="password"
    value={formData.password}
    onChange={handleChange}
    className="w-full bg-[#6C6460] text-white pl-12 pr-12 py-3 rounded-xl placeholder-white focus:outline-none"
    placeholder="Password"
    required
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
  >
    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>

          {/* Confirm Password */}
          {isSignup && (
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200"
              />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-[#6C6460] text-white pl-12 pr-12 py-3 rounded-xl placeholder-white focus:outline-none"
                placeholder="Confirm Password"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSignup && !formData.agree}
            className="w-full mt-4 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative disabled:opacity-50"
          >
            <span>{isSignup ? "Sign Up" : "Sign In"}</span>

            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <HiOutlineArrowRight className="text-black" size={14} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}