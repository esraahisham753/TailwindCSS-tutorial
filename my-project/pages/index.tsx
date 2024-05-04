import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="parent h-screen bg-slate-900 text-white">
      <div className="container bg-red-500">
       <h1>Hello</h1>
      </div>
    </div>
  );
}
