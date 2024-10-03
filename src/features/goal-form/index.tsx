import { zodResolver } from "mantine-form-zod-resolver";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

import {
  Button,
  Flex,
  Grid,
  Select,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
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
  goal: z.string({ required_error: "Please enter a goal" }),
  dueDate: z.date({ required_error: "Please select a date" }).nullable(),
  description: z.string({ required_error: "Please enter a description" }),
  time: z.string({ required_error: "Please select a time" }),
  duration: z.any({ required_error: "Please select a duration" }),
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

export const GoalForm = ({
  initialValues = {
    goal: "",
    dueDate: null,
    description: "",
    time: "",
    duration: "",
    reminder: "",
  },
}: {
  initialValues?: z.infer<typeof schema>;
}) => {
  const form = useForm({
    validateInputOnChange: true,
    mode: "controlled",
    initialValues,
    validate: zodResolver(schema),
  });

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="bg-gradient-linear p-4 w-full flex justify-center items-center relative">
        <h1 className="text-xl font-semibold text-white text-center ">
          New Goal
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
        onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          radius="md"
          size="md"
          label={
            <Flex align="center">
              <IconPencil size={18} />
              <label className="text-gray-700 font-medium">Goal</label>
            </Flex>
          }
          placeholder="Enter your goal"
          {...form.getInputProps("goal")}
          classNames={{ input: "border-2 border-goal-gray-200" }}
        />

        <Textarea
          radius="md"
          label={
            <Flex align="center">
              <IconPencil size={18} />
              <label className="text-gray-700 font-medium">Description</label>
            </Flex>
          }
          placeholder="Write a description"
          rows={4}
          {...form.getInputProps("description")}
        />

        <DatePickerInput
          radius="md"
          size="md"
          label={
            <Flex align="center">
              <IconCalendar size={18} />
              <label className="text-gray-700 font-medium">Due Date</label>
            </Flex>
          }
          placeholder="Set a due date"
          {...form.getInputProps("dueDate")}
        />

        <Grid>
          <Grid.Col span={6}>
            <TimeInput
              radius="md"
              size="md"
              label={
                <Flex align="center">
                  <IconClock size={18} />
                  <label className="text-gray-700 font-medium">Time</label>
                </Flex>
              }
              placeholder="Click Icon"
              rightSection={
                <IconClock
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              {...form.getInputProps("time")}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <Select
              radius="md"
              size="md"
              label={
                <Flex align="center">
                  <IconHourglass size={18} />
                  <label className="text-gray-700 font-medium">Duration</label>
                </Flex>
              }
              placeholder="How long?"
              data={timeLapse}
              {...form.getInputProps("duration")}
              rightSection={<IconChevronDown />}
            />
          </Grid.Col>
        </Grid>

        <Select
          placeholder="Set a reminder time"
          radius="md"
          size="md"
          label={
            <Flex align="center" gap={2}>
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
        />

        <div className="flex flex-col items-center mt-8 gap-y-1">
          <button
            type="submit"
            className="rounded-3xl bg-gradient-linear p-3 w-full text-white font-bold active:scale-95 transition">
            Confirm
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
      </form>
    </div>
  );
};
