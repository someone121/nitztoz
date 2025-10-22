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
            <h3 className="video-title">ההדרכה שלך</h3>
            <video className="header-video" controls playsInline preload="metadata" poster="/video-poster.jpg" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 6px 18px var(--shadow-medium)' }}>
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
            <p>אנחנו מציעים לך פגישת פיצוח אחד על אחד - שעה שלמה שבה תביני בדיוק מה את צריכה לעשות ב־90 הימים הקרובים, כדי להביא את העסק שלך להכנסות של 5 עד 6 ספרות בחודש.</p>
            <p>הפגישה הזו עולה בדרך כלל 1500 ש"ח אבל ל־5 המעצבות הראשונות שישאירו פרטים כאן למטה - היא ניתנת במתנה, לגמרי בחינם.</p>
            <p>אם את אחת שיודעת לזהות הזדמנויות - זו יכולה להיות ה־זכייה שלך בלוטו. אם לא - את תמיד יכולה לצאת מהדף, לקחת את כל הידע והערך שקיבלת כאן ולנסות את מזלך לבד בשיווק עצמאי.</p>
          </div>
          <a href="#lead-form" className="btn btn-royal" onClick={(e) => { e.preventDefault(); document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' }); }}>אני בפנים - שריינו לי פגישת פיצוח חינם (בשווי 1,500 ש"ח)</a>
        </div>
      </Section>

      <LeadForm title="השאירי פרטים לשריון פגישת פיצוח בחינם" successRedirect="/thanks" />

      <Footer />
    </div>
  );
};

export default VideoPage;

