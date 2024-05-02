import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-bold">
      <h1 className="mb-4">First title</h1>
      <h2 className="mb-3">Second title</h2>
      <h3 className="mb-2">Third title</h3>
      <h4 className="mb-1">Forth title</h4>
      <p>This is a paragraph</p>
    </div>
  );
}
