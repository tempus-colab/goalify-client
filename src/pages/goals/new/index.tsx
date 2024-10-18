import { GoalForm } from "features/goal-form";
import { useCreateGoal } from "features/todos/hooks";

const NewGoal = () => {
  const createGoal = useCreateGoal();

  return (
    <GoalForm onSubmit={(values) => createGoal(values)}>
      <GoalForm.FormControl />
    </GoalForm>
  );
};

export { NewGoal };
