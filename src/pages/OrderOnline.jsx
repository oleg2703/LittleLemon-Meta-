import React, { useState , useEffect } from "react";
import srcMenu from '../assets/restaurant_menu_examples_modern_market.jpg';
import '../components/css/OrderOnline.css'; 



function OrderOnline() {
    const [showMenu, setShowMenu] = useState(false);
    const [zoomStyle, setZoomStyle] = useState({});

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showMenu]);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomStyle({ transformOrigin: `${x}% ${y}%` });
    };

    return (
        <div className="specials">
            <div className="specials_content">
                <div className="specials_head">
                    <h3>Specials</h3>
                </div>
                <a href="#" onClick={toggleMenu} className="btn-menu">Online Menu</a>
            </div>
            {showMenu && (
                <div className="fullscreen-overlay" onClick={toggleMenu}>
                    <div className="menu-image-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={toggleMenu}>×</button>
                        <img
                            src={srcMenu}
                            alt="Restaurant Menu"
                            className="zoom-image"
                            style={zoomStyle}
                            onMouseMove={handleMouseMove}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderOnline;
