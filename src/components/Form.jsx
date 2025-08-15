import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import emailjs from "emailjs-com";
import { FaTrashAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [chars, setChars] = useState(0);
  const [token, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 200) return;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setChars(value.length);
  };

  const clearForm = () => {
    setForm({ name: "", email: "", message: "" });
    setChars(0);
    setToken("");
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!token) {
    toast.error("Please complete the CAPTCHA");
    return;
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });

    // Reset Turnstile so user can submit again
    if (window.turnstile) {
      window.turnstile.reset();
      setToken(""); // also clear token state
    }

  } catch (error) {
    toast.error("Failed to send message. Please try again.");
    console.error(error);
  }
};

  return(
    <>
  <form
  onSubmit={handleSubmit}
  className="
    w-full 
    max-w-[95%] sm:max-w-sm md:min-w-[26rem] 
    lg:max-w-[28rem] xl:max-w-xl  /* smaller on lg */
    relative 
    shadow-2xl 
    border-slate-800 
    rounded 
    font-lexend 
    bg-white 
    flex 
    flex-col 
    text-xs sm:text-sm md:text-base
  "
>
  {/* Header */}
  <div className="flex justify-between items-center px-2 sm:px-3 pt-2 lg:px-3 lg:pt-2.5">
    <div className="w-full px-0.5 sm:px-1">
      <h1 className="font-poppins w-full text-slate-700 text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold">
        Let’s contact me
      </h1>
      <p className="text-slate-400 w-full text-[0.7rem] sm:text-xs md:text-sm lg:text-xs xl:text-sm italic">
        Fill out the form below to get in touch.
      </p>
    </div>
    <button
      type="button"
      onClick={clearForm}
      className="text-slate-500 duration-300 hover:text-slate-700 absolute top-4 right-4"
      title="Clear form"
    >
      <FaTrashAlt size={18} className="sm:size-[20px] lg:size-[18px]" />
    </button>
  </div>

  {/* Body */}
  <div className="px-2 sm:px-3 md:px-4 lg:px-3 xl:px-4 pb-3 pt-1 flex flex-col">
    {/* Name */}
    <label className="block text-slate-500 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-medium mb-0.5 sm:mb-1">
      Name
    </label>
    <input
      name="name"
      type="text"
      value={form.name}
      onChange={handleChange}
      required
      placeholder="Dharun Marshall"
      className="w-full p-2 sm:px-2.5 sm:py-1.5 lg:px-2 lg:py-1.5 font-poppins duration-500 text-slate-700 bg-white border border-slate-400 rounded outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 text-xs sm:text-sm lg:text-sm"
    />

    {/* Email */}
    <label className="block text-slate-500 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-medium mb-0.5 sm:mb-1 mt-2">
      Email
    </label>
    <input
      name="email"
      type="email"
      value={form.email}
      onChange={handleChange}
      required
      placeholder="example@mail.com"
      className="w-full p-2 sm:px-2.5 sm:py-1.5 lg:px-2 lg:py-1.5 font-poppins text-slate-700 duration-500 bg-white border border-slate-400 rounded outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 text-xs sm:text-sm lg:text-sm"
    />
    {/* Message */}
    <label className="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-slate-500 font-medium mb-0.5 sm:mb-1 mt-2">
      Message
    </label>
    <textarea
      name="message"
      value={form.message}
      onChange={handleChange}
      maxLength={200}
      required
      placeholder="Reason for contacting me..."
      rows={3}
      className="w-full h-20 lg:h-28 px-2 py-1 sm:px-2.5 sm:py-1.5 lg:px-2 lg:py-1.5 font-poppins text-slate-700 duration-500 bg-white border border-slate-400 rounded outline-none resize-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 text-xs sm:text-sm lg:text-sm"
    />
    <div className="text-[0.7rem] sm:text-xs lg:text-[0.75rem] text-gray-500 pt-0.5 text-right">
      {chars}/200 characters
    </div>

    {/* CAPTCHA */}
    <div className="w-fit h-fit pt-1 lg:scale-[0.95]">
      <Turnstile
        className="bg-transparent"
        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
        onSuccess={(token) => setToken(token)}
        options={{ theme: "light", size: "flexible" }}
      />
    </div>

    {/* Error */}
    {errorMsg && (
      <p className="text-red-500 text-xs sm:text-sm lg:text-[0.8rem] mt-1">{errorMsg}</p>
    )}

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-slate-700 text-white mt-3 py-1.5 sm:py-2 lg:py-1.5 font-poppins rounded border-2 border-slate-700 font-bold transition-colors duration-500 hover:bg-white hover:text-slate-700 hover:border-slate-700 text-xs sm:text-sm lg:text-sm"
    >
      SUBMIT
    </button>

    {/* Toast */}
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
</form>
    </>
  );
};

export default Form;
