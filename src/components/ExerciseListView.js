import { useDispatch, useSelector } from "react-redux";
import { deleteExercise } from "../redux/exerciseSlice";
import RoutineItem from "./RoutineItem";
function ExerciseListView({ date }) {
  const data = useSelector((state) => state.exercise.value);
  const routine = useSelector((state) => state.routine.value);
  const start = new Date(
    routine[0]?.start[0],
    routine[0]?.start[1],
    routine[0]?.start[2]
  );
  const now = new Date(date);

  const today = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
  const idx = (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  console.log(idx);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-xl font-bold text-[#ADDE7D] mt-2  w-min pt-2 ml-2 ">Todo</div>
      <ul className="overflow-y-auto h-full">
        {idx < 0
          ? null
          : routine[idx % routine.length] !== undefined && (
            <RoutineItem routine={routine[idx % routine.length]} />
          )}
        {data
          .filter((ele) => ele.date === date)
          .map((ele) => (
            <li
              key={ele.id}
              className="h-14 bg-white flex justify-between items-center my-2 text-sm text-gray-500 rounded-md mr-2 px-5 shadow-inner border"
            >
              {ele.exercise}: {ele.time}분
              <button onClick={() => dispatch(deleteExercise(ele.id))}>
                ❌
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ExerciseListView;
