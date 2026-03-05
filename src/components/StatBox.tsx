interface StatBoxProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatBox({ value, label, className = "" }: StatBoxProps) {
  return (
    <div className={`stat ${className}`.trim()}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

