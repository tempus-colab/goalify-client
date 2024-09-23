import { Checkbox, type CheckboxProps } from "@mantine/core";
import { cn } from "lib/cn";
import { format } from "date-fns";
import { DotsHorizontal } from "icons";

interface TodoProps extends CheckboxProps {
  title: string;
  dueDate: Date;
}

export function Todo({ classNames, title, dueDate, ...props }: TodoProps) {
  return (
    <Checkbox
      {...props}
      label={
        <>
          <span>{title}</span>

          <p className="flex items-center gap-1 px-1 decora">
            <span>{format(dueDate, "h:mm a")}</span>
            <button type="button">
              <DotsHorizontal />
            </button>
          </p>
        </>
      }
      size="lg"
      radius="9px"
      color="#001514"
      classNames={{
        ...classNames,
        label: cn(
          "!text-base !flex justify-between items-center !w-full flex-1 gap-8",
        ),
        labelWrapper: "flex-1",
        body: cn(
          "flex !items-center h-20",
          props.checked && "line-through",
          props.defaultChecked && "line-through",
        ),
        root: cn(""),
        input: cn("!border-[3px] !border-goal-gray-950"),
      }}
      right={"Hello"}
    />
  );
}
