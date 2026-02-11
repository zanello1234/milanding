import React, { useState } from 'react';
import { initialCourses } from '../data/coursesData';
import { blogPosts as initialBlogPosts } from '../data/blogPosts';
import { Plus, Edit, Trash2, Save, X, LogOut, LayoutDashboard, BookOpen, Video } from 'lucide-react';

const AdminDashboard = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState('courses'); // 'courses' | 'blog'

    // Courses State
    const [courses, setCourses] = useState(initialCourses);

    // Blog State
    const [posts, setPosts] = useState(initialBlogPosts);

    // Joint State
    const [isEditing, setIsEditing] = useState(null); // ID of item being edited or 'new'
    const [formData, setFormData] = useState({});

    const handleEdit = (item) => {
        setIsEditing(item.id);
        setFormData(item);
    };

    const handleNew = () => {
        setIsEditing('new');
        if (activeTab === 'courses') {
            setFormData({
                id: Date.now(),
                title: '',
                description: '',
                type: 'Sincrónico (En VIVO)',
                date: '',
                status: 'Open',
                price: '',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
            });
        } else {
            setFormData({
                id: Date.now(),
                title: '',
                excerpt: '',
                date: new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }),
                content: '<p>Escribe aquí tu contenido...</p>'
            });
        }
    };

    const handleDelete = (id) => {
        if (window.confirm(`¿Seguro que quieres borrar este ${activeTab === 'courses' ? 'curso' : 'artículo'}?`)) {
            if (activeTab === 'courses') {
                setCourses(courses.filter(c => c.id !== id));
            } else {
                setPosts(posts.filter(p => p.id !== id));
            }
        }
    };

    const handleSave = () => {
        if (activeTab === 'courses') {
            if (isEditing === 'new') {
                setCourses([...courses, formData]);
            } else {
                setCourses(courses.map(c => c.id === isEditing ? formData : c));
            }
        } else {
            if (isEditing === 'new') {
                setPosts([...posts, formData]);
            } else {
                setPosts(posts.map(p => p.id === isEditing ? formData : p));
            }
        }
        setIsEditing(null);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
            {/* Sidebar / Navbar */}
            <nav className="bg-[#0f172a] text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <LayoutDashboard className="text-indigo-400" />
                    <span className="font-bold text-xl">Only One Admin</span>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => { setActiveTab('courses'); setIsEditing(null); }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'courses' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
                    >
                        <Video size={18} /> Cursos
                    </button>
                    <button
                        onClick={() => { setActiveTab('blog'); setIsEditing(null); }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'blog' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
                    >
                        <BookOpen size={18} /> Blog
                    </button>
                </div>
                <button onClick={onLogout} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
                    <LogOut size={16} /> Salir
                </button>
            </nav>

            <div className="max-w-6xl mx-auto p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Gestión de {activeTab === 'courses' ? 'Cursos' : 'Blog'}
                    </h1>
                    <button onClick={handleNew} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 font-medium shadow-md">
                        <Plus size={18} /> Nuevo {activeTab === 'courses' ? 'Curso' : 'Artículo'}
                    </button>
                </div>

                {/* EDIT FORM */}
                {isEditing && (
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8 animate-in fade-in slide-in-from-top-4">
                        <h2 className="font-bold text-lg mb-4">
                            {isEditing === 'new' ? `Crear ${activeTab === 'courses' ? 'Curso' : 'Artículo'}` : 'Editar'}
                        </h2>

                        {activeTab === 'courses' ? (
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-slate-500 mb-1">Título</label>
                                    <input name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-500 mb-1">Precio</label>
                                    <input name="price" value={formData.price} onChange={handleChange} className="w-full border p-2 rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-500 mb-1">Fecha</label>
                                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border p-2 rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-500 mb-1">Tipo</label>
                                    <select name="type" value={formData.type} onChange={handleChange} className="w-full border p-2 rounded">
                                        <option>Sincrónico (En VIVO)</option>
                                        <option>Asincrónico (Grabado)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-500 mb-1">Estado</label>
                                    <select name="status" value={formData.status} onChange={handleChange} className="w-full border p-2 rounded">
                                        <option value="Open">Abierto (Open)</option>
                                        <option value="Closed">Cerrado (Closed)</option>
                                        <option value="Coming Soon">Próximamente</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm text-slate-500 mb-1">Descripción</label>
                                    <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="w-full border p-2 rounded" />
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm text-slate-500 mb-1">Título del Artículo</label>
                                    <input name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded font-bold" />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-500 mb-1">Fecha de Publicación</label>
                                    <input name="date" value={formData.date} onChange={handleChange} className="w-full border p-2 rounded" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm text-slate-500 mb-1">Copete / Resumen (Excerpt)</label>
                                    <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows="2" className="w-full border p-2 rounded" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm text-slate-500 mb-1">Contenido (HTML)</label>
                                    <div className="text-xs text-slate-400 mb-1">Puedes usar etiquetas &lt;p&gt;, &lt;h3&gt;, etc.</div>
                                    <textarea name="content" value={formData.content} onChange={handleChange} rows="10" className="w-full border p-2 rounded font-mono text-sm bg-slate-50" />
                                </div>
                            </div>
                        )}

                        <div className="flex gap-2 mt-4 justify-end">
                            <button onClick={() => setIsEditing(null)} className="px-4 py-2 text-slate-500 hover:underline">Cancelar</button>
                            <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2">
                                <Save size={16} /> Guardar
                            </button>
                        </div>
                    </div>
                )}

                {/* TABLES */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    {activeTab === 'courses' ? (
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-4 font-semibold text-slate-600 text-sm">Título</th>
                                    <th className="p-4 font-semibold text-slate-600 text-sm">Tipo</th>
                                    <th className="p-4 font-semibold text-slate-600 text-sm">Estado</th>
                                    <th className="p-4 font-semibold text-slate-600 text-sm text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {courses.map(course => (
                                    <tr key={course.id} className="hover:bg-slate-50">
                                        <td className="p-4 font-medium text-slate-900">{course.title}</td>
                                        <td className="p-4 text-slate-500 text-sm">{course.type}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${course.status === 'Open' ? 'bg-green-100 text-green-700' :
                                                course.status === 'Coming Soon' ? 'bg-indigo-100 text-indigo-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                {course.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right flex justify-end gap-2">
                                            <button onClick={() => handleEdit(course)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                                <Edit size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(course.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-4 font-semibold text-slate-600 text-sm">Título</th>
                                    <th className="p-4 font-semibold text-slate-600 text-sm">Fecha</th>
                                    <th className="p-4 font-semibold text-slate-600 text-sm text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {posts.map(post => (
                                    <tr key={post.id} className="hover:bg-slate-50">
                                        <td className="p-4 font-medium text-slate-900 w-1/2">{post.title}</td>
                                        <td className="p-4 text-slate-500 text-sm">{post.date}</td>
                                        <td className="p-4 text-right flex justify-end gap-2">
                                            <button onClick={() => handleEdit(post)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                                <Edit size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(post.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <p className="mt-8 text-center text-slate-400 text-sm">
                    Nota: En este prototipo, los cambios no se guardan en la base de datos real al recargar.
                </p>
            </div>
        </div>
    );
};

export default AdminDashboard;
