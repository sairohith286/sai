import React from 'react';
import { Student } from '../../types';

interface AcademicDetailsProps {
  student: Student;
  onChange: (field: keyof Student, value: string) => void;
}

export default function AcademicDetails({ student, onChange }: AcademicDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-[#EAE6DE] pb-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#787268]">
          Academic Details
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Department */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-department" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Department
          </label>
          <input
            id="input-department"
            type="text"
            value={student.department}
            onChange={(e) => onChange('department', e.target.value)}
            placeholder="e.g. Computer Science & Engineering"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
          <span className="text-[11px] text-[#9A948A] mt-1 block">
            Academic school or division
          </span>
        </div>

        {/* Year */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-year" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Academic Year
          </label>
          <input
            id="input-year"
            type="text"
            value={student.year}
            onChange={(e) => onChange('year', e.target.value)}
            placeholder="e.g. 3rd Year"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
          <span className="text-[11px] text-[#9A948A] mt-1 block">
            Current standing or cohort
          </span>
        </div>

        {/* Section */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-section" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Section / Class
          </label>
          <input
            id="input-section"
            type="text"
            value={student.section}
            onChange={(e) => onChange('section', e.target.value)}
            placeholder="e.g. Section B"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
          <span className="text-[11px] text-[#9A948A] mt-1 block">
            Cohort group or lab division
          </span>
        </div>

        {/* College / Institution Name */}
        <div className="md:col-span-2">
          <label 
            htmlFor="input-university" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Institution / College Name
          </label>
          <input
            id="input-university"
            type="text"
            value={student.universityName}
            onChange={(e) => onChange('universityName', e.target.value)}
            placeholder="e.g. METROPOLITAN INSTITUTE OF TECHNOLOGY"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
        </div>

        {/* Valid Thru */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-validThru" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Validity (MM / YYYY)
          </label>
          <input
            id="input-validThru"
            type="text"
            value={student.validThru}
            onChange={(e) => onChange('validThru', e.target.value)}
            placeholder="e.g. 06 / 2027"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base font-mono text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
