import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AnalyticsCard } from "./AnalyticsCard";

interface ReferrersTableProps {
  referrers: Array<{ referrer: string; count: number }>;
}

export const ReferrersTable = ({ referrers }: ReferrersTableProps) => {
  return (
    <AnalyticsCard title="Top Referrers" description="Traffic sources">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Source</TableHead>
            <TableHead className="text-right">Visits</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {referrers.map((referrer, index) => (
            <TableRow key={index}>
              <TableCell>{referrer.referrer}</TableCell>
              <TableCell className="text-right">{referrer.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AnalyticsCard>
  );
};