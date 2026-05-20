import React from 'react';
import { Helmet } from 'react-helmet-async';
import Achievements from '../components/Achievements';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      <Helmet>
        <title>Technical Credentials & Certifications | Rudra Patel</title>
        <meta
          name="description"
          content="Explore the technical credentials, specialized badges, and verified achievements of Rudra Patel."
        />
      </Helmet>
      
      <Achievements />
    </div>
  );
}
