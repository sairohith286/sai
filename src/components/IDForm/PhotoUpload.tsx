import React, { useRef, useState } from 'react';
import { Camera, Upload, Trash2, Check, RefreshCw } from 'lucide-react';

interface PhotoUploadProps {
  photoUrl: string;
  onPhotoChange: (url: string) => void;
}

export default function PhotoUpload({ photoUrl, onPhotoChange }: PhotoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onPhotoChange(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSelectSample = (sampleUrl: string) => {
    onPhotoChange(sampleUrl);
  };

  // Sample portrait images with clean academic look
  const samplePortraits = [
    {
      label: 'Portrait A',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      label: 'Portrait B',
      url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    },
    {
      label: 'Portrait C',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div className="space-y-4">
      <div className="border-b border-[#EAE6DE] pb-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#787268]">
          Identity Photograph
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-6 pt-1">
        {/* Thumbnail Preview Area */}
        <div className="relative group shrink-0">
          <div className="w-24 h-32 rounded-lg bg-[#ECE8DF] border border-[#DDD7CC] overflow-hidden flex items-center justify-center shadow-inner">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="Student preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-2 text-[#9A948A]">
                <Camera className="w-6 h-6 mx-auto mb-1 stroke-1" />
                <span className="text-[10px] tracking-wider uppercase font-medium block">
                  No Photo
                </span>
              </div>
            )}
          </div>

          {photoUrl && (
            <button
              type="button"
              onClick={() => onPhotoChange('')}
              title="Remove photo"
              id="btn-remove-photo"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#191919] text-white hover:bg-red-700 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Drop zone / Upload action */}
        <div className="flex-1 w-full space-y-3">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            id="photo-dropzone"
            className={`border border-dashed rounded-lg p-5 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-[#191919] bg-[#F2EFE8]'
                : 'border-[#D5D0C6] hover:border-[#191919] hover:bg-[#F7F4EC]/60'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              id="student-photo-file-input"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFile(e.target.files[0]);
                }
              }}
            />

            <Upload className="w-5 h-5 mx-auto text-[#7D776E] mb-2 stroke-[1.5]" />
            <p className="text-sm font-medium text-[#191919]">
              {photoUrl ? 'Click or drop to replace photograph' : 'Add your photo'}
            </p>
            <p className="text-xs text-[#8A857D] mt-1">
              Supports JPEG, PNG or WebP · Recommended 3:4 passport portrait
            </p>
          </div>

          {/* Quick sample portrait selector */}
          <div className="flex items-center gap-2 pt-1 text-xs text-[#7A756D]">
            <span>Try sample portrait:</span>
            <div className="flex items-center gap-1.5">
              {samplePortraits.map((sample, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectSample(sample.url)}
                  className="px-2.5 py-1 rounded bg-[#EFECE4] hover:bg-[#E5E0D5] text-[#3E3A34] text-[11px] font-medium transition-colors cursor-pointer"
                >
                  Portrait {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
