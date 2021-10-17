import { ThemeVariants } from 'styles/theme';

export interface FooterProps {
  selectedTheme: ThemeVariants;
  toggleThemeCallback: () => void;
}
