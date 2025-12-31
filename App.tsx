import React, { useEffect, useState } from 'react';
import { 
  Brush, 
  Palette, 
  Gift, 
  Award, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  Star,
  PlayCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Heart
} from 'lucide-react';
import Button from './components/Button';
import AIChat from './components/AIChat';

// Components for visual flair
const WaveDivider = ({ flip = false, color = "fill-white" }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? 'transform rotate-180' : ''}`}>
    <svg className={`relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px] ${color}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-bold text-slate-800 text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-500" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="font-serif font-bold text-2xl text-brand-700 flex items-center gap-2">
            <Brush className="w-6 h-6" />
            <span>Arte & Tecido</span>
          </div>
          <Button onClick={scrollToPricing} size="sm" className="hidden sm:inline-flex">
            Inscreva-se Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-50">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/seed/fabricart1/1920/1080')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-100/90 to-white/60"></div>
        
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block bg-brand-100 text-brand-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              Curso 100% Online
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Transforme Sua <span className="text-brand-600">Criatividade</span> em Arte
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              Descubra como a pintura em tecido pode ser a chave para criar peças exclusivas e construir um negócio lucrativo, mesmo começando do zero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToPricing} size="lg" className="w-full sm:w-auto">
                Quero Começar Agora
              </Button>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-600 px-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100`} alt="Aluno" className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span>+1.000 alunos satisfeitos</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-200/30 rounded-full blur-3xl -z-10"></div>
            <img 
              src="https://picsum.photos/seed/fabricpainting/600/700" 
              alt="Pintura em Tecido" 
              className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 border-8 border-white object-cover h-[600px] w-full" 
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Renda Extra</p>
                <p className="text-slate-900 font-bold">Lucre com sua arte</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white relative">
        <WaveDivider color="fill-brand-50" flip={true} />
        <div className="container mx-auto px-4 text-center max-w-3xl mt-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Para quem é este curso?
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Seja você um completo iniciante ou alguém que já arrisca algumas pinceladas, nós preparamos um método que se adapta ao seu ritmo.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">Para Iniciantes</h3>
              <p className="text-slate-600">Nunca pegou num pincel? Sem problemas! Ensinamos desde como segurar o pincel, misturar tintas até sua primeira obra completa.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">Para Intermediários</h3>
              <p className="text-slate-600">Já pinta mas quer aperfeiçoar acabamentos, luz, sombra e aprender técnicas profissionais para vender mais?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-brand-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              O que você vai aprender?
            </h2>
            <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Brush, 
                title: "Técnicas Exclusivas", 
                desc: "Do básico ao avançado: texturas, efeitos e acabamentos impecáveis." 
              },
              { 
                icon: PlayCircle, 
                title: "Passo a Passo", 
                desc: "Conteúdo estruturado de forma simples e prática para facilitar seu aprendizado." 
              },
              { 
                icon: Gift, 
                title: "Peças Únicas", 
                desc: "Transforme tecidos comuns em obras de arte personalizadas." 
              },
              { 
                icon: Award, 
                title: "Profissionalização", 
                desc: "Dicas de vendas, precificação e como montar seu atelier em casa." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <item.icon className="w-10 h-10 text-brand-500 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Visual Proof */}
      <section className="py-20 overflow-hidden bg-white">
        <WaveDivider color="fill-brand-50/50" flip={true} />
        <div className="container mx-auto px-4 my-10">
           <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 text-center">
              Resultados dos Alunos
            </h2>
            <p className="text-center text-slate-500 mt-4">Veja o que é possível criar logo nas primeiras semanas</p>
        </div>
        <div className="flex gap-4 min-w-full overflow-x-auto pb-8 px-4 justify-start md:justify-center no-scrollbar">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[280px] md:min-w-[320px] h-96 relative rounded-2xl overflow-hidden group shadow-lg">
              <img 
                src={`https://picsum.photos/seed/art${i * 12}/400/600`} 
                alt="Arte em tecido" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                   <div className="flex mb-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-current" />)}
                   </div>
                   <p className="font-serif italic text-lg">"Me surpreendi com o resultado"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor Section (NEW) */}
      <section className="py-20 bg-brand-50 relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="w-full md:w-1/2">
                  <div className="relative">
                     <div className="absolute inset-0 bg-brand-200 rounded-full transform translate-x-4 translate-y-4"></div>
                     <img 
                        src="https://picsum.photos/seed/instructorAna/600/600" 
                        alt="Professora Ana Clara" 
                        className="rounded-full shadow-2xl relative z-10 w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
                     />
                  </div>
               </div>
               <div className="w-full md:w-1/2 text-center md:text-left">
                  <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Sua Mentora</span>
                  <h2 className="font-serif text-4xl font-bold text-slate-900 mt-2 mb-6">Professora Ana Clara</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                     Com mais de 15 anos de experiência nas artes plásticas e especialização em pintura em tecido, Ana já formou mais de 5.000 alunos ao redor do mundo.
                  </p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                     Sua missão é desmistificar a arte e provar que, com a técnica certa e uma boa orientação, qualquer pessoa é capaz de criar obras incríveis e expressar seus sentimentos através das cores.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                     <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-brand-100 text-center">
                        <span className="block text-3xl font-bold text-brand-600">15+</span>
                        <span className="text-xs text-slate-500 uppercase">Anos ensinando</span>
                     </div>
                     <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-brand-100 text-center">
                        <span className="block text-3xl font-bold text-brand-600">5k+</span>
                        <span className="text-xs text-slate-500 uppercase">Alunos formados</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Why This Course + Bonuses */}
      <section className="py-20 bg-slate-900 text-white relative">
        <WaveDivider color="fill-brand-50" flip={true} />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080')] opacity-10 bg-cover bg-fixed"></div>
        <div className="container mx-auto px-4 relative z-10 pt-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-brand-300">
                Por que escolher nosso curso?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "No seu ritmo", desc: "Acesso vitalício para ver e rever as aulas quando e onde quiser." },
                  { title: "Renda Extra", desc: "Um mercado em crescimento e carente de profissionais qualificados." },
                  { title: "Comunidade VIP", desc: "Grupo exclusivo para tirar dúvidas e interagir com outros artistas." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-brand-600/20 p-3 rounded-lg h-fit">
                      <CheckCircle2 className="w-6 h-6 text-brand-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                <Gift className="w-6 h-6 text-brand-400" />
                Bônus Exclusivos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">GRÁTIS</span>
                  <div>
                    <strong className="block text-lg">Materiais Gratuitos</strong>
                    <span className="text-slate-300 text-sm">PDFs com riscos e moldes prontos para imprimir e pintar.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">OFF</span>
                  <div>
                    <strong className="block text-lg">Clube de Descontos</strong>
                    <span className="text-slate-300 text-sm">Parcerias exclusivas com lojas de tecido e tinta. Economize na compra do material!</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Guarantee */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform hover:scale-[1.01] transition-transform duration-500">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-slate-50 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Tudo o que você precisa</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Acesso completo ao curso",
                    "Certificado de Conclusão",
                    "Suporte direto com a professora",
                    "Todos os Bônus Inclusos",
                    "Acesso Vitalício",
                    "Atualizações Gratuitas"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-100 p-4 rounded-xl flex items-center gap-4">
                  <Award className="w-10 h-10 text-brand-600" />
                  <div>
                    <p className="font-bold text-brand-900 text-sm uppercase">Garantia Incondicional</p>
                    <p className="text-brand-800 text-sm leading-tight">7 dias para testar. Se não gostar, devolvemos 100% do seu dinheiro.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center bg-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-6 py-2 transform rotate-45 translate-x-4 translate-y-4 shadow-md">
                   OFERTA LIMITADA
                 </div>
                 <p className="text-slate-400 text-lg line-through mb-2">de R$ 297,00</p>
                 <div className="flex items-start justify-center gap-1 mb-2">
                   <span className="text-2xl font-bold text-slate-700 mt-2">R$</span>
                   <span className="text-6xl font-bold text-brand-600 tracking-tight">97</span>
                   <span className="text-2xl font-bold text-slate-700 mt-2">,00</span>
                 </div>
                 <p className="text-slate-500 mb-8">ou 12x de R$ 9,70</p>
                 
                 <Button fullWidth size="lg" className="animate-pulse-slow shadow-xl shadow-brand-500/20">
                   GARANTIR MINHA VAGA
                 </Button>
                 <p className="text-xs text-slate-400 mt-4 flex items-center gap-1">
                   <Clock className="w-3 h-3" /> Acesso imediato após confirmação
                 </p>
                 <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                    <div className="flex -space-x-1">
                       <img src="https://picsum.photos/seed/p1/30" className="w-6 h-6 rounded-full border border-white" />
                       <img src="https://picsum.photos/seed/p2/30" className="w-6 h-6 rounded-full border border-white" />
                       <img src="https://picsum.photos/seed/p3/30" className="w-6 h-6 rounded-full border border-white" />
                    </div>
                    <span>5 pessoas compraram nos últimos 10min</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (NEW) */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
               <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                  <HelpCircle className="w-8 h-8 text-brand-500" />
                  Perguntas Frequentes
               </h2>
               <p className="text-slate-600">Tire suas dúvidas antes de começar</p>
            </div>
            
            <div className="space-y-2">
               <FaqItem 
                  question="Preciso saber desenhar para fazer o curso?" 
                  answer="Não! Nós fornecemos todos os riscos e moldes prontos. Você só precisa transferir para o tecido e pintar seguindo nosso passo a passo."
               />
               <FaqItem 
                  question="Por quanto tempo terei acesso ao curso?" 
                  answer="O acesso é vitalício! Você pode assistir às aulas quantas vezes quiser, no seu próprio ritmo, e terá acesso a todas as atualizações futuras."
               />
               <FaqItem 
                  question="O curso tem certificado?" 
                  answer="Sim, ao concluir todas as aulas você receberá um Certificado de Conclusão personalizado, válido em todo o território nacional."
               />
               <FaqItem 
                  question="Como recebo o acesso?" 
                  answer="Assim que o pagamento for confirmado, você receberá um e-mail com seu login e senha para acessar nossa plataforma exclusiva de alunos."
               />
               <FaqItem 
                  question="Quais materiais preciso para começar?" 
                  answer="Na primeira aula apresentamos a lista completa, mas você pode começar com o básico: tintas para tecido, pincéis macios e um pano de copa. É super acessível!"
               />
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="font-serif font-bold text-2xl text-white mb-6 flex items-center justify-center gap-2">
            <Brush className="w-6 h-6" />
            <span>Arte & Tecido</span>
          </div>
          <p className="mb-8 max-w-md mx-auto">Transformando vidas através da arte e da cor. Junte-se a milhares de alunas que já descobriram seu potencial.</p>
          <div className="flex justify-center gap-6 text-sm mb-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
          <div className="flex justify-center items-center gap-2 text-xs opacity-50 mb-4">
             Feito com <Heart className="w-3 h-3 text-red-500 fill-current" /> para artistas
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Curso de Pintura em Tecido. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Gemini AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;