import PackageCard from "../../../components/PackageCard"

const travelPackages = [
    {
        name: 'Essential Package',
        price: 150,
        features: [
            '3 Days, 2 Nights',
            'Accommodation Included',
            'Guided Tours',
            'Transportation',
            'Meals Not Included'
        ]
    },
    {
        name: 'Adventure Package',
        price: 250,
        features: [
            '7 Days, 6 Nights',
            'Adventure Activities',
            'Local Guides',
            'Basic Accommodation',
            'Meals Included'
        ]
    },
    {
        name: 'Family Package',
        description: 'Explore the essentials with our budget-friendly package.',
        price: 350,
        features: [
            '4 Days, 3 Nights',
            'Kid-Friendly Activities',
            'Family Accommodation',
            'Group Tours',
            'Meals Included'
        ]
    }
];


const PricingSection = () => {
  return (
    <>
           <div className="container mx-auto py-8 mt-[3rem]">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Travel Packages</h2>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                {travelPackages.map(tPackage=> <PackageCard tPackage={tPackage}/>)}
 
            </div>

        </div>
    </>
  )
}

export default PricingSection