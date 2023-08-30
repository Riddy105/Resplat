export interface InputProps {
  label: string;
  type?: string;
}
export interface Tagsprops {
  title: string;
}

export interface ProgressButtonsProps {
  totalTabs: number;
  currentTab: number;
  goToNext: () => void;
}
