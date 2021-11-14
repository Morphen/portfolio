import Link from "next/link"

const NavbarItem = (props: any) => {
    return (
        <Link href={props.url} passHref>
            <a className="flex justify-center items-center">
                <div className="text-center text-white w-[150px] pt-[10px] mx-[0.5vw] rounded-br-[20px] rounded-bl-[20px] leading-[29px] hover:bg-[#ffffff] hover:text-black md:block hidden">
                    {props.text}
                </div>
            </a>
        </Link>
    )
}

export default NavbarItem