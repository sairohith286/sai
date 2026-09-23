export interface Student {
  fullName: string;
  studentId: string;
  course: string;
  department: string;
  year: string;
  section: string;
  email: string;
  phone: string;
  photoUrl: string;
  universityName: string;
  validThru: string;
  accentTheme: 'navy' | 'crimson' | 'emerald' | 'charcoal';
}

export const initialStudent: Student = {
  fullName: 'Sai Krishna',
  studentId: '23CSE101',
  course: 'B.Tech',
  department: 'Computer Science & Engineering',
  year: '3rd Year (2023–27)',
  section: 'Section B',
  email: 'sai.krishna@campus.edu',
  phone: '+91 98765 43210',
  photoUrl: '',
  universityName: 'METROPOLITAN INSTITUTE OF TECHNOLOGY',
  validThru: '06 / 2027',
  accentTheme: 'navy',
};
