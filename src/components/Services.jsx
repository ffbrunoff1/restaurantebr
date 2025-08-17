import React from 'react'
import { motion } from 'framer-motion'
import { Utensils, Truck, Users, Clock, Star, Heart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Utensils,
      title: 'Restaurante Premium',
      description: 'Experiência gastronômica completa em nosso ambiente elegante e acolhedor.',
      features: ['Cardápio sazonal', 'Ambiente climatizado', 'Música ao vivo', 'Wine pairing'],
      price: 'A partir de R$ 45',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Truck,
      title: 'Delivery Premium',
      description: 'Seus pratos favoritos entregues com qualidade e agilidade em sua casa.',
      features: ['Entrega rápida', 'Embalagem especial', 'Rastreamento', 'Sem taxa mínima'],
      price: 'Entrega grátis',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Users,
      title: 'Eventos Especiais',
      description: 'Catering personalizado para seus momentos mais importantes.',
      features: ['Menu personalizado', 'Decoração inclusa', 'Equipe completa', 'Até 200 pessoas'],
      price: 'Orçamento personalizado',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const specialties = [
    {
      name: 'Feijoada Gourmet',
      description: 'Nossa tradicional feijoada com toque especial do chef',
      price: 'R$ 89,90',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Picanha Premium',
      description: 'Corte nobre grelhado na perfeição com acompanhamentos',
      price: 'R$ 124,90',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Bobó de Camarão',
      description: 'Cremoso bobó com camarões frescos e dendê',
      price: 'R$ 79,90',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Moqueca Baiana',
      description: 'Peixe fresco com leite de coco e temperos baianos',
      price: 'R$ 69,90',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80'
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Oferecemos experiências gastronômicas completas para todos os momentos especiais
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary-500 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="p-6 flex flex-col h-64">
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-secondary-500">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-primary-500">
                    {service.price}
                  </span>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-300 font-medium"
                  >
                    Solicitar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialties Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Pratos <span className="text-gradient">Especiais</span>
          </h3>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Descubra nossos pratos mais populares, preparados com ingredientes frescos e técnicas tradicionais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specialties.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-secondary-700">{dish.rating}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col h-40">
                <h4 className="text-lg font-bold text-secondary-900 mb-2">
                  {dish.name}
                </h4>
                <p className="text-sm text-secondary-600 mb-4 flex-grow">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-primary-500">
                    {dish.price}
                  </span>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-300 text-sm font-medium"
                  >
                    Pedir
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Experimente Hoje Mesmo!
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Faça sua reserva ou peça delivery e descubra por que somos o restaurante 
              mais querido da cidade. Sabores únicos te esperando!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary-500 font-bold py-4 px-8 rounded-lg hover:bg-secondary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Reservar Mesa
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Pedir Delivery
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Entrega em 30min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9/5 Estrelas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 fill-current" />
                <span>50k+ Clientes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}