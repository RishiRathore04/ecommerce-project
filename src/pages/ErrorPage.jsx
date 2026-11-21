import { Link } from 'react-router';
import { Header } from '../components/Header';
import './ErrorPage.css';

export function ErrorPage() {
  return (
    <>
      <title>404 - Page Not Found</title>
      <Header />

      <div className="error-page-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="error-home-button">
          Back to Home
        </Link>
      </div>
    </>
  );
}