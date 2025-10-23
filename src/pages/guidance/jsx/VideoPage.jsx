import React from 'react';
import LeadForm from '../../../components/sections/LeadForm';
import recommendationVideo from '../../../assets/videos/recommendation01.mp4';
import Navigation from '../../../components/layout/Navigation';
import Footer from '../../../components/layout/Footer';
import Section from '../../../components/common/Section';
import '../css/VideoPage.css';

const VideoPage = () => {
  return (
    <div className="video-page">
      <Navigation />
      
      <Section className="video-page-hero">
        <div className="video-page-content">
          <h1 className="video-page-title">תודה על ההרשמה!</h1>
          <p className="video-page-subtitle">
            הנה ההדרכה החינמית שלך - שתי סרטונים שישנו את כל מה שחשבת על שיווק
          </p>
        </div>
      </Section>

      <Section className="videos-section">
        <div className="videos-container">
          <div className="video-item">
            <p className="video-intro">
              <>{'זו הדרכה שתמלא את היומן שלך - '}<strong>{'תצפי עכשיו!'}</strong></>
            </p>
            <h3 className="video-title">ההדרכה שלך</h3>
            <video className="header-video" controls muted autoPlay playsInline preload="metadata" poster="/video-poster.jpg" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 6px 18px var(--shadow-medium)' }}>
              <source src={recommendationVideo} type="video/mp4" />
              הדפדפן שלך לא תומך בנגן הווידאו.
            </video>
            <p className="video-description">
              גלי את 5 הטעויות הקריטיות שגורמות למעצבות פנים מוכשרות להיעלם בים של מתחרות
            </p>
          </div>

        </div>
      </Section>

      <Section className="cta-section" background="light">
        <div className="cta-content">
          <h3 className="cta-title">לפני שאת יוצאת, יש לנו בשבילך הצעה של פעם בחיים.</h3>
          <div className="cta-description">
            <p>
              <>{'אנחנו מציעים לך פגישת '}<strong>{'פיצוח אחד על אחד'}</strong>{' - שעה שלמה שבה תביני בדיוק מה את צריכה לעשות ב־90 הימים הקרובים, כדי להביא את העסק שלך להכנסות של '}<strong>{'5 עד 6 ספרות בחודש'}</strong>{'.'}
              </>
            </p>
            <p>
              <>{'הפגישה הזו עולה בדרך כלל '}<strong>{'1500 ש"ח'}</strong>{' אבל ל־'}<strong>{'5 המעצבות הראשונות'}</strong>{' שישאירו פרטים כאן למטה - היא ניתנת '}<strong>{'במתנה, לגמרי בחינם'}</strong>{'.'}
              </>
            </p>
            <p>
              <>{'אם את אחת שיודעת לזהות הזדמנויות - זו יכולה להיות ה־זכייה שלך בלוטו. אם לא - את תמיד יכולה לצאת מהדף, לקחת את כל הידע והערך שקיבלת כאן ולנסות את מזלך לבד בשיווק עצמאי.'}
              </>
            </p>
          </div>
        </div>
      </Section>

      <LeadForm title="השאירי פרטים לשריון פגישת פיצוח בחינם" successRedirect="/thanks" />

      <Footer />
    </div>
  );
};

export default VideoPage;

