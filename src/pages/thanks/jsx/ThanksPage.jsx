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
          <h1 className="thanks-title">
            <>{'מזל טוב! זכית להיות '}<strong>{'אחת מתוך 5'}</strong>{' '}<strong>{'המעצבות'}</strong>{' שנבחרו לשיחת אסטרטגיה אישית איתנו'}</>
          </h1>

          <p className="thanks-text">
            <>{'ב־'}<strong>{'24 השעות הקרובות'}</strong>{' אנחנו נחזור אלייך '}
            <br/>{'ונתאם איתך שעה לפגישה שבה נבנה יחד את האסטרטגיה שתעזור לך להביא '}<strong>{'יותר לקוחות ויותר פרויקטים'}</strong>{', ולהתחיל להגשים את '}<strong>{'החלומות שלך'}</strong>{' '}<strong>{'כמעצבת פנים מצליחה'}</strong>{'.'}
            </>
          </p>

          <p className="thanks-text">
            <>{'בכל פגישה כזאת, '}<strong>{'3 מתוך 5 מעצבות'}</strong>{' מחליטות להמשיך איתנו לעבודה משותפת. ולכן אנחנו מגבילים את ההזדמנות הזו ל־'}<strong>{'5 מקומות בלבד'}</strong>{'. כדי שנוכל לתת את כל הפוקוס למעצבות שבוחרות לעבוד איתנו.'}
            </>
          </p>

          <div className="thanks-cta">
            <p className="thanks-cta-text">
              <>{'עד שנחזור אלייך - עקבי אחרי '}<strong>{'האינסטגרם שלנו'}</strong>{' כדי לקבל השראה וטיפים נוספים.'}
              </>
            </p>
            <a className="btn btn-secondary" href="https://www.instagram.com/nitzotz_bmedia?igsh=a3p3bTM1ZnpuYm8z&utm_source=qr" target="_blank" rel="noreferrer">
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


