import { ChatIcon, DeleteIcon, EditIcon, PeoplesIcon, PersonCheckIcon, ViewIcon } from "@/public/icons"

const Sidebar = () => {

    const data = [
        {
            label: "Applicants",
            icon: <PeoplesIcon />,
            data: 400,
        },
        {
            label: "Matches",
            icon: <PersonCheckIcon />,
            data: 100,
        },
        {
            label: "Messages",
            icon: <ChatIcon />,
            data: 147,
        },
        {
            label: "Views",
            icon: <ViewIcon />,
            data: 800,
        },
    ]

    return (
        <div className="w-[24%] bg-[#FCFCFC] border-l p-6">
            <div className="flex justify-between items-center gap-4 mt-2">
                <button className="flex items-center gap-2 w-full p-2 justify-center border border-[#DC4A2D] text-[#DC4A2D] bg-[#FEF4F2] rounded-lg font-medium">
                    <DeleteIcon />
                    Delete Job
                </button>

                <button className="flex items-center gap-2 w-full p-2 justify-center border-2 border-[#FED3CA] text-white bg-orange-600 rounded-lg font-medium">
                    <EditIcon />
                    Edit Job
                </button>
            </div>

            <div className="flex flex-col mt-4 mx-3 divide-y text-grey-primary">
                {data.map(({ icon, label, data }, index) => (
                    <div key={index} className="flex justify-between items-center py-5">
                        <div className="flex items-center gap-2">
                            {icon}
                            <p className="text-[#4F4F4F] font-medium">{label}</p>
                        </div>
                        <span className="text-xl font-bold">{data}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Sidebar