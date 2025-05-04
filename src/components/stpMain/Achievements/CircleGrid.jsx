import company1 from "../../../assets/iti_logo.png"
import company2 from "../../../assets/code_quests_logo.jpg"
import company3 from "../../../assets/company2.jpg"
import company4 from "../../../assets/company4.jpg"
import company5 from "../../../assets/company5.webp"
import company6 from "../../../assets/iti_logo.png"
import company7 from "../../../assets/code_quests_logo.jpg"
import company8 from "../../../assets/company2.jpg"
import company9 from "../../../assets/company4.jpg"
import company10 from "../../../assets/company5.webp"


const previousPartners = [
    {
        id: 0,
        name: "company",
        image: company1,
    },
    {
        id: 1,
        name: "company",
        image: company2,
    },
    {
        id: 2,
        name: "company",
        image: company3,
    },
    {
        id: 3,
        name: "company",
        image: company4,
    },
    {
        id: 4,
        name: "company",
        image: company5,
    },
    {
        id: 5,
        name: "company",
        image: company1,
    },
    {
        id: 6,
        name: "company",
        image: company2,
    },
    {
        id: 7,
        name: "company",
        image: company3,
    },
    {
        id: 8,
        name: "company",
        image: company4,
    },
    {
        id: 9,
        name: "company",
        image: company5,
    },

]

const CircleGrid = () => {
    // Create an array of 14 items (7 per row, 2 rows)
    // const circles = Array.from({length: 14}, (_, i) => i)
    return (
        <section className="py-25 container">
            <h2 className="text-3xl md:text-5xl font-bold mb-18 text-secondary ">previous partners</h2>
            <div className=" my-8">
                <div className="grid grid-cols-7 gap-4 md:gap-6 lg:gap-8">
                    {previousPartners.map((company, index) => (
                        <div key={company.id} className="flex justify-center items-center flex-col">
                            <img src={company.image} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-full object-cover shadow-lg " />
                            <span className="mt-4">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default CircleGrid
