const Layout = () => {
  return (
    <div className="layout">
      <h4>h4 in layout.tsx</h4>
      <header className="header">
        <h1>Desktop Application</h1>
      </header>
      <main className="main-content">
        <p>
          Welcome to your Electron application with React and TanStack Query!
        </p>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} - Your Application</p>
      </footer>
    </div>
  );
};

export default Layout;
