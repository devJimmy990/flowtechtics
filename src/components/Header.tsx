import { FC, memo } from 'react';
import { MdOutlineMail, MdNotifications } from "react-icons/md";

const Header: FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white">
            <h1 className="text-2xl font-semibold">Current Path</h1>
            <div className="flex items-center gap-4">
                <div className='relative bg-darkGray'>
                    <MdOutlineMail size={28} className='' />
                    <div className='absolute top-4 text-red-500'>
                        2
                    </div>
                </div>
                <div className='relative bg-darkGray'>
                    <MdNotifications size={28} className='' />
                    <div className='absolute top-4 text-red-500'>
                    </div>2
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
