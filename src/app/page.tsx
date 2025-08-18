import { ChatWithZimo } from "@/components/chat-with-zimo";
import { Jumbotron } from "@/components/jumbotron";
import { LiveDemo } from "@/components/live-demo";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col">
      <Jumbotron />
      <LiveDemo />
      <ChatWithZimo />
    </div>
  );
}
