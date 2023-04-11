---
to: "<%= category === 'component' ? `${folderToSave}/index.ts` : null %>"
---
export * from "./<%= fileNamePascalCase %>";
