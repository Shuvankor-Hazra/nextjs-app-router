'use client'

import { useRouter } from "next/navigation";

const NavButton = () => {
    const router = useRouter()
    return (
        <button 
        onClick={()=> router.push('/')}
        type="button">
            Take me back to Home
        </button>
    );
};

export default NavButton;