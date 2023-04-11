---
to: "<%= isReadme && category === 'component' ? `${folderToSave}/README.md` : null %>"
---
# <%= fileNamePascalCase %>

## Usage

```tsx
import { <%= fileNamePascalCase %> } from "@<%= category %>";
// or

<% if(isProps && isChildren){ -%>
<<%= fileNamePascalCase %> dummy='props dummy test'>
  <span>children test</span>
</<%= fileNamePascalCase %>>
<% } else if(isChildren){ -%>
<<%= fileNamePascalCase %>>
  <span>children test</span>
</<%= fileNamePascalCase %>>
<% } else if(isProps){ -%>
<<%= fileNamePascalCase %> dummy='props dummy test' />
<% } else { -%>
<<%= fileNamePascalCase %> />
<% } -%>
```

<!-- ## TOOD

- [ ] ...
  - [ ] ...
  - [ ] ...
- [ ] ... -->
