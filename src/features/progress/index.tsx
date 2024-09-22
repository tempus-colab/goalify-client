import { RingProgress, Text } from "@mantine/core";
import { IconCheck, IconCircle } from "@tabler/icons-react";

export function ProgressStatus() {
  return (
    <section className="p-3">
      <div className="bg-goal-gray-50 rounded-2xl p-4 grid gap-3">
        <h3 className="font-semibold text-xl">Progress</h3>

        <div className="flex items-center gap-3 ">
          <RingProgress
            label={
              <Text size="md" ta="center">
                50%
              </Text>
            }
            sections={[
              {
                value: 50,
                color: "#00C4C6",
              },
            ]}
          />
          <div className="grid gap-4">
            <h4 className="font-semibold text-xl">Keep it up!</h4>
            <span className="flex items-center gap-3">
              <IconCheck /> 2 Done
            </span>
            <span className="flex items-center gap-3">
              <IconCircle /> 2 ToDo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
