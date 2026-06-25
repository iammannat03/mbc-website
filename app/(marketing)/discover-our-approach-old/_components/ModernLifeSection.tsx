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
    label: 'Stress',
    icon: '/images/discover-our-approach/icons/second/stress.png'
  },
  {
    label: 'Poor Sleep',
    icon: '/images/discover-our-approach/icons/second/sleep.png'
  },
  {
    label: 'Irregular Food',
    icon: '/images/discover-our-approach/icons/second/food.png'
  },
  {
    label: 'Low Movement',
    icon: '/images/discover-our-approach/icons/second/low.png'
  },
  {
    label: 'Emotional Pressure',
    icon: '/images/discover-our-approach/icons/second/emotional.png'
  }
] as const

export function ModernLifeSection () {
  return (
    <SectionShell id='modern-life' className='py-14 md:py-20'>
      <Container>
        <SectionHeading className='mb-12 md:mb-16'>
          Modern Life Slowly Disconnects us
        </SectionHeading>

        <div className='-mx-2 overflow-x-auto pb-2 md:overflow-visible md:pb-0'>
          <div className='mx-auto flex min-w-[640px] items-start px-2 md:min-w-0'>
            {STEPS.map((step, index) => (
              <div key={step.label} className='contents'>
                <div className='flex min-w-0 flex-1 flex-col items-center gap-3 px-1 text-center'>
                  <ProcessIconCircle
                    src={step.icon}
                    backgroundColor={FLOW_CIRCLE_BACKGROUNDS[index]}
                  />
                  <span className='min-h-10 text-sm font-semibold leading-snug text-[rgb(12,35,64)] md:min-h-11 md:text-base'>
                    {step.label}
                  </span>
                </div>
                {index < STEPS.length - 1 ? (
                  <FlowArrow className='mt-6 md:mt-8' />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className='mx-auto mt-12 max-w-4xl rounded-2xl bg-[rgb(247,243,234)] px-6 py-5 md:mt-16 md:px-8 md:py-6'>
          <div className='flex items-center gap-4'>
            <span className='flex size-11 shrink-0 items-center justify-center rounded-full'>
              <Icon
                name='leaf-fill'
                size={22}
                className='text-[rgb(40,201,114)]'
              />
            </span>
            <p className='text-base leading-relaxed text-[rgb(12,35,64)/0.85] md:text-lg'>
              These small imbalances quietly disturb the body&apos;s natural
              rhythm. Over time, they affect energy, mood, recovery and overall
              wellness.
            </p>
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
