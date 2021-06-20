module.exports = {
  title: "Pre-Programming 64",
  description: "Pre-Programming 64 for ITKMITL19",
  base: "",
  dest: "build",
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
        title: "Flowchart",
        collapsable: true,
        children: [
          "flowchart&raptor/flowchart.md"
        ],
      },
      {
        title: "PEP8",
        collapsable: true,
        children: ["pep8.md"],
      },
      {
        title: "TEST",
        collapsable: true,
        children: ["datatype&IO/integer.md"
                   ,"datatype&IO/float.md"],
      },
      {
        title: "Datatype & I/O",
        collapsable: true,
        children: [
          // "a/input.md",
          // "output.md",
          "datatype&IO/string.md",
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
