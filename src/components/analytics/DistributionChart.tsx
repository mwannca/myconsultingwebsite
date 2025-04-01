import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { AnalyticsCard } from './AnalyticsCard';

interface DistributionChartProps {
  title: string;
  description: string;
  data: Array<{ name: string; value: number }>;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const DistributionChart = ({ title, description, data }: DistributionChartProps) => {
  return (
    <AnalyticsCard title={title} description={description}>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </AnalyticsCard>
  );
};