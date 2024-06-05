import { DeviceArrowIcon, DeviceCardsIcon, DeviceChartIcon, DeviceClockIcon, DeviceListIcon, DeviceLockIcon } from "@/components/StockLogo";

export const navData = [
    {_id: 101, title: "Home", href: "#home"},
    {_id: 102, title: "Features", href: "#features"},
    {_id: 103, title: "Account", href: "#account"},
    {_id: 104, title: "Reviews", href: "#reviews"},
];

export const footerData = [
    {_id: 105, title: "Feature 1", href: "#feature1"},
    {_id: 106, title: "Feature 2", href: "#feature2"},
    {_id: 107, title: "Feature 3", href: "#feature3"},
];

export const companyData = [
    {_id: 108, title: "About Us", href: "#about"},
    {_id: 109, title: "Contact Us", href: "#contact"},
    {_id: 110, title: "Terms of Service", href: "#terms"},
];

export const accountData = [
    {
        name:"Track Your Eco-Impact",
        description:"Monitor your carbon footprint and environmental impact effortlessly, helping you make informed, sustainable choices.",
        icon: DeviceCardsIcon,
    },
    {
        name:"Join a Green Community",
        description:"Connect with like-minded individuals passionate about sustainability. Share tips, progress, and eco-friendly ideas.",
        icon: DeviceClockIcon,
    },
    {
        name:"Earn Eco-Badges",
        description:"Achieve milestones and earn badges for your environmental efforts, motivating you to reach higher goals.",
        icon: DeviceListIcon,
    },
    {
        name:"Discover Eco-Friendly Tips",
        description:"Access a wealth of practical tips and advice on how to reduce your environmental impact and live more sustainably.",
        icon: DeviceLockIcon,
    },
    {
        name:"Participate in Challenges",
        description:"Engage in fun and rewarding eco-challenges. Compete with friends and the community to make the biggest positive impact.",
        icon: DeviceChartIcon,
    },
    {
        name:"Stay Informed",
        description:"Stay up-to-date with the latest news, trends, and innovations in sustainability, empowering you to stay ahead in your eco-journey.",
        icon: DeviceArrowIcon,
    },
];