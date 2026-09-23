import React from 'react';
import { Student } from '../../types';

interface StudentInfoProps {
  student: Student;
}

export default function StudentInfo({ student }: StudentInfoProps) {
  const displayName = student.fullName.trim() || 'STUDENT NAME';
  const displayId = student.studentId.trim() || '00000000';
  const displayCourse = student.course.trim() || 'DEGREE PROGRAM';
  const displayDept = student.department.trim() || 'Department of Study';
  const displayYear = student.year.trim() || 'Academic Year';
  const displaySection = student.section.trim() || 'Section';
  const displayValid = student.validThru.trim() || '06 / 2028';

  return (
    <div className="flex-1 flex flex-col justify-between min-w-0">
      {/* Student Name & ID Monospace badge */}
      <div>
        <div className="inline-block px-2 py-0.5 rounded bg-[#191919] text-[#FAF8F5] text-[10px] sm:text-xs font-mono tracking-widest uppercase font-semibold mb-1.5 shadow-xs">
          ID: {displayId.toUpperCase()}
        </div>

        <h3 
          className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#141414] leading-tight truncate font-sans"
        >
          {displayName}
        </h3>

        <div className="text-xs sm:text-sm font-medium text-[#4A463F] mt-0.5">
          {displayCourse} <span className="text-[#999285] mx-1">·</span> {displayDept}
        </div>
      </div>

      {/* Grid of structured academic info */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-3 pt-2.5 border-t border-[#E5E1D7] text-[11px] sm:text-xs">
        <div>
          <span className="text-[9px] uppercase tracking-wider text-[#8A847A] block font-medium">
            Academic Standing
          </span>
          <span className="font-semibold text-[#1F1E1B] truncate block">
            {displayYear}
          </span>
        </div>

        <div>
          <span className="text-[9px] uppercase tracking-wider text-[#8A847A] block font-medium">
            Section / Class
          </span>
          <span className="font-semibold text-[#1F1E1B] truncate block">
            {displaySection}
          </span>
        </div>

        <div>
          <span className="text-[9px] uppercase tracking-wider text-[#8A847A] block font-medium">
            Card Validity
          </span>
          <span className="font-mono text-[#1F1E1B] font-medium block">
            THRU {displayValid}
          </span>
        </div>

        <div>
          <span className="text-[9px] uppercase tracking-wider text-[#8A847A] block font-medium">
            Status
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-[#1E4D2B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
            ACTIVE STUDENT
          </span>
        </div>
      </div>
    </div>
  );
}
