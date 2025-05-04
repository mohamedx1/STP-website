function StatCard ({title, subtitle, value}) {
    return (
        <div className="p-4 border-gray-100 border rounded-md">
            <div className="mb-2">
                <h3 className="text-lg font-semibold text-secondary">{title}</h3>
                <p className="text-sm text-secondary-200">{subtitle}</p>
            </div>
            <div className="mt-2">
                <p className="text-4xl font-bold text-primary">{value}</p>
            </div>
        </div>
    )
}

export default StatCard
