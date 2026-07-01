import { Container, SectionShell } from '@/components/ui/SectionShell'
import { Icon } from '@/components/ui/Icon'

import {
  FLOW_CIRCLE_BACKGROUNDS,
  FlowArrow,
  ProcessIconCircle
} from './ApproachFlowShared'
import { SectionHeading } from './SectionHeading'

const STEPS = [
  {
    title: 'Notice Signals',
    description: 'The SKY ring tracks your daily body signals and patterns',
    icon: '/images/discover-our-approach/icons/third/notice.png'
  },
  {
    title: 'Understand Patterns',
    description: 'AI turns your data into simple, meaningful insights',
    icon: '/images/discover-our-approach/icons/third/understand.png'
  },
  {
    title: 'Receive Guidance',
    description:
      'Experts guide you with natural practices and lifestyle correction.',
    icon: '/images/discover-our-approach/icons/third/receive.png'
  },
  {
    title: 'Build Healthy Habits',
    description: 'Daily routines and hand holding help you stay consistent',
    icon: '/images/discover-our-approach/icons/third/build.png'
  },
  {
    title: 'Better Health',
    description: 'Better habits lead to better balance, better you.',
    icon: '/images/discover-our-approach/icons/third/better.png'
  }
] as const

export function HowByeBimariHelpsSection () {
  return (
    <SectionShell
      id='how-bye-bimari-helps'
      className='pb-14 pt-4 md:pb-20 md:pt-6'
    >
      <Container>
        <SectionHeading className='mb-12 md:mb-14'>
          How ByeBimari Helps You
        </SectionHeading>

        <div className='relative pb-10 lg:pb-14'>
          <div className='pointer-events-none absolute inset-x-0 -bottom-2 hidden h-[88px] lg:-bottom-4 lg:block'>
            <svg
              viewBox='0 0 920 88'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='mx-auto size-full max-w-[920px]'
              aria-hidden
            >
              <path
                d='M20 20 C 180 76, 740 76, 900 20'
                stroke='rgb(184,192,204)'
                strokeWidth='2'
                strokeDasharray='8 8'
                fill='none'
              />
            </svg>
            <div className='absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-full border border-[rgb(216,222,232)] bg-white'>
              <Icon name='leaf-fill' size={22} />
            </div>
          </div>

          <div className='-mx-2 overflow-x-auto pb-2 lg:overflow-visible lg:pb-0'>
            <div className='relative z-10 mx-auto flex min-w-[720px] items-start px-2 lg:min-w-0'>
              {STEPS.map((step, index) => (
                <div key={step.title} className='contents'>
                  <div className='flex min-w-0 flex-1 flex-col items-center gap-2 px-1 text-center'>
                    <ProcessIconCircle
                      src={step.icon}
                      backgroundColor={FLOW_CIRCLE_BACKGROUNDS[index]}
                    />
                    <h3 className='text-sm font-bold leading-snug text-[rgb(12,35,64)] md:text-base'>
                      {step.title}
                    </h3>
                    <p className='text-xs leading-relaxed text-muted-foreground md:text-sm'>
                      {step.description}
                    </p>
                  </div>
                  {index < STEPS.length - 1 ? (
                    <FlowArrow className='mt-6 opacity-80 md:mt-8' />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
