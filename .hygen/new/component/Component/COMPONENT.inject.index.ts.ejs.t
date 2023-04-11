---
inject: true
to: "<%= category === 'component' ? `${atomFolder}/index.ts` : null %>"
append: true
---
export * from "./<%= fileNamePascalCase %>";
