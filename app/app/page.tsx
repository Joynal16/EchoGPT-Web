"use client";
import { useState } from "react";
import Link from "next/link";
import ModelChips from "@/components/ModelChips";
import ThemeToggle from "@/components/ThemeToggle";
import { MODELS } from "@/lib/models";

export default function WebApp() {
  const [selected, setSelected] = useState<string[]>(["gpt", "claude"]);
  const [prompt, setPrompt] = useState("");
  const [sent, setSent] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const send = () => {
    if (!prompt.trim()) return;
    setSent(prompt);
    setHistory((h) => [prompt, ...h].slice(0, 20));
    setPrompt("");
  };

  return (
    <div className="shell">
      <aside className="side" aria-label="Conversation history">
        <Link href="/" className="logo">EchoGPT</Link>
        <button className="btn" onClick={() => setSent(null)}>+ New chat</button>
        {history.length === 0 && <p style={{ color: "var(--muted)" }}>No chats yet.</p>}
        {history.map((h, i) => <button key={i} className="btn ghost" onClick={() => setSent(h)}>{h.slice(0, 28)}</button>)}
      </aside>
      <div className="main" id="main">
        <div style={{ display: "flex", justifyContent: "space-between", padding: 12, gap: 8 }}>
          <ModelChips selected={selected} onChange={setSelected} /><ThemeToggle />
        </div>
        <div className="cols" aria-live="polite">
          {selected.length === 0 && <p>Select at least one model.</p>}
          {selected.map((id) => {
            const m = MODELS.find((x) => x.id === id)!;
            return (
              <section className="card" key={id} aria-label={m.name}>
                <h3><span className="dot" style={{ background: m.color }} /> {m.name}</h3>
                <p>{sent ? `Demo reply from ${m.name} to “${sent}”` : "Ask something to compare answers."}</p>
              </section>
            );
          })}
        </div>
        <div className="composer">
          <textarea rows={2} value={prompt} aria-label="Prompt" placeholder="Ask all selected models… (Enter to send)"
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} />
          <button className="btn" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  );
}
