interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean;
}

export const Button = ({
	active = false,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			style={{
				padding: "0.5rem 1rem",
				backgroundColor: active ? "white" : "transparent",
				color: active ? "#991B1B" : "white",
				border: "1px solid white",
				borderRadius: "4px",
				cursor: "pointer",
			}}
		/>
	);
};
