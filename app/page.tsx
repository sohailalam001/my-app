import MainHome from "@/components/pages/app/main/page";
import Header from "@/components/pages/app/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <MainHome/>
    
    </div>
  );
}
