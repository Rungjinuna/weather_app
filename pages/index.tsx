import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import WelcomeContent from '@/components/WelcomeContent';
import AuthForm from '@/components/AuthForm';

export default function Home() {
  //useRouter next.js 이용하여 페이지 이동처리
  const router = useRouter();
  //useEffect Hook : 컴포넌트가 마운트 될 때 (즉, 화면에 나타날때)실행됨
  useEffect(() => {
    // redirect the user to the "/weather" page when a session is found
    //(next-auth) getSession함수를 사용하여 현재 세션 정보를 가져오고,
    //세션이 존재한다면 /weather 페이지로 리다이렉트

    getSession().then((session) => {
      if (session) {
        router.replace('/weather');
      } else {
        console.log('No session');
      }
    });
  }, [router]);

  return (
    <>
      <Layout title='weather App login page' className='w-3/4 lg:w-1/2'>
        <WelcomeContent />
        <AuthForm />
      </Layout>
    </>
  );
}
