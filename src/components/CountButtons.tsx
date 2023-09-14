import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

type CountButtonsProps = {
    count: number,
    currentDate: Date,
    rangeValue: number,
    setCount: Dispatch<SetStateAction<number>>,
    setCurrentDate: Dispatch<SetStateAction<Date>>,
}

const CountButtons: FC<CountButtonsProps> = function(props) {
	const {
		count,
		rangeValue,
		currentDate,
		setCount,
		setCurrentDate
	} = props;

	const handleCountPrev = () => {
		setCount(currCount => currCount - rangeValue);
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() - rangeValue);
		setCurrentDate(newDate);
	};

	const handleCountNext = () => {
		setCount(currCount => currCount + rangeValue);
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() + rangeValue);
		setCurrentDate(newDate);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		const parsedValue = parseInt(newValue);
		const nanOrEmptyString = newValue === "" || isNaN(parsedValue);
		const isNumberValue = nanOrEmptyString ? 0 : parsedValue;
		setCount(isNumberValue);
		const newDate = new Date();
		newDate.setDate(newDate.getDate() + isNumberValue);		
		setCurrentDate(newDate);
	};

	return (
		<div className="buttons">
			<button onClick={handleCountPrev}>➖</button>
			<input 
				type="text"
				value={count}
				onChange={handleInputChange}
			/>
			<button onClick={handleCountNext}>➕</button>
		</div>
	);
};

export default CountButtons;