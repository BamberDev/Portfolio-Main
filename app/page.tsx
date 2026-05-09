import { Smile } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center text-center leading-none text-white text-[clamp(3rem,8vw,8rem)] bg-[#282828] min-h-screen">
        <h1>
          COMING
          <br />
          SOON
        </h1>
        <span className="[&>svg]:w-[clamp(3rem,4vw,5rem)] [&>svg]:h-[clamp(2rem,4vw,5rem)]">
          <Smile />
        </span>
      </div>
    </main>
  );
}
