import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from 'uuid';

const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  const screenRes = `${window.screen.width}x${window.screen.height}`;
  
  // Basic device detection
  const deviceType = /Mobile|Android|iPhone/i.test(ua) ? 'mobile' : 'desktop';
  
  // Basic browser detection
  const browser = /Chrome/i.test(ua) ? 'Chrome' :
                 /Firefox/i.test(ua) ? 'Firefox' :
                 /Safari/i.test(ua) ? 'Safari' :
                 /Edge/i.test(ua) ? 'Edge' : 'Other';
  
  return {
    deviceType,
    browser,
    screenResolution: screenRes,
    language: navigator.language
  };
};

export const Analytics = () => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const initSession = async () => {
      try {
        // Generate or retrieve visitor ID
        const visitorId = localStorage.getItem('visitor_id') || uuidv4();
        localStorage.setItem('visitor_id', visitorId);
        
        // Create new session
        const deviceInfo = getDeviceInfo();
        const { data: session, error } = await supabase
          .from('analytics_sessions')
          .insert({
            id: uuidv4(),
            visitor_id: visitorId,
            device_type: deviceInfo.deviceType,
            browser: deviceInfo.browser,
            screen_resolution: deviceInfo.screenResolution,
            language: deviceInfo.language
          })
          .select()
          .single();

        if (error) throw error;
        if (session) setSessionId(session.id);
        
      } catch (error) {
        console.error('Error initializing analytics session:', error);
      }
    };

    initSession();
  }, []);

  useEffect(() => {
    const trackPageView = async () => {
      if (!sessionId) return;

      try {
        await supabase
          .from('analytics_events')
          .insert({
            session_id: sessionId,
            event_type: 'pageview',
            page_url: location.pathname,
            referrer: document.referrer || null,
            user_agent: navigator.userAgent
          });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [location, sessionId]);

  return null;
};

export default Analytics;