---
'@backstage/plugin-techdocs': patch
---

Some internal changes were made to make this package independent of `mkdocs` implementation:

- `ReaderProvider` has been deprecated in favor of `TechDocsReaderPageContentProvider` exported by `@backstage/plugin-techdocs-react`;
- `TechDocsReaderLayout` has been deprecated, and `TechDocsReaderPageLayout` is now recommended, this new one accepts child prop which must be a content renderer implementation;
- All `mkdocs` related components have been extracted to a new package called `@backstage/plugin-techdocs-mkdocs-react`, but no breaking changes are expected.
