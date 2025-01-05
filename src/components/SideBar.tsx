import { FC, memo, ReactNode } from 'react';
import { MdPieChart, MdGroups2, MdOutlinePersonPin, MdOutlineSettings, MdKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/logo.png";
const navLinks: { label: string, lead: ReactNode, action?: ReactNode }[] = [
    { label: "dashboard", lead: <MdPieChart size={28}/> },
    { label: "teams", lead: <MdGroups2 size={28}/> },
    { label: "employees", lead: <MdOutlinePersonPin size={28}/> },
    { label: "settings", lead: <MdOutlineSettings size={28}/>, action: <MdKeyboardArrowDown size={28}/> },
]
const SideBar: FC = () => {
    return (
        <aside className="h-screen bg-primary px-8">
            <nav>
                <img src={logo} alt="logo" />
                <ul className='mt-8 col gap-4'>
                    {
                        navLinks.map(({ label, lead, action }) => (
                            <li key={label} className='flex items-center justify-between text-white'>
                                <div className='flex items-center gap-4'>
                                    {lead}
                                    <span className='capitalize'>{label}</span>
                                </div>
                                {action}
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    );
}

export default memo(SideBar);
