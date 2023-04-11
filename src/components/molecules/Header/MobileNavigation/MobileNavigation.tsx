import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { FC, Fragment } from "react";

export const MobileNavigation: FC = (): JSX.Element => (
  <Popover>
    {({ open, close }: any) => (
      <>
        <Popover.Button className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'>
          <span className='sr-only'>Toggle Navigation</span>
          <svg
            aria-hidden='true'
            className='h-3.5 w-3.5 overflow-visible stroke-slate-700'
            fill='none'
            strokeWidth={2}
            strokeLinecap='round'
          >
            <path d='M0 1H14M0 7H14M0 13H14' className={open ? "origin-center transition" : "scale-90 opacity-0"} />
            <path d='M2 2L12 12M12 2L2 12' className={!open ? "origin-center transition" : "scale-90 opacity-0"} />
          </svg>
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='duration-150 ease-in'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              as='ul'
              className='absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5'
            >
              <li>
                <Link href='#features' className='block w-full' onClick={() => close()}>
                  Features
                </Link>
              </li>
              <li>
                <Link href='#testimonials' className='block w-full' onClick={() => close()}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href='#pricing' className='block w-full' onClick={() => close()}>
                  Pricing
                </Link>
              </li>
              <li className='border-t border-slate-300/40 pt-4'>
                <Link href='/login' className='block w-full'>
                  Sign in
                </Link>
              </li>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </>
    )}
  </Popover>
);
