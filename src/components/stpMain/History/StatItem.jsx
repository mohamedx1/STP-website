function StatItem ({icon, text}) {
    return (
        <div className="flex items-center space-x-4 bg-gray-200 rounded-lg p-4">
            <div>{icon}</div>
            <div className="font-medium text-teal-900">{text}</div>
        </div>
    )
}

export default StatItem
