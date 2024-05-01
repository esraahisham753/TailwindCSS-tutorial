import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="border-4 border-green-600">Hello, world!</h1>
      <h1 className="text-yellow-600">Hello, world!</h1>
    </div>
  );
}
