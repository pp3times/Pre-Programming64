module.exports = {
    title: 'Pre-Programming 64',
    description: 'Pre-Programming 64 for ITKMITL19',
    base: '/Prepro64-site/',

    markdown: {
        lineNumbers: true,
    },

    themeConfig: {

        // Show github repo on nav : disabled

        // repo: 'pp3times/Pre-Programming64',
        // repoLabel: 'Pre-Programming64 Repo',

        // Edit MD on github
        docsRepo: 'pp3times/Pre-Programming64',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '✏️ Edit Post !',

        lastUpdated: '🕑',
        // Navigation Bar
        nav: [
            { text: 'Ejudge', link: 'https://ejudge.it.kmitl.ac.th/' },
        ],

        // Sidebar
        sidebar: [
            {
                title: 'Overview',
                collapsable: true,
                children: [
                    'ejudge.md',	
                ]
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
        searchMaxSuggestions: 20
    }
}