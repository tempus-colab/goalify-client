import {useState, useRef} from 'react';
import {TextInput, Textarea, Select, Grid, Flex, ActionIcon, rem} from '@mantine/core';
import {DatePickerInput, TimeInput} from '@mantine/dates';
import { IconClock, IconHourglass, IconX, IconBell, IconPencil, IconCalendar } from '@tabler/icons-react';


const AddGoal = () => {
    const [goal, setGoal] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState<string | null>(null);
    const [duration, setDuration] = useState('');
    const [reminder, setReminder] = useState('');
    const [value, setValue] = useState<Date | null>(null);
    
    const ref = useRef<HTMLInputElement>(null);
    
    const handleTimeChange = (value: string | null) => {
        if (value) setTime(value);
    };

    const handleDurationChange = (value: string | null) => {
        if (value) setDuration(value);
      };
    
      const handleReminderChange = (value: string | null) => {
        if (value) setReminder(value);
      };

    const handleSubmit = () => {
        console.log({ goal, description, date: value, time, duration, reminder});
    };

    const pickerControl = (
        <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
          <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        </ActionIcon>
    );

    return (
        <div className="min-h-screen">
            <div className="flex flex-col min-h-screen">
                <div className="bg-gradient-to-r from-teal-400 to-green-400 p-4  flex justify-center items-center relative">
                    <h1 className="text-xl font-semibold text-white text-center ">New Goal</h1>
                    <ActionIcon variant="transparent" className="absolute left-36">
                        <div className="">
                            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                                <IconX size={16} />
                            </div>
                        </div>
                    </ActionIcon>
                </div>
                <div className="px-6 py-6 "
>
                    <div>
                        <Flex align="center" mb={8} pt={6}>
                            <IconPencil size={16} />
                            <label className="text-gray-700 font-medium">Goal</label>
                        </Flex>
                        <TextInput 
                            placeholder="Enter your goal"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            required
                            classNames={{
                                input: 'rounded-xl border border-black p-10 shadow-lg',
                            }}
                        />
                    </div>

                    <div>
                        <Flex align="center" mb={8} pt={6}>
                            <IconPencil size={16} />
                            <label className="text-gray-700 font-medium">Description</label>
                        </Flex>
                        <Textarea
                            placeholder="Write a description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            classNames={{
                                input: 'rounded-xl border border-black p-10 shadow-lg',
                            }}
                        />
                    </div>

                    <div>
                        <Flex align="center" mb={8} pt={6}>
                            <IconCalendar size={16} />
                            <label className="text-gray-700 font-medium">Due Date</label>
                        </Flex>
                        <DatePickerInput
                            placeholder="Set a due date"
                            value={value}
                            onChange={setValue}
                            required
                            classNames={{
                                input: 'rounded-xl border border-black p-10 shadow-lg',
                            }}
                        />
                    </div>


                    <Grid>
                        <Grid.Col span={6} >
                            <Flex align="center" mb={8} pt={6}>
                                <IconClock size={16} />
                                <label className="text-gray-700 font-medium">Time</label>
                            </Flex>
                            <TimeInput 
                                placeholder="Click Icon" 
                                ref={ref} 
                                rightSection={pickerControl} 
                                value={time || ''}
                                onChange={(e) => handleTimeChange(e.target.value)}
                                required
                                classNames={{
                                    input: 'rounded-xl border border-black p-10 shadow-lg',
                                }}
                            />
                        </Grid.Col>

                        <Grid.Col span={6}>
                            <Flex align="center" mb={8} pt={6}>
                                <IconHourglass size={16} />
                                <label className="text-gray-700 font-medium">Duration</label>
                            </Flex>
                            <Select
                                placeholder="How long?"
                                data={[
                                    { value: '5 minutes', label: '5 minutes' },
                                    { value: '10 minutes', label: '10 minutes' },
                                    { value: '15 minutes', label: '15 minutes' },
                                    { value: '30 minutes', label: '30 minutes' },
                                    { value: '1 hour', label: '1 hour' },
                                    { value: '1.5 hours', label: '1.5 hours' },
                                    { value: '2 hours', label: '2 hours' },
                                    { value: '2.5 hours', label: '2.5 hours' },
                                    { value: '3 hours', label: '3 hours' },
                                    { value: '3.5 hours', label: '3.5 hours' },
                                    { value: '4 hours', label: '4 hours' },
                                    { value: '4.5 hours', label: '4.5 hours' },
                                    { value: '5 hours', label: '5 hours' },

                                ]}
                                value={duration}
                                onChange={handleDurationChange}
                                required
                                classNames={{
                                    input: 'rounded-xl border border-black p-10 shadow-lg',
                                }}
                            />
                        </Grid.Col>
                    </Grid>

                    <div>
                        <Flex  align="center" mb={8} pt={6}>
                            <IconBell size={16} />
                            <label className="text-gray-700 font-medium">Reminder</label>
                        </Flex>            
                        <Select
                            placeholder="Set a reminder time"
                            data={[
                                { value: '5 minutes before', label: '5 minutes before' },
                                { value: '10 minutes before', label: '10 minutes before' },
                                { value: '15 minutes before', label: '15 minutes before' },
                                { value: '30 minutes before', label: '30 minutes before' },
                                { value: '1 hour before', label: '1 hour before' },
                                { value: '1.5 hours before', label: '1.5 hours before' },
                                { value: '2 hours before', label: '2 hours before' },
                                { value: '2.5 hours before', label: '2.5 hours before' },
                                { value: '3 hours before', label: '3 hours before' },
                                { value: '3.5 hours before', label: '3.5 hours before' },
                                { value: '4 hours before', label: '4 hours before' },
                                { value: '4.5 hours before', label: '4.5 hours before' },
                                { value: '5 hours before', label: '5 hours before' },
                            ]}
                            value={reminder}
                            onChange={handleReminderChange}
                            required
                            classNames={{
                                input: 'rounded-xl border border-black p-10 shadow-lg',
                            }}
                        />
                    </div>
                
                    <div className="flex flex-col items-center space-y-4 mt-8">
                        <div
                            onClick={handleSubmit}
                            className="cursor-pointer bg-gradient-to-r from-teal-400 to-green-400 text-white font-semibold text-lg px-28 py-3 rounded-full shadow-lg hover:from-teal-300 hover:to-green-300 text-center"
                        >
                            Confirm
                        </div>

                        <div
                            className="cursor-pointer text-teal-600 font-semibold text-lg hover:underline"
                            onClick={() => console.log('Cancelled')}
                        >
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddGoal;