import { Link } from '@tanstack/react-router';
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header>
      <div className="relative flex items-center justify-between bg-primary h-[100px] p-4">
        <Link to="/" className="h-full">
          <img alt="Pokemon logo" src={logo} className="h-full" />
        </Link>
      </div>
    </header>
  );
};
