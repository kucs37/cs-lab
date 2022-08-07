import WithNavbar from '@layouts/WithNavbar'
import Backto from '@components/Common/Backto'
import { AiFillStar } from 'react-icons/ai'
function Problem() {
    return (
        <WithNavbar>
            {/* <div className="p-1">
                <Backto href="#" />
            </div> */}
            <div className="grid grid-cols-10 gap-2 place-items-stretch min-h-0 h-full">
                <div className="col-span-12 md:col-span-3  bg-white rounded-lg  h-full overflow-scroll p-4">
                    <div className="flex flex-col gap-4 items-start">
                        <h1 className="text-xl font-bold">
                            01 Elab's Automatic Grading
                        </h1>
                        <div className="flex items-center gap-1 text-sm justify-start w-full">
                            <span className="text-yellow-300">
                                <AiFillStar size="1.25rem" />
                            </span>
                            <p>4.5</p>
                            <p>•</p>
                            <p>25 รีวิว</p>
                        </div>

                        <p className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa iure maiores minus expedita consectetur
                            illo, vitae incidunt doloremque distinctio magni
                            culpa aliquam aperiam voluptatum quod eligendi
                            molestiae ullam vel! Sapiente! Lorem ipsum dolor sit
                            amet consectetur, adipisicing elit. Ipsa iure
                            maiores minus expedita consectetur illo, vitae
                            incidunt doloremque distinctio magni culpa aliquam
                            aperiam voluptatum quod eligendi molestiae ullam
                            vel! Sapiente! Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Ipsa iure maiores
                            minus expedita consectetur illo, vitae incidunt
                            doloremque distinctio magni culpa aliquam aperiam
                            voluptatum quod eligendi molestiae ullam vel!
                            Sapiente! Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Ipsa iure maiores minus expedita
                            incidunt doloremque distinctio magni culpa aliquam
                            aperiam voluptatum quod eligendi molestiae ullam
                            vel! Sapiente! Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Ipsa iure maiores
                            minus expedita consectetur illo, vitae incidunt
                            doloremque distinctio magni culpa aliquam aperiam
                            voluptatum quod eligendi molestiae ullam vel!
                            Sapiente! Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Ipsa iure maiores minus expedita
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa iure maiores minus expedita incidunt
                            doloremque distinctio magni culpa aliquam aperiam
                            voluptatum quod eligendi molestiae ullam vel!
                            Sapiente! Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Ipsa iure maiores minus expedita
                            consectetur illo, vitae incidunt doloremque
                            distinctio magni culpa aliquam aperiam voluptatum
                            quod eligendi molestiae ullam vel! Sapiente! Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit.
                            Ipsa iure maiores minus expedita Lorem ipsum dolor
                            sit amet consectetur, adipisicing elit. Ipsa iure
                            maiores minus expedita incidunt doloremque
                            distinctio magni culpa aliquam aperiam voluptatum
                            quod eligendi molestiae ullam vel! Sapiente! Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit.
                            Ipsa iure maiores minus expedita consectetur illo,
                            vitae incidunt doloremque distinctio magni culpa
                            aliquam aperiam voluptatum quod eligendi molestiae
                            ullam vel! Sapiente! Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Ipsa iure maiores
                            minus expedita
                        </p>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-7 bg-lime-500 min-h-0 grid grid-cols-10"></div>
            </div>
        </WithNavbar>
    )
}

export default Problem
