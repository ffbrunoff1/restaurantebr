import React from 'react'
import { motion } from 'framer-motion'
import { Utensils, Heart, Star, Navigation, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', action: () => scrollToSection('home') },
        { name: 'Sobre Nós', action: () => scrollToSection('about') },
        { name: 'Serviços', action: () => scrollToSection('services') },
        { name: 'Contato', action: () => scrollToSection('contact') }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Restaurante Premium', action: () => scrollToSection('services') },
        { name: 'Delivery', action: () => scrollToSection('services') },
        { name: 'Eventos Especiais', action: () => scrollToSection('services') },
        { name: 'Reservas', action: () => scrollToSection('contact') }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 3456-7890',
      href: 'tel:+551134567890'
    },
    {
      icon: Mail,
      text: 'contato@restaurantebr.com',
      href: 'mailto:contato@restaurantebr.com'
    },
    {
      icon: Navigation,
      text: 'Rua dos Sabores, 123 - São Paulo',
      href: '#'
    },
    {
      icon: Clock,
      text: 'Segunda a Domingo: 11h às 23h',
      href: '#'
    }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-primary-500 rounded-full">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold">RestauranteBR</span>
            </div>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Mais que um restaurante, uma experiência gastronômica que conecta 
              tradição, sabor e momentos especiais.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Sobre o RestauranteBR
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                Há mais de 15 anos, transformamos ingredientes frescos e receitas 
                tradicionais em experiências gastronômicas inesquecíveis. Nossa paixão 
                pela culinária brasileira e o cuidado com cada detalhe fazem do 
                RestauranteBR um lugar especial para celebrar a vida.
              </p>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-secondary-300">4.9/5 Estrelas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-400 fill-current" />
                  <span className="text-secondary-300">50k+ Clientes Felizes</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={link.action}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-secondary-700"
          >
            <h4 className="text-xl font-bold text-white mb-8 text-center">
              Entre em Contato
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary-800 p-6 rounded-xl hover:bg-secondary-700 transition-all duration-300 text-center group"
                >
                  <div className="inline-flex p-3 bg-primary-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  {item.href === '#' ? (
                    <p className="text-secondary-300 group-hover:text-white transition-colors duration-300 text-sm">
                      {item.text}
                    </p>
                  ) : (
                    <a
                      href={item.href}
                      className="text-secondary-300 group-hover:text-primary-400 transition-colors duration-300 text-sm hover:underline"
                    >
                      {item.text}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para uma Experiência Única?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Reserve sua mesa hoje e descubra por que o RestauranteBR é 
              o destino gastronômico preferido da cidade.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary-500 font-bold py-3 px-8 rounded-lg hover:bg-secondary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Fazer Reserva Agora
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-secondary-700 pt-8 pb-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} RestauranteBR. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-secondary-400 text-sm">
                Criado com 
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="italic text-primary-400 hover:text-primary-300 transition-colors duration-300 ml-1"
                >
                  Papum
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}