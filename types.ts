
export interface ServiceCard {
  title: string;
  description: string;
  points: string[];
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
