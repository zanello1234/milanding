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
    FileSpreadsheet
} from 'lucide-react';

const App = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [scrolled, setScrolled] = useState(false);

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
        const subject = `Consulta de ${formData.name}`;
        const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\nEmpresa: ${formData.company || 'N/A'}\n\nMensaje:\n${formData.message}`;
        window.location.href = `mailto:martin@mentorfuncional.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setFormData({ name: '', email: '', company: '', message: '' });
    };

    const tools = [
        "Odoo", "Xubio", "SOS Contador", "Asana", "Monday", "AirTable", "ClickUp", "Notion"
    ];

    return (
        <div className="min-h-screen bg-[#0f172a] font-sans text-slate-200 selection:bg-indigo-500/30">

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <Lightbulb className="text-white w-5 h-5" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">
                            Mentor<span className="text-indigo-400">.Funcional</span>
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                        <a href="#soluciones" className="hover:text-white transition-colors">¿Cómo ayudo?</a>
                        <a href="#herramientas" className="hover:text-white transition-colors">Stack</a>
                        <a href="#ia" className="hover:text-indigo-400 transition-colors font-bold flex items-center gap-1"><Zap size={14} /> IA</a>
                        <a href="#contacto" className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all font-semibold shadow-lg shadow-indigo-900/20">
                            Hablemos
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section: Realista y Directo */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Background sutil */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-[#0f172a]/80"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold">
                            <Briefcase className="w-4 h-4" /> Consultoría para Empresas Reales
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                            La tecnología tiene que <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                                resolver problemas
                            </span>, <br />
                            no crearlos.
                        </h1>
                        <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                            Soy <strong>Contador y Experto en Sistemas</strong>. No te voy a hablar solo de código. Entiendo tus números, ordeno tu contabilidad y elijo el software que tu empresa realmente necesita para ser rentable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contacto" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all text-center">
                                Quiero ordenar mi negocio
                            </a>
                            <a href="#soluciones" className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-all text-center flex items-center justify-center gap-2">
                                Ver servicios <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Visual: Dashboard de Negocio (No técnico) */}
                    <div className="relative hidden lg:block">
                        <div className="absolute top-10 right-10 w-full h-full bg-indigo-600/20 rounded-2xl blur-3xl -z-10"></div>
                        <div className="bg-[#1e293b] border border-slate-700 rounded-xl shadow-2xl overflow-hidden p-6 space-y-6">
                            <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                                    <PieChart className="text-indigo-400" /> Estado Contable
                                </h3>
                                <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Al día</span>
                            </div>

                            {/* Métricas simples de negocio */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                    <p className="text-xs text-slate-400 mb-1">Cierre Contable</p>
                                    <p className="text-2xl font-bold text-white">OK <span className="text-xs text-green-400 font-normal"> Automatizado</span></p>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                    <p className="text-xs text-slate-400 mb-1">Errores de Carga</p>
                                    <p className="text-2xl font-bold text-white">0% <span className="text-xs text-indigo-400 font-normal">↓ Eliminados</span></p>
                                </div>
                            </div>

                            {/* Lista de Tareas "Humanas" */}
                            <div className="space-y-3">
                                <p className="text-sm text-slate-400 font-semibold">Mejores Prácticas Activas:</p>
                                <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                    <div className="bg-green-500/20 p-2 rounded text-green-400"><FileSpreadsheet size={18} /></div>
                                    <div className="text-sm">
                                        <p className="text-white">Conciliación Bancaria</p>
                                        <p className="text-slate-500 text-xs">Sincronizada con bancos automáticamente.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                    <div className="bg-blue-500/20 p-2 rounded text-blue-400"><ClipboardList size={18} /></div>
                                    <div className="text-sm">
                                        <p className="text-white">Facturación AFIP/SAT</p>
                                        <p className="text-slate-500 text-xs">Emisión y validación en tiempo real.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Nota adhesiva flotante */}
                        <div className="absolute -bottom-6 -left-6 bg-yellow-100 text-yellow-900 p-4 rounded-lg shadow-lg max-w-[200px] transform rotate-3">
                            <p className="text-sm font-handwriting font-bold">"¡Por fin mi contador y mi sistema se entienden!"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problema / Solución */}
            <section id="soluciones" className="py-24 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Te suena familiar?</h2>
                        <p className="text-slate-400">
                            Muchas empresas compran software caro que nadie usa, o siguen manejando su contabilidad en cuadernos y Excel desordenados.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all">
                            <div className="bg-red-500/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
                                <ClipboardList className="text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Caos Administrativo</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Datos duplicados, facturas perdidas y saldos que no coinciden. La falta de sistema genera pérdidas reales.
                            </p>
                        </div>
                        <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all">
                            <div className="bg-orange-500/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
                                <Puzzle className="text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Herramientas Aisladas</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Tienes un sistema contable, un WhatsApp lleno de mensajes y un Drive desordenado. Nada conecta con nada.
                            </p>
                        </div>
                        <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all">
                            <div className="bg-indigo-500/10 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
                                <Users className="text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Software sin Estrategia</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Usas herramientas potentes como simples máquinas de escribir porque nadie te enseñó las mejores prácticas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Herramientas Favoritas & Desarrollo a Medida */}
            <section id="herramientas" className="py-20 bg-[#1e293b]/60 border-y border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 mb-6 text-indigo-300 font-semibold tracking-wide uppercase text-sm">
                        <Wrench className="w-4 h-4" /> Mis Aliados Tecnológicos
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                        Experto en las plataformas que <br className="hidden md:block" /> <span className="text-indigo-400">lideran el mercado</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
                        {tools.map((tool) => (
                            <div key={tool} className="group px-6 py-4 rounded-2xl bg-[#0f172a] border border-slate-700 hover:border-indigo-500 transition-all duration-300 cursor-default shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
                                <span className="text-slate-300 font-bold text-lg group-hover:text-white">{tool}</span>
                            </div>
                        ))}
                    </div>

                    {/* DESARROLLO A MEDIDA DESTACADO */}
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-indigo-500/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <Settings size={200} />
                        </div>
                        <div className="flex-1 text-left z-10">
                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                                <Wrench className="text-indigo-400" /> ...O la que quieras que te arme
                            </h3>
                            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                Diseño de herramientas mejor adaptadas a tu necesidad. <br className="hidden md:block" />
                                <span className="text-white font-medium">Totalmente web, con seguridad de datos garantizada.</span>
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="flex items-center gap-2 text-sm text-indigo-200 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-500/30">
                                    <Globe size={16} /> Aplicaciones Web
                                </span>
                                <span className="flex items-center gap-2 text-sm text-indigo-200 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-500/30">
                                    <ShieldCheck size={16} /> Seguridad de Datos
                                </span>
                            </div>
                        </div>
                        <div className="shrink-0 z-10 w-full md:w-auto">
                            <button onClick={() => window.location.href = '#contacto'} className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 group">
                                Cotizar Desarrollo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <p className="mt-8 text-slate-500 text-sm italic">
                        *Analizo tu necesidad y elegimos juntos la mejor opción, sin casarnos con ninguna marca.
                    </p>
                </div>
            </section>

            {/* Integración */}
            <section id="integracion" className="py-24 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            {/* Visual representation of connection */}
                            <div className="relative h-72 w-full bg-[#1e293b]/50 rounded-3xl border border-slate-700 flex items-center justify-center overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5"></div>
                                {/* Animated Connection */}
                                <div className="flex items-center gap-4 md:gap-8 relative z-10">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center border border-slate-600 shadow-lg">
                                            <Mail className="w-8 h-8 text-slate-400" />
                                        </div>
                                        <span className="text-xs text-slate-500 font-mono">EMAIL</span>
                                    </div>

                                    <div className="flex-1 w-16 md:w-32 h-1 bg-gradient-to-r from-slate-600 via-indigo-500 to-slate-600 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full bg-white/50 animate-pulse"></div>
                                    </div>

                                    <div className="relative">
                                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-indigo-500/50 z-20 relative animate-pulse">
                                            <Network size={20} />
                                        </div>
                                        <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-40"></div>
                                    </div>

                                    <div className="flex-1 w-16 md:w-32 h-1 bg-gradient-to-r from-slate-600 via-indigo-500 to-slate-600 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full bg-white/50 animate-pulse delay-75"></div>
                                    </div>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center border border-slate-600 shadow-lg">
                                            <Database className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <span className="text-xs text-slate-500 font-mono">STOCK</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                                <Network className="w-4 h-4" /> Integración de Sistemas
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Conecto las herramientas que funcionan de manera aislada.
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                ¿Tu e-commerce no le avisa a tu sistema de stock que vendiste? ¿Tienes que cargar la misma factura en dos lugares?
                                Creo puentes automáticos entre tus aplicaciones para que la información fluya sin errores manuales.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Sincronización en tiempo real
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Eliminación de doble carga de datos
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Centralización de información
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: IA - Turbo vs Carretear */}
            <section id="ia" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#162033] relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-bold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            <Bot className="w-4 h-4" /> Inteligencia Artificial
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Integra la IA en tu empresa
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            La IA es un <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-bold">turbo</span> o un <span className="text-slate-500 font-bold decoration-slate-600 underline decoration-4 underline-offset-4">salvavidas de plomo</span> si no la sabes usar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Card: Carreteando */}
                        <div className="group relative p-8 rounded-3xl border border-slate-700 bg-[#1e293b]/50 overflow-hidden hover:border-slate-600 transition-all">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Anchor size={120} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-400 mb-2 flex items-center gap-2">
                                    <Anchor className="text-slate-500" /> Sigues Carreteando
                                </h3>
                                <p className="text-slate-500 mb-6 italic">
                                    "Mientras la competencia está en modo turbo, vos seguís en pista."
                                </p>
                                <ul className="space-y-4 border-t border-slate-700/50 pt-6">
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <span className="text-red-400 text-xl">×</span> Respondiendo preguntas frecuentes manualmente.
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <span className="text-red-400 text-xl">×</span> Analizando datos con la intuición, no con evidencia.
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <span className="text-red-400 text-xl">×</span> Redactando emails repetitivos uno por uno.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card: Modo Turbo */}
                        <div className="group relative p-8 rounded-3xl border border-indigo-500/50 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 overflow-hidden shadow-2xl shadow-indigo-900/20 hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity animate-pulse">
                                <Rocket size={120} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Zap className="text-yellow-400 fill-yellow-400" /> Modo Turbo
                                </h3>
                                <p className="text-indigo-200 mb-6 font-medium">
                                    Acelera procesos y libera a tu equipo para lo importante.
                                </p>
                                <ul className="space-y-4 border-t border-indigo-500/30 pt-6">
                                    <li className="flex items-start gap-3 text-white">
                                        <CheckCircle2 className="text-green-400 w-5 h-5 mt-1 shrink-0" /> Chatbots que cierran ventas 24/7.
                                    </li>
                                    <li className="flex items-start gap-3 text-white">
                                        <CheckCircle2 className="text-green-400 w-5 h-5 mt-1 shrink-0" /> Generación automática de contenido y reportes.
                                    </li>
                                    <li className="flex items-start gap-3 text-white">
                                        <CheckCircle2 className="text-green-400 w-5 h-5 mt-1 shrink-0" /> Predicción de demanda y quiebres de stock.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mi Propuesta de Valor: CONTADOR EXPERTO */}
            <section id="metodologia" className="py-24 bg-[#1e293b] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                            <Calculator className="w-4 h-4" /> Contador + Sistemas
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Hablo tu idioma: Números y Tecnología.
                        </h2>
                        <p className="text-slate-400 mb-6 text-lg">
                            Más que un consultor IT, soy un <strong>Contador Experto en Sistemas</strong>.
                            Entiendo que la tecnología no sirve si no impacta en tu rentabilidad.
                        </p>
                        <p className="text-slate-400 mb-8 text-lg">
                            Puedo poner tu contabilidad en orden, auditar tus procesos administrativos y enseñarte las <strong>mejores prácticas</strong> de gestión con el software líder del mercado.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Orden contable y administrativo automatizado.",
                                "Auditoría de procesos para eliminar errores.",
                                "Implementación de mejores prácticas de gestión.",
                                "Capacitación en software contable y ERPs."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        {/* Imagen más realista: Personas trabajando */}
                        <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                alt="Reunión de trabajo"
                                className="w-full opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1e293b] to-transparent h-24"></div>
                        </div>
                        {/* Tarjeta flotante */}
                        <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                            <p className="text-white font-bold text-lg mb-1">"Resultados Tangibles"</p>
                            <p className="text-indigo-200 text-sm">Menos tiempo en planillas, más tiempo haciendo crecer tu empresa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capacitación y Transferencia */}
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

            {/* Simple Footer */}
            <footer className="py-12 bg-[#0f172a] border-t border-slate-800 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-white font-bold text-lg mb-2">Mentor.Funcional</p>
                    <p className="text-slate-500 text-sm mb-6">Consultoría IT honesta y práctica para negocios que quieren crecer.</p>
                    <div className="flex justify-center gap-6 text-slate-400">
                        <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-white"><Mail size={20} /></a>
                    </div>
                    <p className="text-slate-600 text-xs mt-8">© {new Date().getFullYear()} Mentoría Funcional. Todos los derechos reservados.</p>
                </div>
            </footer>

        </div>
    );
};

export default App;
