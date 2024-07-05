export default {
    title: '@hpcc-js/wasm',
    description: 'HPCC Systems Wasm Libraries',
    base: '/hpcc-js-wasm/',

    themeConfig: {
        repo: "hpcc-systems/hpcc-js-wasm",
        docsDir: "docs",
        docsBranch: "trunk",
        editLink: {
            pattern: 'https://github.com/hpcc-systems/hpcc-js-wasm/edit/trunk/docs/:path',
            text: 'Edit this page on GitHub'
        },
        lastUpdated: "Last Updated",

        nav: [
            { text: 'Guide', link: '/getting-started' },
            { text: 'GitHub', link: 'https://github.com/hpcc-systems/hpcc-js-wasm' },
            { text: 'Changelog', link: 'https://github.com/hpcc-systems/hpcc-js-wasm/blob/trunk/CHANGELOG.md' },
        ],
        sidebar: [
            {
                text: 'General',
                items: [
                    { text: 'Getting Started', link: '/getting-started' },
                ]
            },
            {
                text: 'WASM CLI',
                items: [
                    { text: 'Graphviz', link: '/graphviz-cli' },
                ]
            },
            {
                text: 'WASM API',
                items: [
                    { text: 'Base91', link: '/base91/classes/Base91' },
                    { text: 'DuckDB', link: '/duckdb/classes/DuckDB' },
                    { text: 'Expat', link: '/expatclasses/Expat' },
                    { text: 'Graphviz', link: '/graphviz/classes/Graphviz' },
                    { text: 'Zstd', link: '/zstd/classes/Zstd' },
                ]
            }

        ],
        footer: {
            message: 'Released under the Apache-2.0 License.',
            copyright: 'Copyright © 2019-present hpccsystems.com'
        }
    }
}
