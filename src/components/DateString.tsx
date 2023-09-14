import { FC } from "react";

type DateStringProps = {
    currentDate: Date,
    count: number,
}

const options: Intl.DateTimeFormatOptions = {
	weekday: "long",
	day: "numeric",
	month: "long",
	year: "numeric",
};


const DateString: FC<DateStringProps> = function(props){
	const {
		count,
		currentDate
	} = props;

	const formattedDate =  currentDate.toLocaleDateString('ru', options);
	const prevDateString = `${Math.abs(count)} дней назад было : ${formattedDate}`;
	const nextDateString = `через ${count} день будет : ${formattedDate}`;
    
	return (
		<>
			{count === 0 && formattedDate}
			{count < 0 && prevDateString}
			{count > 0 && nextDateString}
		</>
	);
};

export default DateString;