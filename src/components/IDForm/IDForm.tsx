import React from 'react';
import { Student } from '../../types';
import PersonalDetails from './PersonalDetails';
import AcademicDetails from './AcademicDetails';
import ContactDetails from './ContactDetails';
import PhotoUpload from './PhotoUpload';
import { Sparkles, RotateCcw } from 'lucide-react';

interface IDFormProps {
  student: Student;
  onChange: (field: keyof Student, value: string) => void;
  onFillSample: () => void;
  onReset: () => void;
}

export default function IDForm({ student, onChange, onFillSample, onReset }: IDFormProps) {
  return (
    <section id="create-section" className="pt-16 pb-20 border-b border-[#EAE6DE]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C867D] block mb-2">
              Step 01 — Credentials Input
            </span>
            <h2 
              className="text-3xl sm:text-4xl text-[#191919] font-light tracking-tight font-serif"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Enter student credentials
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onFillSample}
              id="btn-fill-sample"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#524E48] hover:text-[#191919] bg-[#EFEBE3] hover:bg-[#E5E0D5] rounded-full transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#191919]" />
              <span>Sample Data</span>
            </button>
            <button
              type="button"
              onClick={onReset}
              id="btn-reset-form"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#7A756D] hover:text-[#191919] bg-transparent hover:bg-[#EFEBE3] rounded-full transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Single Flowing Editorial Layout */}
        <div className="space-y-12">
          <PersonalDetails student={student} onChange={onChange} />
          <AcademicDetails student={student} onChange={onChange} />
          <ContactDetails student={student} onChange={onChange} />
          <PhotoUpload 
            photoUrl={student.photoUrl} 
            onPhotoChange={(url) => onChange('photoUrl', url)} 
          />
        </div>

      </div>
    </section>
  );
}
