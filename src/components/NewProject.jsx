import Input from "./Input.jsx";

export default function NewProject(second) {
  return (
    <>
      <div>
        <menu>
          <li>
            <button>Cancel</button>
          </li>
          <li>
            <button>Save</button>
          </li>
        </menu>
      </div>

      <div>
        <Input label="Title" />
        <Input label="Description" isTextArea />
        <Input label="Due Date" />
      </div>
    </>
  );
}
