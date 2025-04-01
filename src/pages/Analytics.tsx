import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { PageViewsCard } from "@/components/analytics/PageViewsCard";
import { AnalyticsCard } from "@/components/analytics/AnalyticsCard";
import { DistributionChart } from "@/components/analytics/DistributionChart";
import { TrafficChart } from "@/components/analytics/TrafficChart";
import { ReferrersTable } from "@/components/analytics/ReferrersTable";
import { useAnalytics } from "@/hooks/useAnalytics";

const Analytics = () => {
  const { data, loading, detailedPageViews } = useAnalytics();

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <PageViewsCard 
            pageViews={data?.pageViews || 0}
            detailedPageViews={detailedPageViews}
          />

          <AnalyticsCard
            title="Unique Visitors"
            description="Number of unique visitors"
          >
            <p className="text-4xl font-bold">{data?.uniqueVisitors || 0}</p>
          </AnalyticsCard>

          <AnalyticsCard
            title="Avg. Time on Site"
            description="Average session duration"
          >
            <p className="text-4xl font-bold">4m 32s</p>
          </AnalyticsCard>

          <AnalyticsCard
            title="Bounce Rate"
            description="Single page session rate"
          >
            <p className="text-4xl font-bold">45.2%</p>
          </AnalyticsCard>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <TrafficChart
            title="Top Pages"
            description="Most viewed pages"
            data={data?.topPages.map(({ page, views }) => ({ name: page, value: views })) || []}
            xAxisDataKey="name"
            barDataKey="value"
          />

          <TrafficChart
            title="Hourly Traffic"
            description="Page views by hour"
            data={data?.hourlyStats.map(({ hour, views }) => ({ name: hour.toString(), value: views })) || []}
            xAxisDataKey="name"
            barDataKey="value"
          />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <DistributionChart
            title="Device Distribution"
            description="Visits by device type"
            data={data?.deviceStats.map(({ device, count }) => ({ name: device, value: count })) || []}
          />

          <DistributionChart
            title="Browser Distribution"
            description="Visits by browser"
            data={data?.browserStats.map(({ browser, count }) => ({ name: browser, value: count })) || []}
          />

          <DistributionChart
            title="Language Distribution"
            description="Visits by language preference"
            data={data?.languageStats.map(({ language, count }) => ({ name: language, value: count })) || []}
          />
        </div>

        {/* Referrers Table */}
        <ReferrersTable referrers={data?.topReferrers || []} />
      </div>
    </div>
  );
};

export default Analytics;