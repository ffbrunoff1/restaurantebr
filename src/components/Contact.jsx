import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Navigation, Clock, Star, Users } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    message: ''
  })

  const [status, setStatus] = useState({ message: '', isError: false })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: 'Enviando reserva...', isError: false })

    try {
      // Simular envio - aqui seria integração real
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setStatus({ 
        message: 'Reserva enviada com sucesso! Entraremos em contato em breve.', 
        isError: false 
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        time: '',
        message: ''
      })
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar reserva. Tente novamente.', 
        isError: true 
      })
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 3456-7890',
      subtitle: 'Segunda a Domingo',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@restaurantebr.com',
      subtitle: 'Resposta em 24h',
      color: 'text-green-500'
    },
    {
      icon: Navigation,
      title: 'Endereço',
      info: 'Rua dos Sabores, 123',
      subtitle: 'São Paulo - SP',
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Funcionamento',
      info: '11h às 23h',
      subtitle: 'Todos os dias',
      color: 'text-purple-500'
    }
  ]

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '18:00', '18:30', '19:00',
    '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ]

  return (
    <section id="contact" className="section-padding bg-secondary-50">
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
            Faça sua <span className="text-gradient">Reserva</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Reserve sua mesa ou entre em contato conosco. Estamos ansiosos para 
            proporcionar uma experiência gastronômica inesquecível!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Reserva de Mesa
              </h3>
              <p className="text-secondary-600">
                Preencha os dados abaixo para garantir sua mesa no RestauranteBR
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Número de Pessoas *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecionar</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                    <option value="10+">Mais de 10 pessoas</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Data *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Horário *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecionar horário</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Observações
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Alguma observação especial? (aniversário, restrições alimentares, etc.)"
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${status.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Confirmar Reserva
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-secondary-50`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-secondary-700 font-medium">
                        {item.info}
                      </p>
                      <p className="text-sm text-secondary-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-primary-400 p-8 rounded-xl text-white"
            >
              <h4 className="text-2xl font-bold mb-6">Por que escolher o RestauranteBR?</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span>Avaliação 4.9/5 com mais de 1000 reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-white" />
                  <span>Ambiente acolhedor para toda família</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-white" />
                  <span>Atendimento rápido e personalizado</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-white/90">
                  <strong>Dica especial:</strong> Reserve com antecedência para garantir 
                  a melhor mesa e aproveite nossos pratos especiais sazonais!
                </p>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-lg font-bold text-secondary-900 mb-4">
                Nossa Localização
              </h4>
              <div className="bg-secondary-100 h-48 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="h-12 w-12 text-secondary-400 mx-auto mb-2" />
                  <p className="text-secondary-600">
                    Rua dos Sabores, 123<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}