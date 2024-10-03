import { RingProgress, Text } from "@mantine/core";
import { IconCheck, IconCircle } from "@tabler/icons-react";

export function ProgressStatus({
  done = 0,
  todo = 0,
}: {
  done: number;
  todo: number;
}) {
  const isCompleted = done !== 0 && todo === 0;

  const calculateProgress = (value: number) => {
    if (done + todo === 0) return 0;

    return (value / (done + todo)) * 100;
  };

  return (
    <section className="p-3">
      <div className="bg-goal-gray-50 rounded-2xl p-4 grid gap-3">
        <h3 className="font-semibold text-xl">Progress</h3>

        <div className="flex items-center gap-3 ">
          <RingProgress
            label={
              <Text size="md" ta="center">
                {calculateProgress(done)}%
              </Text>
            }
            sections={[
              {
                value: calculateProgress(done),
                color: "#00C4C6",
              },
            ]}
          />
          <div className="grid gap-4">
            <h4 className="font-semibold text-xl">
              {isCompleted ? "Great Work" : "Keep it up"}!
            </h4>
            <span className="flex items-center gap-3">
              <IconCheck /> {Intl.NumberFormat("en").format(done)} Done
            </span>
            <span className="flex items-center gap-3">
              <IconCircle /> {Intl.NumberFormat("en").format(todo)} ToDo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
