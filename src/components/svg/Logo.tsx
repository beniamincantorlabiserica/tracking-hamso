import Image, { ImageProps } from 'next/image';
import logo from '@/assets/hamso.png';

type LogoProps = Omit<ImageProps, 'src' | 'alt'>;

const Logo = (props: LogoProps) => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={200}
      style={{ height: 'auto' }}
      {...props}
    />
  );
};

export default Logo;
