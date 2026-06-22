import Image from 'next/image'

import {
  Container,
  GradientText,
  SectionShell
} from '@/components/ui/SectionShell'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/lib/icons'

import { BlueButton } from './BlueButton'
import { OutlineButton } from './OutlineButton'

const FEATURE_BAR: { label: string; icon: IconName }[] = [
  { label: 'Smart Tracking', icon: 'scanner' },
  { label: 'AI Insights', icon: 'brain' },
  { label: 'Natural Guidance', icon: 'leaf' }
]

export function HeroSection () {
  return (
    <SectionShell
      id='hero'
      className='full-bleed relative overflow-hidden bg-white'
    >
      <div className='absolute inset-y-0 right-0 hidden lg:relative lg:flex lg:h-full lg:justify-end'>
        <Image
          src='/images/ai-insights/ai.png'
          alt='Woman reviewing AI health insights on her phone'
          width={3529}
          height={1987}
          className='h-full w-auto max-w-none object-contain object-right'
          priority
          sizes='58vw'
        />
        <div
          className='pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-white to-transparent'
          aria-hidden
        />
      </div>

      <Container className='relative grid min-h-[520px] items-center py-10 md:min-h-[580px] md:py-14 lg:min-h-[640px] lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16 lg:py-20'>
        <div className='relative z-10 flex max-w-xl flex-col gap-6'>
            <div className='inline-flex w-fit items-center gap-2 rounded-full bg-sky-accent/20 px-4 py-2'>
              <Icon name='star' size={16} />
              <span className='text-xs font-bold uppercase tracking-[0.15em] text-sky-primary'>
                AI Powered Insights
              </span>
            </div>

            <div>
              <h1 className='text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[52px]'>
                Discover{' '}
                <GradientText variant='insights' className='font-bold'>
                  AI Insights
                </GradientText>
              </h1>
              <p className='mt-3 text-lg font-bold text-foreground/80 md:text-xl'>
                Understand Your Body. One Insight At A Time.
              </p>
            </div>

            <p className='max-w-lg text-base leading-relaxed text-muted-foreground'>
              Turn your daily signals into meaningful guidance that helps you
              sleep better, recover smarter and build healthier habits.
            </p>

            <div className='flex flex-wrap gap-4'>
              <BlueButton showArrow>Explore Insights</BlueButton>
              <OutlineButton>View Demo</OutlineButton>
            </div>

            <div className='mt-2 flex flex-wrap items-center text-sm font-semibold text-foreground md:text-base'>
              {FEATURE_BAR.map((item, index) => (
                <span key={item.label} className='flex items-center'>
                  {index > 0 ? (
                    <span
                      className='mx-3 text-muted-foreground/40'
                      aria-hidden='true'
                    >
                      ·
                    </span>
                  ) : null}
                  <span className='flex items-center gap-2'>
                    <Icon
                      name={item.icon}
                      size={18}
                      className='text-sky-primary'
                    />
                    {item.label}
                  </span>
                </span>
              ))}
            </div>
          </div>

        <div className='relative mt-8 aspect-[3529/1987] w-full lg:hidden'>
          <Image
            src='/images/ai-insights/ai.png'
            alt='Woman reviewing AI health insights on her phone'
            fill
            className='object-cover object-right'
            priority
            sizes='100vw'
          />
        </div>
      </Container>
    </SectionShell>
  )
}
