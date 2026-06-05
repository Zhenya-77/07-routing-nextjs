import { fetchNotes } from "@/lib/api";
import NotesClient from "../../Notes.client";
import NoteList from "@/components/NoteList/NoteList";

interface Props {
  params: Promise<{ slug: string[] }>;
}

async function NotesByCategory({ params }: Props) {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  //   const response = await fetchNotes({ tag: category });

  return <NotesClient tag={category} />;
}

export default NotesByCategory;
