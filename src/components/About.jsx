import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Heart, Leaf } from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: Award,
      number: '15+',
      text: 'Anos de Experiência',
      color: 'text-primary-500'
    },
    {
      icon: Users,
      number: '50K+',
      text: 'Clientes Satisfeitos',
      color: 'text-blue-500'
    },
    {
      icon: Heart,
      number: '4.9',
      text: 'Avaliação Média',
      color: 'text-red-500'
    },
    {
      icon: Leaf,
      number: '100%',
      text: 'Ingredientes Frescos',
      color: 'text-green-500'
    }
  ]

  const values = [
    {
      title: 'Qualidade Premium',
      description: 'Selecionamos apenas os melhores ingredientes para criar pratos excepcionais.',
      icon: Award
    },
    {
      title: 'Experiência Única',
      description: 'Cada visita é uma jornada gastronômica memorável e personalizada.',
      icon: Heart
    },
    {
      title: 'Sustentabilidade',
      description: 'Comprometidos com práticas sustentáveis e ingredientes orgânicos.',
      icon: Leaf
    },
    {
      title: 'Tradição Familiar',
      description: 'Receitas tradicionais passadas de geração em geração.',
      icon: Users
    }
  ]

  return (
    <section id="about" className="section-padding bg-secondary-50">
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
            Nossa <span className="text-gradient">História</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Há mais de 15 anos, o RestauranteBR vem transformando momentos especiais 
            em experiências gastronômicas inesquecíveis, combinando tradição familiar 
            com inovação culinária.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-900">
                Paixão pela Gastronomia Brasileira
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Nascemos do sonho de uma família apaixonada por culinária, que decidiu 
                compartilhar os sabores autênticos do Brasil com o mundo. Nossa jornada 
                começou em uma pequena cozinha, onde cada receita era preparada com amor 
                e dedicação.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Hoje, somos reconhecidos como referência em gastronomia brasileira 
                contemporânea, mantendo sempre nossa essência familiar e o compromisso 
                com a excelência em cada prato servido.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-xl font-bold text-secondary-900 mb-4">
                Nossa Missão
              </h4>
              <p className="text-secondary-600">
                Proporcionar experiências gastronômicas únicas que celebrem a 
                rica cultura culinária brasileira, criando momentos especiais 
                para nossos clientes através de sabores autênticos e atendimento excepcional.
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Interior do RestauranteBR"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-primary-500 p-6 rounded-xl shadow-lg text-white"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Anos de Tradição</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg"
              >
                <Award className="h-8 w-8 text-primary-500" />
              </motion.div>
            </div>

            <div className="absolute top-4 -left-4 w-32 h-32 bg-primary-100 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 right-4 w-24 h-24 bg-secondary-200 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-full bg-secondary-50 mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-600 font-medium">
                {stat.text}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            Nossos <span className="text-gradient">Valores</span>
          </h3>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Princípios que guiam cada decisão e cada prato que servimos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="inline-flex p-4 bg-primary-50 rounded-full mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="text-xl font-bold text-secondary-900 mb-4">
                {value.title}
              </h4>
              <p className="text-secondary-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}