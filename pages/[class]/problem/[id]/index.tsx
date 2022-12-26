import type { NextPageContext } from 'next'

import NonMobile from '@/components/Editor/NonMobile'
import Mobile from '@/components/Editor/Mobile'

interface Props {
    test: string
    isMobile: boolean
}

const Device = ({ isMobile }: Props) => {
    if (isMobile) return <Mobile />
    return <NonMobile />
}

export default Device

export async function getServerSideProps(context: NextPageContext) {
    const UA = context.req!.headers['user-agent']
    console.log(UA);
    
    const isMobile = Boolean(
        UA!.match(
            /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
    )

    return {
        props: {
            test: 'YO!',
            isMobile,
        },
    }
}
