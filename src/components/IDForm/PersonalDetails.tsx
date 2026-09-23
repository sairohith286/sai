import React from 'react';
import { Student } from '../../types';

interface PersonalDetailsProps {
  student: Student;
  onChange: (field: keyof Student, value: string) => void;
}

export default function PersonalDetails({ student, onChange }: PersonalDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-[#EAE6DE] pb-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#787268]">
          Personal Details
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Full Name */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-fullName" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Full Name
          </label>
          <input
            id="input-fullName"
            type="text"
            value={student.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            placeholder="e.g. Sai Krishna"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
          <span className="text-[11px] text-[#9A948A] mt-1 block">
            Will appear prominently in capital letters
          </span>
        </div>

        {/* Student ID / Roll Number */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-studentId" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Student ID / Roll No.
          </label>
          <input
            id="input-studentId"
            type="text"
            value={student.studentId}
            onChange={(e) => onChange('studentId', e.target.value)}
            placeholder="e.g. 23CSE101"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base font-mono text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
          <span className="text-[11px] text-[#9A948A] mt-1 block">
            Campus barcode & QR credential key
          </span>
        </div>

        {/* Course */}
        <div className="md:col-span-1">
          <label 
            htmlFor="input-course" 
            className="block text-xs font-medium uppercase tracking-wider text-[#4A463F] mb-2"
          >
            Course / Degree
          </label>
          <input
            id="input-course"
            type="text"
            value={student.course}
            onChange={(e) => onChange('course', e.target.value)}
            placeholder="e.g. B.Tech"
            className="w-full bg-transparent border-b border-[#D5D0C6] focus:border-[#191919] py-2.5 px-0 text-base text-[#191919] placeholder:text-[#BBB4A7] focus:outline-none transition-colors"
          />
          <span className="text-[11px] text-[#9A948A] mt-1 block">
            Degree program designation
          </span>
        </div>
      </div>
    </div>
  );
}
