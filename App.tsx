import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './components/Icons';
import { MegaMenu } from './components/MegaMenu';
import { Sidebar } from './components/Sidebar';
import { BookletCategory, ProductCategoryCard, CourseCategoryCard } from './components/Cards';
import { ZoomControls } from './components/ZoomControls';
import { STORE_CATEGORIES, SPECIAL_SECTIONS } from './data';

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarTab, setSidebarTab] = useState('cart');
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [toast, setToast] = useState<{message: string, type: string} | null>(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [zoom, setZoom] = useState(1);
    const navRef = useRef<HTMLElement>(null);

    const showToast = (message: string, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveMegaMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { id: 'home', name: 'الرئيسية', type: 'link' },
        { id: 'products', name: 'متجر المنتجات', type: 'mega', categories: STORE_CATEGORIES.products },
        { id: 'books', name: 'الكتب الإلكترونية', type: 'book', categories: STORE_CATEGORIES.books },
        { id: 'courses', name: 'الدورات التعليمية', type: 'mega', categories: STORE_CATEGORIES.courses },
        { id: 'contact', name: 'تواصل معنا', type: 'link' },
    ];

    return (
        <div className="min-h-screen flex flex-col" dir="rtl">
            <div style={{ zoom: zoom, transition: 'zoom 0.3s ease-out', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <nav ref={navRef} className={`fixed top-0 w-full z-[90] transition-all duration-500 ${
                    scrolled ? 'py-4 glass-blur shadow-premium' : 'py-8 bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                    <div className="flex items-center gap-16">
                        <div className="flex flex-col items-start group cursor-pointer">
                            <h1 className="text-3xl font-black text-royal-purple tracking-tighter group-hover:scale-105 transition-transform">SEFFAR</h1>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-royal-purple/50 -mt-1 group-hover:text-royal-purple transition-colors">STORE</span>
                        </div>
                        <ul className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <li key={link.id} className="relative group py-2">
                                    <a 
                                        href={`#${link.id}`} 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (link.type !== 'link') {
                                                setActiveMegaMenu(activeMegaMenu === link.id ? null : link.id);
                                            } else {
                                                const element = document.getElementById(link.id);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }
                                        }}
                                        className={`text-[13px] font-black transition-all flex items-center gap-1.5 ${activeMegaMenu === link.id ? 'text-royal-purple' : 'text-royal-purple-dark/80 hover:text-royal-purple'}`}
                                    >
                                        {link.name}
                                        {link.type !== 'link' && <Icon name="chevron-down" size={14} className={`transition-transform duration-300 ${activeMegaMenu === link.id ? 'rotate-180 text-royal-purple' : 'text-royal-purple/40'}`} />}
                                    </a>
                                    <motion.div 
                                        className="absolute -bottom-1 left-0 h-0.5 bg-royal-purple rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: activeMegaMenu === link.id ? '100%' : 0 }}
                                    />
                                    {link.id === 'products' && <MegaMenu categories={STORE_CATEGORIES.products} isOpen={activeMegaMenu === 'products'} onClose={() => setActiveMegaMenu(null)} />}
                                    {link.id === 'books' && <MegaMenu categories={STORE_CATEGORIES.books} isOpen={activeMegaMenu === 'books'} onClose={() => setActiveMegaMenu(null)} />}
                                    {link.id === 'courses' && <MegaMenu categories={STORE_CATEGORIES.courses} isOpen={activeMegaMenu === 'courses'} onClose={() => setActiveMegaMenu(null)} />}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center bg-purple-50/50 border border-purple-100/50 rounded-2xl px-4 py-2.5 gap-3 focus-within:ring-2 focus-within:ring-royal-purple/20 focus-within:bg-white transition-all w-64 shadow-inner-soft">
                            <Icon name="search" size={18} className="text-royal-purple/40" />
                            <input type="text" placeholder="ماذا تبحث عنه اليوم؟" className="bg-transparent border-none outline-none text-xs w-full font-bold text-royal-purple-dark placeholder:text-royal-purple/30" />
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 p-1.5 rounded-2xl border border-purple-100/50 shadow-sm">
                            <button onClick={() => { setIsSidebarOpen(true); setSidebarTab('cart'); }} className="w-11 h-11 flex items-center justify-center hover:bg-royal-purple hover:text-white rounded-xl transition-all duration-300 text-royal-purple-dark/70 relative group">
                                <Icon name="shopping-cart" size={20} />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-royal-purple text-white text-[10px] font-black flex items-center justify-center rounded-lg border-2 border-white shadow-lg group-hover:scale-110 transition-transform">3</span>
                            </button>
                            <button onClick={() => { setIsSidebarOpen(true); setSidebarTab('auth'); }} className="w-11 h-11 flex items-center justify-center hover:bg-royal-purple hover:text-white rounded-xl transition-all duration-300 text-royal-purple-dark/70">
                                <Icon name="user" size={20} />
                            </button>
                            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden w-11 h-11 flex items-center justify-center hover:bg-royal-purple hover:text-white rounded-xl transition-all duration-300 text-royal-purple-dark/70">
                                <Icon name="menu" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activeTab={sidebarTab} setActiveTab={setSidebarTab} navLinks={navLinks} />

            <AnimatePresence>
                {toast && (
                    <motion.div initial={{ opacity: 0, y: 50, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 50, x: '-50%' }} className="fixed bottom-12 left-1/2 z-[200] px-6 py-3 bg-royal-purple-dark text-white rounded-2xl shadow-2xl flex items-center gap-3">
                        <Icon name={toast.type === 'success' ? 'check-circle' : 'alert-circle'} size={20} className="text-green-400" />
                        <span className="text-sm font-bold">{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showBackToTop && (
                    <motion.button initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }} onClick={scrollToTop} className="fixed bottom-8 left-8 z-[80] p-4 bg-royal-purple text-white rounded-full shadow-2xl hover:bg-royal-purple-dark transition-all">
                        <Icon name="arrow-up" size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-mesh pt-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[10%] left-[5%] w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl" />
                    <motion.div animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-royal-purple/5 rounded-full border border-royal-purple/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-purple opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-royal-purple"></span>
                            </span>
                            <span className="text-[10px] font-black text-royal-purple uppercase tracking-widest">مرحباً بك في مستقبل التسوق</span>
                        </div>
                        <h1 className="text-7xl lg:text-[100px] font-black text-royal-purple-dark leading-[0.9] tracking-tighter">
                            عالم من <br/>
                            <span className="text-gradient">الإبداع</span> <br/>
                            <span className="text-royal-purple-dark/10">والتعلم</span>
                        </h1>
                        <p className="text-lg text-royal-purple/70 max-w-lg leading-relaxed font-medium">
                            اكتشف أفضل المنتجات، الكتب الإلكترونية، والدورات التعليمية في منصة واحدة متكاملة مصممة خصيصاً لتلبية طموحاتك الرقمية.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    const el = document.getElementById('products');
                                    if(el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-royal-purple text-white px-12 py-6 rounded-3xl font-black text-lg shadow-premium hover:shadow-purple-300/50 transition-all flex items-center gap-4 group"
                            >
                                ابدأ رحلتك الآن <Icon name="arrow-left" size={24} className="group-hover:translate-x-[-8px] transition-transform" />
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    const el = document.getElementById('products');
                                    if(el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="glass-blur text-royal-purple-dark px-12 py-6 rounded-3xl font-black text-lg border border-purple-100 hover:border-royal-purple transition-all"
                            >
                                تصفح الأقسام
                            </motion.button>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: [0, -15, 0] }} 
                        transition={{ opacity: { duration: 1 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                        className="relative hidden lg:block mt-16"
                    >
                        <div className="relative z-10 rounded-[60px] overflow-hidden shadow-premium border-[12px] border-white">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Digital Commerce" className="w-full aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
                            <div className="absolute inset-0 bg-gradient-to-t from-royal-purple-dark/40 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 p-8 glass-blur rounded-[32px] border border-white/40 shadow-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-royal-gold flex items-center justify-center text-white shadow-lg"><Icon name="star" size={24} /></div>
                                    <div>
                                        <h4 className="font-black text-royal-purple-dark">الأكثر مبيعاً هذا الشهر</h4>
                                        <div className="flex gap-1"><Icon name="star" size={12} className="text-royal-gold fill-royal-gold" /><Icon name="star" size={12} className="text-royal-gold fill-royal-gold" /><Icon name="star" size={12} className="text-royal-gold fill-royal-gold" /><Icon name="star" size={12} className="text-royal-gold fill-royal-gold" /><Icon name="star" size={12} className="text-royal-gold fill-royal-gold" /></div>
                                    </div>
                                </div>
                                <p className="text-sm text-royal-purple-dark/80 font-bold">"أفضل تجربة تسوق إلكتروني مررت بها، جودة المنتجات وسرعة التوصيل مذهلة!"</p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-royal-purple/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-purple-50/30">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SPECIAL_SECTIONS.map((section, idx) => (
                            <motion.div key={section.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-purple-50">
                                <div className={`w-12 h-12 ${section.color} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}><Icon name="sparkles" size={24} /></div>
                                <h3 className="text-xl font-bold mb-2 text-royal-purple-dark group-hover:text-royal-purple transition-colors">{section.name}</h3>
                                <p className="text-sm text-royal-purple/50">اكتشف أفضل المختارات في هذا القسم</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="products" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col items-center text-center mb-24 space-y-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 text-royal-purple font-black uppercase tracking-[0.4em] text-[10px] bg-purple-50 px-4 py-2 rounded-full"><Icon name="layout" size={14} /> التصنيفات المتاحة</motion.div>
                        <h2 className="text-6xl font-black text-royal-purple-dark">تصفح حسب <span className="text-royal-purple">الفئات</span></h2>
                        <p className="text-royal-purple/60 max-w-xl font-bold leading-relaxed">استكشف مجموعتنا الواسعة من المنتجات المصنفة بعناية لتسهيل تجربة التسوق الخاصة بك</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {STORE_CATEGORIES.products.map((cat, idx) => (
                            <ProductCategoryCard key={cat.id} category={cat} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="books" className="py-32 bg-purple-50/30 overflow-visible">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-end justify-between mb-20">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-royal-purple mb-2"><Icon name="book-open" size={24} /> <span className="text-sm font-black tracking-widest uppercase">المكتبة الرقمية</span></div>
                            <h2 className="text-5xl font-black text-royal-purple-dark">مكتبة <span className="text-royal-purple">سفار</span> الذكية</h2>
                            <p className="text-royal-purple/60 max-w-md font-bold">اضغط على أي كتيب لاستكشاف عالم المعرفة الرقمية المخبأ بداخله</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {STORE_CATEGORIES.books.map((cat, idx) => (
                            <BookletCategory key={cat.id} category={cat} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="courses" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-end justify-between mb-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-royal-purple-dark">أكاديمية <span className="text-royal-purple">التعلم</span></h2>
                            <div className="w-20 h-1.5 bg-royal-purple rounded-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {STORE_CATEGORIES.courses.map((cat, idx) => (
                            <CourseCategoryCard key={cat.id} category={cat} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-32 bg-purple-50/30">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-square max-w-md mx-auto w-full">
                            <div className="absolute inset-0 bg-royal-purple rounded-[50px] rotate-6 shadow-premium" />
                            <div className="relative h-full bg-royal-purple-dark rounded-[50px] p-12 text-white flex flex-col justify-between shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-purple/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
                                
                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <h2 className="text-5xl font-black tracking-tighter text-white">SEFFAR</h2>
                                        <span className="text-xs uppercase tracking-[0.4em] text-purple-300 font-black mt-1">STORE</span>
                                    </div>
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg">
                                        <Icon name="send" size={32} className="text-white" />
                                    </div>
                                </div>
                                
                                <div className="relative z-10 space-y-8 my-10">
                                    <div className="flex items-center gap-5 group cursor-pointer">
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-royal-purple group-hover:border-royal-purple transition-all shadow-lg">
                                            <Icon name="phone" size={24} className="text-purple-200 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-purple-300 font-bold mb-1">اتصل بنا</p>
                                            <p className="font-black text-xl tracking-wider">0560768868</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 group cursor-pointer">
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all shadow-lg">
                                            <Icon name="message-circle" size={24} className="text-purple-200 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-purple-300 font-bold mb-1">واتساب</p>
                                            <p className="font-black text-xl tracking-wider">0560768868</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 group cursor-pointer">
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-royal-purple group-hover:border-royal-purple transition-all shadow-lg">
                                            <Icon name="map-pin" size={24} className="text-purple-200 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-purple-300 font-bold mb-1">الموقع</p>
                                            <p className="font-black text-lg">الجزائر العاصمة، الجزائر</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="relative z-10 flex gap-4 pt-8 border-t border-white/10">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 cursor-pointer transition-all"><Icon name="facebook" size={20} /></div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 cursor-pointer transition-all"><Icon name="instagram" size={20} /></div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-royal-purple hover:border-royal-purple cursor-pointer transition-all"><Icon name="send" size={20} /></div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-purple/5 rounded-full border border-royal-purple/10">
                                    <Icon name="mail" size={14} className="text-royal-purple" />
                                    <span className="text-[10px] font-black text-royal-purple uppercase tracking-widest">تواصل معنا</span>
                                </div>
                                <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-royal-purple-dark">هل لديك <span className="text-royal-purple">استفسار؟</span></h2>
                                <p className="text-royal-purple/70 text-lg font-medium leading-relaxed max-w-lg">نحن هنا لمساعدتك في أي وقت. أرسل لنا رسالة وسنقوم بالرد عليك في أقرب وقت ممكن لضمان أفضل تجربة لك.</p>
                            </div>
                            
                            <form className="space-y-5">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-royal-purple/50 uppercase tracking-widest ml-2">الاسم الكامل</label>
                                        <input type="text" placeholder="أحمد محمد" className="w-full p-5 bg-white rounded-2xl border-2 border-transparent shadow-sm focus:border-royal-purple/20 focus:ring-4 focus:ring-royal-purple/5 transition-all outline-none font-bold text-sm text-royal-purple-dark" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-royal-purple/50 uppercase tracking-widest ml-2">رقم الهاتف</label>
                                        <input type="tel" placeholder="05XX XX XX XX" className="w-full p-5 bg-white rounded-2xl border-2 border-transparent shadow-sm focus:border-royal-purple/20 focus:ring-4 focus:ring-royal-purple/5 transition-all outline-none font-bold text-sm text-royal-purple-dark" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-royal-purple/50 uppercase tracking-widest ml-2">البريد الإلكتروني</label>
                                    <input type="email" placeholder="example@mail.com" className="w-full p-5 bg-white rounded-2xl border-2 border-transparent shadow-sm focus:border-royal-purple/20 focus:ring-4 focus:ring-royal-purple/5 transition-all outline-none font-bold text-sm text-royal-purple-dark" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-royal-purple/50 uppercase tracking-widest ml-2">الرسالة</label>
                                    <textarea placeholder="كيف يمكننا مساعدتك؟" rows={4} className="w-full p-5 bg-white rounded-2xl border-2 border-transparent shadow-sm focus:border-royal-purple/20 focus:ring-4 focus:ring-royal-purple/5 transition-all outline-none font-bold text-sm text-royal-purple-dark resize-none" />
                                </div>
                                <button type="button" onClick={(e) => { e.preventDefault(); showToast('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'); }} className="w-full bg-royal-purple text-white py-6 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-royal-purple/30 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                                    إرسال الرسالة <Icon name="send" size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-royal-purple-dark border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-royal-purple/30 blur-[100px] rounded-full" />
                
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
                    <div className="space-y-8">
                        <div className="flex flex-col items-start">
                            <h1 className="text-4xl font-black text-white tracking-tighter">SEFFAR</h1>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-300 mt-1">STORE</span>
                        </div>
                        <p className="text-purple-200/80 text-sm leading-relaxed font-medium">متجر سفار هو وجهتك الأولى للتجارة الإلكترونية والتعلم الرقمي في الجزائر. جودة، احترافية، وسرعة في تلبية احتياجاتك.</p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'send', 'twitter'].map((icon, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.1, y: -5 }} className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-purple-200 hover:text-white hover:bg-royal-purple hover:border-royal-purple cursor-pointer transition-all shadow-lg">
                                    <Icon name={icon} size={20} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-black text-white mb-8 text-lg flex items-center gap-3">
                            <Icon name="link" size={18} className="text-purple-300" /> روابط سريعة
                        </h4>
                        <ul className="space-y-5 text-sm font-bold text-purple-200/80">
                            {['الرئيسية', 'متجر المنتجات', 'مكتبة الكتب', 'أكاديمية الدورات'].map((item, i) => (
                                <li key={i} className="hover:text-white hover:translate-x-[-8px] cursor-pointer transition-all flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400/50" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-black text-white mb-8 text-lg flex items-center gap-3">
                            <Icon name="help-circle" size={18} className="text-purple-300" /> الدعم والمساعدة
                        </h4>
                        <ul className="space-y-5 text-sm font-bold text-purple-200/80">
                            {['الأسئلة الشائعة', 'سياسة الاسترجاع', 'شروط الاستخدام', 'سياسة الخصوصية'].map((item, i) => (
                                <li key={i} className="hover:text-white hover:translate-x-[-8px] cursor-pointer transition-all flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400/50" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-black text-white mb-8 text-lg flex items-center gap-3">
                            <Icon name="map" size={18} className="text-purple-300" /> تواصل معنا
                        </h4>
                        <ul className="space-y-6 text-sm font-bold text-purple-200/80">
                            <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-royal-purple transition-colors"><Icon name="phone" size={16} className="text-purple-300 group-hover:text-white" /></div>
                                <span className="tracking-wider">0560768868</span>
                            </li>
                            <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-royal-purple transition-colors"><Icon name="mail" size={16} className="text-purple-300 group-hover:text-white" /></div>
                                <span>contact@seffar-store.com</span>
                            </li>
                            <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-royal-purple transition-colors"><Icon name="map-pin" size={16} className="text-purple-300 group-hover:text-white" /></div>
                                <span>الجزائر العاصمة، الجزائر</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-purple-300/60 font-bold relative z-10">
                    <p>© 2026 Seffar Store. جميع الحقوق محفوظة.</p>
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-white">
                        <span>تم التصميم بكل</span> <Icon name="heart" size={12} className="text-red-400 fill-red-400 animate-pulse" /> <span>في الجزائر</span>
                    </div>
                </div>
            </footer>

            </div>
            <ZoomControls zoom={zoom} setZoom={setZoom} />

            <div className="fixed bottom-8 left-8 z-[100]">
                <AnimatePresence>
                    {showTooltip && (
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }} className="absolute bottom-full left-0 mb-4 whitespace-nowrap bg-white text-royal-purple-dark px-4 py-2 rounded-2xl shadow-2xl border border-purple-50 font-bold text-sm">تحدث معنا الآن! 👋<div className="absolute top-full left-6 -mt-1 border-8 border-transparent border-t-white" /></motion.div>
                    )}
                </AnimatePresence>
                <motion.a href="https://wa.me/0560768868" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-[#25D366]/50 transition-shadow">
                    <motion.div animate={{ boxShadow: ["0 0 0 0 rgba(37, 211, 102, 0.4)", "0 0 0 15px rgba(37, 211, 102, 0)"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full rounded-full flex items-center justify-center"><Icon name="message-circle" size={32} /></motion.div>
                </motion.a>
            </div>
        </div>
    );
}

export default App;
