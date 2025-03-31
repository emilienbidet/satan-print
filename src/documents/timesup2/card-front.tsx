import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";

export interface CardFrontProps {
	word: string;
}

export const CardFront = ({ word }: CardFrontProps) => {
	return (
		<View style={styles.card}>
			<View style={styles.frontCardContent}>
				<Text style={styles.wordText}>{word}</Text>
			</View>
		</View>
	);
};
