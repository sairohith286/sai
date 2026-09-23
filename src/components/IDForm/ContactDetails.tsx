import React from 'react';
import { Student } from '../../types';

interface ContactDetailsProps {
  student: Student;
  onChange: (field: keyof Student, value: string) => void;
}

export default function ContactDetails({ student, onChange }: ContactDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-[#EAE6DE] pb-3 flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#787268]">
          Contact & Credential Style
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-email" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Email Address
          </label>
          <input
            id="input-email"
            type="email"
            value={student.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="e.g. student@campus.edu"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
          <span className="text-[11px] text-[#9A948A] mt-1 block">
            Official institutional email
          </span>
        </div>

        {/* Phone */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-phone" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Phone Number
          </label>
          <input
            id="input-phone"
            type="tel"
            value={student.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
          <span className="text-[11px] text-[#9A948A] mt-1 block">
            Emergency contact reference
          </span>
        </div>

        {/* Accent Branding Palette */}
        <div className="md:col-span-1">
          <label className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2">
            University Accent Stripe
          </label>
          <div className="flex items-center gap-3 pt-1">
            {[
              { id: 'navy', name: 'Oxford Navy', bg: 'bg-[#182848]' },
              { id: 'crimson', name: 'Heritage Crimson', bg: 'bg-[#7A1C29]' },
              { id: 'emerald', name: 'Collegiate Pine', bg: 'bg-[#18392B]' },
              { id: 'charcoal', name: 'Academic Slate', bg: 'bg-[#2B2B2B]' },
            ].map((theme) => {
              const isSelected = student.accentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => onChange('accentTheme', theme.id)}
                  title={theme.name}
                  id={`theme-btn-${theme.id}`}
                  className={`w-7 h-7 rounded-full ${theme.bg} cursor-pointer transition-all flex items-center justify-center relative ${
                    isSelected ? 'ring-2 ring-offset-2 ring-[#191919] scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </button>
              );
            })}
          </div>
          <span className="text-[11px] text-[#9A948A] mt-2 block">
            Selected: {
              student.accentTheme === 'navy' ? 'Oxford Navy' :
              student.accentTheme === 'crimson' ? 'Heritage Crimson' :
              student.accentTheme === 'emerald' ? 'Collegiate Pine' : 'Academic Slate'
            }
          </span>
        </div>
      </div>
    </div>
  );
}
