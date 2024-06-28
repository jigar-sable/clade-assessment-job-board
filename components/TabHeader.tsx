
const TabHeader = () => {
    return (
        <div className="flex items-center gap-16 text-[#888888] font-medium text-lg pl-20 p-4 border-b-2">
            <div className="relative">
                <button className="text-orange-600 font-semibold">Job preview</button>
                <span className="absolute -bottom-4 left-5 w-14 h-0.5 bg-orange-600"></span>
            </div>
            <button>Applicants</button>
            <button>Match</button>
            <button>Messages</button>
        </div>
    )
}

export default TabHeader