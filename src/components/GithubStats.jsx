import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, GitFork, BookOpen, RefreshCw } from "lucide-react";

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C#": "#178600",
  PHP: "#4F5D95",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  SCSS: "#c6538c",
  Shell: "#89e051",
  Vue: "#41b883",
  Dockerfile: "#384d54",
};
const FALLBACK_COLOR = "#8ab4f8";

async function fetchGithubStats(username) {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`),
  ]);
  if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");
  const user = await userRes.json();
  const repos = await reposRes.json();

  const langBytes = {};
  for (const repo of repos) {
    if (!repo.language || repo.fork) continue;
    langBytes[repo.language] = (langBytes[repo.language] || 0) + 1;
  }
  const total = Object.values(langBytes).reduce((a, b) => a + b, 0) || 1;
  const topLangs = Object.entries(langBytes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, pct: Math.round((count / total) * 100) }));

  return {
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    topLangs,
  };
}

export default function GithubStats({ username }) {
  const [state, setState] = useState({ status: "loading", data: null });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading", data: null });
    fetchGithubStats(username)
      .then((data) => !cancelled && setState({ status: "ok", data }))
      .catch(() => !cancelled && setState({ status: "error", data: null }));
    return () => {
      cancelled = true;
    };
  }, [username, state.retryKey]);

  if (state.status === "error") {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)" }}>
        <p className="text-[13.5px] mb-3" style={{ color: "var(--md-on-surface-variant)" }}>
          Couldn't reach the GitHub API right now.
        </p>
        <button
          onClick={() => setState({ status: "loading", data: null, retryKey: Math.random() })}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3 py-1.5 rounded-full"
          style={{ border: "1px solid var(--md-outline)", color: "var(--md-on-surface)" }}
        >
          <RefreshCw size={13} /> Retry
        </button>
      </div>
    );
  }

  if (state.status === "loading") {
    return (
      <div className="grid sm:grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-24 rounded-2xl animate-pulse" style={{ backgroundColor: "var(--md-surface-container)" }} />
        ))}
      </div>
    );
  }

  const { publicRepos, followers, topLangs } = state.data;

  return (
    <div className="grid gap-5">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon={<BookOpen size={18} />} value={publicRepos} label="Public repositories" />
        <StatCard icon={<Users size={18} />} value={followers} label="Followers" />
        <StatCard icon={<GitFork size={18} />} value={topLangs.length} label="Languages used" />
      </div>

      {topLangs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl p-6"
          style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)" }}
        >
          <div className="text-[13px] font-medium mb-4" style={{ color: "var(--md-on-surface)" }}>
            Most-used languages
          </div>
          <div className="flex w-full h-2.5 rounded-full overflow-hidden mb-4" style={{ backgroundColor: "var(--md-surface-container)" }}>
            {topLangs.map((l) => (
              <span
                key={l.name}
                style={{ width: `${l.pct}%`, backgroundColor: LANG_COLORS[l.name] || FALLBACK_COLOR }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {topLangs.map((l) => (
              <span key={l.name} className="inline-flex items-center gap-1.5 text-[12.5px] font-mono" style={{ color: "var(--md-on-surface-variant)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: LANG_COLORS[l.name] || FALLBACK_COLOR }} />
                {l.name} <span style={{ opacity: 0.7 }}>{l.pct}%</span>
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div
      className="rounded-2xl p-5 flex items-center gap-4"
      style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)" }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--md-primary-container)", color: "var(--md-on-primary-container)" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-[20px] font-medium font-mono" style={{ color: "var(--md-on-surface)" }}>
          {value}
        </div>
        <div className="text-[12.5px]" style={{ color: "var(--md-on-surface-variant)" }}>
          {label}
        </div>
      </div>
    </div>
  );
}
