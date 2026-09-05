import SignIn from "./SignIn";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const data = res.json();
  return data;
}

async function Page() {

  const data = await fetchData();
  console.log(data, "===>>>Data from signin page.<<<===");

  return (
    <>
      <p>Sign In</p>
      <SignIn />
    </>
  );
}

export default Page;