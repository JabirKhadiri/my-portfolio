import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center"> 
          <a href="#">
            <img className='w-[110px] h-auto' src={Logo}  />
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
  
};

export default Header;