import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SocialIcons() {
  return (
    <div className='flex justify-center gap-2 xl:gap-6 '>
        
        {/*Facebook Icon*/}
        <a
            href="https://www.facebook.com/profile.php?id=61573120655362"
            target="_blank"
            className='w-14 h-14 flex justify-center items-center rounded-full bg-[#7bbf39] text-black text-xl transition-transform duration-300 hover:scale-110 hover:bg-[#9ee252]'
        >
            <FontAwesomeIcon icon={faFacebookF} />
        </a>

        {/*Instagram Icon*/}
        <a
            href="https://www.instagram.com/altenergy.life?igsh=ZHo3dDJoNzIwNXJ1&utm_source=qr"
            target="_blank"
            className='w-14 h-14 flex justify-center items-center rounded-full bg-[#7bbf39] text-black text-xl transition-transform duration-300 hover:scale-110 hover:bg-[#9ee252]'
        >
            <FontAwesomeIcon icon={faInstagram} />
        </a>

        {/*Linkedln Icon*/}
        <a
            href="https://www.linkedin.com/company/altenergy-life/?viewAsMember=true"
            target="_blank"
            className='w-14 h-14 flex justify-center items-center rounded-full bg-[#7bbf39] text-black text-xl transition-transform duration-300 hover:scale-110 hover:bg-[#9ee252]'
        >
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
    </div>
  )
}
