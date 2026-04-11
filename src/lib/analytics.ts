declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
    };
    clarity?: (action: string, event: string) => void;
  }
}

const analyticsConfig = {
  posthogKey: import.meta.env.VITE_POSTHOG_KEY,
  clarityProjectId: import.meta.env.VITE_CLARITY_PROJECT_ID,
};

export function bootstrapAnalytics() {
  if (analyticsConfig.posthogKey) {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: "posthog_bootstrap_ready",
      keyPresent: true,
    });
  }

  if (analyticsConfig.clarityProjectId) {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: "clarity_bootstrap_ready",
      projectIdPresent: true,
    });
  }
}

export function trackEvent(event: string, properties?: Record<string, unknown>) {
  window.posthog?.capture(event, properties);
}

export function trackClarityEvent(event: string) {
  window.clarity?.("event", event);
}
