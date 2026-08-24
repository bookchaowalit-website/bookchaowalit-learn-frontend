"use client";

import { useMemo, useState } from "react";

type Track = { id: string; number: string; title: string; category: string; summary: string; modules: number; level: string; time: string; tone: string };

const TRACKS: Track[] = [
  { id: "next", number: "01", title: "Next.js mastery", category: "Frontend", summary: "Build a mental model for the App Router, data boundaries, and the moments where a page becomes a product.", modules: 6, level: "working level", time: "2h 40m", tone: "coral" },
  { id: "data", number: "02", title: "Data structures in practice", category: "Data", summary: "A compact field guide to choosing shapes that make the next decision easier to see.", modules: 4, level: "foundation", time: "1h 20m", tone: "blue" },
  { id: "systems", number: "03", title: "Systems thinking", category: "Systems", summary: "Trace inputs, feedback, and constraints before reaching for another feature.", modules: 5, level: "working level", time: "2h 10m", tone: "green" },
];
const CATEGORIES = ["All", "Frontend", "Data", "Systems"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [started, setStarted] = useState<string[]>([]);
  const visibleTracks = useMemo(() => TRACKS.filter((track) => {
    const haystack = `${track.title} ${track.category} ${track.summary}`.toLowerCase();
    return (category === "All" || track.category === category) && haystack.includes(query.toLowerCase());
  }), [category, query]);

  function toggleStarted(id: string) {
    setStarted((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <main className="learn-shell">
      <header className="learn-topbar"><a href="/" className="learn-logo">FIELD / NOTES</a><span>Learning paths · edition 01</span><span>03 paths / static demo</span></header>
      <section className="learn-hero"><div><p className="learn-eyebrow">A self-directed curriculum</p><h1>Make a path<br /><em>through the noise.</em></h1><p className="learn-lede">Small, focused learning trails for the work you are already trying to do. Pick a direction, then take the next useful step.</p></div><div className="learn-notation"><span>today’s notation</span><strong>↗</strong><p>Search by subject.<br />Start where the question is.</p></div></section>

      <section className="learn-controls"><label className="learn-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a path" aria-label="Search learning paths" /></label><div className="category-tabs" aria-label="Filter by category">{CATEGORIES.map((item) => <button className={category === item ? "selected" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></section>

      <section className="path-list" aria-label="Learning paths"><div className="path-list-heading"><span>paths / {String(visibleTracks.length).padStart(2, "0")}</span><span>short descriptions, honest scope</span></div>{visibleTracks.map((track) => <article className={`path-row ${track.tone}`} key={track.id}><div className="path-number">{track.number}</div><div className="path-main"><div className="path-tag">{track.category}</div><h2>{track.title}</h2><p>{track.summary}</p><div className="path-meta"><span>{track.modules} modules</span><span>{track.time}</span><span>{track.level}</span></div></div><div className="path-action"><span className="path-state">{started.includes(track.id) ? "in progress" : "not started"}</span><button onClick={() => toggleStarted(track.id)}>{started.includes(track.id) ? "Keep going" : "Start path"}<b>↗</b></button></div></article>)}</section>
      {visibleTracks.length === 0 && <div className="learn-empty">No path matches that question yet.</div>}
      <footer className="learn-footer"><span>BOOKCHAOWALIT / LEARN</span><span>Static demo content · progress stays in this session</span></footer>
    </main>
  );
}
