import { View, Image } from "@react-pdf/renderer";
import { styles } from "./styles";
import pentagram from "./assets/images/pentagram.png";

export const CardBack = () => {
	return (
		<View style={styles.card}>
			<View style={styles.backCardContent}>
				<Image source={pentagram} style={styles.pentagram} />
			</View>
		</View>
	);
};
