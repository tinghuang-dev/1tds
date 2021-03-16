import React from 'react';
import Head from 'next/head';

function Title({ children }) {
  return (
    <Head>
      <title>
        {children && `${children} | `}
        一团袋鼠
      </title>
    </Head>
  );
}

export default Title;
