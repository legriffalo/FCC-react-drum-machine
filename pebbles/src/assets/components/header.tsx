

interface HeaderProps {
    title:string;
  }
  


const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <div className = "fixed top-0 footer flex flex-row justify-center text-3xl font-sans font-[700] sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <h1> {title} </h1>
    </div>

  );
};

export default Header;