import ExpertiseStory from "./ExpertiseStory";
import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeAreas() {
  return <ExpertiseStory areas={practiceAreas} title="Áreas de Práctica" sectionId="areas-de-practica" label="Especialidades" sectionNumber="03" indexLabel="Índice de áreas de práctica" introduction="Asesoramos a líderes y organizaciones en los momentos clave de su trayectoria con un equipo altamente calificado y enfocado en resultados." />;
}
