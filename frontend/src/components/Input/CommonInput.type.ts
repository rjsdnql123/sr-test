export interface CommonInputProps {
  label: string;
  value: string;
  id: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
