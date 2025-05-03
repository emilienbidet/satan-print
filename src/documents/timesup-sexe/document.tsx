import { Document, Page, Font } from "@react-pdf/renderer";
import WinkySans from "./assets/fonts/WinkySans.ttf";
import { CardFront } from "./card-front";
import { styles } from "./styles";

Font.register({
	family: "WinkySans",
	src: WinkySans,
});

interface Props {
	words: string[];
}

export const TimesUpSexeDocument = ({ words }: Props) => {
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
				</>
			))}
		</Document>
	);
};
