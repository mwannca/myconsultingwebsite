import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  topPages: { page: string; views: number }[];
  deviceStats: { device: string; count: number }[];
  browserStats: { browser: string; count: number }[];
  languageStats: { language: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
  hourlyStats: { hour: number; views: number }[];
}

interface DetailedPageViews {
  last24h: number;
  last7d: number;
  last30d: number;
  total: number;
}

export const useAnalytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [detailedPageViews, setDetailedPageViews] = useState<DetailedPageViews>({
    last24h: 0,
    last7d: 0,
    last30d: 0,
    total: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        
        const { data: events, error: eventsError } = await supabase
          .from('analytics_events')
          .select('*');

        const { data: sessions, error: sessionsError } = await supabase
          .from('analytics_sessions')
          .select('*');

        if (eventsError) throw eventsError;
        if (sessionsError) throw sessionsError;

        if (events && sessions) {
          // Calculate detailed page views
          const now = new Date();
          const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
          const last7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          const last30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

          const detailedViews = {
            last24h: events.filter(e => new Date(e.created_at) > last24h).length,
            last7d: events.filter(e => new Date(e.created_at) > last7d).length,
            last30d: events.filter(e => new Date(e.created_at) > last30d).length,
            total: events.length
          };
          setDetailedPageViews(detailedViews);

          // Process analytics data
          const processedData: AnalyticsData = {
            pageViews: events.length,
            uniqueVisitors: new Set(sessions.map(s => s.visitor_id)).size,
            topPages: processTopPages(events),
            deviceStats: processDeviceStats(sessions),
            browserStats: processBrowserStats(sessions),
            languageStats: processLanguageStats(sessions),
            topReferrers: processReferrers(events),
            hourlyStats: processHourlyStats(events)
          };

          setData(processedData);
        }
      } catch (error) {
        console.error('Error fetching analytics:', error);
        toast({
          title: "Error",
          description: "Failed to fetch analytics data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [toast]);

  return { data, loading, detailedPageViews };
};

// Helper functions
const processTopPages = (events: any[]) => {
  const pageCount: Record<string, number> = {};
  events.forEach(event => {
    const path = event.page_url || 'unknown';
    pageCount[path] = (pageCount[path] || 0) + 1;
  });
  
  return Object.entries(pageCount)
    .map(([page, views]) => ({ page, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);
};

const processDeviceStats = (sessions: any[]) => {
  const deviceCount: Record<string, number> = {};
  sessions.forEach(session => {
    const device = session.device_type || 'unknown';
    deviceCount[device] = (deviceCount[device] || 0) + 1;
  });
  
  return Object.entries(deviceCount)
    .map(([device, count]) => ({ device, count }));
};

const processBrowserStats = (sessions: any[]) => {
  const browserCount: Record<string, number> = {};
  sessions.forEach(session => {
    const browser = session.browser || 'unknown';
    browserCount[browser] = (browserCount[browser] || 0) + 1;
  });
  
  return Object.entries(browserCount)
    .map(([browser, count]) => ({ browser, count }));
};

const processLanguageStats = (sessions: any[]) => {
  const languageCount: Record<string, number> = {};
  sessions.forEach(session => {
    const language = session.language || 'unknown';
    languageCount[language] = (languageCount[language] || 0) + 1;
  });

  return Object.entries(languageCount)
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
};

const processReferrers = (events: any[]) => {
  const referrerCount: Record<string, number> = {};
  events.forEach(event => {
    const referrer = event.referrer || 'direct';
    referrerCount[referrer] = (referrerCount[referrer] || 0) + 1;
  });

  return Object.entries(referrerCount)
    .map(([referrer, count]) => ({ referrer, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
};

const processHourlyStats = (events: any[]) => {
  const hourlyCount: Record<number, number> = {};
  events.forEach(event => {
    const hour = new Date(event.created_at).getHours();
    hourlyCount[hour] = (hourlyCount[hour] || 0) + 1;
  });

  return Array.from({ length: 24 }, (_, hour) => ({
    hour,
    views: hourlyCount[hour] || 0
  }));
};