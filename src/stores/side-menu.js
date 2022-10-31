import { atom } from "recoil";
const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/",
        title: "Home",
      },
      {
        icon: "Home",
        title: "재활용 거래 플랫폼",
        subMenu: [
          {
            icon: "Home",
            pathname: "/dashboard-overview-1",
            title: "서울 거래소",
          },
          {
            icon: "Home",
            pathname: "/dashboard-overview-2",
            title: "인천 거래소",
          },
          {
            icon: "Home",
            pathname: "/dashboard-overview-3",
            title: "대전 거래소",
          },
          {
            icon: "Home",
            pathname: "/dashboard-overview-4",
            title: "대구 거래소",
          },
          {
            icon: "Home",
            pathname: "/dashboard-overview-5",
            title: "광주 거래소",
          },
          {
            icon: "Home",
            pathname: "/dashboard-overview-6",
            title: "부산 거래소",
          },
        ],
      },
      {
        icon: "Users",
        title: "제휴 기업 관리",
        subMenu: [
          {
            icon: "",
            pathname: "/users-layout-1",
            title: "AI 객체인식 기업",
          },
          {
            icon: "",
            pathname: "/users-layout-2",
            title: "도심공기측정 기업",
          },
          {
            icon: "",
            pathname: "/users-layout-3",
            title: "드론 관제 기업",
          },
        ],
      },
      {
        icon: "Users",
        title: "실시간 트랜잭션",
        subMenu: [
          {
            icon: "",
            pathname: "/users-layout-1",
            title: "재활용 거래 트랜잭션",
          },
          {
            icon: "",
            pathname: "/users-layout-2",
            title: "폐기물 입출 트랜잭션",
          },
          {
            icon: "",
            pathname: "/users-layout-3",
            title: "유저 트랜잭션",
          },
        ],
      },
      {
        icon: "Box",
        title: "그린 식목 사업",
        pathname: "/simple-menu/dashboard-overview-1",
      },
      {
        icon: "ShoppingBag",
        title: "재활용응용사업펀딩",
        pathname: "/simple-menu/dashboard-overview-1",
      },
      {
        icon: "HardDrive",
        pathname: "/file-manager",
        title: "ESG 포인트",
      },
      "devider",
      {
        icon: "Edit",
        title: "저장소",
        pathname: "/crud-data-list",
      },

      {
        icon: "Trello",
        title: "기획자 프로필",
        pathname: "/profile-overview-1",
      },
      // {
      //   icon: "Layout",
      //   title: "Pages",
      //   subMenu: [
      //     {
      //       icon: "",
      //       title: "Wizards",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/wizard-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Blog",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/blog-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Pricing",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/pricing-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/pricing-layout-2",
      //           title: "Layout 2",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "Invoice",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/invoice-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/invoice-layout-2",
      //           title: "Layout 2",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       title: "FAQ",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-1",
      //           title: "Layout 1",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-2",
      //           title: "Layout 2",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/faq-layout-3",
      //           title: "Layout 3",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "login",
      //       title: "Login",
      //     },
      //     {
      //       icon: "",
      //       pathname: "register",
      //       title: "Register",
      //     },
      //     {
      //       icon: "",
      //       pathname: "error-page",
      //       title: "Error Page",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/update-profile",
      //       title: "Update profile",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/change-password",
      //       title: "Change Password",
      //     },
      //   ],
      // },
      //       "devider",
      //       {
      //         icon: "Inbox",
      //         title: "Components",
      //         subMenu: [
      //           {
      //             icon: "",
      //             title: "Table",
      //             subMenu: [
      //               {
      //                 icon: "",
      //                 pathname: "/regular-table",
      //                 title: "Regular Table",
      //               },
      //               {
      //                 icon: "",
      //                 pathname: "/tabulator",
      //                 title: "Tabulator",
      //               },
      //             ],
      //           },
      //           {
      //             icon: "",
      //             title: "Overlay",
      //             subMenu: [
      //               {
      //                 icon: "",
      //                 pathname: "/modal",
      //                 title: "Modal",
      //               },
      //               {
      //                 icon: "",
      //                 pathname: "/slide-over",
      //                 title: "Slide Over",
      //               },
      //               {
      //                 icon: "",
      //                 pathname: "/notification",
      //                 title: "Notification",
      //               },
      //             ],
      //           },
      //           {
      //             icon: "",
      //             pathname: "/tab",
      //             title: "Tab",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/accordion",
      //             title: "Accordion",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/button",
      //             title: "Button",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/alert",
      //             title: "Alert",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/progress-bar",
      //             title: "Progress Bar",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/tooltip",
      //             title: "Tooltip",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/dropdown",
      //             title: "Dropdown",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/typography",
      //             title: "Typography",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/icon",
      //             title: "Icon",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/loading-icon",
      //             title: "Loading Icon",
      //           },
      //         ],
      //       },
      //       {
      //         icon: "Sidebar",
      //         title: "Forms",
      //         subMenu: [
      //           {
      //             icon: "",
      //             pathname: "/regular-form",
      //             title: "Regular Form",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/datepicker",
      //             title: "Datepicker",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/tom-select",
      //             title: "Tom Select",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/file-upload",
      //             title: "File Upload",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/wysiwyg-editor",
      //             title: "Wysiwyg Editor",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/validation",
      //             title: "Validation",
      //           },
      //         ],
      //       },
      //       {
      //         icon: "HardDrive",
      //         title: "Widgets",
      //         subMenu: [
      //           {
      //             icon: "",
      //             pathname: "/chart",
      //             title: "Chart",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/slider",
      //             title: "Slider",
      //           },
      //           {
      //             icon: "",
      //             pathname: "/image-zoom",
      //             title: "Image Zoom",
      //           },
      //         ],
      //       },
    ],
  },
});

export { sideMenu };
