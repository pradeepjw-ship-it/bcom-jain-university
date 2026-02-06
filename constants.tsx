import React from 'react';
import { SyllabusSemester, CareerRole } from './types';

export const SYLLABUS_DATA: SyllabusSemester[] = [
  {
    semester: 1,
    subjects: ['Financial Accounting', 'Corporate Law', 'Business Environment', 'English - I', 'Modern Indian Language', 'Life Skills']
  },
  {
    semester: 2,
    subjects: ['Advanced Financial Accounting', 'Marketing Management', 'Methods & Techniques for Business Decisions', 'English - II', 'Environmental Studies', 'Health & Wellness']
  },
  {
    semester: 3,
    subjects: ['Corporate Accounting', 'Financial Management', 'Business Ethics & Corporate Governance', 'Corporate Administration', 'Human Resource Management', 'Business Statistics']
  },
  {
    semester: 4,
    subjects: ['Cost Accounting', 'Quantitative Techniques', 'E-Business & Accounting', 'Entrepreneurship Development', 'Banking & Insurance', 'Research Methodology']
  },
  {
    semester: 5,
    subjects: ['Income Tax - I', 'Auditing & Assurance', 'Management Accounting', 'Corporate Reporting', 'Elective - I (Finance/Marketing/HR)', 'Digital Marketing']
  },
  {
    semester: 6,
    subjects: ['Income Tax - II', 'Business Law', 'Strategic Management', 'International Business', 'Elective - II (Project Work)', 'Skill Enhancement Course']
  }
];

export const CAREER_PATHS: CareerRole[] = [
  {
    title: 'Financial Analyst',
    description: 'Analyze financial data to provide insights and support investment decisions for top MNCs.',
    salary: '₹6L - ₹12L p.a.',
    icon: '📊'
  },
  {
    title: 'Tax Consultant',
    description: 'Specialize in GST, Corporate Tax planning, and compliance strategy for global firms.',
    salary: '₹5L - ₹10L p.a.',
    icon: '📝'
  },
  {
    title: 'Accounts Manager',
    description: 'Oversee financial departments and maintain robust accounting systems in large corporations.',
    salary: '₹7L - ₹15L p.a.',
    icon: '💼'
  },
  {
    title: 'Investment Banker',
    description: 'Help companies raise capital and advise on complex mergers and acquisitions.',
    salary: '₹12L - ₹30L p.a.',
    icon: '🏦'
  }
];