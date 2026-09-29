"use client";
import { useState } from "react";
import ModelChips from "@/components/ModelChips";
import ThemeToggle from "@/components/ThemeToggle";
import { QUICK_ACTIONS } from "@/lib/models";

const TABS = ["Chat", "History", "Settings"] as const;

export default function ExtensionPopup() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Chat");
  const [models, setModels] = useState<string[]>(["gpt"]);
  const [text, setText] = useState("");
  const [sidebar, setSidebar] = useState(true);

  return (
    <main id="main" className="popup">
      <header><strong className="logo">EchoGPT</strong><ThemeToggle /></header>
      <div className="tabs" role="tablist">
        {TABS.map((t) => <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}>{t}</button>)}
      </div>
      <div className="body" role="tabpanel">
        {tab === "Chat" && (<>
          <ModelChips selected={models} onChange={setModels} />
          <div className="chips" style={{ margin: "12px 0" }}>
            {QUICK_ACTIONS.map((a) => <button key={a} className="chip" onClick={() => setText(a + ": ")}>{a}</button>)}
          </div>
          <textarea aria-label="Prompt" rows={4} style={{ width: "100%" }} value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a prompt to send to your selected models" />
          <button className="btn" style={{ marginTop: 8, width: "100%" }}>Send to {models.length} model(s)</button>
        </>)}
        {tab === "History" && <p style={{ color: "var(--muted)" }}>Searchable, cross-model history appears here.</p>}
        {tab === "Settings" && (
          <label><input type="checkbox" checked={sidebar} onChange={(e) => setSidebar(e.target.checked)} /> Open as side panel by default</label>
        )}
      </div>
    </main>
  );
}
