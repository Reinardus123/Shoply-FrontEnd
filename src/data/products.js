import AirMax from "../assets/AirMax270.png";
import OversizeTee from "../assets/OversizeTee.png";
import Headphone from "../assets/headphone.png";
import Watch from "../assets/swatch.png";
import basketball from "../assets/basketball.png";
import backpack from "../assets/backpack.png";


const products = [
    {
        id: 1,
        title: "Nike Air Max 270",
        price : "Rp.2.200.000",
        category: "Shoes",
        rating: "4.8",
        image: AirMax,
        reviews: "(120)"

    },
    {
        id: 2,
        title: "Overisize T-shirt",
        price: "Rp.150.00",
        category: "Clothing",
        rating: "4.6",
        image: OversizeTee,
        reviews: "(100)"
    },
    {
        id: 3,
        title: "Sony WH-1000XM5",
        price: "Rp.3.500.000",
        category: "Electronics",
        rating: "5.0",
        image: Headphone,
        reviews: "(97)"

    },
    {
        id: 4,
        title: "Smart Watch",
        price: "Rp.500.000",
        category: "Watches",
        rating : "5.0",
        image : Watch,
        reviews: "(100)"
    },
    {
        id: 5,
        title: "Wilson Basketball",
        category: "Sports",
        price: "Rp.400.000",
        rating: "4.9",
        reviews: "(50)",
        image: basketball
    },
    {
        id : 6,
        title: "Classic Backpack",
        category: "Accessories",
        price: "Rp.700.000",
        rating: "4.8",
        reviews: "(120)",
        image: backpack
    }

];

export default products;