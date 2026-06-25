import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Brain,
  Compass,
  UserRound,
} from "lucide-react";
import React from "react";

type CardData = {
  title: string;
  description: string;
  accentColor: string;
  icon: React.ReactNode;
  footerComponent: React.ReactNode;
};

const CARD_DATA: CardData[] = [
  {
    title: "SKY Ring Tracking",
    description:
      "Continuous monitoring of your vital signals: sleep quality, stress levels, recovery metrics, and daily movement patterns.",
    accentColor: "#005AB6",
    icon: <Activity className="h-6 w-6" />,
    footerComponent: (
      <div className="w-full flex gap-x-2 justify-start items-center">
        {["Sleep", "HRV", "Activity"].map((label, idx) => (
          <span
            key={idx}
            className="text-sm px-3.5 py-1 bg-[#D3E4FE] rounded-full"
          >
            {label}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "AI Insights",
    description:
      "Our intelligent core converts raw biological data into actionable wellness patterns, identifying trends before they become issues.",
    accentColor: "#006864",
    icon: <Brain className="h-6 w-6" />,
    footerComponent: (
      <div className="w-full flex justify-start items-center">
        {["#87F4EE", "#D7E3FF", "#9BF7AB"].map((color, idx) => (
          <span
            key={color}
            className="rounded-full p-3 border border-[#F2F9FD]"
            style={{
              backgroundColor: color,
              marginLeft: idx === 0 ? 0 : -8, // overlap a little
              zIndex: 10 - idx,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Natural Health Experts",
    description:
      "Deep guidance rooted in ancient Indian wisdom. Access naturopathy, tailored yoga practices, and meditation sessions.",
    accentColor: "#026D31",
    icon: <UserRound className="h-6 w-6" />,
    footerComponent: (
      <div className="flex gap-1 items-center justify-center text-[#026D31]">
        <span className="text-sm">Expert Guided</span>
        <BadgeCheck className="h-3 w-3" />
      </div>
    ),
  },
  {
    title: "Guidance & Support",
    description:
      "More than just data—we provide practical routines and daily handholding to ensure your transition to balance is seamless.",
    accentColor: "#2473D9",
    icon: <Compass className="h-6 w-6" />,
    footerComponent: (
      <Button
        variant={"link"}
        className="flex gap-1 items-center justify-center text-[#005AB6]"
      >
        <span className="text-sm font-bold">Explore Methodology</span>
        <ArrowRight className="h-5 w-5" />
      </Button>
    ),
  },
];

type Props = {
  data: CardData;
};

const Card = ({ data }: Props) => {
  return (
    <div className="col-span-1 flex flex-col items-start justify-between gap-y-6 rounded-xl bg-[#F2F9FD] p-10">
      <div className="flex flex-col items-start justify-center gap-4">
        <div
          className="flex items-center justify-center rounded-2xl p-4"
          style={{ backgroundColor: `${data.accentColor}1A` }}
        >
          <span style={{ color: data.accentColor }}>{data.icon}</span>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <h3
            className={cn("text-3xl font-bold")}
            style={{ color: data.accentColor }}
          >
            {data.title}
          </h3>
          <p>{data.description}</p>
        </div>
      </div>
      <div>{data.footerComponent}</div>
    </div>
  );
};

const Fourth = () => {
  return (
    <div className="grid h-full w-full grid-cols-2 max-md:grid-cols-1 gap-4 max-md:px-5">
      {CARD_DATA.map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </div>
  );
};

export default Fourth;
