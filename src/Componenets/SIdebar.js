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
			
				<SideBarIcon icon={<AiFillInfoCircle />} />
				<SideBarIcon icon={<AiFillLinkedin />} />
				<SideBarIcon icon={<AiOutlineFundProjectionScreen />} />
				<SideBarIcon icon={<AiFillPrinter />} />
			</div>
		);
};

 const SideBarIcon = ({icon}) => (

        <div className='sidebar-icon'>
            {icon}
            
        </div>
 )

export default SIdebar;