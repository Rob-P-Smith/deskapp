const Layout = () => {
  return (
    <div className="layout">
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
