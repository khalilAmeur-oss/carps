import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const QuoteForm = ({ formId, variant }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profile: '',
    country: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const validateField = (name, value) => {
    if (!value.trim()) return t.form.required || 'Required';
    
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return t.form.invalidEmail || 'Invalid email';
    }
    
    if (name === 'phone') {
      const phoneRegex = /^[\d+\s-]{6,}$/;
      if (!phoneRegex.test(value)) return t.form.invalidPhone || 'Invalid phone';
    }
    
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      setStatus('loading');
      
      try {
        await submitQuoteForm(formData);
        setStatus('success');
      } catch (error) {
        setStatus('idle');
        console.error('Submission failed', error);
      }
    }
  };

  async function submitQuoteForm(data) {
    return new Promise(resolve => setTimeout(() => resolve({ success: true }), 1500));
  }

  return (
    <div className={`quote-card ${variant === 'section' ? 'quote-card--section' : ''}`}>
      {status !== 'success' && (
        <>
          <div className="quote-card__header">
            <h2 className="quote-card__title">{t.form.title}</h2>
            <p className="quote-card__subtitle">{t.form.subtitle}</p>
          </div>
          
          <form className="quote-form" id={`${formId}QuoteForm`} noValidate onSubmit={handleSubmit}>
            <div className="quote-form__row">
              <div className="quote-form__field">
                <label htmlFor={`${formId}-firstName`} className="quote-form__label">{t.form.firstName} <span className="required">*</span></label>
                <input 
                  type="text" 
                  id={`${formId}-firstName`} 
                  name="firstName" 
                  className={`quote-form__input ${errors.firstName ? 'error' : ''}`} 
                  required 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  placeholder={t.form.firstNamePh} 
                  autoComplete="given-name" 
                />
                {errors.firstName && <span className="quote-form__error visible" role="alert">{errors.firstName}</span>}
              </div>
              
              <div className="quote-form__field">
                <label htmlFor={`${formId}-lastName`} className="quote-form__label">{t.form.lastName} <span className="required">*</span></label>
                <input 
                  type="text" 
                  id={`${formId}-lastName`} 
                  name="lastName" 
                  className={`quote-form__input ${errors.lastName ? 'error' : ''}`} 
                  required 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  placeholder={t.form.lastNamePh} 
                  autoComplete="family-name" 
                />
                {errors.lastName && <span className="quote-form__error visible" role="alert">{errors.lastName}</span>}
              </div>
            </div>

            <div className="quote-form__field">
              <label htmlFor={`${formId}-email`} className="quote-form__label">{t.form.email} <span className="required">*</span></label>
              <input 
                type="email" 
                id={`${formId}-email`} 
                name="email" 
                className={`quote-form__input ${errors.email ? 'error' : ''}`} 
                required 
                value={formData.email} 
                onChange={handleChange} 
                placeholder={t.form.emailPh} 
                autoComplete="email" 
              />
              {errors.email && <span className="quote-form__error visible" role="alert">{errors.email}</span>}
            </div>

            <div className="quote-form__field">
              <label htmlFor={`${formId}-phone`} className="quote-form__label">{t.form.phone} <span className="required">*</span></label>
              <input 
                type="tel" 
                id={`${formId}-phone`} 
                name="phone" 
                className={`quote-form__input ${errors.phone ? 'error' : ''}`} 
                required 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder={t.form.phonePh} 
                autoComplete="tel" 
              />
              {errors.phone && <span className="quote-form__error visible" role="alert">{errors.phone}</span>}
            </div>

            <div className="quote-form__field">
              <label htmlFor={`${formId}-profile`} className="quote-form__label">{t.form.profileLabel} <span className="required">*</span></label>
              <select 
                id={`${formId}-profile`} 
                name="profile" 
                className={`quote-form__select ${errors.profile ? 'error' : ''}`} 
                required 
                value={formData.profile} 
                onChange={handleChange}
              >
                <option value="" disabled>{t.form.profilePh}</option>
                <option value="diplomat">{t.form.diplomat}</option>
                <option value="embassy">{t.form.embassy}</option>
                <option value="expatriate">{t.form.expatriate}</option>
                <option value="company">{t.form.company}</option>
              </select>
              {errors.profile && <span className="quote-form__error visible" role="alert">{errors.profile}</span>}
            </div>

            <div className="quote-form__field">
              <label htmlFor={`${formId}-country`} className="quote-form__label">{t.form.country} <span className="required">*</span></label>
              <input 
                type="text" 
                id={`${formId}-country`} 
                name="country" 
                className={`quote-form__input ${errors.country ? 'error' : ''}`} 
                required 
                value={formData.country} 
                onChange={handleChange} 
                placeholder={t.form.countryPh} 
              />
              {errors.country && <span className="quote-form__error visible" role="alert">{errors.country}</span>}
            </div>

            <button 
              type="submit" 
              className={`btn btn--gold btn--full quote-form__submit ${status === 'loading' ? 'loading' : ''}`} 
              disabled={status === 'loading'}
            >
              <span className="quote-form__submit-text">{t.form.submit} →</span>
              <span className="quote-form__submit-loading" aria-hidden={status !== 'loading'}>{t.form.sending}</span>
            </button>
            
            <p className="quote-form__disclaimer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              {t.form.disclaimer}
            </p>
          </form>
        </>
      )}
      
      {status === 'success' && (
        <div className="quote-card__success">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#b08b57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '1rem'}}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3 className="quote-card__success-title">{t.form.successTitle}</h3>
          <p className="quote-card__success-text">{t.form.successText}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteForm;
