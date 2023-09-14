import { useState } from "react";
import DateString from "./components/DateString";
import StepRange from "./components/StepRange";
import CountButtons from "./components/CountButtons";

function App() {
	const [rangeValue, setRangeValue] = useState(1);
	const [count, setCount] = useState(0);
	const [currentDate, setCurrentDate] = useState(new Date());

	const handleRangeChange = (value: number) => {
		setRangeValue(value);
	};

	const resetHandler = () => {
		setRangeValue(1);
		setCount(0);
		setCurrentDate(new Date());
	};

	return (
		<main className="main">
			<StepRange 
				rangeValue={rangeValue}
				onChange={handleRangeChange}
			/>
			<CountButtons
				count={count}
				rangeValue={rangeValue}
				currentDate={currentDate}
				setCount={setCount}
				setCurrentDate={setCurrentDate} 
			/>
			<DateString
				count={count}
				currentDate={currentDate}
			/>
			<button onClick={resetHandler}>сбросить</button>
		</main>
	);
}

export default App;
