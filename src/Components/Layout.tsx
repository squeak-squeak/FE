import '@/Styles/layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="app-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
