---
'@backstage/plugin-techdocs-react': minor
---

Added a shared context for the `TechDocs` reader content.
The `useShadowRoot` hook has been removed, you can now get or set the contextualized shadow root using the `useMkdocsReaderPage` hook exported by `@backstage/plugin-techdocs-mkdocs-react`.
