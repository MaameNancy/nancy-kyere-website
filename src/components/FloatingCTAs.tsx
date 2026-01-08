'use client';
import EmailSignup from './StayConnected';
import WhatsAppFloat from './WhatsAppFloat';

const FloatingCTAs = () => {
  return (
    <>
      {/* Email comes first */}
      <EmailSignup />

      {/* WhatsApp comes next */}
      <WhatsAppFloat />
    </>
  );
};

export default FloatingCTAs;
