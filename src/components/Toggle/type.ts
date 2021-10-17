export type Position = 'left' | 'right';

export interface ToggleProps {
  imageRight?: { src: string; alt: string };
  imageLeft?: { src: string; alt: string };
  toggleCallback: () => void;
  selectedSide?: Position;
}
