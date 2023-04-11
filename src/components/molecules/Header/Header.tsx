import { Container } from "@atoms";
import { FC } from "react";

import Logo from "@/assets/svg/Logo";

export const Header: FC = (): JSX.Element => (
  <header className='py-10'>
    <Container>
      <Logo />
    </Container>
  </header>
);
