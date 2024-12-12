import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
export default RootLayout;
