import React from 'react';
import {
    Brain,
    Code2,
    Workflow,
    Link,
    Bot,
    FileSpreadsheet,
    Database,
    Users,
    ArrowRight,
    Search
} from 'lucide-react';

const AccountingSection = () => {
    return (
        <div className="bg-[#0f172a] text-slate-200 font-sans selection:bg-indigo-500/30">

            {/* Hero Section */}
            <section className="relative pt-20 pb-20 px-6 text-center overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
                        <Search className="w-4 h-4" /> No busques "El Sistema Perfecto"
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        Tu Estudio no necesita una solución mágica. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Necesita un Project Manager.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Deja de buscar el "software que hace todo". No existe.
                        La realidad es que necesitas orquestar miles de combinaciones posibles para armar <strong>TU propio ecosistema</strong>.
                    </p>
                </div>
            </section>

            {/* El Problema Real (Coloquial) */}
            <section className="py-20 bg-[#1e293b]/50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">La mentira del "All in One"</h2>
                        <div className="space-y-6 text-lg text-slate-400">
                            <p>
                                Seguro te pasó: compraste un sistema carísimo que prometía resolverte la vida, y terminaste usándolo como una máquina de escribir glorificada.
                            </p>
                            <p>
                                <span className="text-white font-bold">La realidad de tu estudio hoy:</span>
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <FileSpreadsheet className="text-red-400 shrink-0 mt-1" />
                                    <span>Excels por todos lados. Planillas que "controlan" a otras planillas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Database className="text-red-400 shrink-0 mt-1" />
                                    <span>Sistemas desconectados. Cargas la factura en Afip, en el sistema de gestión y en el Excel.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Users className="text-red-400 shrink-0 mt-1" />
                                    <span>Procesos en la cabeza de la gente, no en el sistema. Si se va Juan, se lleva el 'know-how'.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-700 relative">
                        {/* Visual abstract of chaos */}
                        <div className="absolute -top-4 -right-4 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-bold rotate-6 border border-red-500/30">
                            ¡Basta de parches!
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Lo que propongo es distinto:</h3>
                        <p className="text-slate-400 mb-6">
                            No vengo a venderte una licencia. Vengo a trabajar con vos en una <strong>Mentoría de Procesos</strong>.
                        </p>
                        <p className="text-slate-400 mb-6">
                            Vamos a entender qué haces, cómo lo haces, y recién ahí vemos qué tecnología aplica. Es una búsqueda, un aprendizaje.
                        </p>
                        <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-200 text-sm">
                            "Aprendemos haciendo. No es una solución 'Out of the Box', es un traje a medida."
                        </div>
                    </div>
                </div>
            </section>

            {/* Los 5 Pilares */}
            <section className="py-24 bg-[#0f172a] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Los 5 Pilares de la Transformación</h2>
                        <p className="text-slate-400">
                            No es solo "poner un sistema". Es cambiar el mindset del estudio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Pilar 1: IA */}
                        <div className="group p-8 bg-[#1e293b] rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <Bot size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">1. Formación en IA</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Dejemos de tenerle miedo o adorarla. La IA es una herramienta. Te enseño a usarla para redactar, resumir normas, y analizar datos, pero con criterio profesional.
                            </p>
                        </div>

                        {/* Pilar 2: Apps Propias */}
                        <div className="group p-8 bg-[#1e293b] rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Code2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">2. Desarrollo Propio</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                A veces el mercado no tiene lo que necesitas. Desarrollamos micro-aplicaciones a medida para esos "huecos" que ningún enlatado cubre.
                            </p>
                        </div>

                        {/* Pilar 3: Flujos */}
                        <div className="group p-8 bg-[#1e293b] rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <Workflow size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">3. Capacitación de Flujo</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Antes de automatizar, hay que ordenar. Definimos el "quién, cómo y cuándo" de cada papel que entra al estudio. Si el flujo es malo, la automatización solo lo acelera.
                            </p>
                        </div>

                        {/* Pilar 4: Automatizaciones */}
                        <div className="group p-8 bg-[#1e293b] rounded-2xl border border-slate-700 hover:border-orange-500 transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">4. Automatizaciones</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Robots para lo aburrido. Descarga de comprobantes, control de vencimientos, envío de recordatorios. Que las máquinas hagan el trabajo sucio.
                            </p>
                        </div>

                        {/* Pilar 5: Conexiones */}
                        <div className="group lg:col-span-2 p-8 bg-[#1e293b] rounded-2xl border border-slate-700 hover:border-purple-500 transition-all hover:-translate-y-1 flex flex-col md:flex-row gap-6 items-start">
                            <div className="shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Link size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">5. Conexiones (APIs & Webhooks)</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    Aquí está la magia real. Hacemos que tus sistemas "hablen".
                                    Que el Excel se conecte con el mail, que el mail dispare una tarea en el gestor, y que el gestor te avise por WhatsApp.
                                </p>
                                <div className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-2 rounded border border-purple-500/20 inline-block">
                                    System.Integrate(All);
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        ¿Empezamos el proceso?
                    </h2>
                    <p className="text-slate-400 text-lg mb-8">
                        No te prometo una solución fácil. Te prometo que vamos a ordenar el caos y vas a aprender a dominar tu tecnología, en lugar de que ella te domine a vos.
                    </p>
                    <a href="#contacto" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all font-bold shadow-lg shadow-indigo-900/20">
                        Hablemos de tu Estudio <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default AccountingSection;

