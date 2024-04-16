import { XMarkIcon } from "@heroicons/react/24/outline";

const MultiSelectItem = ({ label, onRemoveClick }: any) => {
  return (
    <div className="py border-nextadmin-border-default dark:border-dark-nextadmin-border-strong text-nextadmin-content-inverted dark:text-dark-nextadmin-content-inverted dark:hover:bg-dark-nextadmin-background-muted/50 hover:bg-nextadmin-background-muted flex cursor-pointer items-center justify-center rounded-md border px-2 text-sm">
      {label}
      <button
        type="button"
        className="ml-1 flex-shrink-0 cursor-pointer text-gray-400 hover:text-gray-500"
        onMouseDown={onRemoveClick}
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MultiSelectItem;
