import Image from 'next/image';
import Link from 'next/link';

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <img src="/dummy.png" alt="Profile" />
      <Image src="/dummy.png" alt="Profile Image" width={50} height={50}/>
      <Link href="/signin">Go to sign in page.</Link>
    </>
  );
}

export default Dashboard;