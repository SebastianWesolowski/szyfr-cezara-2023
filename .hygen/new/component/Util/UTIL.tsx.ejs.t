---
to: "<%= category === 'util' ? `${path.utils}/${fileNameCamelCase}.ts` : null %>"
---

export const <%= fileNameCamelCase %> = (): Boolean => {
  return true;
}
