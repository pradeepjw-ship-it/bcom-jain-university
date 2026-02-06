
export interface SyllabusSemester {
  semester: number;
  subjects: string[];
}

export interface CareerRole {
  title: string;
  description: string;
  salary: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
