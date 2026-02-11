import React, { useState } from 'react';
import { initialCourses } from '../data/coursesData';
import { Calendar, Video, Users, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';

const CoursesSection = ({ onBack }) => {
    const [courses] = useState(initialCourses);

    return (
        <div className="min-h-screen bg-[#0f172a] font-sans text-slate-200 py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <button
                        onClick={onBack}
                        className="mb-8 text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
                    >
                        ← Volver al inicio
                    </button>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
                        <Video className="w-4 h-4" /> Academia Only One
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Capacitación Real en <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Tecnología de Gestión</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Cursos sincrónicos y asincrónicos para consultores, contadores y dueños de negocio. Sin teoría aburrida, directo a la práctica.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map(course => (
                        <div key={course.id} className="bg-[#1e293b] rounded-2xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col">
                            <div className="h-48 overflow-hidden relative">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-[#0f172a]/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-slate-600">
                                    {course.type}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white leading-tight">{course.title}</h3>
                                </div>
                                <p className="text-slate-400 text-sm mb-6 flex-1">
                                    {course.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                                        <Calendar size={16} className="text-indigo-400" /> {course.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                                        <DollarSign size={16} className="text-green-400" /> {course.price}
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.open(`https://wa.me/543416968999?text=Hola,%20me%20interesa%20inscribirme%20al%20curso:%20${course.title}`, '_blank')}
                                    disabled={course.status !== 'Open'}
                                    className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${course.status === 'Open'
                                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20'
                                            : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                                        }`}
                                >
                                    {course.status === 'Open' ? 'Inscribirme' : 'Próximamente'} <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;
