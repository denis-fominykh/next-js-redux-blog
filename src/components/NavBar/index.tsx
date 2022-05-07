import Link from 'next/link';
import type { ReactNode } from 'react';

import { Navbar, LogoLink, Container } from 'components/NavBar/styled';
import { ROUTER_PATHS } from 'constants/routerPaths';

interface NavBarProps {
  children: ReactNode;
}

export function NavBar({ children }: NavBarProps): JSX.Element {
  return (
    <>
      <Navbar>
        <LogoLink href={ROUTER_PATHS.HOME._}>Next.JS</LogoLink>
        <ul>
          <li>
            <Link href={ROUTER_PATHS.PEOPLE._}>People</Link>
          </li>
        </ul>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
