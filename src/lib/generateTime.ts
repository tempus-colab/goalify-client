export function generateTimeIntervals(): string[] {
  const timeIntervals: string[] = [];
  let currentHour = 0;
  let currentMinute = 0;

  // Loop from 0:00 to 23:45 (24 hours in 15 minute increments)
  for (let i = 0; i < 96; i++) {
    // Determine whether the time is AM or PM
    const period = currentHour < 12 ? "AM" : "PM";
    let displayHour = currentHour % 12;
    if (displayHour === 0) displayHour = 12; // Handle 12 AM and 12 PM

    // Format the time (e.g., '12:00 AM', '12:15 PM')
    const formattedTime = `${displayHour}:${currentMinute
      .toString()
      .padStart(2, "0")} ${period}`;
    timeIntervals.push(formattedTime);

    // Increment the time by 15 minutes
    currentMinute += 15;
    if (currentMinute >= 60) {
      currentMinute = 0;
      currentHour++;
    }
  }

  return timeIntervals;
}
