import React from "react";
import { useInputContext } from "../context/context";

function Input() {
  const { inputValueFrom, setInputValueFrom, inputValueTo, setInputValueTo } =
    useInputContext();

  const handleChangeFrom = (e) => {
    setInputValueFrom(e.target.value);
  };

  const handleChangeTo = (e) => {
    setInputValueTo(e.target.value);
  };
  return (
    <div>
      <div className="from relative">
        <span class="absolute m-1 w-full" style={{ color: "#ff56a1" }}>
          <span class="color-secondary flex gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"></path>
            </svg>
            من
          </span>
        </span>
        <input
          class="px-5 py-6 w-full text-2xl outline-none text-right"
          placeholder="المدينة أو المطار"
          type="text"
          value={inputValueFrom}
          onChange={handleChangeFrom}
        />
      </div>
      {/* to */}
      <div className="to relative">
        {/* replace from and to */}
        <span
          class="flex absolute justify-end w-full"
          style={{ color: "#ff56a1" }}
        >
          <span class="bg-white p-1 py-2 -translate-y-2/4 mx-4 flex justify-center text-xl">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="fs-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
              ></path>
            </svg>
          </span>
        </span>
        {/* airplan */}
        <span
          class=" flex absolute left-0 m-1 w-full"
          style={{ color: "#ff56a1" }}
        >
          <span class="color-secondary flex gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM44.81 205.66l88.74 80a62.607 62.607 0 0 0 25.47 13.93l287.6 78.35c26.48 7.21 54.56 8.72 81 1.36 29.67-8.27 43.44-21.21 47.25-35.71 3.83-14.5-1.73-32.71-23.37-54.96-19.28-19.82-44.35-32.79-70.83-40l-97.51-26.56L282.8 30.22c-1.51-5.81-5.95-10.35-11.66-11.91L206.05.58c-10.56-2.88-20.9 5.32-20.71 16.44l47.92 164.21-102.2-27.84-27.59-67.88c-1.93-4.89-6.01-8.57-11.02-9.93L52.72 64.75c-10.34-2.82-20.53 5-20.72 15.88l.23 101.78c.19 8.91 6.03 17.34 12.58 23.25z"></path>
            </svg>
            إلى
          </span>
        </span>
        <input
          class="px-5 py-6 w-full text-2xl  outline-none text-right"
          placeholder="المدينة أو المطار"
          type="text"
          value={inputValueTo}
          onChange={handleChangeTo}
          style={{ backgroundColor: "#f1f1f1" }}
        />
      </div>
    </div>
  );
}

export default Input;
