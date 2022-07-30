// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,

} from "@iconscout/react-unicons";


// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    route: "/dashboard"
  },
  {
    icon: UilClipboardAlt,
    heading: "Comply",
    route: "/comply"
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Compliant Products",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Compliant Products",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    compliant: true,
  },
  {
    title: "Non Compliant Products",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80, //pie chart complience
    value: "14,270", //number of compliable products
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Non Compliant Products",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
    compliant: false,
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Ravada Soni",
    noti: "your nearby chicken shop just signed up on ONDC.",
    time: "45 minutes ago",
  },
  {
    img: img2,
    name: "Rahul Sharma",
    noti: "has received Samsung gadget at the best price from nearby store using ONDC.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Ankita Goel",
    noti: "Congratulations on getting authorised by Esamudaay.",
    time: "2 hours ago",
  },
];
