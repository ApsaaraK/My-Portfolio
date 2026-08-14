const COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

export default function PipelineMark({ size = 8, gap = 10, animated = true, className = "" }) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: `${gap}px` }}
      aria-hidden="true"
    >
      {COLORS.map((c, i) => (
        <span
          key={c}
          className={animated ? "pipeline-dot" : ""}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: c,
            display: "inline-block",
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes pipelinePulse {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.35); opacity: 1; }
        }
        .pipeline-dot {
          animation: pipelinePulse 1.8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .pipeline-dot { animation: none; opacity: 1; }
        }
      `}</style>
    </span>
  );
}
