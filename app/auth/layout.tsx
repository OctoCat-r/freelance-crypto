import Navbar from "../(protected)/_components/navbar";
// import Navbar from "../(protected)/_components/navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
          h-full flex flex-col items-center justify-center mt-10
        "
    >
      {children}
    </div>
  );
};

export default AuthLayout;
