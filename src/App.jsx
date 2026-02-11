import React, { useState, useEffect } from 'react';
import {
    Briefcase,
    ClipboardList,
    Settings,
    Lightbulb,
    ArrowRight,
    Mail,
    Linkedin,
    Puzzle,
    PieChart,
    MessageCircle,
    Users,
    CheckCircle2,
    CalendarCheck,
    Wrench,
    Network,
    ShieldCheck,
    Globe,
    Database,
    Rocket,
    Anchor,
    Zap,
    Bot,
    Calculator,
    FileSpreadsheet,
    Award,
    Code2,
    Mic2,
    BookOpen,
    Video
} from 'lucide-react';

import AccountingSection from './components/AccountingSection';
import BusinessSection from './components/BusinessSection';
import BlogSection from './components/BlogSection';
import CoursesSection from './components/CoursesSection';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [scrolled, setScrolled] = useState(false);
    const [audience, setAudience] = useState('business'); // 'business' | 'accounting'
    const [view, setView] = useState('home'); // 'home' | 'blog' | 'courses' | 'admin'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        alert(`Consulta recibida de ${formData.name}. Vamos a simplificar tu tecnología.`);

        // Create mailto link as fallback/feature
        const subject = `Consulta de ${formData.name} (${audience === 'business' ? 'Empresa' : 'Estudio Contable'})`;
        const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\nEmpresa: ${formData.company || 'N/A'}\nAudience: ${audience}\n\nMensaje:\n${formData.message}`;
        window.location.href = `mailto:martin@mentorfuncional.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setFormData({ name: '', email: '', company: '', message: '' });
    };

    const tools = [
        "Odoo", "Xubio", "SOS Contador", "Asana", "Monday", "AirTable", "ClickUp", "Notion"
    ];

    const handleLogoClick = () => {
        setView('home');
        window.scrollTo(0, 0);
    };

    const handleAudienceSwitch = (newAudience) => {
        setAudience(newAudience);
        setView('home');
    };

    return (
        <div className="min-h-screen bg-[#0f172a] font-sans text-slate-200 selection:bg-indigo-500/30">

            {/* Navbar */}
            {view !== 'admin' && (
                <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
                    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                        <div className="flex items-center gap-2 group cursor-pointer" onClick={handleLogoClick}>
                            <div className="bg-indigo-600 p-2 rounded-lg">
                                <Lightbulb className="text-white w-5 h-5" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Mentor<span className="text-indigo-400">.Funcional</span>
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                            <button
                                onClick={() => handleAudienceSwitch('business')}
                                className={`text-sm font-medium transition-colors ${view === 'home' && audience === 'business' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'}`}
                            >
                                Empresas
                            </button>
                            <button
                                onClick={() => handleAudienceSwitch('accounting')}
                                className={`text-sm font-medium transition-colors ${view === 'home' && audience === 'accounting' ? 'text-brand-warm font-bold' : 'text-slate-300 hover:text-white'}`}
                            >
                                Estudios Contables
                            </button>

                            <div className="h-4 w-px bg-slate-700 mx-2"></div>

                            {view === 'home' && (
                                <>
                                    <a href={audience === 'business' ? "#soluciones" : "#mentoria"} className="hover:text-white transition-colors">
                                        {audience === 'business' ? "¿Cómo ayudo?" : "El Método"}
                                    </a>
                                    <a href={audience === 'business' ? "#herramientas" : "#automatizacion"} className="hover:text-white transition-colors">
                                        {audience === 'business' ? "Stack" : "Tecnología"}
                                    </a>
                                    {audience === 'business' && (
                                        <a href="#only-one" className="hover:text-indigo-400 font-bold transition-colors">
                                            Only One
                                        </a>
                                    )}
                                </>
                            )}

                            <button
                                onClick={() => setView('courses')}
                                className={`text-sm font-medium transition-colors flex items-center gap-1 ${view === 'courses' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'}`}
                            >
                                <Video size={16} /> Cursos
                            </button>

                            <button
                                onClick={() => setView('blog')}
                                className={`text-sm font-medium transition-colors flex items-center gap-1 ${view === 'blog' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'}`}
                            >
                                <BookOpen size={16} /> Blog
                            </button>

                            <a href="#contacto" className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all font-semibold shadow-lg shadow-indigo-900/20">
                                Hablemos
                            </a>
                            <a
                                href="https://calendar.app.google/KiEKGw6SHJNFMPbA8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-indigo-900 px-5 py-2 rounded-lg hover:bg-slate-100 transition-all font-bold shadow-md flex items-center gap-2"
                            >
                                <CalendarCheck size={18} /> Agendar Cita
                            </a>
                        </div>
                    </div>
                </nav>
            )}

            {view === 'blog' ? (
                <BlogSection onBack={() => setView('home')} />
            ) : view === 'courses' ? (
                <CoursesSection onBack={() => setView('home')} />
            ) : view === 'admin' ? (
                <AdminDashboard onLogout={() => setView('home')} />
            ) : (
                <>
                    {audience === 'business' ? (
                        <BusinessSection tools={tools} />
                    ) : (
                        <AccountingSection />
                    )}

                    {/* Quien Soy - Bio Section */}
                    <section id="bio" className="py-24 bg-[#0f172a] relative">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/10 to-transparent"></div>
                        <div className="max-w-7xl mx-auto px-6 relative z-10">
                            <div className="flex flex-col md:flex-row gap-16 items-center">
                                <div className="w-full md:w-1/3">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>
                                        <img
                                            src="/martin.jpg"
                                            alt="Martín Zanello"
                                            width="400"
                                            height="400"
                                            className="relative w-full aspect-square object-cover rounded-2xl border-2 border-slate-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                                            onDoubleClick={() => setView('admin')} // Secret admin entry
                                            title="Martín Zanello"
                                        />
                                        <div className="absolute -bottom-6 -right-6 bg-[#1e293b] p-4 rounded-xl border border-slate-700 shadow-xl">
                                            <p className="text-indigo-400 font-bold text-lg">CPCESFE CAM II</p>
                                            <p className="text-slate-500 text-xs">Matriculado</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h2 className="text-4xl font-bold text-white mb-2">Martín Zanello</h2>
                                    <p className="text-xl text-indigo-400 font-medium mb-6">Contador Público & Especialista en Transformación Digital</p>

                                    <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                                        Soy un híbrido entre las finanzas y el código. Con base sólida en <strong>Auditoría e Impuestos</strong>, viré mi carrera hacia la tecnología para resolver los problemas que sufrí como contador.
                                        Hoy lidero implementaciones de <strong>Odoo ERP</strong> y ayudo a empresas a dejar de pelear con sus sistemas.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-[#1e293b]/50 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
                                            <div className="bg-indigo-500/10 w-10 h-10 flex items-center justify-center rounded-lg text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                                                <Briefcase size={20} />
                                            </div>
                                            <h4 className="font-bold text-white mb-2">Trayectoria Real</h4>
                                            <p className="text-slate-400 text-sm">
                                                Socio Fundador de <strong>Nova Cool SRL</strong> (2011) y <strong>Be Only One</strong> (2024). Sé lo que es pagar sueldos y gestionar un negocio.
                                            </p>
                                        </div>

                                        <div className="bg-[#1e293b]/50 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
                                            <div className="bg-emerald-500/10 w-10 h-10 flex items-center justify-center rounded-lg text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                                <Award size={20} />
                                            </div>
                                            <h4 className="font-bold text-white mb-2">Formación de Elite</h4>
                                            <p className="text-slate-400 text-sm">
                                                MBA (EUDE Madrid), Master en Metodologías Ágiles (Tech México). Certificado en <strong>Google Data Analytics</strong> y <strong>UI Path</strong>.
                                            </p>
                                        </div>

                                        <div className="bg-[#1e293b]/50 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
                                            <div className="bg-blue-500/10 w-10 h-10 flex items-center justify-center rounded-lg text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                                <Code2 size={20} />
                                            </div>
                                            <h4 className="font-bold text-white mb-2">Tech Stack</h4>
                                            <p className="text-slate-400 text-sm">
                                                Experto en <strong>Odoo</strong> (V15/16). Python para automatización, Power BI y SQL. No toco de oído.
                                            </p>
                                        </div>

                                        <div className="bg-[#1e293b]/50 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
                                            <div className="bg-purple-500/10 w-10 h-10 flex items-center justify-center rounded-lg text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                                                <Mic2 size={20} />
                                            </div>
                                            <h4 className="font-bold text-white mb-2">Speaker</h4>
                                            <p className="text-slate-400 text-sm">
                                                Disertante en Consejos Profesionales sobre <strong>IA, RPA y Agilidad</strong> en la profesión contable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Capacitación y Transferencia */}
                    {audience === 'business' && (
                        <section className="py-24 bg-[#0f172a]">
                            <div className="max-w-7xl mx-auto px-6 text-center">
                                <h2 className="text-3xl font-bold text-white mb-12">Te dejo todo funcionando (y te enseño a usarlo)</h2>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { icon: <Settings />, title: "Implementación", desc: "Configuro el software a la medida de TU flujo." },
                                        { icon: <Puzzle />, title: "Automatización", desc: "Conecto tu web con tu facturación o tu email." },
                                        { icon: <Users />, title: "Capacitación", desc: "Talleres prácticos para ti y tus empleados." },
                                        { icon: <CalendarCheck />, title: "Seguimiento", desc: "No desaparezco. Acompaño la puesta en marcha." }
                                    ].map((card, i) => (
                                        <div key={i} className="p-6 bg-[#1e293b]/50 rounded-xl border border-slate-800 text-left">
                                            <div className="bg-indigo-500/10 w-10 h-10 flex items-center justify-center rounded-lg text-indigo-400 mb-4">
                                                {card.icon}
                                            </div>
                                            <h4 className="font-bold text-white mb-2">{card.title}</h4>
                                            <p className="text-slate-400 text-sm">{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Contact Section */}
                    <section id="contacto" className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
                        <div className="max-w-3xl mx-auto px-6">
                            <div className="bg-[#0f172a] p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl text-center">
                                <h2 className="text-3xl font-bold text-white mb-4">¿Tomamos un café y miramos tus procesos?</h2>
                                <p className="text-slate-400 mb-8">
                                    Cuéntame qué te está quitando el sueño en tu negocio. La primera charla de diagnóstico es sin compromiso.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-slate-400 mb-1 block">Tu Nombre</label>
                                            <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-indigo-500 outline-none" placeholder="Ej: Martín Gómez" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-slate-400 mb-1 block">Tu Email</label>
                                            <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-indigo-500 outline-none" placeholder="martin@tuempresa.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-400 mb-1 block">Tu Empresa (Opcional)</label>
                                        <input name="company" value={formData.company} onChange={handleChange} type="text" className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-indigo-500 outline-none" placeholder="Ej: Tu Empresa S.A." />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-400 mb-1 block">¿Qué necesitas mejorar hoy?</label>
                                        <textarea required name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-indigo-500 outline-none" placeholder="Ej: Pierdo mucho tiempo facturando, mi stock no cuadra, quiero digitalizar mis pedidos..."></textarea>
                                    </div>
                                    <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                                        Solicitar Diagnóstico
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Simple Footer */}
            {view !== 'admin' && (
                <footer className="py-12 bg-[#0f172a] border-t border-slate-800 text-center">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-white font-bold text-lg mb-2">Mentor.Funcional</p>
                        <p className="text-slate-500 text-sm mb-6">Consultoría IT honesta y práctica para negocios que quieren crecer.</p>
                        <div className="flex justify-center gap-6 text-slate-400">
                            <a href="#" className="hover:text-white" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-white" aria-label="Email"><Mail size={20} /></a>
                        </div>
                        <p className="text-slate-600 text-xs mt-8">© {new Date().getFullYear()} Mentoría Funcional. Todos los derechos reservados.</p>
                    </div>
                </footer>
            )}

            {/* WhatsApp Button */}
            {view !== 'admin' && (
                <a
                    href="https://wa.me/543416968999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center justify-center"
                    title="Hablemos por WhatsApp"
                    aria-label="Contactar por WhatsApp"
                >
                    <MessageCircle size={32} />
                </a>
            )}

        </div>
    );
};

export default App;
