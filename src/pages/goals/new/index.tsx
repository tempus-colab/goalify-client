import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  ActionIcon,
  Button,
  Flex,
  Grid,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import {
  IconBell,
  IconCalendar,
  IconClock,
  IconHourglass,
  IconPencil,
  IconX,
} from "@tabler/icons-react";

interface GoalFormData {
  goal: string;
  description: string;
  dueDate: Date | null;
  time: string;
  duration: string;
  reminder: string;
}

const NewGoal = () => {
  const form = useForm<GoalFormData>({
    initialValues: {
      goal: "",
      description: "",
      dueDate: null,
      time: "",
      duration: "",
      reminder: "",
    },
    validate: {
      goal: (value) => (value ? null : "Goal is required"),
      description: (value) => (value ? null : "Description is required"),
      dueDate: (value) => (value ? null : "Due Date is required"),
      time: (value) => (value ? null : "Time is required"),
      duration: (value) => (value ? null : "Duration is required"),
      reminder: (value) => (value ? null : "Reminder is required"),
    },
  });

  const navigate = useNavigate();
  const timeInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (values: GoalFormData) => {
    try {
      const response = await axios.post(
        "https://api.example.com/goals",
        values,
      );
      console.log("Goal submitted successfully", response.data);
    } catch (error) {
      console.error("Error submitting goal", error);
    }
  };

  return (
    <Modal
      opened
      onClose={() => {
        navigate(-1);
      }}
      fullScreen
      padding="0"
      withCloseButton={false}
      radius={0}
      classNames={{
        body: "h-full p-8 overflow-auto",
      }}>
      <div className="flex flex-col h-full w-full">
        <div className="bg-gradient-to-r from-teal-400 to-green-400 p-4 flex justify-center items-center relative">
          <h1 className="text-xl font-semibold text-white text-center ">
            New Goal
          </h1>
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="absolute right-2  bg-white rounded-full w-8 h-8 flex items-center justify-center  text-[#00C4C6] p-0.5">
            <span className="relative" style={{ top: "1px" }}>
              <IconX size={18} />
            </span>
          </button>
        </div>

        <form className="grid gap-6 p-4" onSubmit={form.onSubmit(onSubmit)}>
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
            error={form.errors.goal}
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
            error={form.errors.description}
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
            error={form.errors.dueDate}
          />

          <Grid>
            <Grid.Col span={6}>
              <TimeInput
                ref={timeInputRef}
                rightSection={
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    onClick={() => timeInputRef.current?.showPicker()}>
                    <IconClock size={16} />
                  </ActionIcon>
                }
                radius="md"
                size="md"
                label={
                  <Flex align="center">
                    <IconClock size={18} />
                    <label className="text-gray-700 font-medium">Time</label>
                  </Flex>
                }
                placeholder="Click Icon"
                {...form.getInputProps("time")}
                error={form.errors.time}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Select
                radius="md"
                size="md"
                label={
                  <Flex align="center">
                    <IconHourglass size={18} />
                    <label className="text-gray-700 font-medium">
                      Duration
                    </label>
                  </Flex>
                }
                placeholder="How long?"
                data={[
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
                ]}
                {...form.getInputProps("duration")}
                error={form.errors.duration}
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
            data={[
              { value: "5 minutes before", label: "5 minutes before" },
              { value: "10 minutes before", label: "10 minutes before" },
              { value: "15 minutes before", label: "15 minutes before" },
              { value: "30 minutes before", label: "30 minutes before" },
              { value: "1 hour before", label: "1 hour before" },
              { value: "1.5 hours before", label: "1.5 hours before" },
              { value: "2 hours before", label: "2 hours before" },
              { value: "2.5 hours before", label: "2.5 hours before" },
              { value: "3 hours before", label: "3 hours before" },
              { value: "3.5 hours before", label: "3.5 hours before" },
              { value: "4 hours before", label: "4 hours before" },
              { value: "4.5 hours before", label: "4.5 hours before" },
              { value: "5 hours before", label: "5 hours before" },
            ]}
            {...form.getInputProps("reminder")}
            error={form.errors.reminder}
          />

          <div className="flex flex-col items-center mt-8 gap-y-1">
            <button
              type="submit"
              className="rounded-3xl bg-gradient-to-r from-teal-400 to-green-400 p-3 w-full text-white font-bold active:scale-95 transition">
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
    </Modal>
  );
};

export { NewGoal };
