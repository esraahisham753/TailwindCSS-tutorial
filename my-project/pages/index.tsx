import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>This is a title</h1>
      <h2 className="text-xl font-semibold mb-1">This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
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
      <div>
        <select name="options" id="options">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <h1>This is a title</h1>
      <h2 className="text-xl font-semibold mb-1">This is a subtitle</h2>
    </div>
  );
}
