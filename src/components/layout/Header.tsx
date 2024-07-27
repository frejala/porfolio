import { Menu } from '@/components/ui/Menu';

const Header = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        <span className="font-poppins text-3xl font-bold text-white">
          f<span className="text-o-blue">.</span>rejala
        </span>
      </div>
      <div className="">
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
