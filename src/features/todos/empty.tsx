import { IconPlus } from "@tabler/icons-react";

export function EmptyState() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center py-32">
      <p className="max-w-64 text-2xl font-semibold">
        There’s nothing on your to do list. Take a break!
      </p>
      <p className="flex items-center gap-1">
        or tap{" "}
        <span className="border-[2.5px] rounded-full p-0.5 border-black">
          <IconPlus size={24} color="black" />
        </span>
        to add a goal
      </p>
    </div>
  );
}
