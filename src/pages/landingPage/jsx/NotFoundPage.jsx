import Navigation from '../../../components/layout/Navigation';
import Footer from '../../../components/layout/Footer';
import Button from '../../../components/common/Button';
import '../css/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Navigation />
      <div className="not-found-content">
        <div className="not-found-hero">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">העמוד לא נמצא</h2>
          <p className="not-found-description">
            נראה שהעמוד שחיפשת לא קיים או הועבר לכתובת אחרת.
          </p>
          <Button 
            variant="primary" 
            size="large" 
            href="/"
          >
            חזרה לדף הבית
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;



