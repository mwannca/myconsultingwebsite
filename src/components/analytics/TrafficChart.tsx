import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AnalyticsCard } from './AnalyticsCard';

interface TrafficChartProps {
  title: string;
  description: string;
  data: Array<{ name: string; value: number }>;
  xAxisDataKey: string;
  barDataKey: string;
}

export const TrafficChart = ({ 
  title, 
  description, 
  data, 
  xAxisDataKey, 
  barDataKey 
}: TrafficChartProps) => {
  return (
    <AnalyticsCard title={title} description={description}>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey={xAxisDataKey} 
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey={barDataKey} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AnalyticsCard>
  );
};