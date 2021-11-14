import Link from "next/link"
import NavbarItem from "./NavbarItem"


const Navbar = () => {
    return (
        <div className="flex justify-center">
            <div className="flex h-[30px]">
                {navbarUrl.map((item, index) => (
                    <NavbarItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

const navbarUrl =
    [{
        url: "/",
        text: "Home"
    }, {
        url: "/projects",
        text: "Projects"
    }, {
        url: "/skills",
        text: "Skills"
    }]

export default Navbar;