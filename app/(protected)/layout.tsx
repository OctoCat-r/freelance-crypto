import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div
      className="
        h-full w-full flex flex-col items-center    
    "
    >
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
