---
inject: true
to: "<%= category === 'component' ? `${atomFolder}/${atomType}Introduction.stories.mdx` : null %>"
append: true
---
<a className="link-item" href="/story/<%= atomType %>s-<%= fileNameCamelCase %>--basic">
  <img src={Code} alt="code" />
  <span>
    <strong><%= fileNamePascalCase %></strong>
    Example description
  </span>
</a>
