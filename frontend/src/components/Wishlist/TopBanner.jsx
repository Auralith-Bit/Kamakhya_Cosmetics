import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const serif = "'Playfair Display', Georgia, serif"
const sans = "'Poppins', 'Segoe UI', sans-serif"

const TopBanner = () => (
    <section id="wishlist-hero" className="wish-banner">
        <style>{`
            /* ============ DESKTOP ≥1024 ============ */
            .wish-banner{
                position:relative;
                width:100%;
                height:200px;
                background:#F7F0E7;
                overflow:hidden;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .wish-copy{
                position:relative;
                z-index:2;
                text-align:center;
                width:100%;
                max-width:80vw;
            }
            .wish-crumb{
                display:flex;
                align-items:center;
                justify-content:center;
                gap:0.5208vw;
                color:#E38F2E;
                font-family:${sans};
                font-size:1.25vw;
                font-weight:600;
                white-space:nowrap;
            }
            .wish-crumb a{color:#E38F2E;text-decoration:none;font-size:1.25vw;font-weight:600;}
            .wish-crumb a:hover{text-decoration:underline;}
            .wish-ic-home{width:1.4vw;height:1.4vw;}
            .wish-ic-chev{width:1.2vw;height:1.2vw;color:#E38F2E;}
            .wish-title{
                margin-top:1.0417vw;
                color:#2E3192;
                font-family:${serif};
                font-size:2.7180vw;
                font-weight:700;
                line-height:1.15;
                text-align:center;
            }

            /* ============ PHONES ≤639 ============ */
            @media (max-width:639px){
                .wish-banner{height:auto;padding:8vw 6vw 12vw;}
                .wish-crumb{font-size:clamp(13px,1.6vw,18px);gap:2vw;}
                .wish-crumb a{font-size:clamp(13px,1.6vw,18px);}
                .wish-ic-home{width:clamp(16px,2vw,22px);height:clamp(16px,2vw,22px);}
                .wish-ic-chev{width:clamp(14px,1.8vw,20px);height:clamp(14px,1.8vw,20px);}
                .wish-title{margin-top:2.5vw;font-size:clamp(28px,6vw,44px);}
            }

            /* ============ TABLET 640–1023 ============ */
            @media (min-width:640px) and (max-width:1023px){
                .wish-banner{height:auto;aspect-ratio:21/9;}
                .wish-crumb{font-size:15px;gap:8px;}
                .wish-crumb a{font-size:15px;}
                .wish-ic-home{width:20px;height:20px;}
                .wish-ic-chev{width:18px;height:18px;}
                .wish-title{margin-top:10px;font-size:34px;}
            }

            /* ============ NARROW TABLET 830–1023 ============ */
            @media (min-width:830px) and (max-width:1023px){
                .wish-banner{aspect-ratio:21/8;}
            }
        `}</style>

        <div className="wish-copy">
            <nav className="wish-crumb" aria-label="Breadcrumb">
                <Link to="/" className="flex items-center gap-x-1.5 no-underline">
                    <Home className="wish-ic-home" strokeWidth={2.5} />
                    <span>Home</span>
                </Link>
                <ChevronRight className="wish-ic-chev" strokeWidth={3} />
                <span>Your Wishlist</span>
                <ChevronRight className="wish-ic-chev" strokeWidth={3} />
            </nav>
            <h1 className="wish-title">Your Saved Items</h1>
        </div>
    </section>
)

export default TopBanner
