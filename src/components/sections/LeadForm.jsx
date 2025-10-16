import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../common/FormInput';
import Button from '../common/Button';
import Section from '../common/Section';
import './LeadForm.css';

const LeadForm = ({ title = "השאירי פרטים ונחזור אלייך" }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'שם מלא הוא שדה חובה';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'מספר טלפון הוא שדה חובה';
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({ fullName: '', phone: '', email: '' });
      setErrors({});
      
      // Redirect to videos page after successful submission
      navigate('/videos');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('אירעה שגיאה בשליחת הטופס. אנא נסי שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section 
      id="lead-form" 
      className="lead-form-section"
      background="light"
    >
      <div className="lead-form-container">
        <h3 className="lead-form-title">
          {title}
        </h3>
        
        <form className="lead-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="fullName"
            placeholder="שם מלא"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            error={errors.fullName}
          />
          
          <FormInput
            type="tel"
            name="phone"
            placeholder="טלפון"
            value={formData.phone}
            onChange={handleInputChange}
            required
            error={errors.phone}
          />
          
          <FormInput
            type="email"
            name="email"
            placeholder="אימייל"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          
          <Button
            type="submit"
            variant="primary"
            size="large"
            className="lead-form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'שולח...' : 'שלחו לי את ההדרכה'}
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default LeadForm;
