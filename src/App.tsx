import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import SatanCardsDocument from "./documents/satan-cards/document";
import { satanCardsQuestions } from "./data/satan-cards-questions";
import { TimesUpDocument } from "./documents/timesup/document";
import { timesup } from "./data/timesup";
import { Button } from "./components/button";

interface DocumentConfig {
	id: string;
	label: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	component: React.ComponentType<any>;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	props: Record<string, any>;
}

const DOCUMENTS: DocumentConfig[] = [
	{
		id: "satan-cards",
		label: "Satan Cards",
		component: SatanCardsDocument,
		props: { questions: satanCardsQuestions },
	},
	{
		id: "times-up",
		label: "Times Up",
		component: TimesUpDocument,
		props: { words: timesup },
	},
];

function App() {
	const [activeDocument, setActiveDocument] = useState<string>(DOCUMENTS[0].id);

	const activeConfig = DOCUMENTS.find((doc) => doc.id === activeDocument);
	const DocumentComponent = activeConfig?.component;

	return (
		<div className="h-screen flex flex-col">
			<nav className="p-4 bg-red-900 text-white">
				<div className="flex gap-4">
					{DOCUMENTS.map((doc) => (
						<Button
							key={doc.id}
							active={activeDocument === doc.id}
							onClick={() => setActiveDocument(doc.id)}
						>
							{doc.label}
						</Button>
					))}
				</div>
			</nav>
			<PDFViewer className="flex-grow">
				{DocumentComponent && <DocumentComponent {...activeConfig?.props} />}
			</PDFViewer>
		</div>
	);
}

export default App;
