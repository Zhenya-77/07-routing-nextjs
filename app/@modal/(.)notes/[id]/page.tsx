import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

async function NotePreview({ params }: NotePreviewProps) {
  const { id } = await params;
  const notePreview = await fetchNoteById(id);

  return (
    <Modal>
      <main className={css.main}>
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{notePreview.title}</h2>
            </div>
            <p className={css.tag}>{notePreview.tag}</p>
            <p className={css.content}>{notePreview.content}</p>
            <p className={css.date}>{notePreview.createdAt}</p>
          </div>
        </div>
      </main>
      <button className={css.backBtn} type="button">
        Go Back
      </button>
    </Modal>
  );
}

export default NotePreview;
