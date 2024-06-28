import { DropDownIcon, JobIcon, MessageIcon, NotificationIcon, PaymentIcon } from "@/public/icons";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="flex items-center justify-between w-full px-8 py-4 border-b">
            <span className="bg-[#E7E7E7] w-[98px] h-[59px] flex justify-center items-center text-orange-600 text-lg font-bold">Logo</span>

            <div className="flex items-center gap-16 rounded-full border p-2 text-[#B0B0B0]">
                <div className="flex items-center gap-1 p-3 bg-orange-600 cursor-pointer rounded-full border-2 border-[#FCB4A5] text-white font-medium">
                    <JobIcon />
                    Jobs
                </div>
                <div className="flex items-center gap-2 font-medium cursor-pointer p-2">
                    <div className="relative">
                        <MessageIcon />
                        <span className="absolute top-0 right-0 w-[6.5px] h-[6px] rounded-full bg-red-600"></span>
                    </div>
                    Messages
                </div>
                <div className="flex items-center gap-2 font-medium cursor-pointer p-2">
                    <PaymentIcon />
                    Payments
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative cursor-pointer">
                    <NotificationIcon />
                    <span className="absolute top-0 right-1 w-[6px] h-[6.5px] rounded-full bg-red-600"></span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image width={40} height={40} className="rounded-full" src="/atlassian-logo.png" alt="atlassian-logo" />
                    <DropDownIcon />
                </div>
            </div>
        </header>
    )
}

export default Navbar