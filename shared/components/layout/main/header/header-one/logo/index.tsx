import { logo } from 'imageConfig';
import Image from 'next/image';

const Logo = () => {
  //You can concatenate or just give one styles such as shown below
  return (
    <>
      <span className="logo">
        <Image src={logo} alt="logo" width={24} height={38} />
      </span>
    </>
  );
};

export default Logo;
