"use client";
import { MODELS } from "@/lib/models";

type Props = { selected: string[]; onChange: (ids: string[]) => void };

export default function ModelChips({ selected, onChange }: Props) {
  const toggle = (id: string) =>
    onChange(selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]);
  return (
    <div className="chips" role="group" aria-label="Choose AI models">
      {MODELS.map((m) => (
        <button key={m.id} className="chip" aria-pressed={selected.includes(m.id)} onClick={() => toggle(m.id)}>
          <span className="dot" style={{ background: m.color }} aria-hidden /> {m.name}
        </button>
      ))}
    </div>
  );
}
