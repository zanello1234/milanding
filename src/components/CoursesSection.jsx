import React, { useState } from 'react';
import { initialCourses } from '../data/coursesData';
import { Calendar, Video, Users, ArrowRight, CheckCircle2, DollarSign, X } from 'lucide-react';

const CoursesSection = ({ onBack }) => {
    const [courses] = useState(initialCourses);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [enrollFormData, setEnrollFormData] = useState({ name: '', email: '', phone: '' });

    // Format Date Function
    const formatDate = (dateString) => {
        if (!dateString) return 'Fecha por definir';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString + 'T00:00:00').toLocaleDateString('es-AR', options);
    };

    // Sort courses by date (Upcoming first)
    const sortedCourses = [...courses].sort((a, b) => new Date(a.date) - new Date(b.date));

    // Handle Form Change
    const handleChange = (e) => {
        setEnrollFormData({ ...enrollFormData, [e.target.name]: e.target.value });
    };

    // Handle Submit - Redirect to WhatsApp with pre-filled message
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hola! Quiero inscribirme al curso: *${selectedCourse.title}*.\n\nMis datos:\nNombre: ${enrollFormData.name}\nEmail: ${enrollFormData.email}\nTel: ${enrollFormData.phone}`;
        const url = `https://wa.me/543416968999?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        setSelectedCourse(null);
        setEnrollFormData({ name: '', email: '', phone: '' });
    };

    return (
        <div className="min-h-screen bg-[#0f172a] font-sans text-slate-200 py-24 relative">
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
                        Calendario de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Cursos</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Capacitación real. Selecciona el curso y asegura tu lugar.
                    </p>
                </div>

                {/* Timeline / Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedCourses.map(course => (
                        <div key={course.id} className="bg-[#1e293b] rounded-2xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col group">
                            <div className="h-48 overflow-hidden relative">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full border ${course.type.includes('Sincrónico') ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-800/80 border-slate-600'}`}>
                                    {course.type}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white leading-tight mb-2">{course.title}</h3>
                                    <p className="text-sm text-indigo-400 font-bold flex items-center gap-2">
                                        <Calendar size={14} /> {formatDate(course.date)}
                                    </p>
                                </div>
                                <p className="text-slate-400 text-sm mb-6 flex-1">
                                    {course.description}
                                </p>

                                <div className="space-y-3 mb-6 pt-4 border-t border-slate-700/50">
                                    <div className="flex items-center justify-between text-slate-300 text-sm">
                                        <span>Inversión:</span>
                                        <span className="font-bold text-white text-lg">{course.price}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedCourse(course)}
                                    disabled={course.status !== 'Open'}
                                    className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${course.status === 'Open'
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20'
                                        : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                                        }`}
                                >
                                    {course.status === 'Open' ? 'Inscribirme Ahora' : 'Próximamente'} <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enrollment Modal */}
            {selectedCourse && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelectedCourse(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Inscripción</h3>
                            <p className="text-slate-500 text-sm">Estás a un paso de: <br /><strong>{selectedCourse.title}</strong></p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                <input
                                    required
                                    name="name"
                                    value={enrollFormData.name}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    required
                                    name="email"
                                    value={enrollFormData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono / WhatsApp</label>
                                <input
                                    required
                                    name="phone"
                                    value={enrollFormData.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="+54 9 ..."
                                />
                            </div>

                            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 mt-4 flex items-center justify-center gap-2">
                                Continuar Inscripción <ArrowRight size={18} />
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-4">
                                Te redirigiremos a WhatsApp para finalizar.
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoursesSection;
