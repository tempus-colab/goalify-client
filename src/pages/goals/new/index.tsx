import { GoalForm } from "features/goal-form";

import { Modal } from "@mantine/core";

export function NewGoal() {
  return (
    <Modal
      fullScreen
      opened
      withCloseButton={false}
      onClose={() => {}}
      p={0}
      classNames={{
        body: "!p-0",
      }}>
      <GoalForm />
    </Modal>
  );
}
