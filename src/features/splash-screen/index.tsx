import { Link } from "react-router-dom";

export function SplashScreen() {
  return (
    <main className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center text-center bg-white z-10">
      <h1 className="text-[5rem] tracking-wider">
        g
        <span
          className="animated-letter"
          onAnimationStart={() => console.log("Animation Starting")}
          onAnimationEnd={() => console.log("Animation Over")}>
          o
        </span>
        alify
      </h1>
      <Link
        to="/"
        className="bg-goal-gray-950 w-max px-16 rounded-3xl p-3 text-white text-lg font-medium">
        Enter
      </Link>
    </main>
  );
}
