import { MenuItem } from "primereact/menuitem";

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    icon: "pi pi-home",
    url: "/home",
  },
  {
    label: "Membership",
    icon: "pi pi-users",
    url: "/membership",
  },
  {
    label: "Donations",
    icon: "pi pi-credit-card",
    url: "/donations",
    items: [
      {
        label: "Lake Environmental",
        icon: "pi pi-globe",
        url: "/donations/lakeenvironmental",
      },
      {
        label: "SLCA Scholarship",
        icon: "pi pi-graduation-cap",
        url: "/donations/slcascholarship",
      },
      {
        label: "Lake James Fireworks",
        icon: "pi pi-asterisk",
        url: "/donations/lakejamesfireworks",
      },
      {
        label: "Memorial",
        icon: "pi pi-heart",
        url: "/donations/memorial",
      },
      {
        label: "Other",
        icon: "pi pi-question-circle",
        url: "/donations/other",
      },
    ],
  },
  {
    label: "News",
    icon: "pi pi-star",
    url: "/news",
  },
  {
    label: "Events",
    icon: "pi pi-calendar",
    url: "/events",
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    url: "/contacts",
  },
];
