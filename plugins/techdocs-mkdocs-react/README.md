# techdocs-mkdocs-react

A `web-library` that exports components for you to compose a TechDocs reader page with mkdocs.

## Usage

Create a custom reader page as follows:

```tsx
// packages/app/src/components/techdocs/TechDocsPage.tsx
import { TechDocsReaderPageLayout } from '@backstage/plugin-techdocs';
import { MkDocsReaderPage } from '@backstage/plugin-techdocs-mkdocs-react';

const TechDocsPage = () => (
  <MkDocsReaderPage>
    {children => (
      <TechDocsReaderPageLayout>{children}</TechDocsReaderPageLayout>
    )}
  </MkDocsReaderPage>
);

export const techDocsPage = <TechDocsPage />;
```

> **Important**: `MkDocsReaderPage` replaces the default reader page, so do not wrap it in a `TechDocsReaderPage`.

Now, render the custom page as a child of reader route:

```tsx
// packages/app/src/App.tsx
import { TechDocsReaderPage } from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import {
  ExpandableNavigation,
  ReportIssue,
  TextSize,
} from '@backstage/plugin-techdocs-mkdocs-addons';
import { MkDocsReaderPage } from '@backstage/plugin-techdocs-mkdocs-react';

<Route path="/docs/:namespace/:kind/:name/*" element={<TechDocsReaderPage />}>
  <TechDocsAddons>
    <ExpandableNavigation />
    <ReportIssue />
    <TextSize />
  </TechDocsAddons>
</Route>;
```

That's it :tada:!
