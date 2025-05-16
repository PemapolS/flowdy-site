import { flagTH, flagMY, flagTW, flagAU } from "../assets/flags";
import { faTwitter, faFacebook, faTelegram, faBluesky, faTumblr, faSteam, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faPaw } from '@fortawesome/free-solid-svg-icons'

export const navLinks = [
    // { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#socials", label: "Socials" },
];

export const events = [
    // {
    //     imgURL: flagTW,
    //     label: "FurMIT 2024",
    //     location: "Yilan, Taiwan",
    //     date: "13-14 July"
    // },
    // {
    //     imgURL: flagTH,
    //     label: "FurSquare 2024",
    //     location: "Bangkok, Thailand",
    //     date: "7 September"
    // },
    // {
    //     imgURL: flagTH,
    //     label: "BangkokBeasts 2024",
    //     location: "Bangkok, Thailand",
    //     date: "10 November"
    // },    
    // {
    //     imgURL: flagMY,
    //     label: "FURUM 2024",
    //     location: "Petaling Jaya, Malaysia",
    //     date: "7-8 December"
    // },
    {
        imgURL: flagTH,
        label: "Thaitails 2025",
        location: "Nonthaburi, Thailand",
        date: "22-23 March"
    },
        {
        imgURL: flagMY,
        label: "Furlieu",
        location: "Johor Bahru, Malaysia",
        date: "May"
    },
    {
        imgURL: flagTH,
        label: "SiamPaws 2025",
        location: "Bangkok, Thailand",
        date: "7-8 June"
    },
    {
        imgURL: flagAU,
        label: "WAFF 2025",
        location: "Western Australia, Australia",
        date: "19 - 21 September"
    },
    {
        imgURL: flagAU,
        label: "Paws Outdoors (Oct 2025)",
        location: "New South Wales, Australia",
        date: "October"
    }
    // {
    //     imgURL: flagMY,
    //     label: "FURUM 2025",
    //     location: "Petaling Jaya, Malaysia",
    //     date: "13-14 December"
    // }
]

export const socials = [
    {
        imgURL: faTwitter,
        label: "Twitter",
        href: "https://twitter.com/FlowdyHusky"
    },
    {
        imgURL: faTelegram,
        label: "Telegram",
        href: "https://t.me/FlowdyHusky"
    },
    {
        imgURL: faFacebook,
        label: "Facebook",
        href: "https://facebook.com/FlowdyHusky"
    },
    {
        imgURL: faBluesky,
        label: "Bluesky",
        href: "https://bsky.app/profile/flowdy.dog"
    },
    {
        imgURL: faPaw,
        label: "FurAffinity",
        href: "https://www.furaffinity.net/user/flowdy/"
    },
    {
        imgURL: faHouse,
        label: "Toyhouse",
        href: "https://toyhou.se/Flowdy"
    },
    {
        imgURL: faTumblr,
        label: "Tumblr",
        href: "https://flowdyhusky.tumblr.com/"
    },
    {
        imgURL: faSteam,
        label: "Steam",
        href: "https://steamcommunity.com/id/flowdyhusky/"
    },
    {
        imgURL: faSpotify,
        label: "Spotify",
        href: "https://open.spotify.com/user/pemapolmc"
    }
]