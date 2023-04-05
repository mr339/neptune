//Import module scss as styles
import Link from 'next/link';
import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import ThemeToggler from '../theme-toggler';
import Logo from './logo';
import NavItems from './nav';

const HeaderOne = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //You can concatenate or just give one styles such as shown below
  return (
    <Navbar
      aria-label="Main navigation"
    >
      <Container>
        <Link
          href={'/'}
          className="d-flex align-items-center me-auto navbar-brand"
        >
          <Logo></Logo>
          <span className="fw-bold d-inline-block ml-2">Neptune Mutual</span>
        </Link>
        <div
          className="d-lg-flex flex-grow-1 align-items-center d-none"
          id="navbars"
        >
          <NavItems></NavItems>
          <ThemeToggler />
        </div>
      </Container>
    </Navbar>
  );
};

export default HeaderOne;
