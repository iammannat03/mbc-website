import Image from 'next/image'

import { Icon } from '@/components/ui/Icon'

export const FLOW_CIRCLE_BACKGROUNDS = [
  '#e4f0e8',
  '#e0e8f5',
  '#f2e8dc',
  '#e4f0e8',
  '#e0e8f5'
] as const

const ARROW_FILTER =
  'brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(1800%) hue-rotate(196deg) brightness(95%) contrast(101%)'

export function FlowArrow ({
  className = 'hidden shrink-0 self-start opacity-80 sm:block'
}: {
  className?: string
}) {
  return (
    <Icon
      name='arrow'
      size={24}
      className={className}
      style={{ filter: ARROW_FILTER }}
    />
  )
}

export function ProcessIconCircle ({
  src,
  backgroundColor
}: {
  src: string
  backgroundColor: string
}) {
  return (
    <div
      className='flex size-[72px] items-center justify-center rounded-full md:size-[88px]'
      style={{ backgroundColor }}
    >
      <Image
        src={src}
        alt=''
        width={44}
        height={44}
        className='size-9 object-contain md:size-11'
      />
    </div>
  )
}
