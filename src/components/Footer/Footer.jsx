
export const Footer = () => {
  return (
    <footer className="event-footer">
      <div className="footer-content">
        <h2>Imersão React 2025</h2>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
