import { generateTimeIntervals } from "lib/generateTime";
import { zodResolver } from "mantine-form-zod-resolver";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

import {
  Button,
  Flex,
  Grid,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import {
  IconBell,
  IconCalendar,
  IconChevronDown,
  IconClock,
  IconHourglass,
  IconPencil,
  IconX,
} from "@tabler/icons-react";

const schema = z.object({
  name: z.string({ required_error: "Please enter a goal" }),
  dueDate: z.date({ required_error: "Please select a date" }).nullable(),
  description: z.string({ required_error: "Please enter a description" }),
  time: z.string({ required_error: "Please select a time" }),
  duration: z.string({ required_error: "Please select a duration" }),
  reminder: z.string({ required_error: "Please select a reminder " }),
});

const timeLapse = [
  { value: "5 minutes", label: "5 minutes" },
  { value: "10 minutes", label: "10 minutes" },
  { value: "15 minutes", label: "15 minutes" },
  { value: "30 minutes", label: "30 minutes" },
  { value: "1 hour", label: "1 hour" },
  { value: "1.5 hours", label: "1.5 hours" },
  { value: "2 hours", label: "2 hours" },
  { value: "2.5 hours", label: "2.5 hours" },
  { value: "3 hours", label: "3 hours" },
  { value: "3.5 hours", label: "3.5 hours" },
  { value: "4 hours", label: "4 hours" },
  { value: "4.5 hours", label: "4.5 hours" },
  { value: "5 hours", label: "5 hours" },
];

type Values = z.infer<typeof schema>;

export const GoalForm = ({
  onSubmit,
  children,
  initialValues = {
    name: "",
    dueDate: null,
    description: "",
    time: "",
    duration: "",
    reminder: "",
  },
}: {
  initialValues?: Values;
  children?: ReactNode;
  onSubmit?: (values: Values) => void;
}) => {
  const form = useForm({
    validateInputOnChange: true,
    mode: "controlled",
    initialValues,
    validate: zodResolver(schema),
  });

  const navigate = useNavigate();

  return (
    <Modal
      opened
      onClose={() => navigate(-1)}
      fullScreen
      withCloseButton={false}
      classNames={{ body: "!p-0" }}>
      <div className="flex flex-col">
        <div className="bg-gradient-linear p-4 w-full flex justify-center items-center relative">
          <h1 className="text-xl font-semibold text-white text-center ">
            {initialValues.name ? "Edit goal" : "New Goal"}
          </h1>
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="absolute right-2 bg-white rounded-full text-[#00C4C6] p-0.5">
            <IconX size={18} />
          </button>
        </div>
        <form
          className="grid gap-6 p-4"
          onSubmit={form.onSubmit((values) => {
            onSubmit?.(values);
            navigate(-1);
          })}>
          <TextInput
            radius="md"
            size="lg"
            label={
              <Flex align="center" gap={4} mb={4}>
                <IconPencil size={18} />
                <label className="text-gray-700 font-medium">Goal</label>
              </Flex>
            }
            placeholder="Enter your goal"
            {...form.getInputProps("name")}
            classNames={{
              input: "!border-[2.5px] !border-goal-gray-200 !text-base",
            }}
          />

          <Textarea
            radius="md"
            size="md"
            label={
              <Flex align="center" gap={4} mb={4}>
                <IconPencil size={18} />
                <label className="text-gray-700 font-medium">Description</label>
              </Flex>
            }
            placeholder="Write a description"
            rows={4}
            {...form.getInputProps("description")}
            classNames={{
              input: "!border-[2.5px] !border-goal-gray-200 !text-base",
            }}
          />

          <DatePickerInput
            radius="md"
            size="lg"
            label={
              <Flex align="center" gap={4} mb={4}>
                <IconCalendar size={18} />
                <label className="text-gray-700 font-medium">Due Date</label>
              </Flex>
            }
            placeholder="Set a due date"
            {...form.getInputProps("dueDate")}
            classNames={{
              input: "!border-[2.5px] !border-goal-gray-200 !text-base",
            }}
          />

          <Grid>
            <Grid.Col span={6}>
              <Select
                radius="md"
                size="lg"
                label={
                  <Flex align="center" gap={4} mb={4}>
                    <IconClock size={18} />
                    <label className="text-gray-700 font-medium">Time</label>
                  </Flex>
                }
                searchable
                placeholder="Time"
                data={generateTimeIntervals()}
                {...form.getInputProps("time")}
                rightSection={<IconChevronDown />}
                classNames={{
                  input: "!border-[2.5px] !border-goal-gray-200 !text-base",
                }}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Select
                radius="md"
                size="lg"
                searchable
                label={
                  <Flex align="center" gap={4} mb={4}>
                    <IconHourglass size={18} />
                    <label className="text-gray-700 font-medium">
                      Duration
                    </label>
                  </Flex>
                }
                placeholder="How long?"
                data={timeLapse}
                {...form.getInputProps("duration")}
                rightSection={<IconChevronDown />}
                classNames={{
                  input: "!border-[2.5px] !border-goal-gray-200 !text-base",
                }}
              />
            </Grid.Col>
          </Grid>

          <Select
            placeholder="Set a reminder time"
            radius="md"
            size="lg"
            label={
              <Flex align="center" gap={4} mb={4}>
                <IconBell size={18} />
                <label className="text-gray-700 font-medium">Reminder</label>
              </Flex>
            }
            data={timeLapse.map((el) => ({
              value: `${el.value} before`,
              label: `${el.label} before`,
            }))}
            {...form.getInputProps("reminder")}
            rightSection={<IconChevronDown />}
            classNames={{
              input: "!border-[2.5px] !border-goal-gray-200 !text-base",
            }}
          />

          {children}
        </form>
      </div>
    </Modal>
  );
};

const FormControl = ({ loading }: { loading?: boolean }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-8 gap-y-1">
      <button
        type="submit"
        disabled={loading}
        className="rounded-3xl bg-gradient-linear p-3 w-full text-white font-bold active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? "Loading..." : "Confirm"}
      </button>
      <Button
        variant="transparent"
        type="button"
        color="#001514"
        fullWidth
        onClick={() => navigate(-1)}>
        Cancel
      </Button>
    </div>
  );
};

GoalForm.FormControl = FormControl;
