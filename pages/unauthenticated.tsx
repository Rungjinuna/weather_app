import Layout from '@/components/Layout';
import Link from 'next/link';

const Unauthenticated = () => {
  return (
    <Layout title='authenticated page' className='justify-center text-center'>
      <h1 className='text-lg'>You should login to view requested page</h1>
      <Link href='/' className='mx-auto btn__secondary'>
        Login
      </Link>
    </Layout>
  );
};

export default Unauthenticated;
