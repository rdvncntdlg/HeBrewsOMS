import React from 'react';

function LoginForm() {
  return (
    <form className="flex flex-col self-stretch my-auto font-medium text-black max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92458b369f652a740f59cf786c687ddadef46f56721fe5da7825f66e7d52c349?placeholderIfAbsent=true&apiKey=35c7d1a044fe488b9b8cf5e5a4a5bccb" alt="" className="object-contain self-center aspect-[0.86] w-[55px]" />
      <h1 className="self-center mt-2 text-2xl font-semibold text-center">
        Login to Your Account
      </h1>
      <label htmlFor="username" className="self-start mt-20 text-base text-center max-md:mt-10">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="mt-1.5 w-full"
        aria-label="Username"
      />
      <label htmlFor="password" className="self-start mt-7 text-base">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="mt-1.5 w-full"
        aria-label="Password"
      />
      <a href="#" className="self-end text-xs text-right text-neutral-400">
        Forgot Password?
      </a>
      <button
        type="submit"
        className="px-16 py-2.5 mx-5 mt-10 text-sm text-center text-white whitespace-nowrap rounded-xl bg-neutral-950 max-md:px-5 max-md:mx-2.5"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;