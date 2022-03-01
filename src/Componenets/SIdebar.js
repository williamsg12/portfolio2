import React from 'react';
import {
	AiFillInfoCircle,
	AiFillLinkedin,
	AiOutlineFundProjectionScreen,
	AiFillPrinter,
} from 'react-icons/ai';const SIdebar = () => {
    return (
			<div
				className='fixed top-0 right-0 h-screen w-12 m-0 flex flex-col 
            bg-gray-900 text-white text-4xl shadow-2xl'>
				<SideBarIcon icon={<AiFillInfoCircle size='32' />} />
				<Divider />
				<SideBarIcon icon={<AiFillLinkedin />} />
				<Divider />
				<SideBarIcon icon={<AiOutlineFundProjectionScreen />} />
				<Divider />
				<SideBarIcon icon={<AiFillPrinter />} />
			</div>
		);
};

 const SideBarIcon = ({icon, text='tooltip !'}) => (

        <div className='sidebar-icon group'>
            {icon}       

            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
 )

 const Divider = () => <hr className='sidebar-hr' />;

export default SIdebar;