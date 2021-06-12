module.exports = {
  title: "Pre-Programming 64",
  description: "Pre-Programming 64 for ITKMITL19",
  base: "/docs/.vuepress/dist/",

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    // Show github repo on nav : disabled

    // repo: 'pp3times/Pre-Programming64',
    // repoLabel: 'Pre-Programming64 Repo',

    // Edit MD on github
    repo: "pp3times/Pre-Programming64",
    docsRepo: "pp3times/Pre-Programming64",
    repoLabel: "PrePro64",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "✏️ Edit Post !",

    lastUpdated: "🕑",
    // Navigation Bar
    nav: [{ text: "Ejudge", link: "https://ejudge.it.kmitl.ac.th/" }],

    // Sidebar
    sidebar: [
      {
        title: "Overview",
        collapsable: true,
        children: ["ejudge.md"],
      },
      {
        title: "PEP8",
        collapsable: true,
        children: ["docstring.md", "indentation.md", "comment.md"],
      },
      {
        title: "Datatype & I/O",
        collapsable: true,
        children: [
          "input.md",
          "output.md",
          "integer.md",
          "float.md",
          "string.md",
        ],
      },

      // {
      //     title: 'Test',
      //     collapsable: true,
      //     children: [

      //         'test/test/test.md',
      //     ]
      // },
    ],

    // Search bar
    searchMaxSuggestions: 20,
  },
};
