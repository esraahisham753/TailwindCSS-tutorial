import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <p className="text-xs lg:text-3xl sm:text-base md:text-lg">Hello long sentence</p>
  );
}
