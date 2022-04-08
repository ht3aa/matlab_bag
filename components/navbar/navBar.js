import navBarStyles from "../../styles/Navbar.module.css";
import Image from "next/image";
import toggleHamAnimation from "./hamAnimationController";
import { useRef } from "react";
import { useState } from "react";
import makeItActive from "./makeItActive";
import Link from "next/dist/client/link";

export default function NavBar() {
    const [showNavigationList, setShowNavigationList] = useState(false);
    const hamContainerRef = useRef();
    function toggleHamAndShowHam() {
        toggleHamAnimation(hamContainerRef.current);
        setShowNavigationList(!showNavigationList);
    }
    return (
        <div className={navBarStyles.navbar}>
            <div className={navBarStyles.logoBox}>
                <Image src="/university.png" alt="Logo" width={50} height={50}/> 
                <p>كلية الأمام الكاظم/قسم هندسة تقنيات الحاسوب</p>       
            </div>
            <ul onClick={(e) => {
                makeItActive(e.target);
            }} className={navBarStyles.navigationList}>
                <Link href='/aboutUs'><li><p className={navBarStyles.navigationListParagraph}>من نحن</p></li></Link>
                <Link href='/'><li><p className={navBarStyles.navigationListParagraph + " navigationActive"}>الصفحة الرئيسية</p></li></Link>
            </ul>
            <div ref={hamContainerRef} className="ham_Container" onClick={toggleHamAndShowHam}>
                    <div className="circle"></div>
                    <div className="ham_4">
                        <div className="middleBar"></div>
                    </div>
                <div className="hide"></div>
            </div>
            {showNavigationList && <nav className={navBarStyles.mobileNavigationList}>
                <ul className={navBarStyles.mobileNavigationListUl}>
                    <Link href='/'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph + " navigationActive"}>الصفحة الرئيسية</p></li></Link>
                    <Link href='/aboutUs'><li onClick={toggleHamAndShowHam}><p className={navBarStyles.navigationListParagraph}>من نحن</p></li></Link>
                </ul>
            </nav>}
        </div>
    )
}