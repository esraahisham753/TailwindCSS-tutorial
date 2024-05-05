"use client";

import { useState } from "react";
import { ArrowDown } from "./ArrowDown";

export default function Home() {
  const [isOpen, setIsopen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option 1");

  const updateSelectedValue = (value: string) => {
    setSelectedValue(value);
    setIsopen(false);
  };

  return (
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p>This is a paragraph</p>
      <a href="https://freecodecamp.org">This is an anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">This is a primary button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">
          This is a secondary button
        </button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-primary">
          This is a disabled button
        </button>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input disabled type="text" />
      </div>
      <div>
        <input type="text" placeholder="E-mail" />
      </div>
      <div>
        <input disabled type="text" placeholder="E-mail" />
      </div>
      <div>
        <input type="date" />
      </div>
      <div className="flex items-start">
        <input type="checkbox" id="checkbox" name="checkbox" />
        <label htmlFor="checkbox">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sed,
          cum dicta quam iusto perspiciatis itaque veniam, mollitia minima
          assumenda ducimus reiciendis dolores provident nesciunt officiis.
          Pariatur accusamus et aperiam.
        </label>
      </div>
      <div>
        <select name="options" id="options">
          <option value="1">option 1</option>
          <option value="2">option 2</option>
        </select>
      </div>
      <div className="Select">
        <div
          className="child flex items-center justify-between"
          onClick={() => setIsopen(!isOpen)}>
          <span>{selectedValue}</span>
          <div
            className={
              isOpen ? "rotate-180 transition" : "rotate-0 transition"
            }>
            <ArrowDown />
          </div>
        </div>
        {isOpen && (
          <div>
            <ul className="flex flex-col divide-y border-t">
              <li
                className="child"
                onClick={() => updateSelectedValue("option 1")}>
                option 1
              </li>
              <li
                className="child"
                onClick={() => updateSelectedValue("option 2")}>
                option 2
              </li>
              <li
                className="child"
                onClick={() => updateSelectedValue("option 3")}>
                option 3
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
