import { useEffect, useState } from "react";
import { useRxCollection } from "rxdb-hooks";

import type { ITodo } from "../types";

const useGoalStreaks = () => {
  const goalsCollection = useRxCollection<ITodo>("goals");
  const [, setStreakCount] = useState(0);

  useEffect(() => {
    if (!goalsCollection) return;

    const calculateStreak = async () => {
      let streak = 0;
      let continueStreak = true;
      const today = new Date();

      // Iterate over days starting from today
      for (let dayOffset = 0; continueStreak; dayOffset++) {
        const currentDay = new Date(today);
        currentDay.setDate(today.getDate() + dayOffset);

        // Fetch goals for the current day
        const goalsForDay = await goalsCollection
          .find({
            selector: {
              dueDate: {
                $gte: new Date(currentDay.setHours(0, 0, 0, 0)), // Start of the day
                $lt: new Date(currentDay.setHours(23, 59, 59, 999)), // End of the day
              },
            },
          })
          .exec();

        if (goalsForDay.length > 0) {
          // Check if all goals are completed for the day
          const allCompleted = goalsForDay.every((goal) => goal.completed);

          if (allCompleted) {
            streak++; // Increment streak if all goals are completed
          } else {
            continueStreak = false; // Stop if a day has incomplete goals
          }
        } else {
          continueStreak = false; // Stop if there are no goals for the day
        }
      }

      setStreakCount(streak);
    };

    calculateStreak();
  }, [goalsCollection]);

  return 1;
};

export { useGoalStreaks };
