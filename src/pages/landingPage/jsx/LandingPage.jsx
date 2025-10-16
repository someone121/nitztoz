import React from 'react';
import Header from '../../../components/layout/Header';
import Section from '../../../components/common/Section';
import ContentSection from '../../../components/sections/ContentSection';
import LeadForm from '../../../components/sections/LeadForm';
import Footer from '../../../components/layout/Footer';
import recommendationVideo from '../../../assets/videos/recommendation01.mp4';
import '../css/LandingPage.css';

const LandingPage = () => {
  const handleCtaClick = () => {
    document.getElementById('lead-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const headerTitle = [
    'איך בתור מעצבת פנים',
    'תוכלי להגיע ל3-5 פרוייקטים',
    'באופן יציב',
    'כל חודש תוך 90 יום בלבד'
  ];

  const headerSubtitle = 'הדרכה חינמית לזמן מוגבל';

  const problemsList = [
    'אם את שוברת את הראש על פוסטים וסטוריז, ובסוף רק המשפחה והחברות מפרגנות ולא נכנסים לקוחות חדשים.',
    'אם את רואה מעצבות פחות מוכשרות ממך סוגרות פרויקטים, ואת נשארת לשאול את עצמך "למה לא אני?"',
    'אם כל פגישה עם לקוחה נגמרת במיקוח על מחיר, ואת מרגישה שאת עובדת בחצי ממה שאת באמת שווה.',
    'אם את מרגישה שכל מה שמחזיק אותך זה המלצות מפה לאוזן, ואין לך שליטה אמיתית על כמה לקוחות יהיו לך בחודש הבא.',
    'אם את מנסה לשווק "כמו כולן", ובסוף נבלעת בין מאות מעצבות שהלקוחות בכלל לא מבחינים ביניהן.'
  ];

  // benefitsList removed – not used

  const urgencyList = [
    'המתחרות שלך כבר לומדות את השיטות האלה',
    'הלקוחות האיכותיים שיכלו להיות שלך הולכים למעצבות אחרות',
    'את מפספסת הזדמנויות לפרויקטים של 100K+ שיכולים להיות שלך'
  ];

  return (
    <div className="landing-page">
      <Header
        title={headerTitle}
        subtitle={headerSubtitle}
        videoSrc={recommendationVideo}
        ctaText="אני רוצה יותר פרוייקטים"
        onCtaClick={handleCtaClick}
      />

      <Section>
        <ContentSection
          title="אם גם את…"
          listItems={problemsList}
          ctaText="אני בפנים - שלחו לי עכשיו את ההדרכה החינמית"
          ctaHref="/form"
        />

        <ContentSection
          title="גיליתי משהו מטורף על השיווק של מעצבות פנים"
          content={[
            'יצרתי הדרכה חינמית שחושפת את 5 הטעויות הקריטיות שגורמות למעצבות פנים מוכשרות להיעלם בים של מתחרות. זו לא סתם עוד הדרכה חינמית - זו מפת דרכים מדויקת שתראה לך איך להפוך את הנוכחות הדיגיטלית שלך, למגנט לקוחות תוך 30 יום.',
            'ב-15 דקות צפייה, תגלי בדיוק מה עושות מעצבות שסוגרות פרויקטים של 100K+ בקלות (ספוילר: זה לא מה שאת חושבת!).'
          ]}
          ctaText="אני רוצה לדעת איך להביא לקוחות בלי לרדוף אחריהם"
          ctaHref="/form"
        />

        <ContentSection
          title="סיפור קטן שיעזור לך להבין למה ההדרכה הזו שונה"
          content=""
        />

        <ContentSection
          title="בואי נדבר רגע על למה עכשיו"
          content="השאירי פרטים עכשיו וקבלי גישה מיידית להדרכה שתשנה את כל מה שחשבת על שיווק בתור מעצבת פנים. תוך 15 דקות תביני בדיוק איך להפוך את המדיה שלך למכונת לידים שעובדת 24/7."
          listItems={urgencyList}
          ctaText="תנו לי גישה מיידית להדרכה, לפני שהמקומות נגמרים"
          ctaHref="/form"
        />

        <ContentSection
          title="היי, אנחנו עמר וירין"
          content="אחרי שנים בתעשיית הפרסום... פיתחנו אסטרטגיה שלמה שמושכת לקוחות איכותיים. 83% הכפילו תקציב ממוצע תוך 90 יום."
        />

        <ContentSection
          title="זו ההזדמנות שלך"
          content="ההדרכה זמינה במתנה עד 31.12.25 בלבד, ואחר כך בעלות. מה מקבלים: גישה מיידית להדרכה, הבנה ברורה איך ה-Top 1% פועלות, ופגישת אסטרטגיה אישית בחינם."
          ctaText="אל תפספסי - רוצה את ההדרכה והפגישה"
          ctaHref="/form"
        />
      </Section>

      <LeadForm />

      <Footer />
    </div>
  );
};

export default LandingPage;

