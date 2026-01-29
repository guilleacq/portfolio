import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Git',
  'Figma', 'Docker', 'AWS', 'GraphQL'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Image/Avatar */}
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square max-w-md mx-auto md:mx-0 relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl -rotate-3" />
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl rotate-3" />
              
              {/* Avatar placeholder */}
              <div className="relative bg-placeholder rounded-2xl w-full h-full flex items-center justify-center overflow-hidden border border-border">
                {/* <div className="text-8xl font-heading font-bold text-placeholder-foreground">
                  GA
                </div> */}
                {/* If you have an actual image, replace the above div with: */}
                <img 
                  src="/pfp.png" 
                  alt="Guillermo Acquistapace"
                  className="w-full h-full object-cover"
                />
               
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              variants={itemVariants}
              className="text-accent font-medium text-sm uppercase tracking-wider"
            >
              Sobre mí
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6"
            >
              Creando experiencias
              <br />
              digitales con pasión
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 text-muted">
              <p>
                Soy un desarrollador web full stack con más de 5 años de experiencia
                creando aplicaciones web modernas y escalables. Me especializo en
                React, Node.js y tecnologías cloud.
              </p>
              <p>
                Mi enfoque combina código limpio con diseño centrado en el usuario,
                asegurando que cada proyecto no solo funcione perfectamente, sino
                que también ofrezca una experiencia memorable.
              </p>
              <p>
                Cuando no estoy programando, me encontrarás explorando nuevas
                tecnologías, contribuyendo a proyectos open source o tomando
                fotografías.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="font-heading font-semibold mb-4">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background rounded-full text-sm font-medium text-muted hover:text-foreground hover:bg-accent/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={itemVariants} className="mt-8">
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white rounded-full font-medium hover:bg-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Descargar CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

