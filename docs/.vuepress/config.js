module.exports = {
    title: 'Pre-Programming 64',
    description: 'Pre-Programming 64 for ITKMITL19',
    base: '/Prepro64-site/',

    markdown: {
        lineNumbers: true,
    },

    themeConfig: {


        // Navigation Bar
        nav: [
            { text: 'Ejudge', link: 'https://ejudge.it.kmitl.ac.th/' },

        ],

        // Sidebar
        sidebar: [
            {
                title: 'Test',
                collapsable: true,
                children: [

                    'test/test/test.md',	
                ]
            },

            {
                title: 'Test',
                collapsable: true,
                children: [

                    'test/test/test.md',	
                ]
            },

        ],

        // Search bar
        searchMaxSuggestions: 20
    }
}