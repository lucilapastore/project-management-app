import React, { useRef } from "react";
import Input from "./Input.jsx";

function NewProject() {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation...
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-m"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" isTextArea />
          <Input ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
