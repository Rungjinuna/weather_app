import Head from 'next/head';
import React, { ReactNode } from 'react';
import Card from './Card';

type Props = {
  children?: ReactNode;
  title?: string;
  className?: string;
};

//props를 구조분해 할당으로 받아오기
const Layout = ({ children, title = 'Weather App', className }: Props) => {
  return (
    <>
      {/* Head 컴포넌트로 HTML문서의 <head>섹션 정의. 각종 메타데이터가 포함되어있다. */}
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='description' content='Nextjs weather app' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main'>
        {/* layout 컴포넌트의 자식요소를 렌더링 */}
        <Card className={className}>{children}</Card>
      </main>
    </>
  );
};

export default Layout;
