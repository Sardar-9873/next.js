"use client";

import { useRouter } from "next/navigation";


function SignIn() {

  const router = useRouter();

  function signInClickHandler() {
    router.replace("dashboard");
  }

  function forgotPwdClickHandler() {
    router.push("signin/forgot");
  }

  function refreshClickHandler() {
    router.refresh();
  }

  function goBackClickHandler() {
    router.back();
  }

  function goForwardClickHandler() {
    router.forward();
  }

  return (
    <div>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={signInClickHandler}>Sign In</button>
      <button onClick={forgotPwdClickHandler}>Forgot Pwd</button>
      <button onClick={refreshClickHandler}>Refresh Page</button>
      <button onClick={goBackClickHandler}>Go Back</button>
      <button onClick={goForwardClickHandler}>Go Forward</button>
    </div>
  );
}

export default SignIn;