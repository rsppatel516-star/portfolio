import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      <Helmet>
        <title>Contact | Rudra Patel</title>
        <meta
          name="description"
          content="Get in touch with Rudra Patel. Ready to collaborate on your next digital project, startup, or engineering challenge."
        />
      </Helmet>

      <Contact />
    </div>
  );
}
