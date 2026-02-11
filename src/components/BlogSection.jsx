import React, { useState } from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogSection = ({ onBack }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    if (selectedPost) {
        return (
            <article className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans">
                <div className="max-w-3xl mx-auto px-6">
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="flex items-center gap-2 text-indigo-600 font-semibold mb-8 hover:underline"
                    >
                        <ArrowLeft size={20} /> Volver al Blog
                    </button>

                    <header className="mb-8">
                        <span className="text-sm font-bold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">Artículo</span>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-4 leading-tight">{selectedPost.title}</h1>
                        <div className="flex items-center gap-6 text-slate-500 text-sm border-b border-slate-200 pb-8">
                            <span className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</span>
                            <span className="flex items-center gap-2"><User size={16} /> Martín Zanello</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> 5 min lectura</span>
                        </div>
                    </header>

                    <div
                        className="prose prose-lg prose-indigo text-slate-600"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />
                </div>
            </article>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Blog & Recursos</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Reflexiones sobre tecnología, gestión y el futuro de la profesión contable.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer group hover:-translate-y-1"
                        >
                            <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">{post.date}</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-indigo-600 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <span className="text-indigo-600 font-semibold text-sm group-hover:underline">Leer artículo →</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
