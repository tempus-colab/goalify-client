import { GoalForm } from "features/goal-form";
import { useGetSingleTodo, useUpdateGoal } from "features/todos/hooks";
import { uniformDateReveral } from "lib/formatters";
import { useNavigate, useParams } from "react-router-dom";

import { Modal } from "@mantine/core";

const EditGoal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { result, isFetching } = useGetSingleTodo(`${id}`);
  const updateTodo = useUpdateGoal(`${id}`);

  const todo = result[0];

  if (!todo && !isFetching) {
    return (
      <Modal
        opened
        onClose={() => {}}
        withCloseButton={false}
        classNames={{ body: "h-full" }}
        fullScreen>
        <div className="flex flex-col items-center justify-center text-center h-full gap-4">
          <p className="text-xl">Oops!!! Seems like we cannot find that todo</p>
          <button
            type="button"
            className="rounded-3xl bg-gradient-linear p-3 w-full text-white font-bold active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      </Modal>
    );
  }

  const values = {
    description: todo?.description,
    duration: todo?.duration,
    name: todo?.name,
    reminder: todo?.reminder,
    time: todo?.time,
    dueDate: uniformDateReveral(todo?.dueDate),
  };

  return (
      <Modal
        opened
        onClose={() => {}}
        withCloseButton={false}
        classNames={{ body: "h-full" }}
        fullScreen>
          <GoalForm
            key={values?.name}
            initialValues={values}
            onSubmit={(values) => updateTodo({ id, ...values })}>
            <GoalForm.FormControl />
          </GoalForm>
      </Modal>
  );
};
export { EditGoal };
