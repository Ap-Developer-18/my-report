import {
  Caregivers,
  FamilyFriends,
  FlexibilityIcon,
  Instagram,
  MonitorIcon,
  PeaceIcon,
  SecurityIcon,
  Phone,
  Location,
  Email,
  SpendingChallenges,
  Github,
  Twitter,
  Facebook,
} from "./Icons";

export const navLinks = [
  {
    url: "#about-us",
    link: "About",
  },
  {
    url: "#services",
    link: "Services",
  },
  {
    url: "#cards",
    link: "cards",
  },
  {
    url: "#pricing",
    link: "Pricing",
  },
  {
    url: "#contact-us",
    link: "Contact",
  },
];
export const benifitList = [
  {
    icon: <FamilyFriends />,
    title: "Caregivers",
    desc: "Provide financial support to loved ones while ensuring funds are used appropriately.",
    link: "Learn More",
  },
  {
    icon: <SpendingChallenges />,
    title: "Individuals with Spending Challenges",
    desc: "Manage personal finances better by restricting spending to essential categories.",
    link: "Learn More",
  },
  {
    icon: <Caregivers />,
    title: "Caregivers",
    desc: "Help those under your care by setting up controlled spending environments.",
    link: "Learn More",
  },
];
export const roadmapList = [
  {
    title: "Get Your M3 Card",
    desc: "Instead of giving cash to individuals in need. Sign up for M3 and receive M3 debit card and give the card instead. The card is linked to your M3 account, which you can fund via direct deposit, bank transfer, or other methods.",
  },
  {
    title: "Set Spending Limits",
    desc: "Use the M3 app or web portal to set spending limits and restrictions on the M3 card. You can define categories such as food, bills, and transportation, and set specific limits for each category.",
  },
  {
    title: "Make Secure Purchases",
    desc: "M3 cards can be used at any merchant that accepts debit cards. M3's advanced controls ensure that transactions are only approved for the categories you have defined. For example, if you have set a limit for groceries, the card will only approve purchases at grocery stores up to your specified limit. Any purchase outside of grocery store will be declined.",
  },
  {
    title: "Track Your Spending",
    desc: "Monitor your monetary lending in real-time through the M3 app or web portal. Get see detailed reports on where your money is going.",
  },
  {
    title: "Prevent Misuse",
    desc: "M3 helps you prevent misuse of funds by restricting purchases in non-approved categories. This is especially useful if you want to manage finances for loved ones who struggle with spending, such as those with addictions or impulsive spending habits.",
  },
];
export const featuresList = [
  {
    title: "Control and Flexibility",
    description:
      "Set and adjust spending limits anytime, ensuring your money is used as intended.",
    icon: <FlexibilityIcon />,
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Keep track of every transaction with real-time notifications and detailed spending reports.",
    icon: <MonitorIcon />,
  },
  {
    title: "Enhanced Security",
    description:
      "Prevent unauthorized spending with advanced transaction controls and security features.",
    icon: <SecurityIcon />,
  },
  {
    title: "Peace of Mind",
    description:
      "Ensure that your money is used for essentials, helping you or your loved ones manage finances responsibly.",
    icon: <PeaceIcon />,
  },
];

export const socialLinks = [
  {
    icon: <Instagram className="social-icon" />,
    url: "https://instagram.com/",
  },

  { icon: <Facebook className="social-icon" />, url: "https://www.facebook.com/profile.php?id=61563761976181" },
  { icon: <Github className="social-icon" />, url: "https://github.com" },
  { icon: <Twitter className="social-icon" />, url: "https://twitter.com" },
];

export const footerLinks = [
  {
    heading: "Company",
    links: [
      { text: "Service", url: "#services" },
      { text: "Resources", url: "#cards" },
      { text: "About us", url: "#about-us" },
    ],
  },
  {
    heading: "Quick contact",
    links: [
      { text: "Customer Support", url: "" },
      { text: "Terms & Conditions", url: "" },
      { text: "Privacy Policy", url: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      {
        text: "00000000000",
        icon: <Phone className="w-5 h-5 text-blue-500" />,
        url: "tel:+00000000000",
      },
      {
        text: "Emil86@gmail.com",
        icon: <Email className="w-5 h-5 text-blue-500" />,
        url: "mailto:Emil86@gmail.com",
      },
      {
        text: "947 Bergnaum Corner",
        icon: <Location className="w-5 h-5 text-blue-500" />,
        url: "https://www.google.com/maps",
      },
    ],
  },
];
