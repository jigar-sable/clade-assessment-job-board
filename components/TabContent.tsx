import { CoinsIcon, PinIcon } from "@/public/icons";
import Image from "next/image";

const TabContent = () => {
    return (
        <div className="flex flex-col w-[76%]">
            <div className="flex flex-col gap-6 pl-20 p-[34px] border-b">
                <div className="flex items-center gap-2">
                    <h1 className="text-3xl text-grey-primary font-bold">Senior Product Designer</h1>
                    <span className="text-zinc-300">•</span>
                    <span className="text-[#888888] text-xs font-medium">posted 2 days ago</span>
                    <div className="flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2 py-1 text-xs font-medium text-[#067647] ring-1 ring-inset ring-[#ABEFC6]">
                        <span className="w-2 h-2 rounded-full bg-[#17B26A]"></span>
                        Open</div>
                </div>
                <div className="flex items-center gap-4 font-medium text-[#5D5D5D]">
                    <div className="flex items-center gap-2">
                        <PinIcon />
                        Delaware, USA
                    </div>
                    <span className="text-zinc-300">•</span>
                    <div className="flex items-center gap-2">
                        <CoinsIcon />
                        $300k-$400k
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-2 pl-20 p-6 border-b text-grey-primary">
                <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-medium text-grey-label">Skills Required</p>
                    <div className="flex items-center gap-1 p-1 border-2 rounded-lg w-fit">
                        <Image src="/figma.png" alt="figma" width={15} height={15} />
                        <span className="text-[10px] font-medium">Figma</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border-2 rounded-lg w-fit">
                        <Image src="/ai.png" alt="figma" width={15} height={15} />
                        <span className="text-[10px] font-medium">Adobe Illustrator</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border-2 rounded-lg w-fit">
                        <Image src="/xd.png" alt="figma" width={15} height={15} />
                        <span className="text-[10px] font-medium">Adobe XD</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-grey-label">Preferred Language</p>
                    <p className="font-semibold">English</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-grey-label">Type</p>
                    <p className="font-semibold">Full time</p>
                </div>
                <div className="flex flex-col col-span-2 gap-2">
                    <p className="text-sm font-medium text-grey-label">Years of Experience</p>
                    <p className="font-semibold">3+ Years of Experience</p>
                </div>
            </div>

            <div className="flex flex-col gap-1.5 pl-20 p-6 border-b text-grey-primary">
                <p className="text-sm font-medium text-grey-label">About the job</p>
                <ol className="list-decimal ml-4 font-medium">
                    <li>Handle the UI/UX research design</li>
                    <li>Work on researching on latest web applications designs & trends</li>
                    <li>Work on conceptualizing and visualizing</li>
                    <li>Work on creating graphics content and other graphic related works</li>
                </ol>
                <p className="font-medium">Benefits:</p>
                <ul className="list-disc ml-6 font-medium">
                    <li>Health Insurance</li>
                    <li>Provident Fund</li>
                </ul>
                <p className="font-medium">Schedule:</p>
                <ul className="list-disc ml-6 font-medium">
                    <li>Day shift</li>
                </ul>
                <p className="font-medium">Supplemental pay types:</p>
                <ul className="list-disc ml-6 font-medium">
                    <li>Performance bonus</li>
                    <li>Yearly bonus</li>
                </ul>
                <p className="font-medium">Work Location: In person</p>
            </div>

            <div className="flex flex-col gap-2 pl-20 p-8 text-grey-primary">
                <div className="flex items-center gap-4">
                    <Image className="rounded" src="/atlassian-logo.png" alt="atlassian" height={40} width={40} />
                    <p className="text-xl font-medium">Atlassian</p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-grey-label">Company Size</p>
                            <p className="font-semibold">1k - 2k Employees</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-grey-label">Sector</p>
                            <p className="font-semibold">Information Technology, Infrastructure</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-grey-label">Founded in</p>
                            <p className="font-semibold">2019</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 ml-8 col-span-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-grey-label">Type</p>
                            <p className="font-semibold">Private</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-grey-label">Funding</p>
                            <p className="font-semibold">Bootstrapped</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-grey-label">Founded By</p>
                            <p className="font-semibold">Scott Farquhar, Mike Cannon-Brookes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabContent