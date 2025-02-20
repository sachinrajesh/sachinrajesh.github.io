interface WorkItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
}

export default function WorkItem({ company, role, period, description }: WorkItemProps) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-2">
      <h2 className="text-xl font-semibold">{company}</h2>
      <h3 className="text-lg text-gray-700 dark:text-gray-300">{role}</h3>
      <p className="text-sm text-gray-500 mb-2">{period}</p>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
} 