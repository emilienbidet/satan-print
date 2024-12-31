import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";

export interface CardFrontProps {
	question: string;
	answer?: string;
}

export const CardFront = ({ question, answer }: CardFrontProps) => {
	return (
		<View style={styles.card}>
			<View style={styles.frontCardContent}>
				<Text style={styles.questionText}>{question}</Text>
				{answer && <Text style={styles.answerText}>{answer}</Text>}
			</View>
		</View>
	);
};
