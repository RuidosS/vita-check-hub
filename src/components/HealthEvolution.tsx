
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Card } from '@/components/ui/card';

export const HealthEvolution = () => {
  const data = [
    { name: 'Jan', value: 65 },
    { name: 'Fev', value: 68 },
    { name: 'Mar', value: 72 },
    { name: 'Abr', value: 75 },
    { name: 'Mai', value: 78 },
    { name: 'Jun', value: 82 },
  ];

  return (
    <Card className="p-6">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#22C55E"
              strokeWidth={2}
              dot={{ fill: '#22C55E', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
