import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from 'uuid';

interface DeviceInfo {
  deviceType: string;
  browser: string;
  os: string;
  screenResolution: string;
  language: string;
}

const getDeviceInfo = (): DeviceInfo => {
  const ua = navigator.userAgent;
  const screenRes = `${window.screen.width}x${window.screen.height}`;
  
  // Basic device detection
  const deviceType = /Mobile|Android|iPhone/i.test(ua) ? 'mobile' : 'desktop';
  
  // Basic browser detection
  const browser = /Chrome/i.test(ua) ? 'Chrome' :
                 /Firefox/i.test(ua) ? 'Firefox' :
                 /Safari/i.test(ua) ? 'Safari' :
                 /Edge/i.test(ua) ? 'Edge' : 'Other';
  
  // Basic OS detection
  const os = /Windows/i.test(ua) ? 'Windows' :
            /Mac/i.test(ua) ? 'MacOS' :
            /Linux/i.test(ua) ? 'Linux' :
            /Android/i.test(ua) ? 'Android' :
            /iOS/i.test(ua) ? 'iOS' : 'Other';

  return {
    deviceType,
    browser,
    os,
    screenResolution: screenRes,
    language: navigator.language
  };
}

export const initializeAnalytics = async () => {
  const sessionId = uuidv4();
  const visitorId = localStorage.getItem('visitor_id') || uuidv4();
  localStorage.setItem('visitor_id', visitorId);
  
  const deviceInfo = getDeviceInfo();
  
  // Create new session
  await supabase.from('analytics_sessions').insert({
    id: sessionId,
    visitor_id: visitorId,
    device_type: deviceInfo.deviceType,
    browser: deviceInfo.browser,
    os: deviceInfo.os,
    screen_resolution: deviceInfo.screenResolution,
    language: deviceInfo.language
  });

  return sessionId;
};

export const trackPageView = async (sessionId: string) => {
  const { pathname, href } = window.location;
  const referrer = document.referrer;

  await supabase.from('analytics_events').insert({
    session_id: sessionId,
    event_type: 'pageview',
    page_url: pathname,
    referrer: referrer || null,
    user_agent: navigator.userAgent
  });
};