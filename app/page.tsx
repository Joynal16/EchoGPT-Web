"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { MODELS } from "@/lib/models";

const STORE = "https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj";
const FEATURES = [
  ["Side-by-side answers", "Send one prompt to several AIs and compare replies instantly."],
  ["Sidebar everywhere", "Open EchoGPT on any tab without losing your place."],
  ["Unified history", "Search every conversation across every model."],
  ["Quick actions", "Summarize, explain or rewrite selected text in one click."],
];
const WHY = ["No tab-switching", "Keyboard-first and accessible (WCAG AA)", "Fast, lightweight, dark mode ready"];
const FAQ = [
  ["Is EchoGPT free?", "A free tier covers everyday use; paid plans unlock higher limits."],
  ["Which browsers work?", "Chrome today; other Chromium browsers should also work."],
  ["Is my data private?", "Prompts go only to the models you select. History stays in your browser."],
];
const fade = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Home() {
  return (
    <>
      <div className="wrap">
        <div className="nav">
          <span className="logo">Echo<span className="grad">GPT</span></span>
          <nav aria-label="Primary">
            <a href="#features">Features</a><a href="#models">Models</a><a href="#faq">FAQ</a>
            <Link href="/extension">Extension</Link><ThemeToggle />
          </nav>
        </div>
      </div>
      <main id="main" className="wrap">
        <motion.section className="hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1>Every AI. <span className="grad">One sidebar.</span></h1>
          <p>Chat with ChatGPT, Claude, Gemini and more side by side, right from your browser.</p>
          <Link className="btn" href="/app">Try the web app</Link>{" "}
          <a className="btn ghost" href={STORE}>Add to Chrome</a>
        </motion.section>

        <motion.section id="features" {...fade}>
          <h2>Features</h2>
          <div className="grid">{FEATURES.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
        </motion.section>

        <motion.section id="models" {...fade}>
          <h2>AI models</h2>
          <div className="chips">{MODELS.map((m) => <span className="chip" key={m.id}><span className="dot" style={{ background: m.color }} aria-hidden />{m.name}</span>)}</div>
        </motion.section>

        <motion.section {...fade}>
          <h2>Product preview</h2>
          <div className="card" role="img" aria-label="Preview of three AI answers side by side">
            <div className="grid">{MODELS.slice(0, 3).map((m) => <div className="card" key={m.id}><strong>{m.name}</strong><p>Sample answer streams in here…</p></div>)}</div>
          </div>
        </motion.section>

        <motion.section {...fade}>
          <h2>Why choose EchoGPT</h2>
          <ul>{WHY.map((w) => <li key={w}>{w}</li>)}</ul>
        </motion.section>

        <section id="faq">
          <h2>FAQ</h2>
          {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </section>

        <section><div className="cta"><h2>Stop switching tabs.</h2><a className="btn" href={STORE}>Install EchoGPT free</a></div></section>
      </main>
      <footer><div className="wrap">© 2026 EchoGPT redesign concept · Privacy · Terms</div></footer>
    </>
  );
}
