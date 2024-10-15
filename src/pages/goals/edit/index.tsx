import { useForm} from "@mantine/form";
import { Modal, Button, TextInput, Textarea, Select, Grid, Flex, ActionIcon } from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { IconClock, IconHourglass, IconX, IconBell, IconPencil, IconCalendar } from "@tabler/icons-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

interface EditGoalData {
  goal: string;
  description: string;
  dueDate: Date | null;
  time: string;
  duration: string;
  reminder: string;
}

const EditGoal = () => {
  const [opened, setOpened] = useState(true);
  const form = useForm<EditGoalData>({
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


  const onSubmit = async (values: EditGoalData) => {
    try {
      const response = await axios.post("https://api.example.com/goals", values);
      console.log("Goal submitted successfully", response.data);
    } catch (error) {
      console.error("Error submitting goal", error);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={() => {
        setOpened(false);
        navigate(-1); 
      }}
      fullScreen
      padding="0"
      withCloseButton={false} 
      radius={0}
      classNames={{
        body: "h-full overflow-auto",
      }}
    >
      <div className="flex flex-col h-full w-full font-outfit">
        <div className="bg-gradient-to-r from-teal-400 to-green-400 p-8 flex justify-center items-center relative" >
          <h1 className="text-4xl font-semibold text-white " style={{ marginTop: '10px' }}>
            Edit Goal
          </h1>
          <button
            onClick={() => navigate(-1)}
            type="button" 
            className="absolute right-6 bg-white rounded-full w-10 h-10 flex items-center justify-center  text-[#00C4C6] p-0.5">
            
            <IconX size={25} />
            
          </button>
        </div>

        <form className="grid gap-6 p-8 h-full w- max-w-md mx-auto" onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            radius="lg"
            size="lg"
            
          
            label={
              <Flex align="center" gap={8}>
                <IconPencil size={20} />
                <label className=" text-lg text-gray-700 font-medium ">Goal</label>
              </Flex>
            }
            placeholder="Enter your goal"
            {...form.getInputProps("goal")}
            error={form.errors.goal}
            styles={{
              input: {
                borderWidth: '3px', 
                borderColor: '#d1d5db', 
                padding: '10px', 
              },
              label: {
                fontSize: '1px', 
              },
            }}
          />

          <Textarea
            radius="lg"
            size="lg"
            label={
              <Flex align="center" gap={8}>
                <IconPencil size={20} />
                <label className=" text-lg text-gray-700 ">Description</label>
              </Flex>
            }
            placeholder="Write a description"
            rows={5}
            {...form.getInputProps("description")}
            error={form.errors.description}
            styles={{
              input: {
                borderWidth: '3px', 
                borderColor: '#d1d5db', 
                padding: '10px', 
              },
              label: {
                fontSize: '14px', 
              },
            }}
          />

          <DatePickerInput
            radius="lg"
            size="lg"
            label={
              <Flex align="center" gap={8}>
                <IconCalendar size={20} />
                <label className=" text-lg text-gray-700 font-medium">Due Date</label>
              </Flex>
            }
            placeholder="Set a due date"
            {...form.getInputProps("dueDate")}
            error={form.errors.dueDate}
            styles={{
              input: {
                borderWidth: '3px', 
                borderColor: '#d1d5db', 
                padding: '10px', 
              },
              label: {
                fontSize: '14px', 
              },
            }}
          />
          
          <Grid>
          <Grid.Col span={6}>
              <TimeInput
                ref={timeInputRef} 
                rightSection={
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    onClick={() => timeInputRef.current?.showPicker()} 
                  >
                    <IconClock size={16} />
                  </ActionIcon>
                }
                radius="lg"
                size="lg"
                label={
                  <Flex align="center" gap={8}>
                    <IconClock size={20} />
                    <label className=" text-lg text-gray-700 font-medium">Time</label>
                  </Flex>
                }
                placeholder="Click Icon"
                {...form.getInputProps("time")}
                error={form.errors.time}
                styles={{
                  input: {
                    borderWidth: '3px', 
                    borderColor: '#d1d5db', 
                    padding: '10px', 
                  },
                  label: {
                    fontSize: '14px', 
                  },
                }}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Select
                radius="lg"
                size="lg"
                label={
                  <Flex align="center" gap={8}>
                    <IconHourglass size={20} />
                    <label className=" text-lg text-gray-700 ">Duration</label>
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
                styles={{
                  input: {
                    borderWidth: '3px', 
                    borderColor: '#d1d5db', 
                    padding: '10px', 
                  },
                  label: {
                    fontSize: '14px', 
                  },
                }}
              />
            </Grid.Col>
          </Grid>

          <Select
            placeholder="Set a reminder time"
            
            radius="lg"
            size="lg"
            label={
              <Flex align="center" gap={8}>
                <IconBell size={20} />
                <label className=" text-lg text-gray-700 ">Reminder</label>
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
            styles={{
              input: {
                borderWidth: '3px', 
                borderColor: '#d1d5db', 
                padding: '10px', 
              },
              label: {
                fontSize: '14px', 
              },
            }}
          />

          <div className="flex flex-col items-center mt-6 gap-y-6">
            <button
              type="submit"
              className="rounded-3xl  bg-gradient-to-r from-teal-400 to-green-400 p-3 w-full text-xl text-white font-bold active:scale-95 transition">
              Confirm Changes
            </button>
            <Button
              variant="transparent"
              type="button"
              color="black"
              fullWidth
              onClick={() => navigate(-1)}
              className="rounded-3xl bg-white text-3xl py-2 w-full hover:bg-gray-100"
              styles={{
                root: {
                  fontSize: '20px', // Make the text larger
                  padding: ' 0', // Increase padding to make button taller
                  width: '75%', // Full width
                },
              }}
            > 
              Delete Goal
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default EditGoal;
