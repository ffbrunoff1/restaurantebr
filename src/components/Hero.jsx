import React from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, Award, Heart } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: Star,
      text: '5 Estrelas',
      subtext: 'Avaliação'
    },
    {
      icon: Clock,
      text: '15 min',
      subtext: 'Entrega'
    },
    {
      icon: Award,
      text: 'Premiado',
      subtext: 'Chef'
    },
    {
      icon: Heart,
      text: '100%',
      subtext: 'Satisfação'
    }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Sabores que
                <span className="block text-yellow-300">
                  Conquistam
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-lg">
                Descubra uma experiência gastronômica única no RestauranteBR, 
                onde cada prato conta uma história de sabor e tradição.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-primary-500 font-bold py-4 px-8 rounded-lg hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Ver Cardápio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Reservar Mesa
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-3 group-hover:bg-white/30 transition-all duration-300">
                    <feature.icon className="h-8 w-8 mx-auto text-yellow-300" />
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">{feature.text}</div>
                    <div className="text-sm text-white/80">{feature.subtext}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80"
                  alt="Prato gourmet do RestauranteBR"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Experiência Premium
                  </h3>
                  <p className="text-white/90">
                    Pratos elaborados com ingredientes selecionados e técnicas refinadas, 
                    criando uma sinfonia de sabores que desperta todos os sentidos.
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex items-center space-x-4 pt-4"
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <span className="text-white/90 font-medium">
                      4.9/5 - Mais de 1000 avaliações
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute -top-6 -left-6 bg-yellow-300 p-4 rounded-full shadow-lg"
              >
                <Award className="h-8 w-8 text-primary-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg"
              >
                <Heart className="h-8 w-8 text-red-500" />
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}