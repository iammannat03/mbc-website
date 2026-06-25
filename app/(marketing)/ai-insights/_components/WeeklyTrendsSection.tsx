import { Container, SectionShell } from "@/components/ui/SectionShell";

type TrendCard = {
  title: string;
  metric: string;
  accent: string;
  chart: "sleep-bars" | "recovery-line" | "stress-wave" | "activity-bars";
};

const TREND_CARDS: TrendCard[] = [
  {
    title: "Weekly Sleep Pattern",
    metric: "7h 12m",
    accent: "#0056D2",
    chart: "sleep-bars",
  },
  {
    title: "Recovery Trends",
    metric: "82%",
    accent: "#22C55E",
    chart: "recovery-line",
  },
  {
    title: "Stress Levels",
    metric: "64/100",
    accent: "#9333EA",
    chart: "stress-wave",
  },
  {
    title: "Activity Progress",
    metric: "8,245 steps",
    accent: "#F97316",
    chart: "activity-bars",
  },
];

const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

function SleepBarChart({ accent }: { accent: string }) {
  const heights = [55, 62, 58, 70, 85, 68, 60];
  return (
    <div className="mt-auto pt-4">
      <div className="flex h-20 items-end gap-1.5">
        {heights.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-sm"
              style={{
                height: `${h * 0.95}px`,
                backgroundColor: i === 4 ? accent : `${accent}66`,
              }}
            />
            <span className="text-[9px] text-muted-foreground">
              {DAY_LABELS[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecoveryLineChart({ accent }: { accent: string }) {
  const points = [
    [0, 48],
    [20, 38],
    [40, 43],
    [60, 23],
    [80, 28],
    [100, 8],
    [120, 13],
  ];
  const polylinePoints = points.map(([x, y]) => `${x},${y}`).join(" ");
  return (
    <svg viewBox="0 0 120 56" className="mt-auto h-20 w-full pt-4">
      <polyline
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={polylinePoints}
      />
      {points.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill={accent} />
      ))}
    </svg>
  );
}

function StressWaveChart({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 120 56" className="mt-auto h-20 w-full pt-4">
      <path
        d="M0,33 C15,10 25,48 40,25 S65,6 80,29 S105,44 120,17"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeDasharray="4 3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ActivityBarChart({ accent }: { accent: string }) {
  const heights = [35, 55, 42, 68, 50, 78, 58];
  return (
    <div className="mt-auto flex h-20 items-end gap-1 pt-4">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-full"
          style={{
            height: `${h * 1.05}px`,
            backgroundColor: i % 2 === 0 ? accent : "#FBBF24",
          }}
        />
      ))}
    </div>
  );
}

function MiniChart({
  type,
  accent,
}: {
  type: TrendCard["chart"];
  accent: string;
}) {
  switch (type) {
    case "sleep-bars":
      return <SleepBarChart accent={accent} />;
    case "recovery-line":
      return <RecoveryLineChart accent={accent} />;
    case "stress-wave":
      return <StressWaveChart accent={accent} />;
    case "activity-bars":
      return <ActivityBarChart accent={accent} />;
  }
}

export function WeeklyTrendsSection() {
  return (
    <SectionShell id="weekly-trends" className="bg-white py-10 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col items-center gap-3 text-center md:mb-12">
          <h2 className="text-2xl font-bold leading-tight text-[#026D31] md:text-3xl lg:text-4xl">
            Weekly Trends
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Track your progress and see how small changes create lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {TREND_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm font-semibold text-[#0B1C30]">
                {card.title}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">Average</p>
              <p className="text-xl font-bold text-[#0B1C30] md:text-2xl">
                {card.metric}
              </p>
              <MiniChart type={card.chart} accent={card.accent} />
            </article>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
