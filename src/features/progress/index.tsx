import { useGoalStreaks } from "features/todos/hooks";

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

  const streaks = useGoalStreaks();

  return (
    <section className="p-3">
      <div className="bg-goal-gray-50 rounded-2xl p-4 grid gap-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">Progress</h3>

          {streaks > 0 ? (
            <span className="inline-flex items-center gap-1 font-semibold">
              {streaks}
              <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <title>Streaks</title>
                <ellipse
                  cx="11.2624"
                  cy="16.7241"
                  rx="8.8664"
                  ry="8.54831"
                  fill="#F8D100"
                />
                <path
                  d="M21.1411 15.9275C21.1411 21.3207 17.8223 23.6872 15.2577 24.4853C14.7109 24.6554 14.3514 24.018 14.6786 23.5478C15.7946 21.944 17.0847 19.4971 17.0847 17.1952C17.0847 14.7225 15.0005 11.8033 13.3731 10.0027C13.0011 9.59112 12.3522 9.86341 12.3319 10.418C12.2646 12.2551 11.9747 14.7129 10.7247 16.6392C10.5235 16.9492 10.0964 16.9748 9.86712 16.6849C9.47656 16.1909 9.086 15.5808 8.69544 15.0987C8.48502 14.8391 8.10477 14.8356 7.86211 15.0653C6.916 15.9611 5.59142 17.3582 5.59142 19.0966C5.59142 20.2754 6.04811 21.5112 6.56337 22.5054C6.84682 23.0524 6.3428 23.7108 5.79728 23.4246C3.53752 22.2387 0.858917 19.8364 0.858917 15.9275C0.858917 11.939 6.3228 6.4137 8.40902 1.19369C8.73816 0.369993 9.75278 -0.017067 10.4583 0.520461C14.7318 3.77583 21.1411 10.0686 21.1411 15.9275Z"
                  fill="#E60E00"
                />
              </svg>
            </span>
          ) : null}
        </div>

        <div className="flex items-center gap-3 ">
          <Ring value={calculateProgress(done)} />
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

function Ring({ value = 75 }: { value: number }) {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <svg className="w-40 h-40 transform rotate-180" viewBox="0 0 36 36">
          <title>Progress Background</title>
          <path
            className="text-gray-200"
            d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />

          <path
            className="stroke-[url(#gradient)]"
            strokeLinecap="round"
            strokeWidth="3.8"
            strokeDasharray={`${value}, 100`}
            d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
          />
        </svg>

        <svg width="0" height="0">
          <title>Progress fill</title>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#00C4C6" />
              <stop offset="100%" stopColor="#0060C6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-800">
            {value.toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
}
