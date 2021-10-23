export interface TagProps {
  text: string;
  onClick?: (value: string) => void;
  className?: string;
  role?: 'default' | 'button';
}
