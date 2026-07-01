import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";

const Second = () => {
  return (
    <>
      <SectionShell className="bg-[#EFF4FF] py-10 md:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto w-full max-w-[560px] pb-10 pr-6 sm:pr-10">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/ai-insights-new/ai-second.png"
                  alt="Woman reviewing SKY Ring AI health insights on her phone"
                  width={560}
                  height={560}
                  className="h-auto w-full rounded-3xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="absolute bottom-0 right-0 z-10 w-[64%] max-w-[358px] drop-shadow-xl">
                <Image
                  src="/images/ai-insights-new/ai-second-dashboard.png"
                  alt="SKY Ring AI health dashboard showing weekly wellness trends"
                  width={358}
                  height={209}
                  className="h-auto w-full rounded-xl"
                  sizes="(max-width: 1024px) 64vw, 320px"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:gap-6">
              <span className="inline-flex w-fit rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-sky-primary">
                AI-POWERED WELLNESS
              </span>

              <h2 className="text-2xl font-bold leading-tight text-[#0B1C30] md:text-4xl">
                SKY Ring AI Health Insight
              </h2>

              <h3 className="text-md font-bold leading-snug text-[#026D31] md:text-md">
                Always Help You Achieve Better Health
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                The SKY Ring provides advanced AI health insights, with
                monthly and weekly comparison reports to help you track and
                improve your health. Keep challenging yourself and aim for
                better health, all at your fingertips.
              </p>
            </div>
          </div>
        </Container>
      </SectionShell>
      {/* Full-width image at the end of the section */}
      <div className="w-screen bg-[#EFF4FF] relative left-1/2 right-1/2 -mx-[50vw] max-w-none px-10">
        <Image
          src="/images/ai-insights-new/ai-third.png"
          alt="SKY AI Third Section Visual"
          width={1920}
          height={550}
          className="w-full h-auto max-w-none"
          priority={false}
          sizes="100vw"
        />
      </div>
    </>
  );
};

export default Second;
