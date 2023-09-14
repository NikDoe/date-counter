import { ChangeEvent, FC } from "react";

type StepRangeProps = {
    rangeValue: number,
    onChange: (num: number) => void,
}

const StepRange: FC<StepRangeProps> = function(props) {
	const {
		rangeValue,
		onChange
	} = props;

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(event.target.value, 10);
		onChange(newValue);
	};
	
	return (
		<div className="range">
			<input 
				type="range"
				min={1}
				max={10}
				value={rangeValue}
				onChange={handleInputChange}
			/>
			<span>Текущий шаг: {rangeValue}</span>
		</div>
	);
};

export default StepRange;