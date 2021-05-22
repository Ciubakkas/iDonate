import React from "react";
import googleSvg from "src/assets/icons/google.svg";
import { RouteName } from "src/types";
import { Images } from "src/assets";
import { Button, Spinner } from "src/routes/generalComponents";

export const Login: view = ({
  shouldMount = observe.routes.list[RouteName.LOGIN].isMounted,
  setTriggerSignInWithGoogle = update.session.triggers.signInWithGoogle,
  setTriggerSignInWithKLP = update.session.triggers.signInWithKLP,
  googleAuth = observe.routes.queryParams.googleAuth,
  autologin = observe.routes.queryParams.autologin,
  // setTriggerSignInWithEmail = update.session.triggers.signInWithEmail,
  // setEmail = update.session.auth.email,
  // setPassword = update.session.auth.password,
}) => {
  if (!shouldMount) {
    return null;
  }
  function handleSigninGoogleClick() {
    setTriggerSignInWithGoogle.set(Date.now());
  }
  function handleSigninKLPClick() {
    setTriggerSignInWithKLP.set(Date.now());
  }
  // function handleSigninEmailClick() {
  //   setTriggerSignInWithEmail.set(Date.now());
  // }
  if (autologin && !googleAuth) {
    setTriggerSignInWithKLP.set(Date.now());
    return (
      <div className={"w-full h-screen flex justify-center items-center "}>
        <Spinner pink size={50} />
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen font-sans px-32 py-24 flex">
      <main className="sm:w-6/12 md:w-4/12 lg:w-3/12">
        <img key="0" src={Images.logo} alt="Logo" className="h-10 mb-6" />
        <h1 className="border-t klp-border1 leading-tight pt-4 mb-8 text-4xl">
          Contract
          <br />
          Negotiation
          <br />
          Solution
        </h1>
        <div>
          {/* <div className="w-full mb-3 font-roboto">
            <label className="block text-gray-800 text-sm mb-2">Email</label>
            <input
              type="email"
              className="px-3 py-3 placeholder-gray-500 text-gray-800 bg-white text-sm focus:outline-none w-full border klp-border1 font-medium"
              placeholder="Email"
              style={{ transition: "all .15s ease" }}
              onChange={(e: any) => setEmail.set(e.target.value)}
            />
          </div>

          <div className="w-full mb-3 font-roboto">
            <label className="block text-gray-800 text-sm mb-2">Password</label>
            <input
              type="password"
              className="px-3 py-3 placeholder-gray-500 text-gray-800 bg-white text-sm focus:outline-none w-full border klp-border1"
              placeholder="Password"
              style={{ transition: "all .15s ease" }}
              onChange={(e: any) => setPassword.set(e.target.value)}
            />
          </div> */}

          <div className="flex justify-between flex-wrap mt-6">
            {/* <Button onClick={handleSigninEmailClick}>Log in</Button> */}
            {/*<Button onClick={handleSigninKLPClick}>Log in with KLP</Button>*/}
            <div className="btn-wrapper text-center mt-1">
              <button
                className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={handleSigninGoogleClick}>
                <img alt="google sign in" className="w-5 mr-2 " src={googleSvg} />
                Google
              </button>
            </div>
          </div>
        </div>
      </main>
      <aside className="sm:hidden md:block md:w-5/12 lg:w-6/12 ml-24 pt-16">
        <div className="relative">
          <div
            style={{
              height: "100%",
              top: "-15%",
              right: "-15%",
              width: "100%",
            }}
            className="bg-green-200 absolute z-0"
          />
          <img key="0" src={Images.mall} alt="mall" className="relative z-10" />
        </div>
      </aside>
    </div>
  );
};
