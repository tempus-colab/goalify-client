import { useForm, Controller } from "react-hook-form";
import { useState, useRef } from "react";
import {
  Button,
  TextInput,
  Textarea,
  Select,
  Grid,
  Flex,
  ActionIcon,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import {
  IconClock,
  IconHourglass,
  IconX,
  IconBell,
  IconPencil,
  IconCalendar,
} from "@tabler/icons-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./GoalForm.css";

interface GoalFormData {
  goal: string;
  description: string;
  dueDate: Date | null;
  time: string;
  duration: string;
  reminder: string;
}

const GoalForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<GoalFormData>();
  const navigate = useNavigate();

  const [duration, setDuration] = useState<string | null>(null);
  const [reminder, setReminder] = useState<string | null>(null);

  const [time, setTime] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTime(value);
    setValue("time", value || "");
  };

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => inputRef.current?.showPicker()}>
      <IconClock size={16} />
    </ActionIcon>
  );

  const onSubmit = async (data: GoalFormData) => {
    try {
      const response = await axios.post("https://api.example.com/goals", data);
      console.log("Goal submitted successfully", response.data);
    } catch (error) {
      console.error("Error submitting goal", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r from-teal-400 to-green-400 p-4  flex justify-center items-center relative">
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

      <form className="grid gap-6 p-4" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("goal", { required: "Goal is required" })}
          error={errors.goal?.message}
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
          {...register("description", { required: "Description is required" })}
          error={errors.description?.message}
        />

        <Controller
          name="dueDate"
          control={control}
          rules={{ required: "Due Date is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
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
              value={value}
              onChange={onChange}
              error={error?.message}
            />
          )}
        />

        <Grid>
          <Grid.Col span={6}>
            <TimeInput
              ref={inputRef}
              rightSection={pickerControl}
              value={time || ""}
              onChange={handleTimeChange}
              radius="md"
              size="md"
              label={
                <Flex align="center">
                  <IconClock size={18} />
                  <label className="text-gray-700 font-medium">Time</label>
                </Flex>
              }
              placeholder="Click Icon"
              error={errors.time?.message}
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
              value={duration}
              onChange={(value) => {
                setDuration(value);
                setValue("duration", value || "");
              }}
              error={errors.duration?.message}
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
          value={reminder}
          onChange={(value) => {
            setReminder(value);
            setValue("reminder", value || "");
          }}
          error={errors.reminder?.message}
        />

        {/* Submit and Cancel Buttons */}
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
  );
};

export default GoalForm;
