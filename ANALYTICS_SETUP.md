# Analytics Tracking Setup - Konnektr Platform

## Overview

This document provides comprehensive instructions for tracking user flows and conversions across all Konnektr properties:

- **Konnektr Home** (marketing site - this repo)
- **KtrlPlane** (control plane/portal)
- **Graph Explorer** (graph visualization UI)

## Current Setup (Home Marketing Site)

### Tracking Tools

- ✅ **Google Tag Manager (GTM)** - Via `PUBLIC_ENV__GTAG` environment variable
- ✅ **Google Analytics 4 (GA4)** - Configured through GTM
- ❌ **Microsoft Clarity** - NOT YET IMPLEMENTED
- ✅ **Cookie Consent** - GDPR-compliant consent management

### Current Implementation

- Basic pageview tracking (automatic via GA4)
- Consent management with default deny
- No custom event tracking for conversions

---

## 🚨 Required Enhancements

### 1. Add Microsoft Clarity (All Properties)

#### For Konnektr Home (this repo):

**File**: `frontend/src/pages/+Head.tsx`

Add after GTM script:

```tsx
{
  /* Microsoft Clarity */
}
<script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${
      import.meta.env.PUBLIC_ENV__CLARITY_ID
    }");`,
  }}
></script>;
```

**Environment Variable**:

```bash
PUBLIC_ENV__CLARITY_ID=your_clarity_project_id
```

---

### 2. Add Enhanced Event Tracking (Home Marketing Site)

Create a new utility file for analytics tracking:

**File**: `frontend/src/utils/analytics.ts`

```typescript
// Analytics tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }

  // Microsoft Clarity custom tags
  if (window.clarity) {
    window.clarity("set", eventName, eventParams);
  }

  // GTM Data Layer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
};

// Conversion Events
export const trackConversion = (
  conversionType: string,
  value?: number,
  params?: Record<string, any>
) => {
  trackEvent("conversion", {
    conversion_type: conversionType,
    value,
    currency: "USD",
    ...params,
  });
};

// User Journey Events
export const trackDeployClick = (
  tier: string,
  source: "homepage" | "graph_page" | "hero"
) => {
  trackEvent("deploy_graph_click", {
    tier,
    source,
    destination: "ktrlplane",
  });
};

export const trackSignInClick = (source: string) => {
  trackEvent("sign_in_click", {
    source,
    destination: "ktrlplane",
  });
};

export const trackWaitingListSubmit = (product: string) => {
  trackEvent("waiting_list_submit", {
    product,
    event_category: "engagement",
  });
};

export const trackProductPageView = (product: string) => {
  trackEvent("product_page_view", {
    product,
    event_category: "engagement",
  });
};

export const trackDocumentationClick = (source: string) => {
  trackEvent("documentation_click", {
    source,
    destination: "docs",
  });
};

export const trackGraphExplorerClick = () => {
  trackEvent("graph_explorer_click", {
    destination: "explorer",
  });
};

// Cross-domain tracking helper
export const getLinkerParam = (): string => {
  if (window.gtag) {
    // This will be populated by GA4 automatically
    return "";
  }
  return "";
};
```

---

### 3. Update Click Handlers with Event Tracking

#### Homepage Hero CTAs

**File**: `frontend/src/pages/index/+Page.tsx`

```tsx
import { trackDeployClick, trackProductPageView } from "@/utils/analytics";

// In the hero section Deploy button:
<a
  href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackDeployClick("all", "hero")}
  className="..."
>
  Deploy Graph Now
</a>;
```

#### Pricing Section Deploy Buttons

**File**: `frontend/src/pages/index/+Page.tsx`

```tsx
<a
  href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackDeployClick('developer', 'homepage')}
  className="block w-full"
>
  <Button className="w-full">Start Deploying</Button>
</a>

// Standard tier:
<a
  href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackDeployClick('standard', 'homepage')}
  className="block w-full"
>
  <Button className="w-full">Choose Standard</Button>
</a>
```

#### Graph Product Page

**File**: `frontend/src/pages/graph/+Page.tsx`

```tsx
import { trackDeployClick, trackProductPageView } from "@/utils/analytics";

// Add to Page component:
export default function Page() {
  useEffect(() => {
    trackProductPageView('graph');
  }, []);

  // Hero Deploy button:
  <a
    href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
    onClick={() => trackDeployClick('all', 'graph_page')}
    // ...
  >
```

#### Sign In Button

**File**: `frontend/src/layouts/LayoutDefault.tsx`

```tsx
import { trackSignInClick } from "@/utils/analytics";

<a
  href="https://ktrlplane.konnektr.io"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackSignInClick("header")}
  className="..."
>
  Sign In
</a>;
```

#### Waiting List Dialog

**File**: `frontend/src/components/MailingListDialog.tsx`

```tsx
import { trackWaitingListSubmit } from "@/utils/analytics";

// In form submission handler:
const handleSubmit = async () => {
  // ... existing code ...

  // After successful submission:
  trackWaitingListSubmit(product);

  // ... rest of code ...
};
```

---

## Cross-Domain Tracking Configuration

### For KtrlPlane (Portal) Repo

**What to add**: Cross-domain tracking configuration to track users coming from marketing site.

**File**: `src/utils/analytics.ts` (create if doesn't exist)

```typescript
// Initialize GA4 with cross-domain tracking
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const initializeAnalytics = (gtmId: string) => {
  if (window.gtag) {
    window.gtag("config", gtmId, {
      linker: {
        domains: [
          "konnektr.io",
          "ktrlplane.konnektr.io",
          "explorer.graph.konnektr.io",
        ],
      },
      cookie_flags: "SameSite=None;Secure",
    });
  }
};

// Track key portal events
export const trackResourceCreation = (
  resourceType: string,
  tier: string,
  projectId: string
) => {
  if (window.gtag) {
    window.gtag("event", "resource_created", {
      resource_type: resourceType,
      tier,
      project_id: projectId,
      event_category: "conversion",
      value: tier === "standard" ? 99 : 0,
    });
  }
};

export const trackResourceCreationStart = (
  resourceType: string,
  tier?: string,
  source?: string
) => {
  if (window.gtag) {
    window.gtag("event", "begin_resource_creation", {
      resource_type: resourceType,
      tier: tier || "unknown",
      source: source || "direct",
      event_category: "engagement",
    });
  }
};

export const trackAuthentication = (
  method: "sign_up" | "sign_in",
  provider?: string
) => {
  if (window.gtag) {
    window.gtag("event", method, {
      method: provider || "email",
      event_category: "authentication",
    });
  }
};

export const trackProjectCreation = (
  projectId: string,
  projectName: string
) => {
  if (window.gtag) {
    window.gtag("event", "project_created", {
      project_id: projectId,
      project_name: projectName,
      event_category: "conversion",
    });
  }
};
```

**File**: `src/pages/_app.tsx` or similar entry point

```tsx
import { useEffect } from "react";
import { initializeAnalytics } from "@/utils/analytics";

export default function App() {
  useEffect(() => {
    // Use same GTM ID as marketing site
    initializeAnalytics(process.env.NEXT_PUBLIC_GTAG_ID || "");
  }, []);

  // ... rest of app
}
```

**Key Integration Points in KtrlPlane**:

1. **Resource Creation Page** (`/resources/create`):

   - Track when user lands on page (with referrer)
   - Track when user selects tier
   - Track when resource creation completes

2. **Authentication**:

   - Track sign-up completion
   - Track sign-in success
   - Track authentication method

3. **Project Management**:
   - Track project creation
   - Track resource deployments

**Example**: Resource Creation Page Component

```tsx
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  trackResourceCreationStart,
  trackResourceCreation,
} from "@/utils/analytics";

export default function CreateResourcePage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const resourceType = searchParams.get("resource_type");
    const tier = searchParams.get("tier");
    const source = document.referrer.includes("konnektr.io")
      ? "marketing"
      : "direct";

    if (resourceType) {
      trackResourceCreationStart(resourceType, tier || undefined, source);
    }
  }, [searchParams]);

  const handleResourceCreated = (resource: any) => {
    trackResourceCreation(resource.type, resource.tier, resource.project_id);
  };

  // ... component code
}
```

---

### For Graph Explorer Repo

**What to add**: Track user interactions with the graph visualization.

**File**: `src/utils/analytics.ts`

```typescript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

export const initializeAnalytics = (gtmId: string) => {
  if (window.gtag) {
    window.gtag("config", gtmId, {
      linker: {
        domains: [
          "konnektr.io",
          "ktrlplane.konnektr.io",
          "explorer.graph.konnektr.io",
        ],
      },
    });
  }
};

// Graph Explorer specific events
export const trackGraphQuery = (
  queryType: "select" | "cypher" | "visual",
  resultCount: number,
  executionTime: number
) => {
  if (window.gtag) {
    window.gtag("event", "graph_query", {
      query_type: queryType,
      result_count: resultCount,
      execution_time_ms: executionTime,
      event_category: "explorer_usage",
    });
  }
};

export const trackGraphVisualization = (
  nodeCount: number,
  relationshipCount: number,
  layoutType: string
) => {
  if (window.gtag) {
    window.gtag("event", "graph_visualized", {
      node_count: nodeCount,
      relationship_count: relationshipCount,
      layout_type: layoutType,
      event_category: "explorer_usage",
    });
  }
};

export const trackExplorerSession = (
  sessionDuration: number,
  queryCount: number
) => {
  if (window.gtag) {
    window.gtag("event", "explorer_session_end", {
      session_duration_seconds: sessionDuration,
      query_count: queryCount,
      event_category: "engagement",
    });
  }
};

export const trackResourceConnection = (
  resourceId: string,
  resourceType: string
) => {
  if (window.gtag) {
    window.gtag("event", "resource_connected", {
      resource_id: resourceId,
      resource_type: resourceType,
      event_category: "explorer_usage",
    });
  }
};
```

---

## Google Analytics 4 Configuration

### Recommended Custom Events in GA4

Create these custom events in GA4 (Admin > Events):

1. **deploy_graph_click** - When user clicks deploy CTA
2. **resource_created** - When resource creation completes (conversion)
3. **begin_resource_creation** - When user starts resource creation flow
4. **sign_up** / **sign_in** - Authentication events (conversion)
5. **waiting_list_submit** - When user joins waiting list
6. **graph_query** - When user queries in Graph Explorer
7. **explorer_session_end** - Graph Explorer session metrics

### Recommended Conversions

Mark these events as conversions in GA4:

- ✅ **resource_created** (primary conversion)
- ✅ **sign_up** (registration conversion)
- ✅ **waiting_list_submit** (lead generation)
- ✅ **begin_resource_creation** (funnel conversion)

### Custom Dimensions

Create these custom dimensions:

- **tier** - Pricing tier (developer/standard/enterprise)
- **product** - Product name (graph/assembler/flow/compass)
- **source** - Traffic source (homepage/graph_page/hero)
- **resource_type** - Type of resource created

---

## Microsoft Clarity Configuration

### Projects to Create

1. **Konnektr Home** - Marketing site
2. **KtrlPlane Portal** - Control plane
3. **Graph Explorer** - Visualization tool

### Recommended Setup

- Enable session recordings
- Enable heatmaps
- Set up custom tags for key events (matching GA4 events)
- Configure filtering to exclude internal IPs

### Custom Tags in Clarity

```javascript
// In your event tracking functions:
if (window.clarity) {
  clarity("set", "tier", tierName);
  clarity("set", "product", productName);
}
```

---

## User Journey Tracking

### Funnel: Marketing → Portal → Resource Creation

**Stage 1: Marketing Site (Home)**

- Page view: Homepage
- Event: `deploy_graph_click` (with tier and source)
- Redirect to KtrlPlane with UTM parameters

**Stage 2: KtrlPlane Portal**

- Page view: Resource creation page
- Event: `begin_resource_creation` (captures referrer)
- Authentication if needed: `sign_up` or `sign_in`
- Event: `resource_created` (conversion!)

**Stage 3: Graph Explorer**

- Event: `resource_connected`
- Event: `graph_query` (usage)
- Event: `graph_visualized` (engagement)

### URL Parameters for Tracking

Update all KtrlPlane links to include UTM parameters:

```tsx
// Instead of:
href =
  "https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph";

// Use:
href =
  "https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&utm_source=home&utm_medium=cta&utm_campaign=launch&utm_content=hero_deploy";
```

---

## Testing Checklist

### Before Launch:

- [ ] Verify GTM container is firing on all pages
- [ ] Verify GA4 is receiving pageviews
- [ ] Test custom events in GA4 DebugView
- [ ] Verify Clarity is recording sessions
- [ ] Test cross-domain tracking (check \_ga cookie)
- [ ] Verify consent management works
- [ ] Test all deploy CTAs fire events
- [ ] Test waiting list form fires events
- [ ] Verify events include correct parameters

### Tools for Testing:

- GA4 DebugView: `https://analytics.google.com/analytics/web/`
- GTM Preview Mode: In GTM, click "Preview"
- Chrome DevTools Console: Check for `dataLayer` pushes
- Clarity Dashboard: View live sessions
- GA Debugger Chrome Extension

---

## Privacy & GDPR Compliance

### Current Implementation (Good!)

- ✅ Default consent is DENIED
- ✅ Cookie consent banner
- ✅ User must opt-in

### Ensure in Privacy Policy

- Document Google Analytics usage
- Document Microsoft Clarity usage
- Document cross-domain tracking
- Provide opt-out instructions
- List cookie purposes and durations

---

## Environment Variables Summary

### Konnektr Home (this repo)

```bash
PUBLIC_ENV__GTAG=G-XXXXXXXXXX          # Google Analytics 4 Measurement ID
PUBLIC_ENV__CLARITY_ID=xxxxxx          # Microsoft Clarity Project ID
```

### KtrlPlane Portal

```bash
NEXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX       # Same as Home (for cross-domain)
NEXT_PUBLIC_CLARITY_ID=xxxxxx          # Clarity Project ID for Portal
```

### Graph Explorer

```bash
VITE_GTAG_ID=G-XXXXXXXXXX              # Same as Home (for cross-domain)
VITE_CLARITY_ID=xxxxxx                 # Clarity Project ID for Explorer
```

---

## Next Steps

1. **Immediate** (Pre-Launch):

   - [ ] Add Microsoft Clarity to Home site
   - [ ] Implement event tracking utilities
   - [ ] Update all CTAs with event tracking
   - [ ] Test in GA4 DebugView

2. **Portal Integration**:

   - [ ] Set up cross-domain tracking
   - [ ] Add resource creation tracking
   - [ ] Add authentication tracking

3. **Graph Explorer Integration**:

   - [ ] Add session tracking
   - [ ] Add query usage tracking
   - [ ] Add visualization tracking

4. **Post-Launch**:
   - [ ] Monitor conversion funnel
   - [ ] Analyze user drop-off points
   - [ ] Review Clarity session recordings
   - [ ] Optimize based on data

---

## Support Resources

- [GA4 Cross-Domain Tracking](https://support.google.com/analytics/answer/10071811)
- [Microsoft Clarity Documentation](https://learn.microsoft.com/en-us/clarity/)
- [GTM Container Setup](https://support.google.com/tagmanager/answer/6103696)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
