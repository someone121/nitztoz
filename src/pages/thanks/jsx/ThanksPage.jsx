import React from 'react';
import Navigation from '../../../components/layout/Navigation';
import Footer from '../../../components/layout/Footer';
import Section from '../../../components/common/Section';
import '../css/ThanksPage.css';

const ThanksPage = () => {
  return (
    <div className="thanks-page">
      <Navigation />

      <Section className="thanks-hero">
        <div className="thanks-container">
          <h1 className="thanks-title">מזל טוב! זכית להיות אחת מתוך 5 המעצבות שנבחרו לשיחת אסטרטגיה אישית איתנו</h1>

          <p className="thanks-text">ב־24 השעות הקרובות אנחנו נחזור אלייך<br/>ונתאם איתך שעה לפגישה שבה נבנה יחד את האסטרטגיה שתעזור לך להביא יותר לקוחות ויותר פרויקטים, ולהתחיל להגשים את החלומות שלך כמעצבת פנים מצליחה.</p>

          <p className="thanks-text">בכל פגישה כזאת, 3 מתוך 5 מעצבות מחליטות להמשיך איתנו לעבודה משותפת. ולכן אנחנו מגבילים את ההזדמנות הזו ל־5 מקומות בלבד. כדי שנוכל לתת את כל הפוקוס למעצבות שבוחרות לעבוד איתנו.</p>

          <div className="thanks-cta">
            <p className="thanks-cta-text">עד שנחזור אלייך - עקבי אחרי האינסטגרם שלנו כדי לקבל השראה וטיפים נוספים.</p>
            <a className="btn btn-secondary" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              לעקוב באינסטגרם
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default ThanksPage;


