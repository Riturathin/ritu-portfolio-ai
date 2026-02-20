import Link from "next/link";

const NavLinks = ({ route, label }: { route: string, label: string }) => (
    <Link
        href={route}
        className="relative text-white/70 hover:text-white transition group"
    >
        {label}
        <span
            className="
      absolute left-0 -bottom-1 h-[2px] w-0
      bg-blue-500
      transition-all duration-300
      group-hover:w-full
    "
        />
    </Link>
)


export default NavLinks;