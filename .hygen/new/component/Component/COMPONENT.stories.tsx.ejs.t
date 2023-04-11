---
to: "<%= category === 'component' ? `${folderToSave}/${fileNamePascalCase}.stories.tsx` : null %>"
---
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { <%= fileNamePascalCase %> } from "./<%= fileNamePascalCase %>";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "<%= atomTypeStartUpperLetter %>s/<%= fileNamePascalCase %>",
  component: <%= fileNamePascalCase %>,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
<% if(isProps) { -%>
    dummy: {
      name: "dummy",
      description: "Dummy props",
      defaultValue: null,
      type: { name: "string", required: true },
      control: {
        type: "text",
      },
    },
<% } -%>
  },
} as ComponentMeta<typeof <%= fileNamePascalCase %>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof <%= fileNamePascalCase %>> = (args) => {
<% if(isChildren){ -%>
  return (
    <<%= fileNamePascalCase %> {...args}>
      <span>Children test</span>
    </<%= fileNamePascalCase %>>
  );
<% } else { -%>
  return <<%= fileNamePascalCase %> {...args} />;
<% } -%>
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
<% if(isStyle){ -%>
  dummy: "Dummy test other value 2",
<% } -%>
};
