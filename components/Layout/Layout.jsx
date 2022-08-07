import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-milky">
      <Navbar />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
