const menuData = [
  {
    menu: "Home",
    class: "menu-itm",
    link: "/",
    img: "./image/home.png",
    headding: "home",
  },
  {
    menu: "Plants",
    class: "menu-itm",
    link: "/plants",
    img: "./image/plantcare.png",
    headding: "Plants",
    submenu: [
      {
        title: "SHOP BY LOCATION",
        icon: "",
        secondSubmenu: [
          {
            secondmenu: "WORKSPACE",
            link: "#",
          },
          {
            secondmenu: "LIVING ROOM",
            link: "#",
          },
          {
            secondmenu: "BEDROOM",
            link: "#",
          },
          {
            secondmenu: "BALCONY",
            link: "#",
          },
        ],
      },
      {
        title: "SHOP BY TYPE",
        icon: "fa fa-angle-down",
      },

      {
        title: "BUNDLES",
        icon: "",
      },
      {
        title: "NEW ARRIVALS",
        icon: "",
      },
    ],
  },
  {
    menu: "Seeds",
    class: "menu-itm",
    link: "/seeds",
    img: "./image/seeds.png",
    headding: "Seeds",
    submenu: [
      {
        title: "FLOWER SEEDS",
        icon: "",
      },
      {
        title: "VEGETABLE SEEDS",
        icon: "",
      },
      {
        title: "MICROGREEN SEEDS",
        icon: "",
      },
      {
        title: "HERB SEEDS",
        icon: "",
      },
      {
        title: "FLOWER BULBS",
        icon: "",
      },
      {
        title: "FRUIT SEEDS",
        icon: "",
      },
    ],
  },
  {
    menu: "Planters",
    class: "menu-itm",
    link: "/Planters",
    img: "./image/seeds.png",
    submenu: [
      {
        title: "PLASTIC PLANTERS",
      },
      {
        title: "CERAMIC PLANTERS",
      },
      {
        title: "METAL PLANTERS",
      },
      {
        title: "HANGING PLANTERS",
      },
      {
        title: "PLANT STANDS",
      },
      {
        title: "ZURI COLLECTION",
      },
      {
        title: "SEEDLING TRAYYS",
      },
    ],
  },
  {
    menu: "Plant Cares",
    class: "menu-itm",
    link: "/PlantCare",
    img: "./image/seeds.png",
    submenu: [
      {
        title: "POTTING MIX AND FERTILISERS",
      },
      {
        title: "GARDEN TOOLS",
      },
      {
        title: "WATERING CANS AND SPRAYERS",
      },
      {
        title: "GARDEN DECOR & ACCESSORIES",
      },
      {
        title: "PEST CONTROL",
      },
    ],
  },
  {
    menu: "Cart",
    class: "menu-itm",
    link: "/cart",
    img: "./image/shopingbag.png",
    headding: "Seeds",
  },
  // shopingbag.png
  {
    menu: "Account",
    class: "menu-itm",
    link: "/account",
    img: "./image/user.png",
    headding: "Plant care",
  },
];

export default menuData;
