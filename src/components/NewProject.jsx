import Input from "./Input.jsx";

export default function NewProject(second) {
  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-center gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-m">
              Save
            </button>
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
