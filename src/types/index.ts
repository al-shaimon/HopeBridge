export type Campaign = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  story: string;
  organizer: string;
  createdAt: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

export type Stat = {
  id: string;
  label: string;
  value: string;
  suffix: string;
};
