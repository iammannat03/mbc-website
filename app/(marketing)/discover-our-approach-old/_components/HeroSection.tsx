import Image from 'next/image'

import { Container, SectionShell } from '@/components/ui/SectionShell'

export function HeroSection () {
  return (
    <SectionShell
      id='hero'
      className='full-bleed relative overflow-hidden bg-white'
    >
      <div className='absolute inset-y-0 right-0 hidden w-[58%] lg:block'>
        <Image
          src='/images/discover-our-approach/hero/hero.png'
          alt='Person meditating in a serene mountain landscape'
          fill
          className='object-cover object-center'
          priority
          sizes='58vw'
        />
        <div
          className='pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-white to-transparent'
          aria-hidden
        />
      </div>

      <Container className='relative grid min-h-[520px] items-center py-10 md:min-h-[580px] md:py-14 lg:min-h-[640px] lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16 lg:py-20'>
        <div className='relative z-10 flex flex-col gap-5 md:gap-6'>
          <h1 className='text-4xl font-bold leading-tight tracking-tight text-[#0c2340] md:text-5xl lg:text-[52px]'>
            Discover Our{' '}
            <span className='text-[hsl(120,30%,25%)]'>Approach</span>
          </h1>
          <p className='text-lg font-semibold leading-relaxed text-sky-primary md:text-xl'>
            Reconnect with your Body, Return to Natural Balance
          </p>
          <p className='text-base leading-relaxed text-muted-foreground md:text-lg'>
            ByeBimari is a complete wellness ecosystem that helps you notice
            your body&apos;s signals, understand them with AI insights and
            receive natural guidance from experts to build a healthier life.
          </p>
        </div>

        <div className='relative mt-8 aspect-[4/3] w-full lg:hidden'>
          <Image
            src='/images/discover-our-approach/hero/hero.png'
            alt='Person meditating in a serene mountain landscape'
            fill
            className='object-cover object-center'
            priority
            sizes='100vw'
          />
        </div>
      </Container>
    </SectionShell>
  )
}
