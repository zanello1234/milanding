import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Doughnut, Radar } from 'react-chartjs-2';
import { Check, CheckCircle2 } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

const AccountingSection = () => {
    const [staff, setStaff] = useState(12);
    const hourlyCost = 25; // USD
    const lossPct = 0.25; // 25% of time lost

    const totalLoss = Math.round(staff * hourlyCost * 160 * lossPct);

    // Data for Doughnut Chart
    const lossData = {
        labels: ['Productividad Real', 'Pérdida por Desintegración'],
        datasets: [
            {
                data: [100 - (lossPct * 100), lossPct * 100],
                backgroundColor: ['#4f46e5', '#f59e0b'],
                borderWidth: 0,
            },
        ],
    };

    const lossOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },
        },
        cutout: '70%',
    };

    // Data for Radar Chart
    const radarData = {
        labels: ['Gestión Tareas', 'DMS / Archivos', 'Costo Mensual', 'Facilidad de Uso', 'Automatización'],
        datasets: [
            {
                label: 'Odoo',
                data: [50, 90, 40, 40, 80],
                backgroundColor: 'rgba(148, 163, 184, 0.2)',
                borderColor: '#94a3b8',
                borderWidth: 1,
            },
            {
                label: 'ClickUp/Asana',
                data: [95, 75, 90, 85, 90],
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderColor: '#4f46e5',
                borderWidth: 2,
            },
        ],
    };

    const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { display: false },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: { display: false },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
        },
        plugins: {
            legend: { position: 'bottom' },
        },
    };

    return (
        <div className="bg-brand-bg text-slate-900 font-sans selection:bg-brand-accent/30">

            {/* Header / Hero of Section */}
            <div className="pt-20 pb-16 px-6 text-center border-t border-slate-200">
                <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-2 block">Soluciones para Estudios Contables</span>
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-dark leading-tight mb-6">
                    El Centro de Operaciones <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Definitivo</span>
                </h2>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                    Implementamos un ecosistema digital integrado. Centraliza archivos, tareas y comunicación en una sola fuente de verdad para equipos dispersos.
                </p>
            </div>

            {/* Section: The Problem & Calculator */}
            <section id="diagnostico" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-accent font-bold tracking-widest text-xs uppercase">El Desafío</span>
                            <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-slate-dark">La Ineficiencia de la Desintegración</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Hoy, tu documentación está en correos, tus tareas en la cabeza del equipo y tus archivos dispersos en servidores locales o carpetas sueltas de Drive. Esta falta de un **Centro de Operaciones** genera:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start space-x-3">
                                    <span className="text-red-500 font-bold">✕</span>
                                    <span className="text-sm text-gray-700"><strong>Dispersión de Archivos:</strong> Horas perdidas buscando el último PDF enviado por el cliente.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-red-500 font-bold">✕</span>
                                    <span className="text-sm text-gray-700"><strong>Vencimientos en Riesgo:</strong> Falta de visibilidad centralizada de las obligaciones impositivas.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-red-500 font-bold">✕</span>
                                    <span className="text-sm text-gray-700"><strong>Equipos Ciegos:</strong> Miembros que no saben qué está haciendo el otro, duplicando esfuerzos.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-brand-bg p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-center text-slate-700">Calculadora de Impacto Operativo</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Miembros del Equipo</label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="50"
                                        value={staff}
                                        onChange={(e) => setStaff(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                                    />
                                    <div className="flex justify-between text-xs mt-2 font-bold text-brand-accent">
                                        <span>{staff} colaboradores</span>
                                    </div>
                                </div>
                                <div className="h-[250px] relative">
                                    <Doughnut data={lossData} options={lossOptions} />
                                </div>
                                <div className="text-center pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase">Pérdida estimada en Productividad/Mes</p>
                                    <p className="text-3xl font-extrabold text-slate-dark mt-1">${totalLoss.toLocaleString()} USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Comparison */}
            <section id="comparativa" className="py-20 bg-brand-bg">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-dark">Análisis de Soluciones</h2>
                        <p className="mt-4 text-gray-500">¿Cuál es el software que mejor se adapta a un estudio contable moderno?</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Comparative Table UI */}
                        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="pb-4 font-bold text-xs text-gray-400 uppercase">Software</th>
                                            <th className="pb-4 font-bold text-xs text-gray-400 uppercase text-center">Gestión Tareas</th>
                                            <th className="pb-4 font-bold text-xs text-gray-400 uppercase text-center">Robustez DMS</th>
                                            <th className="pb-4 font-bold text-xs text-gray-400 uppercase text-center">Costo/Beneficio</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        <tr className="group hover:bg-gray-50 transition">
                                            <td className="py-4">
                                                <div className="font-bold text-slate-dark">Odoo</div>
                                                <div className="text-xs text-gray-400 italic">ERP Completo</div>
                                            </td>
                                            <td className="py-4 text-center text-sm">Rígido</td>
                                            <td className="py-4 text-center text-sm">Alto</td>
                                            <td className="py-4 text-center text-sm text-red-400">Medio</td>
                                        </tr>
                                        <tr className="group hover:bg-gray-50 transition">
                                            <td className="py-4">
                                                <div className="font-bold text-slate-dark">Airtable</div>
                                                <div className="text-xs text-gray-400 italic">Base de Datos</div>
                                            </td>
                                            <td className="py-4 text-center text-sm">Manual</td>
                                            <td className="py-4 text-center text-sm">Medio</td>
                                            <td className="py-4 text-center text-sm text-yellow-500">Bueno</td>
                                        </tr>
                                        <tr className="bg-indigo-50/50">
                                            <td className="py-4 pl-2">
                                                <div className="font-bold text-brand-accent">ClickUp / Asana</div>
                                                <div className="text-xs text-brand-accent italic font-semibold">Task Manager Puro</div>
                                            </td>
                                            <td className="py-4 text-center text-sm font-bold">Máximo</td>
                                            <td className="py-4 text-center text-sm font-bold">Integrado</td>
                                            <td className="py-4 text-center text-sm text-brand-accent font-bold">Excelente</td>
                                        </tr>
                                        <tr className="group hover:bg-gray-50 transition">
                                            <td className="py-4">
                                                <div className="font-bold text-slate-dark">Notion / Monday</div>
                                                <div className="text-xs text-gray-400 italic">Colaboración</div>
                                            </td>
                                            <td className="py-4 text-center text-sm">Variable</td>
                                            <td className="py-4 text-center text-sm">Variable</td>
                                            <td className="py-4 text-center text-sm text-blue-500">Bueno</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-8 bg-slate-dark text-white p-6 rounded-2xl">
                                <p className="text-sm leading-relaxed">
                                    <span className="text-brand-secondary font-bold">Recomendación:</span> El uso de <strong>Task Managers (Asana/ClickUp) + Google Workspace</strong> ofrece la mayor agilidad operativa. Odoo es potente pero excesivamente rígido para la gestión de vencimientos ad-hoc y comunicación con clientes dispersos.
                                </p>
                            </div>
                        </div>

                        {/* Radar Chart */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-center">
                            <h3 className="font-bold text-center mb-6 text-slate-700">Equilibrio Funcional</h3>
                            <div className="h-[300px]">
                                <Radar data={radarData} options={radarOptions} />
                            </div>
                            <p className="text-[10px] text-gray-400 mt-4 text-center uppercase tracking-widest">Capacidad DMS vs Tareas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: The Mentorship (3 Pillars) */}
            <section id="mentoria" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brand-accent font-bold tracking-widest text-xs uppercase">Metodología</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-dark">Mentoría de Implementación</h2>
                        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Transformamos la forma de trabajar de tu estudio a través de un acompañamiento integral de 8 semanas.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="group hover:-translate-y-2 transition-transform duration-300 bg-brand-bg p-8 rounded-3xl border border-transparent hover:border-brand-accent shadow-sm flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold italic">01</div>
                            <h3 className="text-xl font-bold mb-4 text-slate-dark">Definición del Ecosistema DigitaL</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Seleccionamos y configuramos el "Stack" tecnológico. Establecemos a Google Workspace como el núcleo documental (DMS) y al Task Manager como el motor de procesos. Definimos roles, permisos y jerarquías de acceso.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="group hover:-translate-y-2 transition-transform duration-300 bg-brand-bg p-8 rounded-3xl border border-transparent hover:border-brand-secondary shadow-sm flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold italic">02</div>
                            <h3 className="text-xl font-bold mb-4 text-slate-dark">Auditoría de Procesos</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Mapeamos cada tarea contable (IVA, Ganancias, Sueldos). Identificamos cuellos de botella en la recepción de documentación y rediseñamos los flujos para que la información fluya sin intervención manual innecesaria.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="group hover:-translate-y-2 transition-transform duration-300 bg-brand-bg p-8 rounded-3xl border border-transparent hover:border-brand-warm shadow-sm flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-warm/10 text-brand-warm rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold italic">03</div>
                            <h3 className="text-xl font-bold mb-4 text-slate-dark">Capacitación y Adopción</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                No entregamos software, entregamos autonomía. Entrenamos a los socios y colaboradores en el uso de las herramientas, estableciendo una cultura de "Cero Email Interno" y gestión basada en tareas medibles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Automation & Tech */}
            <section id="automatizacion" className="py-20 bg-slate-dark text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Automatización Avanzada</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Para cubrir los huecos que el software estándar no resuelve, implementamos una capa de inteligencia operativa:
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-accent p-2 rounded-lg">⚡</div>
                                    <div>
                                        <h4 className="font-bold text-white">Make / N8n</h4>
                                        <p className="text-sm text-gray-400">Integración de flujos. Si un cliente sube un archivo a una carpeta, se crea automáticamente una tarea y se notifica al contador asignado.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-secondary p-2 rounded-lg">🐍</div>
                                    <div>
                                        <h4 class="font-bold text-white">Python & Vibe Coding</h4>
                                        <p className="text-sm text-gray-400">Usamos scripts personalizados para procesar datos complejos, renombrar archivos masivamente según normativa o extraer datos de balances automáticamente.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-warm p-2 rounded-lg">🤖</div>
                                    <div>
                                        <h4 className="font-bold text-white">UIPath (RPA)</h4>
                                        <p className="text-sm text-gray-400">Bots que ingresan a portales fiscales para descargar facturas y comprobantes sin intervención humana.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-bold mb-6 text-brand-secondary">Visión de Integración</h3>
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm">Cliente envía documentación</span>
                                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Webhook</span>
                                </div>
                                <div className="flex items-center justify-center py-2 text-brand-accent">↓</div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm">IA Clasifica y Renombra</span>
                                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Python</span>
                                </div>
                                <div className="flex items-center justify-center py-2 text-brand-accent">↓</div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm">Archivo guardado en Drive</span>
                                    <span class="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">DMS Core</span>
                                </div>
                                <div className="flex items-center justify-center py-2 text-brand-accent">↓</div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm">Tarea creada en ClickUp/Asana</span>
                                    <span class="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Task Hub</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AccountingSection;
