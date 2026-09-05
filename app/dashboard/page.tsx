import Link from 'next/link';

function Dashboard() {
  return (
    <>
    <h1>Dashboard</h1>
    <Link href="/signin">Go to sign in page.</Link>
    </>
    )
}

export default Dashboard;