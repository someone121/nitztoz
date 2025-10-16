import React from 'react';
import Section from '../../../components/common/Section';
import LeadForm from '../../../components/sections/LeadForm';
import Navigation from '../../../components/layout/Navigation';
import Footer from '../../../components/layout/Footer';
import '../css/FormPage.css';

const FormPage = () => {
  return (
    <div className="form-page">
      <Navigation />
      <Section className="form-page-hero">
        <div className="form-page-content">
          <h1 className="form-page-title">טופס יצירת קשר</h1>
          <p className="form-page-subtitle">
            השאירי פרטים ונחזור אלייך עם ההדרכה החינמית
          </p>
        </div>
      </Section>
      <LeadForm title="השאירי פרטים ונחזור אלייך" />
      <Footer />
    </div>
  );
};

export default FormPage;

