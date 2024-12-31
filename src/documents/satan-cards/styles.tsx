import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
	page: {
		flexDirection: "row",
		flexWrap: "wrap",
		padding: 20,
		fontFamily: "Satanic Demoniac St",
	},
	card: {
		width: "33.33%",
		height: "33.33%",
		padding: 5,
	},
	frontCardContent: {
		width: "100%",
		height: "100%",
		border: 6,
		borderColor: "black",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#991B1B",
		gap: 15,
	},
	backCardContent: {
		width: "100%",
		height: "100%",
		border: 4,
		borderColor: "black",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	},
	pentagram: {
		width: "120px",
		height: "120px",
	},
	questionText: {
		color: "black",
		fontSize: 14,
		textAlign: "center",
	},
	answerText: {
		color: "black",
		fontSize: 10,
		textAlign: "center",
	},
});
