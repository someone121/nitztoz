import React from 'react';
import Section from '../../../components/common/Section';
import Navigation from '../../../components/layout/Navigation';
import Footer from '../../../components/layout/Footer';
import '../css/LandingPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navigation />
      <Section className="about-page-hero">
        <div className="about-page-content">
          <h1 className="about-page-title">אודות</h1>
          <p className="about-page-subtitle">
            מידע עלינו והשירותים שאנחנו מציעים
          </p>
        </div>
      </Section>
      
      <Section>
        <div className="about-content">
          <h2>מי אנחנו?</h2>
          <p>
            אנחנו עמר וירין, מומחים בשיווק דיגיטלי למעצבות פנים. 
            אחרי שנים בתעשיית הפרסום, פיתחנו אסטרטגיה ייחודית 
            שמושכת לקוחות איכותיים לעסקים של מעצבות פנים.
          </p>
          
          <h2>מה אנחנו עושים?</h2>
          <p>
            אנחנו עוזרים למעצבות פנים מוכשרות להפוך את הנוכחות 
            הדיגיטלית שלהן למגנט לקוחות. השיטות שלנו עובדות 
            על אוטומט ומביאות תוצאות מדידות תוך 90 יום.
          </p>
          
          <h2>התוצאות שלנו</h2>
          <p>
            83% מהמעצבות שעבדו איתנו הכפילו את התקציב הממוצע 
            שלהן תוך 90 יום. הן הפכו ממעצבות שמתחננות ללקוחות 
            למעצבות שכולם רוצים לעבוד איתן.
          </p>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;

