import CodeZone from '@/components/Editor/CodeZone'
import Description from '@/components/Editor/Description'
import { SideNav, BottomNav } from '@/components/Editor/Navigation/'
import Settings from '@/components/Editor/Settings'
import WithNavbar from '@/HOC/WithNavbar'
import { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

function PC() {
    return (
        <div className="bg-white shadow-lg rounded-xl flex overflow-hidden m-4 gap-2">
            <Settings />
            <SideNav />
            <Description />
            <CodeZone />
        </div>
    )
}

function Mobile() {
    return (
        <div className="flex flex-col h-full ">
            <div className="bg-lime-500 flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur velit provident animi blanditiis. Sequi eligendi eaque nemo commodi, et, deserunt voluptatibus accusantium porro, nostrum ullam possimus. Hic vero quis magni!
                Optio non obcaecati veritatis praesentium a soluta modi facilis possimus mollitia, dolore atque! Facilis unde culpa corporis, debitis blanditiis nulla ab omnis labore itaque iure odit aperiam quidem adipisci dolorum?
                Ea laudantium neque dolores ipsa eos quia, debitis perspiciatis odio. Magnam nam, modi veritatis commodi perferendis voluptatum excepturi laboriosam, obcaecati rerum amet maiores neque. Quas accusantium minus aut eaque iure.
                Ut, deleniti. Unde praesentium similique fugit nesciunt magni, debitis ratione? Eum asperiores quia voluptas repellat aliquam neque saepe ut mollitia, impedit ullam adipisci sapiente, voluptatum officia reiciendis nihil ratione omnis.
                Ea odit, non magni molestiae inventore quasi maiores blanditiis eius. Aspernatur, corporis obcaecati architecto fugit error amet aperiam dolorem, doloremque, sit animi quia vero nobis esse quas iure hic voluptate?
                Reiciendis repudiandae possimus culpa illum velit natus, sed hic quia beatae cumque autem, quaerat saepe, veritatis harum nulla quo? Adipisci, tempora nesciunt veniam excepturi sit iste pariatur qui magnam laboriosam.
                Modi rerum ullam eaque sequi. Animi enim nostrum commodi id libero optio possimus magni porro incidunt, in nemo minima necessitatibus corrupti quis fuga provident itaque saepe dolor asperiores? Esse, illum?
                Alias ea quisquam molestias eveniet dicta tempora odio ab obcaecati inventore at? Debitis laboriosam, atque, nobis similique nisi accusantium, ullam neque perspiciatis odit libero architecto! Consequuntur rerum nisi officiis magni?
                Nam recusandae odio dolorum quasi velit necessitatibus doloribus cupiditate rerum suscipit est vel temporibus blanditiis nobis, nulla cum optio, ad repellendus? Ut qui veritatis exercitationem mollitia illum id quod enim.
                Perferendis vel deleniti nemo atque quidem expedita, aut cum, nihil, laboriosam dolorem ducimus? Natus dolore molestiae sunt nostrum fuga ipsa aliquam quae. Quia quae vero excepturi debitis omnis saepe odit.
                {/* <Description /> */}
            </div>
            <BottomNav />
        </div>
    )
}

function Editor() {
    const isPC = useMediaQuery('(min-width : 768px)')
    useEffect(() => {
        console.log(isPC)
    }, [isPC])
    return (
        <WithNavbar
            title="09 Find a, b in which a*b=n and (a+b) is the lowest - CS-LAB"
            className="bg-gray-50"
        >
            {isPC ? <PC /> : <Mobile />}
        </WithNavbar>
    )
}

export default Editor
