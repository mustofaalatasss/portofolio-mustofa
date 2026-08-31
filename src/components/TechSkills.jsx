import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

const frontendSkills = [
    { name: 'React JS', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Next.js', icon: 'fas fa-dot-circle', color: '#FFFFFF' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', customSvg: <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12.001,4.8c-3.208,0-5.245,1.584-6.109,4.751c1.276-1.521,2.839-2.3,4.688-2.338c1.332-0.027,2.278,0.41,3.167,1.207 c1.056,0.947,2.235,2.003,5.08,2.003c3.208,0,5.245-1.584,6.109-4.751c-1.276,1.521-2.839,2.3-4.688,2.338 c-1.332,0.027-2.278-0.41-3.167-1.207C16.024,5.857,14.846,4.8,12.001,4.8z M5.892,10.519c-3.208,0-5.245,1.584-6.109,4.751 c1.276-1.521,2.839-2.3,4.688-2.338c1.332-0.027,2.278,0.41,3.167,1.207c1.056,0.947,2.235,2.003,5.08,2.003 c3.208,0,5.245-1.584,6.109-4.751c-1.276,1.521-2.839,2.3-4.688,2.338c-1.332,0.027-2.278-0.41-3.167-1.207 C9.915,11.577,8.737,10.519,5.892,10.519z"/></svg>, color: '#38B2AC' },
    { name: 'GSAP', icon: 'fas fa-magic', color: '#88CE02' },
];

const backendSkills = [
    { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
    { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20' },
    { name: 'CodeIgniter', icon: 'fas fa-fire', color: '#EF4223' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Express.js', icon: 'fas fa-server', color: '#FFFFFF' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'Golang', icon: 'fab fa-golang', color: '#00ADD8' },
    { name: 'Supabase', icon: 'fas fa-database', color: '#3ECF8E' },
    { name: 'Prisma', icon: 'fas fa-layer-group', color: '#2D3748' },
    { name: 'Drizzle ORM', icon: 'fas fa-tint', color: '#C5F74F' },
    { name: 'Git & GitHub', icon: 'fab fa-git-alt', color: '#F05032' },
];

const roles = ["UI/UX", "FRONT END DEVELOPER", "BACK END DEVELOPER", "FULL STACK DEVELOPER", "AI AUTOMATION"];

const TechSkills = () => {
    const { t } = useLanguage();
    const statsRef = useRef();

    const statsData = [
        { value: 80, suffix: "+", label: t('tech.stats_clients') },
        { value: 100, suffix: "+", label: t('tech.stats_projects') },
        { value: 3, suffix: "+", label: t('tech.stats_years') },
        { value: 15, suffix: "+", label: t('tech.stats_stacks') },
        { value: 999, suffix: "+", label: t('tech.stats_bugs') }
    ];

    useGSAP(() => {
        const numbers = gsap.utils.toArray('.stat-number');
        
        numbers.forEach((num) => {
            const target = parseFloat(num.getAttribute('data-target'));
            
            gsap.fromTo(num, 
                { innerHTML: 0 },
                {
                    innerHTML: target,
                    duration: 2.5,
                    ease: "power3.out",
                    snap: { innerHTML: 1 }, 
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }, { scope: statsRef, dependencies: [t] });

    return (
        <section id="tech-skills" className="tech-skills">
            <div className="section-header">
                <h2>{t('tech.title')} <span>{t('tech.subtitle')}</span></h2>
            </div>
            
            <div className="marquee-container">
                {/* Baris Atas: Frontend */}
                <div className="marquee-track marquee-left">
                    {[...frontendSkills, ...frontendSkills].map((skill, index) => (
                        <div className="skill-badge" key={`fe-${index}`}>
                            {skill.customSvg ? (
                                <span style={{ color: skill.color, display: "inline-flex", alignItems: "center", fontSize: "1.2em", marginRight: "8px" }}>
                                    {skill.customSvg}
                                </span>
                            ) : (
                                <i className={skill.icon} style={{ color: skill.color }}></i>
                            )}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
                
                {/* Baris Bawah: Backend & Tools */}
                <div className="marquee-track marquee-right" style={{ marginTop: '2rem' }}>
                    {[...backendSkills, ...backendSkills].map((skill, index) => (
                        <div className="skill-badge" key={`be-${index}`}>
                            {skill.customSvg ? (
                                <span style={{ color: skill.color, display: "inline-flex", alignItems: "center", fontSize: "1.2em", marginRight: "8px" }}>
                                    {skill.customSvg}
                                </span>
                            ) : (
                                <i className={skill.icon} style={{ color: skill.color }}></i>
                            )}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Counter Section */}
            <div className="stats-container" ref={statsRef}>
                {statsData.map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <h3 className="stat-value">
                            <span className="stat-number" data-target={stat.value}>0</span>
                            <span className="stat-suffix">{stat.suffix}</span>
                        </h3>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Roles Marquee Section */}
            <div className="roles-marquee-container" style={{ marginTop: '8rem', paddingBottom: '2rem' }}>
                <div className="marquee-track marquee-left">
                    {[...roles, ...roles, ...roles, ...roles].map((role, index) => (
                        <div className="role-item" key={`role-${index}`}>
                            <span>{role}</span>
                            <span className="role-separator">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSkills;
