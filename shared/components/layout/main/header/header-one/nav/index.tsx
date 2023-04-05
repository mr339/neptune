import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

const NavItems = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <Nav className="ms-auto">
    </Nav>
  );
};

export default NavItems;
