import { Eye } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AnalyticsCard } from "./AnalyticsCard";

interface PageViewsCardProps {
  pageViews: number;
  detailedPageViews: {
    last24h: number;
    last7d: number;
    last30d: number;
    total: number;
  };
}

export const PageViewsCard = ({ pageViews, detailedPageViews }: PageViewsCardProps) => {
  return (
    <AnalyticsCard
      title="Page Views"
      description="Total number of page views"
    >
      <div className="relative flex items-center gap-2">
        <p className="text-4xl font-bold">{pageViews}</p>
        <Popover>
          <PopoverTrigger>
            <Eye className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-4" side="bottom" align="start">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Page View Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Last 24h</p>
                  <p className="text-lg font-semibold">{detailedPageViews.last24h}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Last 7 days</p>
                  <p className="text-lg font-semibold">{detailedPageViews.last7d}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                  <p className="text-lg font-semibold">{detailedPageViews.last30d}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="text-lg font-semibold">{detailedPageViews.total}</p>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </AnalyticsCard>
  );
};