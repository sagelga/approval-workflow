module.exports = {
  // Documentation : https://v1.vuepress.vuejs.org/config/#basic-config
  base: "/approval-workflow/", // It should always start and end with a slash.

  repo: "sagelga/approval-workflow",
  repoLabel: "Repository",
  editLinks: true,
  editLinkText: "Help us improve this page!",

  // Setup favicon for the website
  // Documentation : https://v1.vuepress.vuejs.org/config/#head
  //   head: [
  //     [
  //       "link",
  //       { rel: "icon", href: "https://avatars1.githubusercontent.com/u/44744915" }
  //     ]
  //   ],

  // Documentation : https://v1.vuepress.vuejs.org/config/#markdown
  markdown: {
    lineNumbers: "True"
  },

  // Documentation : https://v1.vuepress.vuejs.org/plugin/
  // Make sure you have run : yarn global add vuepress@next
  plugins: [
    // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html
    // yarn add -D @vuepress/plugin-active-header-links@next
    ["@vuepress/active-header-links"],

    // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html
    // yarn add -D @vuepress/plugin-back-to-top@next
    ["@vuepress/back-to-top"],

    // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html
    // yarn add -D @vuepress/plugin-google-analytics@next
    // [
    //   "@vuepress/google-analytics",
    //   {
    //     ga: "UA-134763793-1" // for example UA-00000000-0
    //   }
    // ],

    // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html
    // yarn add -D @vuepress/plugin-medium-zoom@next
    ["@vuepress/medium-zoom"],

    // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-nprogress.html
    // yarn add -D @vuepress/plugin-nprogress@next
    ["@vuepress/nprogress"],

    // Documentation : yarn add -D @vuepress/plugin-pwa@next
    // yarn add -D @vuepress/plugin-pwa
    ["@vuepress/pwa"]
  ],

  // Editing header for each language
  //   locales: {
  //     "/": {
  //       lang: "en-US",
  //       title: "Kuma Cheatsheet",
  //       description: "Cheatsheet for all"
  //     },
  //     "/th/": {
  //       lang: "th-TH",
  //       title: "Kuma Cheatsheet",
  //       description: "ชีทสรุปสำหรับทุกคน"
  //     }
  //   },

  // Editing themes
  // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#algolia-search
    // algolia: {
    //   apiKey: "",
    //   indexName: ""
    // },

    // https://vuepress.vuejs.org/theme/default-theme-config.html#smooth-scrolling
    smoothScroll: true,

    // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#service-worker
    serviceWorker: {
      // When there is website version, notify user
      updatePopup: {
        // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html#options
        message: "New update of this website is available",
        buttonText: "Reload"
      }
    },

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Contribute & Others",
        items: [
          {
            text: "Contribute",
            items: [
              {
                text: "Contribute",
                link: "https://github.com/sagelga/approval-workflow/"
              },
              {
                text: "Contribution Guidelines",
                link: "https://kuma-cheatsheet.github.io/Guidelines/"
              }
            ]
          },
          {
            text: "Others",
            items: [
              {
                text: "Legal Terms",
                link:
                  "https://github.com/sagelga/approval-workflow/blob/master/LICENSE.md"
              },
              {
                text: "Changelog",
                link:
                  "https://github.com/sagelga/approval-workflow/commits/master"
              },
              {
                text: "List of Contributor",
                link: "https://github.com/sagelga/approval-workflow/pulse"
              },
              {
                text: "Development Milestones",
                link: "https://github.com/sagelga/approval-workflow/releases"
              }
            ]
          }
        ]
      }
    ],

    sidebar: [
      // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar
      "/api/email/sendEmails",
      "/api/email/sendFinalEmail",
      "/api/email/sendReceiptEmail",
      "/api/email/stepOneApprovalEmail",
      "/api/email/stepTwoApprovalEmail",
      "/api/email/stepOneRejectEmail",
      "/api/email/stepTwoRejectEmail",

      "api/function/generateHashCode",
      "api/function/generateId",
      "api/function/getSubjectField",
      "api/function/letterToColumn",
      "api/function/padLeadingZero",
      "api/function/pullValue",
      "api/function/pushValue",

      "api/main/appoveProcess",
      "api/main/approveResponse",
      "api/sheets/getBodyField",
      "api/main/onOpen",

      "api/main/selectiveApprove",
      "api/sheets/createMandatoryColumn",
      "api/sheets/createNewColumn",
      "api/sheets/getBodyField",
      "api/sheets/getCellValue",
      "api/sheets/getColumnNumber",
      "api/sheets/getColumnRange",
      "api/sheets/getRowRange",
      "api/sheets/getStatusInbound",
      "api/sheets/setCellValue",
      "api/sheets/sheetPreparation"
    ]
  }
};
