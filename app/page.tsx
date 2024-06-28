import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TabContent from "@/components/TabContent";
import TabHeader from "@/components/TabHeader";

export default function Home() {
  return (
    <>
      <Navbar />
      <TabHeader />
      <main className="flex w-full">
        <TabContent />
        <Sidebar />
      </main>
    </>
  );
}
