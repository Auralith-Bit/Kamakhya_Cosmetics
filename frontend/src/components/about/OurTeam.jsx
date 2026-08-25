import React, { useState } from 'react';
import team1 from '../../assets/Rectangle 4647.svg';
import team2 from '../../assets/Rectangle 4648.svg';
import team3 from '../../assets/Rectangle 4649.svg';
import team4 from '../../assets/Rectangle 4650.svg';
import team5 from '../../assets/Rectangle 4651.svg';

const GoldenWave = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="172" height="24" viewBox="0 0 172 24" fill="none" style={{display:'block',margin:'8px auto 0'}}>
    <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill="#CCA466" />
  </svg>
);

const ValueBadge = ({ icon, label, color }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold font-body tracking-wide" style={{ background: color + '18', color }}>
    {icon} {label}
  </span>
);

const TEAM = [
  { id:1, name:'Ananya Sharma', role:'Founder & CEO', photo:team1, valueBadge:{icon:'🛡️',label:'Integrity First',color:'#2e3192'}, quote:'We build every product the way we want it for our own families — with complete honesty.', accent:'#fde8d8', elevated:false },
  { id:2, name:'Rohan Mehta', role:'Head of R&D', photo:team2, valueBadge:{icon:'💡',label:'Innovate Fearlessly',color:'#E38F2E'}, quote:'Curiosity drives us. We experiment so our customers never have to settle.', accent:'#fcd4c4', elevated:true },
  { id:3, name:'Priya Kapoor', role:'Operations Director', photo:team3, valueBadge:{icon:'🤝',label:'People First',color:'#2e3192'}, quote:'Our team wellbeing and collaboration is the engine behind every great product.', accent:'#fde8d8', elevated:false },
  { id:4, name:'Vikram Singh', role:'Quality Assurance Head', photo:team4, valueBadge:{icon:'🎯',label:'Focus on Impact',color:'#E38F2E'}, quote:'Every batch we approve carries our name. That is a standard we never compromise on.', accent:'#fcd4c4', elevated:true },
  { id:5, name:'Neha Joshi', role:'Marketing & Growth', photo:team5, valueBadge:{icon:'🌱',label:'Responsible Always',color:'#2e3192'}, quote:'We grow only as fast as we can do it responsibly — for our customers and the planet.', accent:'#fde8d8', elevated:false },
];

const TeamCard = ({ member, isActive, onHover, onLeave }) => (
  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', cursor:'default', position:'relative', marginTop: member.elevated ? 0 : 32 }} onMouseEnter={() => onHover(member.id)} onMouseLeave={onLeave}>
    <div style={{ width:'clamp(140px,13vw,196px)', aspectRatio:'4/5', borderRadius:'60% 60% 50% 50% / 55% 55% 45% 45%', background:member.accent, overflow:'hidden', position:'relative', transition:'transform 0.35s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.35s ease', transform: isActive ? 'translateY(-10px) scale(1.04)' : 'translateY(0) scale(1)', boxShadow: isActive ? '0 28px 56px -10px rgba(46,49,146,0.22),0 8px 24px -6px rgba(0,0,0,0.12)' : '0 10px 30px -8px rgba(0,0,0,0.10)' }}>
      <img src={member.photo} alt={member.name} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', display:'block', filter: isActive ? 'brightness(1.04) saturate(1.08)' : 'brightness(1)', transition:'filter 0.35s ease' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)', opacity: isActive ? 1 : 0, transition:'opacity 0.3s ease', display:'flex', alignItems:'flex-end', padding:'14px 10px' }}>
        <p style={{ margin:0, fontFamily:"'Poppins',sans-serif", fontSize:'clamp(9px,0.7vw,11px)', lineHeight:1.5, color:'#fff', fontStyle:'italic', textAlign:'center', width:'100%' }}>{member.quote}</p>
      </div>
    </div>
    <div style={{ textAlign:'center', marginTop:16 }}>
      <p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontSize:'clamp(14px,1.1vw,17px)', fontWeight:700, color:'#2e3192' }}>{member.name}</p>
      <p style={{ margin:'4px 0 10px', fontFamily:"'Poppins',sans-serif", fontSize:'clamp(11px,0.85vw,13px)', color:'#9096B0', fontWeight:500 }}>{member.role}</p>
      <ValueBadge {...member.valueBadge} />
    </div>
  </div>
);

const OurTeam = () => {
  const [activeId, setActiveId] = useState(null);
  return (
    <section id="our-team" aria-label="Our Team" className="w-full bg-white overflow-hidden" style={{ paddingTop:85, paddingBottom:90 }}>
      <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 clamp(20px,8.68vw,125px)' }}>
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <p style={{ margin:0, fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'#E38F2E', marginBottom:10 }}>Our Team</p>
          <h2 style={{ margin:0, fontFamily:"'Playfair Display',serif", fontSize:'clamp(26px,3vw,36px)', fontWeight:700, lineHeight:1.3, color:'#2e3192' }}>People Behind The Quality</h2>
          <GoldenWave />
          <p style={{ marginTop:16, fontFamily:"'Poppins',sans-serif", fontSize:'clamp(13.5px,0.95vw,15px)', lineHeight:1.8, color:'#6B7280', maxWidth:620, marginLeft:'auto', marginRight:'auto' }}>A dedicated team working together with expertise, care, and passion — each embodying our core values to create trusted beauty and home-care products that make a real difference.</p>
        </div>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'flex-start', gap:'clamp(16px,2.4vw,36px)', flexWrap:'wrap' }}>
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} isActive={activeId === member.id} onHover={setActiveId} onLeave={() => setActiveId(null)} />
          ))}
        </div>
        <div style={{ marginTop:64, borderRadius:16, background:'linear-gradient(135deg,#f8f4ee 0%,#fdf6ed 100%)', border:'1px solid #EDE4D4', padding:'clamp(20px,2.5vw,36px) clamp(20px,4vw,56px)', display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(16px,3vw,48px)', flexWrap:'wrap' }}>
          <p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontSize:'clamp(14px,1vw,16px)', fontWeight:700, color:'#2e3192', flexShrink:0 }}>Our values in action:</p>
          {[{icon:'🛡️',label:'Integrity First',color:'#2e3192'},{icon:'💡',label:'Innovate Fearlessly',color:'#E38F2E'},{icon:'🤝',label:'People First',color:'#2e3192'},{icon:'🎯',label:'Focus on Impact',color:'#E38F2E'},{icon:'🌱',label:'Responsible Always',color:'#2e3192'}].map((v) => (
            <ValueBadge key={v.label} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
