/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Student, initialStudent } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import IDForm from './components/IDForm/IDForm';
import IDPreview from './components/IDPreview/IDPreview';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';

export default function App() {
  const [student, setStudent] = useState<Student>(initialStudent);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleFieldChange = (field: keyof Student, value: string) => {
    setStudent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFillSample = () => {
    setStudent({
      fullName: 'Sai Krishna',
      studentId: '23CSE101',
      course: 'B.Tech',
      department: 'Computer Science & Engineering',
      year: '3rd Year (2023–27)',
      section: 'Section B',
      email: 'sai.krishna@campus.edu',
      phone: '+91 98765 43210',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      universityName: 'METROPOLITAN INSTITUTE OF TECHNOLOGY',
      validThru: '06 / 2027',
      accentTheme: 'navy',
    });
  };

  const handleReset = () => {
    setStudent({
      fullName: '',
      studentId: '',
      course: '',
      department: '',
      year: '',
      section: '',
      email: '',
      phone: '',
      photoUrl: '',
      universityName: 'METROPOLITAN INSTITUTE OF TECHNOLOGY',
      validThru: '06 / 2028',
      accentTheme: 'navy',
    });
  };

  const scrollToCreate = () => {
    const el = document.getElementById('create-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#191919] flex flex-col font-sans selection:bg-[#191919] selection:text-white">
      {/* 1. Minimal Header */}
      <Header
        onStartClick={scrollToCreate}
        onAboutClick={() => setIsAboutOpen(true)}
        onReset={handleReset}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onCtaClick={scrollToCreate} />

        {/* 3. ID Creation Section */}
        <IDForm
          student={student}
          onChange={handleFieldChange}
          onFillSample={handleFillSample}
          onReset={handleReset}
        />

        {/* 4 & 5. Live ID Preview Section */}
        <IDPreview student={student} />
      </main>

      {/* 8. Small Website Footer */}
      <Footer onAboutClick={() => setIsAboutOpen(true)} />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
