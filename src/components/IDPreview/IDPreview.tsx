import React, { useState } from 'react';
import { Student } from '../../types';
import CollegeLogo from './CollegeLogo';
import StudentPhoto from './StudentPhoto';
import StudentInfo from './StudentInfo';
import QRPlaceholder from './QRPlaceholder';
import { Printer, Download, Sparkles, Copy, Check, Radio } from 'lucide-react';

interface IDPreviewProps {
  student: Student;
}

export default function IDPreview({ student }: IDPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');

  const themeConfig = {
    navy: {
      accentBg: 'bg-[#182848]',
      accentText: 'text-[#182848]',
      accentBorder: 'border-[#182848]',
      stripeColor: '#182848',
      name: 'Oxford Navy',
    },
    crimson: {
      accentBg: 'bg-[#7A1C29]',
      accentText: 'text-[#7A1C29]',
      accentBorder: 'border-[#7A1C29]',
      stripeColor: '#7A1C29',
      name: 'Heritage Crimson',
    },
    emerald: {
      accentBg: 'bg-[#18392B]',
      accentText: 'text-[#18392B]',
      accentBorder: 'border-[#18392B]',
      stripeColor: '#18392B',
      name: 'Collegiate Pine',
    },
    charcoal: {
      accentBg: 'bg-[#2B2B2B]',
      accentText: 'text-[#2B2B2B]',
      accentBorder: 'border-[#2B2B2B]',
      stripeColor: '#2B2B2B',
      name: 'Academic Slate',
    },
  };

  const currentTheme = themeConfig[student.accentTheme] || themeConfig.navy;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyDetails = () => {
    const text = `CAMPUS ID CREDENTIAL
Name: ${student.fullName || 'Sai Krishna'}
ID: ${student.studentId || '23CSE101'}
Course: ${student.course || 'B.Tech'}
Department: ${student.department || 'Computer Science & Engineering'}
Year: ${student.year || '3rd Year'}
Section: ${student.section || 'Section B'}
Institution: ${student.universityName || 'METROPOLITAN INSTITUTE OF TECHNOLOGY'}
Validity: ${student.validThru || '06 / 2027'}
Issued: 2026 Academic Session`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="preview-section" className="pt-20 pb-28">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Intro */}
        <div className="text-center max-w-xl mx-auto mb-12">
          {/* Subtle Live Preview Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DA] border border-[#DDD7CB] text-[11px] font-medium text-[#423E37] tracking-wider uppercase mb-4 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="font-semibold text-[#1F1E1B]">● Live preview</span>
          </div>

          <h2 
            className="text-4xl sm:text-5xl font-light text-[#191919] tracking-tight mb-3 font-serif"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Your digital ID
          </h2>
          <p className="text-base text-[#615C54]">
            Your card updates as you enter your information.
          </p>

          {/* Front / Back Toggle Buttons */}
          <div className="inline-flex p-1 rounded-full bg-[#EAE6DE] mt-6 gap-1">
            <button
              type="button"
              onClick={() => setCardSide('front')}
              id="btn-view-front"
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                cardSide === 'front'
                  ? 'bg-white text-[#191919] shadow-xs'
                  : 'text-[#666158] hover:text-[#191919]'
              }`}
            >
              Card Front
            </button>
            <button
              type="button"
              onClick={() => setCardSide('back')}
              id="btn-view-back"
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                cardSide === 'back'
                  ? 'bg-white text-[#191919] shadow-xs'
                  : 'text-[#666158] hover:text-[#191919]'
              }`}
            >
              Card Reverse
            </button>
          </div>
        </div>

        {/* The ID Card Visual Centerpiece */}
        <div className="flex flex-col items-center">
          
          <div 
            id="printable-id-card"
            className="w-full max-w-[580px] bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#DDD7CD] overflow-hidden relative transition-all duration-300 select-none"
            style={{
              aspectRatio: '1.586 / 1', // ISO/IEC 7810 ID-1 standard ratio
              minHeight: '340px',
            }}
          >
            {cardSide === 'front' ? (
              /* CARD FRONT */
              <div className="h-full w-full flex flex-col justify-between relative p-6 sm:p-7 bg-[#FCFAF7]">
                
                {/* Subtle Guilloche / Security Pattern Background */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.035]"
                  style={{
                    backgroundImage: `radial-gradient(#191919 0.75px, transparent 0.75px), radial-gradient(#191919 0.75px, #FCFAF7 0.75px)`,
                    backgroundSize: '16px 16px',
                    backgroundPosition: '0 0, 8px 8px',
                  }}
                />

                {/* Left Brand Vertical Stripe */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-2.5 sm:w-3" 
                  style={{ backgroundColor: currentTheme.stripeColor }}
                />

                {/* Top Header Row: University Name, Crest & Academic Year */}
                <div className="relative pl-3 flex items-center justify-between border-b border-[#E8E4DA] pb-3">
                  <div className="flex items-center gap-3">
                    <CollegeLogo 
                      accentColorClass={currentTheme.accentText}
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${currentTheme.accentText}`}
                    />
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#191919] block font-sans">
                        {student.universityName.trim() || 'METROPOLITAN INSTITUTE OF TECHNOLOGY'}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#736D63] block font-mono">
                        CAMPUS ACCESS CREDENTIAL · DIVISION OF HIGHER LEARNING
                      </span>
                    </div>
                  </div>

                  {/* Microchip / Contactless Wave Icon */}
                  <div className="hidden sm:flex items-center gap-1.5 opacity-60">
                    <Radio className="w-3.5 h-3.5 text-[#555047]" />
                    <span className="text-[8px] font-mono tracking-widest uppercase text-[#555047]">
                      NFC 13.56MHz
                    </span>
                  </div>
                </div>

                {/* Center Content Row: Photo + Information + QR */}
                <div className="relative pl-3 my-auto py-2 flex items-start gap-4 sm:gap-6">
                  {/* Photo Column */}
                  <StudentPhoto 
                    photoUrl={student.photoUrl} 
                    name={student.fullName}
                  />

                  {/* Details Column */}
                  <StudentInfo student={student} />

                  {/* QR Code Placeholder Column */}
                  <div className="hidden sm:flex flex-col items-center justify-start self-center pl-1 border-l border-[#EDE9DF]">
                    <QRPlaceholder code={student.studentId} />
                  </div>
                </div>

                {/* Bottom Footer Band */}
                <div className="relative pl-3 pt-2.5 border-t border-[#E8E4DA] flex items-center justify-between text-[9px] text-[#736E64] font-mono">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#1F1E1B]">DIGITAL ID</span>
                    <span className="hidden sm:inline">SEC-ID: {student.studentId ? `${student.studentId}-882` : 'CRED-9021'}</span>
                  </div>

                  <div className="sm:hidden">
                    <span className="font-semibold uppercase text-[#1F1E1B]">
                      VALID {student.validThru || '06/2027'}
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#182848]" />
                    <span className="tracking-widest uppercase">AUTHORIZED STUDENT RECORD</span>
                  </div>
                </div>

              </div>
            ) : (
              /* CARD REVERSE / BACK */
              <div className="h-full w-full flex flex-col justify-between relative p-6 sm:p-7 bg-[#FAF7F2]">
                
                {/* Magnetic Stripe representation */}
                <div className="absolute top-6 left-0 right-0 h-10 bg-[#242424] opacity-90 shadow-inner flex items-center justify-end px-4">
                  <span className="text-[8px] text-white/50 font-mono tracking-widest">
                    TRACK 1 & 2 ENCRYPTED ACCESS
                  </span>
                </div>

                {/* Card Terms & Conditions / Info */}
                <div className="mt-14 space-y-3 pl-2 pr-2 text-[10px] text-[#555047] leading-relaxed">
                  <div>
                    <span className="font-bold uppercase tracking-wider text-[#191919] block mb-0.5">
                      Terms of Issue & Possession
                    </span>
                    <p className="text-[9px] text-[#696359]">
                      This identification card remains the sole property of {student.universityName || 'the University'}. 
                      The cardholder must present this credential upon request by university officials and campus security.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div>
                      <span className="text-[8px] uppercase tracking-wider text-[#8A8479] block font-mono">
                        EMERGENCY DESK
                      </span>
                      <span className="text-[10px] font-mono font-medium text-[#191919]">
                        {student.phone || '+1 (800) 555-0199'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-wider text-[#8A8479] block font-mono">
                        REGISTERED EMAIL
                      </span>
                      <span className="text-[10px] font-mono font-medium text-[#191919] truncate block">
                        {student.email || 'student@campus.edu'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulated Barcode */}
                <div className="pt-2 border-t border-[#E5E0D5] flex items-center justify-between">
                  <div className="flex flex-col">
                    {/* Visual Barcode SVG */}
                    <div className="h-8 w-44 flex items-center gap-0.5 overflow-hidden">
                      {[3, 1, 2, 4, 1, 3, 2, 1, 1, 3, 2, 4, 2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2].map((w, i) => (
                        <div 
                          key={i} 
                          className="h-full bg-[#191919]" 
                          style={{ width: `${w * 1.5}px` }} 
                        />
                      ))}
                    </div>
                    <span className="text-[8px] font-mono tracking-widest text-[#787268] mt-0.5">
                      *{student.studentId || '23CSE101'}*
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[8px] font-mono tracking-wider uppercase text-[#787268] block">
                      OFFICE OF THE REGISTRAR
                    </span>
                    <span className="text-[10px] font-serif italic text-[#191919]">
                      Dr. A. Vance, Provost
                    </span>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Action Toolbar Below Card */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={handlePrint}
              id="btn-print-card"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191919] text-[#FAF8F5] text-xs font-medium tracking-wide hover:bg-[#333333] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print or Save as PDF</span>
            </button>

            <button
              type="button"
              onClick={handleCopyDetails}
              id="btn-copy-card-info"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EAE6DE] text-[#2C2925] text-xs font-medium tracking-wide hover:bg-[#DDD8CF] transition-all cursor-pointer active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Details' : 'Copy Credential Text'}</span>
            </button>
          </div>

          <p className="text-[11px] text-[#938D83] mt-3 text-center">
            Standard ISO/IEC 7810 ID-1 card dimensions (85.60 × 53.98 mm)
          </p>

        </div>

      </div>
    </section>
  );
}
