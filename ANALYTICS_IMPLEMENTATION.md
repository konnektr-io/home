# Analytics Implementation Summary

## ✅ Completed Changes to Konnektr Home

### 1. **Microsoft Clarity Integration**

- Integrated via Google Tag Manager (GTM)
- Automatically receives events from GTM Data Layer
- No additional script needed in Head

### 2. **Cross-Domain Tracking**

- Updated Google Analytics configuration with linker domains
- Configured for tracking across:
  - `konnektr.io` (marketing)
  - `ktrlplane.konnektr.io` (portal)
  - `explorer.graph.konnektr.io` (explorer)

### 3. **Analytics Tracking Utilities**

Created `frontend/src/utils/analytics.ts` with functions:

- `trackEvent()` - Universal event tracking
- `trackDeployClick()` - Deploy CTA tracking
- `trackSignInClick()` - Sign in tracking
- `trackWaitingListSubmit()` - Lead generation tracking
- `trackProductPageView()` - Page view tracking
- `trackDocumentationClick()` - Docs engagement tracking
- And more...

### 4. **UTM Parameters Added**

All KtrlPlane links now include proper UTM tracking:

- **Source**: `home`
- **Medium**: `cta`, `pricing`, `pricing_table`
- **Campaign**: `launch`
- **Content**: Specific button location (e.g., `hero_deploy`, `developer_tier`)

### 5. **Event Tracking Implementation**

#### Homepage (`frontend/src/pages/index/+Page.tsx`):

✅ Hero Deploy button
✅ Developer tier Deploy button
✅ Standard tier Deploy button

#### Graph Page (`frontend/src/pages/graph/+Page.tsx`):

✅ Product page view tracking
✅ Hero Deploy button
✅ Documentation link
✅ Pricing table Developer tier
✅ Pricing table Standard tier

#### Navigation:

✅ Desktop Sign In button
✅ Mobile Sign In button
✅ Demo Request button

#### Waiting List:

✅ Form submission tracking for all products

---

## 📋 Required: Environment Variables

### Local Development

Create/update `.env.local` or similar:

```bash
PUBLIC_ENV__GTAG=G-XXXXXXXXXX          # Your GA4 Measurement ID
```

### Production Deployment

Add to your Dockerfile or deployment configuration:

```dockerfile
ENV PUBLIC_ENV__GTAG=G-XXXXXXXXXX
```

**Note:** Clarity is integrated via GTM and doesn't require a separate environment variable.

---

## 🔄 Next Steps for Other Repositories

### For KtrlPlane (Portal) Repository

**See full instructions in**: `ANALYTICS_SETUP.md`

Key integration points:

1. **Resource Creation Page** (`/resources/create`):

   - Detect UTM parameters from URL
   - Track `begin_resource_creation` event
   - Track `resource_created` event (conversion!)

2. **Authentication Flow**:

   - Track `sign_up` event
   - Track `sign_in` event

3. **Project Management**:
   - Track `project_created` event

**Example Code for Resource Creation**:

```typescript
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function CreateResourcePage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track when user arrives from marketing site
    const resourceType = searchParams.get("resource_type");
    const tier = searchParams.get("tier");
    const utmSource = searchParams.get("utm_source");

    if (window.gtag && resourceType) {
      window.gtag("event", "begin_resource_creation", {
        resource_type: resourceType,
        tier: tier || "unknown",
        source: utmSource || "direct",
        event_category: "conversion_funnel",
      });
    }
  }, [searchParams]);

  const handleResourceCreated = (resource) => {
    // Track successful resource creation (KEY CONVERSION!)
    if (window.gtag) {
      window.gtag("event", "resource_created", {
        resource_type: resource.type,
        tier: resource.tier,
        project_id: resource.project_id,
        event_category: "conversion",
        value: resource.tier === "standard" ? 99 : 0,
        currency: "USD",
      });
    }
  };

  // ... rest of component
}
```

### For Graph Explorer Repository

**See full instructions in**: `ANALYTICS_SETUP.md`

Key integration points:

1. Track when users connect to a resource
2. Track query executions
3. Track graph visualizations
4. Track session duration/engagement

**Example Code**:

```typescript
// Track when user connects to Graph resource
export const trackResourceConnection = (resourceId: string) => {
  if (window.gtag) {
    window.gtag("event", "resource_connected", {
      resource_id: resourceId,
      resource_type: "graph",
      event_category: "explorer_usage",
    });
  }
};

// Track query execution
export const trackGraphQuery = (queryType: string, resultCount: number) => {
  if (window.gtag) {
    window.gtag("event", "graph_query", {
      query_type: queryType,
      result_count: resultCount,
      event_category: "explorer_usage",
    });
  }
};
```

---

## 🧪 Testing Your Analytics

### 1. **Test in Development**

All tracking events log to console when in dev mode:

```bash
pnpm run dev
# Open browser console
# Click any tracked button
# Should see: [Analytics] event_name {...params}
```

### 2. **Test with GA4 DebugView**

1. Go to GA4 property → Admin → DebugView
2. In your browser, add `?debug_mode=true` to URL
3. Perform actions on site
4. Watch events appear in real-time in DebugView

### 3. **Test with Chrome Extensions**

Install:

- **GA Debugger**: See gtag calls in console
- **Tag Assistant**: Validate GTM/GA setup
- **Clarity Extension**: Test MS Clarity integration

### 4. **Test Cross-Domain Tracking**

1. Start on marketing site (`konnektr.io`)
2. Click "Deploy Graph Now"
3. Check URL on KtrlPlane - should see `_ga=` parameter
4. Both sites should share same Client ID

---

## 📊 Google Analytics 4 Setup

### Custom Events to Create

In GA4 Admin → Events:

| Event Name                | Description                | Conversion?        |
| ------------------------- | -------------------------- | ------------------ |
| `deploy_graph_click`      | User clicks deploy CTA     | No                 |
| `begin_resource_creation` | User starts creation flow  | Yes (funnel)       |
| `resource_created`        | Resource creation complete | **YES** (primary)  |
| `sign_up`                 | New user registration      | **YES**            |
| `sign_in`                 | User authentication        | No                 |
| `waiting_list_submit`     | Waiting list form          | **YES** (lead gen) |
| `product_page_view`       | Product page viewed        | No                 |
| `documentation_click`     | Docs link clicked          | No                 |

### Custom Dimensions to Create

In GA4 Admin → Custom Definitions → Custom Dimensions:

| Dimension Name | Event Parameter | Scope |
| -------------- | --------------- | ----- |
| Tier           | `tier`          | Event |
| Product        | `product`       | Event |
| Source         | `source`        | Event |
| Resource Type  | `resource_type` | Event |

### Conversion Values

Set monetary values for conversions:

- **resource_created** (Standard): $99
- **resource_created** (Developer): $0
- **sign_up**: $0 (lead value)
- **waiting_list_submit**: $0 (lead value)

---

## 📈 Microsoft Clarity Setup

### Create Three Projects

1. **Konnektr Home**: `konnektr.io`
2. **KtrlPlane Portal**: `ktrlplane.konnektr.io`
3. **Graph Explorer**: `explorer.graph.konnektr.io`

### Recommended Settings

- ✅ Enable session recordings
- ✅ Enable heatmaps
- ✅ Mask sensitive data (emails, passwords)
- ✅ Set up IP exclusions for internal traffic
- ✅ Enable custom tags (automatically from events)

### Using Clarity for Insights

- Watch session recordings of users who deploy resources
- Identify where users drop off in funnel
- See heatmaps of CTA click patterns
- Filter sessions by custom tags (tier, product)

---

## 🎯 Key Conversion Funnel

### Marketing → Portal → Usage

**Stage 1: Discovery** (Marketing Site)

1. User lands on homepage or Graph page
2. Event: `product_page_view`
3. User reads content, views pricing

**Stage 2: Intent** (Marketing Site) 4. User clicks "Deploy Graph Now" 5. Event: `deploy_graph_click` with tier and source 6. Redirect with UTM parameters

**Stage 3: Onboarding** (KtrlPlane Portal) 7. User lands on resource creation page 8. Event: `begin_resource_creation` (funnel step) 9. User authenticates (if needed) 10. Event: `sign_up` or `sign_in`

**Stage 4: Conversion** (KtrlPlane Portal) 11. User completes resource creation 12. Event: `resource_created` ← **PRIMARY CONVERSION** 13. Track tier, value, project_id

**Stage 5: Activation** (Graph Explorer) 14. User connects to Graph resource 15. Event: `resource_connected` 16. User runs queries 17. Event: `graph_query` (usage tracking)

---

## 🚨 Important Notes

### Privacy & GDPR

✅ Cookie consent is implemented
✅ Default consent is DENIED
✅ Analytics only load after user accepts
✅ Update privacy policy to mention Clarity

### Cross-Domain Considerations

- Use same GA4 property ID across all domains
- Ensure `_ga` cookie is passed in links
- Test with browser DevTools → Application → Cookies
- Client ID should be consistent across domains

### Attribution Window

- GA4 default: 90 days
- Consider shortening for B2B SaaS (30 days)
- Configure in GA4 Admin → Data Settings → Attribution

---

## 📝 Checklist Before Launch

### Home Site (This Repo)

- [ ] Verify Clarity is integrated via GTM
- [ ] Test all Deploy CTAs fire events
- [ ] Test waiting list form fires events
- [ ] Verify UTM parameters in links
- [ ] Check GA4 DebugView receives events
- [ ] Verify Clarity records sessions

### KtrlPlane Portal

- [ ] Add cross-domain tracking code
- [ ] Implement `begin_resource_creation` tracking
- [ ] Implement `resource_created` tracking
- [ ] Implement authentication tracking
- [ ] Test funnel with UTM parameters

### Graph Explorer

- [ ] Add cross-domain tracking code
- [ ] Implement connection tracking
- [ ] Implement query tracking
- [ ] Test resource connection flow

### Analytics Configuration

- [ ] Create custom events in GA4
- [ ] Mark conversions in GA4
- [ ] Create custom dimensions
- [ ] Set up Clarity projects
- [ ] Configure conversion values
- [ ] Test cross-domain tracking

---

## 🔗 Resources

- Full Implementation Guide: `ANALYTICS_SETUP.md`
- GA4 Documentation: https://support.google.com/analytics
- Clarity Documentation: https://learn.microsoft.com/clarity
- GTM Guide: https://support.google.com/tagmanager

---

## 💡 Quick Tips

### Debugging Events

```javascript
// In browser console:
window.dataLayer; // See all GTM events
window.gtag("event", "test", { test_param: "hello" }); // Manual test
// Clarity events automatically flow through GTM
```

### Testing Cross-Domain

```javascript
// Check if GA client ID matches across domains
document.cookie.match(/_ga=([^;]+)/)?.[1];
```

### Monitoring in Production

- Set up GA4 alerts for conversion drops
- Monitor Clarity daily for first 2 weeks
- Review funnel reports weekly
- Check for broken tracking tags

---

**Questions?** Refer to `ANALYTICS_SETUP.md` for detailed instructions or check the inline comments in the tracking utility functions.
