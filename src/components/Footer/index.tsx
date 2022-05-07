import Image from 'next/image';

import { FooterWrap, Logo } from 'components/Footer/styled';

export function Footer(): JSX.Element {
  return (
    <FooterWrap>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Logo>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Logo>
      </a>
    </FooterWrap>
  );
}
