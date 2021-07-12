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
    // repo: "pp3times/Pre-Programming64",
    // docsRepo: "pp3times/Pre-Programming64",
    // repoLabel: "PrePro64",
    // docsDir: "docs",
    // editLinks: true,
    // editLinkText: "✏️ Edit Post !",

    lastUpdated: "🕑",
    // Navigation Bar
    nav: [{ text: "<e>Judge", link: "https://ejudge.it.kmitl.ac.th/" }],

    // Sidebar
    sidebar: [
      {
        title: "Overview",
        collapsable: true,
        children: [
          "ejudge.md"
        ],
      },
      {
        title: "Flowchart & Raptor",
        collapsable: true,
        children: [
          "flowchart&raptor/flowchart.md",
          "flowchart&raptor/raptor.md",
        ],
      },
      {
        title: "PEP8 & ERROR",
        collapsable: true,
        children: [
          "pep8.md",
          "error.md"
        ],
      },
      {
        title: "Datatype & I/O",
        collapsable: true,
        children: [
          "datatype&IO/datatype.md",
          "datatype&IO/inout.md",
          "datatype&IO/assign.md",
          "datatype&IO/stringformat.md",
          "datatype&IO/arithmetic.md",
          "datatype&IO/escapesequence.md",
        ],
      },
      {
        title: "PEMDAS",
        collapsable: true,
        children: [
          "week2/pemdas.md"
        ],
      },
      {
        title: "Function",
        collapsable: true,
        children: [
          "week2/func1/basicfunc.md",
          "week2/func1/builtin.md",
          "week2/func1/mathmodule.md",
          "week2/func1/stringmethod.md",
          "week2/func2/buitinfunc.md",
        ],
      },
      {
        title: "Condition",
        collapsable: true,
        children: [
          "week3/boolean.md",      // 5 jul 2021
          "week3/condition.md",    // 5 jul 2021
          "week3/chainandnest.md", // 7 jul 2021
        ],
      },
      {
        title: "Iteration",
        collapsable: true,
        children: [
          "week4/loop/while.md",      // 12 jul 2021
          "week4/loop/for.md",        // 13 jul 2021
          // "week4/loop/nestedloop.md", // 14 jul 2021
        ],
      },
    ],

    // Search bar
    searchMaxSuggestions: 20,
  },
};
