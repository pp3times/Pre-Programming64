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
        title: "PEP8",
        collapsable: true,
        children: [
          "pep8.md"
        ],
      },
      // {
      //   title: "Datatype & I/O",
      //   collapsable: true,
      //   children: [
      //     "datatype&IO/datatype.md",
      //     "datatype&IO/inout.md",
      //     "datatype&IO/assign.md",
      //     "datatype&IO/stringformat.md",
      //     "datatype&IO/escapesequence.md",
      //     "datatype&IO/arithmetic.md",
      //   ],
      // },
    ],

    // Search bar
    searchMaxSuggestions: 20,
  },
};
