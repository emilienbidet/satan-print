import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
	page: {
		flexDirection: "row",
		flexWrap: "wrap",
		padding: 20,
		fontFamily: "WinkySans"
	},
	card: {
		width: "33.33%",
		height: "33.33%",
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
		backgroundColor: "lightblue",
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
	wordText: {
		color: "black",
		fontSize: 24,
		textAlign: "center",
	},
});
