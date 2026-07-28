import shoes from "../assets/sepatu.png";
import headphone from "../assets/headphone.png";
import tShirt from "../assets/whiteTee.png";
import hoodie from "../assets/hoodie.png";
import shoes1 from "../assets/shoes1.png";
import backpack from "../assets/backpack.png";
import basketball from "../assets/basketball.png";
import kobe from "../assets/kobe.png";
import swatch from "../assets/swatch.png";

const heroSlides = [
    {
        id: 1,
        badge: "☀️ Summer Sale",
        description: "Discover the latest trends in fashion, shoes, and accessories.",
        title: "New Collection",
        discount: "Up To 50% Off",
        shoes: shoes,
        item : headphone,
        fashion : tShirt,
        bgColor : "#f5f0ff",
        primaryColor : "#7c3aed",
        circleColor : "#d8b4fe",
    },

    {
        id: 2,
        badge: "🔥 Hot Deal",
        description : "Stylish streetwear collection for your everyday look.",
        title: "Urban Streetware",
        discount: "Up to 30% Off",
        fashion: hoodie,
        shoes: shoes1,
        item: backpack,
        bgColor: "#f7f3ee",
        primaryColor: "#f97316",
        circleColor: "#fed7aa",
    },


    {
        id: 3,
        badge: "🏀 Sport Sale",
        description : "High performance gear for every athlete.",
        title: "Train hard",
        discount: "Up to 70% Off",
        fashion: basketball,
        shoes: kobe,
        item: swatch,
        bgColor: "#eef5ff",
        primaryColor: "#2563eb",
        circleColor: "#bfdbfe",
    },
];

export default heroSlides;
