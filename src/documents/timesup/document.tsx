import { Document, Page, Font } from "@react-pdf/renderer";
import SatanycDemoniacSt from "./assets/fonts/Satanyc Demoniac St.ttf";
import { CardFront } from "./card-front";
import { styles } from "./styles";
import { CardBack } from "./card-back";

Font.register({
	family: "Satanic Demoniac St",
	src: SatanycDemoniacSt,
});

interface Props {
	words: string[];
}

export const TimesUpDocument = ({ words }: Props) => {
	const chunkedQuestions = words.reduce<string[][]>((acc, curr, i) => {
		const chunkIndex = Math.floor(i / 9);
		if (!acc[chunkIndex]) {
			acc[chunkIndex] = [];
		}
		acc[chunkIndex].push(curr);
		return acc;
	}, []);

	return (
		<Document title="Satan Print">
			{chunkedQuestions.map((chunk, pageIndex) => (
				<>
					<Page
						key={`front-${pageIndex}`}
						size="A4"
						orientation="landscape"
						style={styles.page}
					>
						{chunk.map((word, index) => (
							<CardFront key={`front-${pageIndex}-${index}`} word={word} />
						))}
					</Page>
					<Page
						key={`back-${pageIndex}`}
						size="A4"
						orientation="landscape"
						style={styles.page}
					>
						{chunk.map((_, index) => (
							<CardBack key={`back-${pageIndex}-${index}`} />
						))}
					</Page>
				</>
			))}
		</Document>
	);
};
