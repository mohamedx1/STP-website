import StatCard from "./StatsCard"

function StatisticsSection () {
    // Data for the statistics cards
    const stats = [
        {
            id: 1,
            title: "Successful Diagnoses",
            subtitle: "Ensuring accurate and timely care",
            value: "1200",
        },
        {
            id: 2,
            title: "Successful Diagnoses",
            subtitle: "Ensuring accurate and timely care",
            value: "1200",
        },
        {
            id: 3,
            title: "Successful Diagnoses",
            subtitle: "Ensuring accurate and timely care",
            value: "1200",
        },
        {
            id: 4,
            title: "Successful Diagnoses",
            subtitle: "Ensuring accurate and timely care",
            value: "1200",
        },
        {
            id: 5,
            title: "Successful Diagnoses",
            subtitle: "Ensuring accurate and timely care",
            value: "1200",
        },
        {
            id: 6,
            title: "Successful Diagnoses",
            subtitle: "Ensuring accurate and timely care",
            value: "1200",
        },
    ]

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 w-full max-w-4xl container my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat) => (
                    <StatCard key={stat.id} title={stat.title} subtitle={stat.subtitle} value={stat.value} />
                ))}
            </div>
        </div>
    )
}

export default StatisticsSection
