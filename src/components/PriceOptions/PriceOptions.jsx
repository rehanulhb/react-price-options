import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "option_name": "Basic",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "One free fitness assessment",
                "Free Wi-Fi",
                "Access to mobile app",
                "One guest pass per month"
            ]
        },
        {
            "id": 2,
            "option_name": "Standard",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Five free fitness assessments",
                "Access to group fitness classes",
                "One personal training session per month",
                "Free Wi-Fi",
                "Access to mobile app",
                "Two guest passes per month",
                "Access to nutrition and wellness workshops"
            ]
        },
        {
            "id": 3,
            "option_name": "Premium",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited fitness assessments",
                "Access to all group fitness classes",
                "Four personal training sessions per month",
                "Access to sauna and steam room",
                "Guest passes",
                "Free Wi-Fi",
                "Access to mobile app",
                "Priority support",
                "Access to nutrition and wellness workshops",
                "Access to massage chairs",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 4,
            "option_name": "VIP",
            "price": 99.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited fitness assessments",
                "Access to all group fitness classes",
                "Eight personal training sessions per month",
                "Access to sauna, steam room, and pool",
                "Unlimited guest passes",
                "Priority booking for classes and equipment",
                "Free gym merchandise",
                "Free Wi-Fi",
                "Access to mobile app",
                "Priority support",
                "Access to nutrition and wellness workshops",
                "Access to massage chairs",
                "Complimentary towel service",
                "Reserved parking spot",
                "Personalized fitness plan",
                "Monthly fitness progress reports"
            ]
        }
    ];
    

    return (
        <div>
            <h2 className="text-5xl">Best Prices</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;