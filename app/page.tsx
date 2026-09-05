async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = res.json();
  return data;
}





async function Home() {
  const data = await fetchData();
  console.log(data);
  return (
    <h1>Home Page</h1>
  );
}

export default Home;