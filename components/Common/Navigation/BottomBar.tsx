import Link from 'next/link'
import clsx from 'clsx'

interface Props {
    variant: 'next' | 'prev'

    href: string
    title: string
}

function BottomBar({ variant, href, title }: Props) {
    return (
        <Link
            href={href}
            className={clsx(
                'group border rounded-lg border-slate-300 block hover:border-lime-600',
                variant === 'next' && 'py-2 pr-2 pl-8',
                variant === 'prev' && 'py-2 pr-8 pl-2'
            )}
        >
            <h5
                className={clsx(
                    'text-slate-500 dark:text-slate-300',
                    variant === 'next' && 'text-end'
                )}
            >
                {variant === 'next' ? 'ถัดไป' : 'ก่อนหน้า'}
            </h5>
            <h4
                className={clsx(
                    'text-lg md:text-xl font-medium text-lime-600 dark:text-lime-300',
                    variant === 'next' && 'text-end'
                )}
            >
                {title}
            </h4>
        </Link>
    )
}

export default BottomBar
