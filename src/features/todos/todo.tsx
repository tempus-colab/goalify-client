import { DotsHorizontal } from "icons";
import { cn } from "lib/cn";
import { useNavigate } from "react-router-dom";

import { Checkbox, Menu, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCopy, IconPencil, IconTrash } from "@tabler/icons-react";

import { useCreateGoal, useDeleteGoal, useUpdateGoal } from "./hooks";
import type { ITodo } from "./types";

export function Todo({ id, ...todo }: ITodo) {
  const [opened, { open, close }] = useDisclosure();

  const markAsCompleted = useUpdateGoal(id);
  const navigate = useNavigate();
  const deleteGoal = useDeleteGoal();

  const createGoal = useCreateGoal();
  const handleEditGoal = () => navigate(`/goals/${id}/edit`);
  const handleDeleteGoal = () => deleteGoal(`${id}`);

  const handleDuplicateGoal = () =>
    createGoal({ ...todo, name: `${todo.name} (Copy)` });

  return (
    <>
      <Checkbox
        key={id}
        label={
          <>
            <span>{todo.name}</span>

            <p className="flex items-center gap-1 px-1 decora">
              <span>{todo.time}</span>
              <Menu
                classNames={{ itemLabel: "inline-flex items-center gap-2" }}>
                <Menu.Target>
                  <button type="button">
                    <DotsHorizontal />
                  </button>
                </Menu.Target>
                <Menu.Dropdown>
                  {!todo.completed && (
                    <Menu.Item onClick={handleEditGoal}>
                      <IconPencil size={18} /> Edit Goal
                    </Menu.Item>
                  )}
                  {!todo.completed && (
                    <Menu.Item onClick={open}>
                      <IconTrash size={18} /> Delete Goal
                    </Menu.Item>
                  )}
                  <Menu.Item onClick={handleDuplicateGoal}>
                    <IconCopy size={18} /> Duplicate Goal
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </p>
          </>
        }
        size="lg"
        radius="9px"
        color="#001514"
        classNames={{
          label: cn(
            "!text-base !flex justify-between items-center !w-full flex-1 gap-8",
            todo.completed && "opacity-50",
          ),
          labelWrapper: "flex-1",
          body: cn(
            "flex !items-center h-20",
            todo.completed && "line-through",
            todo.completed && "line-through",
          ),
          root: cn(""),
          input: cn("!border-[3px] !border-goal-gray-950"),
        }}
        checked={todo.completed}
        onChange={(event) =>
          markAsCompleted({
            id,
            ...todo,
            completed: event.currentTarget.checked,
          })
        }
      />

      <Modal
        opened={opened}
        onClose={close}
        centered
        radius="lg"
        withCloseButton={false}>
        <div className="py-4 flex flex-col w-full gap-8 text-center items-center justify-center">
          <h4 className="text-xl font-medium">
            You are about to perform an irreversible action.
          </h4>
          <p className="max-w-64">Are you sure you want to delete this goal?</p>

          <div className="flex items-center justify-between *:flex-1 gap-4 w-full">
            <button
              type="button"
              onClick={close}
              className="border-goal-gray-700 p-3 rounded-3xl border text-sm active:scale-90 transition-all">
              No, Cancel
            </button>
            <button
              type="button"
              onClick={handleDeleteGoal}
              className="rounded-3xl bg-red-600 p-3 text-sm text-white border border-red-600 active:scale-90 transition-all">
              Yes, Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
