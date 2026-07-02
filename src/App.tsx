import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Lightbulb,
  MessageSquareQuote,
  Pencil,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Volume2
} from "lucide-react";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
      >
        <span className="font-bold text-slate-900 text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#10b981] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-7 pb-6 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const floatingEmojis = [
  { emoji: "😊", top: "10%", left: "5%", delay: 0, duration: 6 },
  { emoji: "🥳", top: "25%", right: "8%", delay: 1.5, duration: 7 },
  { emoji: "👶", top: "45%", left: "8%", delay: 0.5, duration: 8 },
  { emoji: "🚀", top: "65%", right: "6%", delay: 2, duration: 6.5 },
  { emoji: "🎨", top: "80%", left: "4%", delay: 1, duration: 7.5 },
  { emoji: "🌟", top: "15%", right: "20%", delay: 3, duration: 5.5 },
  { emoji: "✨", top: "75%", left: "25%", delay: 2.5, duration: 7 },
  { emoji: "🤩", top: "55%", right: "12%", delay: 0.8, duration: 6.8 },
];
const gallery = [
  {
    image: "https://i.ibb.co/W4YDvKzR/image.png",
    link: "https://i.ibb.co/W4YDvKzR/image.png"
  },
  {
    image: "https://i.ibb.co/PZKpZRdP/image.png",
    link: "https://i.ibb.co/PZKpZRdP/image.png"
  },
  {
    image: "https://i.ibb.co/FbpMJWmm/image.png",
    link: "https://i.ibb.co/FbpMJWmm/image.png"
  },
  {
    image: "https://i.ibb.co/vvJ5j5rW/image.png",
    link: "https://i.ibb.co/vvJ5j5rW/image.png"
  }
];

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % gallery.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const scrollToPricing = () => {
    document.getElementById("precio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-amber-500 selection:text-amber-950 pt-10">
      {/* EMOJIS FLOTANTES DE FONDO */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-25">
        {floatingEmojis.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute text-4xl sm:text-5xl hidden md:block"
            style={{ top: item.top, left: item.left, right: item.right }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1]
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* FAIXA EM MOVIMENTO CONTINUO */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 py-1 shadow-md border-b border-red-700 z-50 overflow-hidden flex select-none items-center h-7">
        <motion.div
          className="flex whitespace-nowrap gap-16 text-xs font-black text-amber-300 uppercase tracking-wider"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span>🔥 Oferta por tiempo limitado: Plan Completo por solo $14,90 USD (antes $67) ✨</span>
              <span>🔥 Oferta por tiempo limitado: Plan Completo por solo $14,90 USD (antes $67) ✨</span>
              <span>🔥 Oferta por tiempo limitado: Plan Completo por solo $14,90 USD (antes $67) ✨</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* HEADER */}
      <header className="fixed top-7 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-emerald-100/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl tracking-tight bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 bg-clip-text text-transparent">
            <BookOpen className="w-6 h-6 text-orange-500" />
            Mi Hijo Ya Lee
          </div>
          <button
            onClick={scrollToPricing}
            className="text-sm font-bold text-amber-950 bg-amber-500 px-5 py-2.5 rounded-full hover:bg-amber-400 transition-all shadow-[0_4px_14px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 relative z-10"
          >
            Quiero que lea hoy
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-white max-w-2xl relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0"
            >
                        <motion.div variants={fadeIn} className="mb-6 w-[160px] sm:w-[180px]">
                <div className="aspect-square w-full bg-white/10 border-2 border-white/20 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm flex items-center justify-center">
                  <img 
                    src="https://i.ibb.co/4g0LKx9Z/Chat-GPT-Image-29-de-jun-de-2026-23-25-30.png"
                    alt="Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-emerald-50">Método de lectoescritura probado en casa, para niños de 3 a 7 años</span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                ¿Tu hijo se bloquea al intentar <span className="text-amber-300">unir las letras?</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xl lg:text-2xl font-medium text-emerald-50 mb-4 formatting-snug">
                Ayúdalo a leer con fluidez y confianza en pocas semanas — sin peleas, sin llantos y sin presión.
              </motion.p>

              <motion.p variants={fadeIn} className="text-lg text-emerald-100/90 mb-10 leading-relaxed font-light">
                El Grafismo Fonético une trazo, sonido y juego para que aprenda a leer como aprendió a caminar: paso a paso, de forma natural y a su propio ritmo.
              </motion.p>

              {/* BOTÓN DEL HERO CONVERTIDO A LINK DE CHECKOUT */}
              <motion.button
                variants={fadeIn}
                onClick={() => {
                  document.getElementById("plan-basico")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="group relative inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-lg lg:text-xl px-8 py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] hover:-translate-y-1 w-full sm:w-auto z-10 text-center"
              >
                Ver planes y empezar hoy
                <Rocket className="w-7 h-7 group-hover:translate-x-1 transition-transform shrink-0" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-[3rem] blur-3xl"></div>
              <img
                src="/hero-illustration.png"
                alt="Niño leyendo feliz"
                className="relative z-10 w-full rounded-[2rem] shadow-2xl border-4 border-white/10 object-cover aspect-video bg-white/5"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-emerald-100 p-3 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Primeros avances</p>
                  <p className="text-emerald-600 font-extrabold">En pocas semanas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHATS INCLUDED */}
      <section className="py-24 relative z-10 overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 60%, #10b981 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-14"
          >
            <span className="inline-block bg-amber-400 text-amber-950 font-bold px-5 py-2 rounded-full text-sm uppercase tracking-widest mb-4">
              Acceso inmediato
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Todo lo que recibes al comprar hoy
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">Material digital listo para descargar e imprimir. Empiezas hoy, desde casa, sin necesidad de ser maestro o maestra.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "200 Actividades de Grafismo de 2 Sílabas",
                icon: BookOpen,
                tag: "Nivel Inicial",
                bg: "from-blue-500 to-blue-700",
                tagBg: "bg-white/20 text-white",
                desc: "La base del método: fichas con trazos guiados para que domine las primeras sílabas sin memorizar a la fuerza.",
              },
              {
                title: "150 Actividades de Grafismo de 3 Sílabas",
                icon: Sparkles,
                tag: "Nivel Avanzado",
                bg: "from-amber-400 to-orange-500",
                tagBg: "bg-amber-900/30 text-amber-100",
                desc: "El siguiente paso natural: amplía su vocabulario con palabras más largas, sin abrumarlo ni perder la motivación.",
              },
              {
                title: "Súper Abecedario Fonético de 300 Tarjetas",
                icon: Pencil,
                tag: "¡Bono Gratis!",
                bg: "from-emerald-400 to-teal-600",
                tagBg: "bg-emerald-900/30 text-emerald-100",
                desc: "300 tarjetas para que reconozca cada sonido y arme sus primeras palabras con seguridad y confianza.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-gradient-to-br ${item.bg} rounded-3xl p-7 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/10 rounded-full -ml-6 -mb-6"></div>

                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 ${item.tagBg}`}>
                  {item.tag}
                </span>

                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-extrabold text-white text-xl leading-snug mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white relative overflow-hidden z-10">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 font-bold px-5 py-2 rounded-full text-sm uppercase tracking-widest mb-4">
              Mira por dentro
            </span>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-5">
              Así se ven las actividades en la práctica
            </h2>

            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Toca cualquier imagen para ampliarla y ver cada detalle del material.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">

            <a
              href={gallery[currentImage].link}
              target="_blank"
              rel="noopener noreferrer"
            >

              <img
                src={gallery[currentImage].image}
                alt="Vista previa"
                className="w-full rounded-3xl shadow-2xl cursor-pointer hover:scale-[1.01] transition-all duration-500"
              />

            </a>         

          </div>

          <div className="flex items-center justify-center gap-5 mt-8">

            <button
              onClick={prevImage}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-3">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-emerald-500 w-10"
                      : "bg-slate-300 w-3"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextImage}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>
      </section>
      {/* BENEFITS SECTION */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Por qué el Grafismo Fonético logra lo que{" "}
              <span className="text-[#10b981] relative inline-block">
                otros métodos no consiguen
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BrainCircuit,
                color: "text-amber-500",
                bg: "bg-amber-100",
                title: "Sin memorizar a la fuerza",
                desc: "Olvídate de las repeticiones infinitas. Tu hijo aprende conectando el movimiento de su mano con el sonido real de cada letra — así la lectura se queda grabada de verdad.",
              },
              {
                icon: HeartHandshake,
                color: "text-[#10b981]",
                bg: "bg-emerald-50",
                title: "Lectura sin peleas ni llantos",
                desc: "Cada actividad está pensada como un juego. Protegemos su autoestima para que los errores sean parte del proceso, no una razón para rendirse.",
              },
              {
                icon: Lightbulb,
                color: "text-emerald-500",
                bg: "bg-emerald-100",
                title: "Avances que puedes ver en casa",
                desc: "Con constancia, verás cómo pasa de balbucear sílabas a leer sus primeros cuentos y letreros de la calle — por iniciativa propia y con orgullo.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.5 } }
                }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 relative overflow-hidden group z-10"
              >
                <div className={`w-16 h-16 ${benefit.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Así funciona el método en 3 pasos
            </h2>
            <p className="text-lg text-slate-600">Un camino natural que respeta el ritmo y la curiosidad de tu hijo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-100 via-amber-200 to-emerald-100 z-0"></div>

            {[
              {
                step: "1",
                title: "El Trazo",
                desc: "Tu hijo dibuja la letra con trazos guiados, activando su memoria motriz y preparando el cerebro para leer.",
                icon: Pencil,
              },
              {
                step: "2",
                title: "El Sonido",
                desc: "Cada trazo se conecta con un sonido real y divertido — no con el nombre de la letra, sino con lo que realmente importa para leer.",
                icon: Volume2,
              },
              {
                step: "3",
                title: "La Palabra",
                desc: "Unimos los sonidos de forma natural y formamos las primeras palabras. Ahí es cuando todo encaja y la lectura cobra vida.",
                icon: BookOpen,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-white border-4 border-[#10b981] rounded-full flex items-center justify-center mb-6 shadow-xl relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-400 text-amber-950 font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {step.step}
                  </div>
                  <step.icon className="w-10 h-10 text-[#10b981]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-br from-[#10b981] to-[#047857] text-white overflow-hidden relative z-10">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
              Familias reales que ya transformaron la lectura en casa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Ver a mi pequeña de 5 años llorar porque no podía leer las tareas me partía el corazón. Probamos este material y, en pocas semanas, algo hizo clic. Hoy lee sola sus cuentos antes de dormir. Fue la mejor inversión que hicimos para ella.",
                author: "Valeria Martínez",
                role: "Mamá de Sofía (5 años) — México",
                photo: `https://i.ibb.co/6cktcRfw/453242448-8021717617920819-6806801751566881096-n.jpg`,
                link: "https://i.ibb.co/6cktcRfw/453242448-8021717617920819-6806801751566881096-n.jpg"
              },
              {
                text: "Probamos maestras particulares y nada funcionaba. El problema no era mi hijo: era el método. Con el grafismo fonético, leer se volvió un juego. En un mes ya leía los letreros de la calle. No lo podía creer.",
                author: "Carolina Rodríguez",
                role: "Mamá de Mateo (6 años) — España",
                photo: `https://i.ibb.co/Q7wXCjh9/image.png`,
                link: "https://i.ibb.co/Q7wXCjh9/image.png"
              },
              {
                text: "Me sentía culpable al ver a mi hijo frustrado cada tarde. Este programa nos devolvió la calma. Las actividades son tan claras y amorosas que la lectura pasó de ser una batalla a nuestro momento favorito del día.",
                author: "Daniela Fernández",
                role: "Mamá de Lucas (4 años) — Colombia",
                photo: `https://i.ibb.co/XZNqYrrN/image.png`,
                link: "https://i.ibb.co/XZNqYrrN/image.png"
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative z-10"
              >
                <MessageSquareQuote className="absolute top-6 right-6 w-12 h-12 text-white/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-emerald-50 text-lg italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <img
                      src={testimonial.photo}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/40 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </a>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.author}</p>
                    <p className="text-emerald-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precio" className="py-24 bg-white relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl opacity-60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Elige el plan ideal para tu hijo</h2>
            <p className="text-slate-500 text-lg">Acceso inmediato. Garantía de 7 días. Si no ves avances, te devolvemos tu dinero.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">

            {/* BÁSICO */}
            <motion.div
              id="plan-basico"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white rounded-[2rem] shadow-xl p-8 border border-slate-200 text-center relative z-10"
            >
              <div className="inline-block bg-slate-100 text-slate-700 font-bold px-4 py-2 rounded-full text-sm mb-6">
                Plan Básico
              </div>

              <div className="mb-2">
                <span className="text-xl text-slate-400 line-through font-semibold">$37 USD</span>
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-6xl font-black text-slate-900 tracking-tighter">$5</span>
                <span className="text-xl text-slate-500 font-bold">USD</span>
              </div>
              <p className="text-slate-500 text-sm font-medium mb-6">Pago único • Descarga al instante</p>

              <ul className="text-left space-y-3 mb-8">
                {[
                  "200 actividades de grafismo de 2 sílabas para empezar desde cero",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://pay.hotmart.com/A106548478Y"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-slate-800 hover:bg-slate-700 text-white font-black text-lg py-4 px-4 rounded-full mb-5 transition-all hover:-translate-y-1"
              >
                Empezar con el Plan Básico — $5 USD
              </a>

              <div className="flex items-center justify-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs">Garantía de 7 días. Sin riesgo.</span>
              </div>
            </motion.div>

            {/* COMPLETO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-[2rem] shadow-2xl p-8 border-2 border-[#10b981] text-center relative z-10"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-amber-400 text-amber-950 font-black text-sm px-5 py-2 rounded-full shadow-md whitespace-nowrap">
                  ⭐ El más elegido por las familias
                </span>
              </div>

              <div className="inline-block bg-emerald-50 text-[#059669] font-bold px-4 py-2 rounded-full text-sm mb-6 mt-2">
                Plan Completo
              </div>

              <div className="mb-2">
                <span className="text-xl text-slate-400 line-through font-semibold">$67 USD</span>
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-6xl font-black text-slate-900 tracking-tighter">$14,90</span>
                <span className="text-xl text-slate-500 font-bold">USD</span>
              </div>
              <p className="text-emerald-600 text-sm font-bold mb-6">Pago único • Todo el material + bono incluido</p>

              <ul className="text-left space-y-3 mb-8">
                {[
                  "🔥 200 actividades de grafismo de 2 sílabas — la base del método",
                  "🚀 150 actividades de grafismo de 3 sílabas — el siguiente nivel",
                  "🎁 Bono: Súper Abecedario Fonético con 300 tarjetas",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://pay.hotmart.com/Y106473609Q"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-lg py-4 px-4 rounded-full mb-5 transition-all shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] hover:-translate-y-1"
              >
                ¡Sí, quiero el Plan Completo por $14,90!
              </a>

              <div className="flex items-center justify-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs">Garantía incondicional de 7 días. Cero riesgos.</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL URGENCY */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-[#047857] to-slate-900 text-white text-center relative z-10">
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight">
            Imagina la cara de tu hijo cuando lee solo por primera vez...
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Esa sonrisa de orgullo. Esa confianza al descubrir un mundo nuevo de palabras. No tienes que esperar a que la frustración crezca — hoy puedes darle las herramientas para que la lectura sea algo que disfrute, no algo que evite.
          </p>
          <button
            onClick={scrollToPricing}
            className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xl px-10 py-5 rounded-full transition-all shadow-[0_10px_30px_rgba(245,158,11,0.25)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] hover:-translate-y-1 relative z-10"
          >
            Sí, quiero empezar hoy
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Preguntas frecuentes
            </h2>
            <p className="text-slate-500 text-lg">Resolvemos tus dudas antes de que tomes la decisión.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "¿Para qué edades está diseñado el método?",
                a: "Está pensado para niños de 3 a 7 años, aunque muchas familias lo usan con éxito en niños mayores que aún tienen dificultades para leer. Si tu hijo ya va a la escuela y se frustra con la lectura, este método es ideal para reforzar lo aprendido en clase."
              },
              {
                q: "¿Necesito ser maestra o tener experiencia pedagógica?",
                a: "No. Los materiales están diseñados para que cualquier mamá o papá, sin experiencia previa, guíe a su hijo paso a paso. Las instrucciones son claras, visuales y fáciles de seguir desde el primer día."
              },
              {
                q: "¿Cuánto tiempo al día necesito dedicarle?",
                a: "Con 15 a 20 minutos diarios es suficiente. El método encaja en la rutina familiar sin generar presión. Muchas familias lo practican antes de dormir, como una actividad tranquila y agradable."
              },
              {
                q: "¿El material es físico o digital?",
                a: "Es 100% digital: recibes PDFs listos para descargar e imprimir en casa. Puedes empezar hoy mismo, sin esperar envíos ni depender de ninguna tienda."
              },
              {
                q: "¿Qué pasa si no veo resultados?",
                a: "Tienes 7 días de garantía total. Si aplicas el método y no notas avance, o sientes que no es para tu familia, escríbenos y te devolvemos el 100% de tu dinero. Sin preguntas incómodas."
              },
              {
                q: "¿Puedo usarlo junto con lo que mi hijo aprende en la escuela?",
                a: "¡Sí, y es lo más recomendable! El Grafismo Fonético complementa el currículo escolar. Muchos niños que lo usan empiezan a sentirse más seguros en clase en pocas semanas."
              },
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center text-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-8 h-8 text-slate-600" />
          </div>
          <p className="mb-4">© {new Date().getFullYear()} Mi Hijo Ya Lee. Todos los derechos reservados.</p>
          <p className="max-w-2xl mx-auto text-xs text-slate-500 leading-relaxed">
            Descargo de responsabilidad: Los resultados dependen del tiempo de dedicación y la constancia con la que se aplique el método. La garantía de 7 días te permite probar el programa sin compromiso.
          </p>
        </div>
      </footer>
    </div>
  );
}
