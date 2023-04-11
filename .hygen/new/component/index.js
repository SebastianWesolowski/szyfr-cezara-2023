// https://github.com/jondot/hygen/issues/131
// checkboxes list

module.exports = {
  prompt: ({ prompter, args }) => {
    return prompter
      .prompt([
        {
          type: "input",
          name: "fileName",
          message: "What is the file name?",
        },
        {
          type: "select",
          name: "category",
          message: "Which type component?",
          choices: ["component", "page", "util"],
        },
      ])
      .then(({ category, fileName }) => {
        args.category = category;
        args.fileName = fileName;

        if (category === "component") {
          return prompter.prompt({
            type: "select",
            name: "atomType",
            message: "Which type atom?",
            choices: ["atom", "molecule", "organism", "template", "layout"],
          });
        }
        return { atomType: null };
      })
      .then(({ atomType }) => {
        if (atomType) {
          args.atomType = atomType;
        }
        if (args.category === "util") {
          return { isAdvanced: false };
        }
        return prompter.prompt({
          type: "confirm",
          name: "isAdvanced",
          message: "Do you want to run the advanced creator ?",
        });
      })
      .then(({ isAdvanced }) => {
        args.isAdvanced = isAdvanced;
        const isChildren = false;
        const isStyle = false;
        const isTest = false;
        const isProps = false;
        const isReadme = false;
        const isContext = false;
        args.isChildren = isChildren;
        args.isStyle = isStyle;
        args.isTest = isTest;
        args.isProps = isProps;
        args.isReadme = isReadme;
        args.isContext = isContext;

        if (isAdvanced) {
          return prompter.prompt([
            {
              type: "confirm",
              name: "isProps",
              message: "Do you want to have props ? left -> [children, style, test, context, readme]",
            },
            {
              type: "confirm",
              name: "isChildren",
              message: "Do you want to have children ? left -> [style, test, context, readme]",
            },
            {
              type: "confirm",
              name: "isStyle",
              message: "Do you want to have custom style ? left -> [test, context, readme]",
            },
            {
              type: "confirm",
              name: "isTest",
              message: "Do you want add test ? left -> [context, readme]",
            },
            {
              type: "confirm",
              name: "isContext",
              message: "Do you want to use context ? left -> [readme]",
            },
            {
              type: "confirm",
              name: "isReadme",
              message: "Do you want to have readme ? left -> []",
            },
          ]);
        }

        return {
          isChildren,
          isStyle,
          isTest,
          isProps,
          isReadme,
          isContext,
        };
      })
      .then(({ isChildren, isStyle, isTest, isProps, isReadme, isContext }) => {
        args.isChildren = isChildren;
        args.isStyle = isStyle;
        args.isTest = isTest;
        args.isProps = isProps;
        args.isReadme = isReadme;
        args.isContext = isContext;
      })
      .then(() => {
        const { fileName, category, atomType, isStyle, isTest, isContext, isProps, isChildren, isReadme } = args;

        args.atomTypeStartUpperLetter = atomType[0].toUpperCase() + atomType.slice(1);

        // camelCase
        args.fileNameCamelCase = fileName[0].toLowerCase() + fileName.slice(1);
        // PascalCase
        args.fileNamePascalCase = fileName[0].toUpperCase() + fileName.slice(1);
        args.path = {};
        args.path.src = `src`;
        args.path.pages = `${args.path.src}/pages`;
        args.path.components = `${args.path.src}/components`;
        args.path.utils = `${args.path.src}/utils`;
        args.path.config = `${args.path.src}/config`;
        args.categoryFolder = `${args.path[category + "s"]}`;

        if (category === "page" || category === "util" || category === "config") {
          args.folderToSave = `${args.categoryFolder}/${args.fileNameCamelCase}`;
        }

        if (category === "component" && atomType) {
          args.atomFolder = `${args.categoryFolder}/${atomType}s`;
          args.folderToSave = `${args.atomFolder}/${args.fileNamePascalCase}`;
        }
        return {
          category,
          folderToSave: args.folderToSave,
          isStyle,
          isTest,
          isContext,
          isChildren,
          isProps,
          isReadme,
          fileNameCamelCase: args.fileNameCamelCase,
          fileNamePascalCase: args.fileNamePascalCase,
          path: args.path,
          atomType,
          atomTypeStartUpperLetter: args.atomTypeStartUpperLetter,
          categoryFolder: args.categoryFolder,
          atomFolder: args.atomFolder,
        };
      });
  },
};

// Page add question about getStaticProps -> it will change props types
// https://github.com/vercel/next.js/blob/canary/examples/with-typescript/pages/users/%5Bid%5D.tsx
