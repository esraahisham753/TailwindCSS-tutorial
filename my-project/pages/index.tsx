import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p>This is a paragraph</p>
      <a href="#">This is an anchor</a>
      <div>
        <button>This is a button</button>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="checkbox" id="checkbox" name="checkbox"/>
        <label htmlFor="checkbox">Checkbox</label>
      </div>
    </div>
  );
}
