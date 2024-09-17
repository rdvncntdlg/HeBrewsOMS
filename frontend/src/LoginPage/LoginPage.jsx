import React from 'react';
import LoginForm from './LoginForm';
import Logo from './Logo';

function LoginPage() {
  return (
    <main className="flex relative flex-col min-h-[1024px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/290d48176944c328e6fdaaa945b585e858a708bb3d80772fb1461ba4e00377ea?placeholderIfAbsent=true&apiKey=35c7d1a044fe488b9b8cf5e5a4a5bccb" alt="" className="object-cover absolute inset-0 size-full" />
      <section className="flex relative flex-col justify-center items-center px-16 py-44 w-full bg-neutral-950 bg-opacity-70 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="pr-14 -mb-9 max-w-full rounded-3xl bg-neutral-100 shadow-[6px_12px_14px_rgba(0,0,0,0.25)] w-[1008px] max-md:pr-5 max-md:mb-2.5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-center px-20 py-56 w-full rounded-3xl bg-neutral-950 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
                <Logo />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;