import { motion } from 'framer-motion'
import { Code, Smartphone, Database, Palette, Brain, Workflow } from 'lucide-react'

const Skills = () => {
  const skillTrees = [
    {
      category: 'BACKEND',
      icon: <Code className="w-12 h-12" />,
      skills: ['C#', '.NET', 'Python', 'Django', 'PHP', 'Node.js'],
      color: '#FF6EC7'
    },
    {
      category: 'FRONTEND',
      icon: <Palette className="w-12 h-12" />,
      skills: ['React', 'Angular', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap'],
      color: '#A855F7'
    },
    {
      category: 'MOBILE',
      icon: <Smartphone className="w-12 h-12" />,
      skills: ['Android', 'Kotlin', 'Ionic', 'Java', 'Room DB'],
      color: '#00E5FF'
    },
    {
      category: 'DATABASE',
      icon: <Database className="w-12 h-12" />,
      skills: ['Oracle', 'MySQL', 'SQLite', 'Firebase', 'SQL Server'],
      color: '#FF8C42'
    },
    {
      category: 'IA & AUTO',
      icon: <Brain className="w-12 h-12" />,
      skills: ['OpenAI API', 'TensorFlow', 'Python IA', 'Scripts Auto'],
      color: '#FF6EC7'
    },
    {
      category: 'TOOLS',
      icon: <Workflow className="w-12 h-12" />,
      skills: ['Git', 'VS Code', 'Postman', 'Android Studio', 'Visual Studio'],
      color: '#A855F7'
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-7xl md:text-9xl mb-20"
          style={{ color: '#00E5FF' }}
        >
          SKILL_TREE
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillTrees.map((tree, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-8 rounded-2xl border-2 backdrop-blur cursor-pointer"
              style={{
                background: 'linear-gradient(to bottom right, #0A0A0A, #050505)',
                borderColor: 'rgba(255, 110, 199, 0.3)'
              }}
            >
              <motion.div 
                className="mb-6 flex justify-center" 
                style={{ color: tree.color }}
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {tree.icon}
              </motion.div>
              
              <h3 className="font-display text-3xl text-white text-center mb-6">
                {tree.category}
              </h3>

              <ul className="space-y-3">
                {tree.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 cursor-pointer"
                    style={{ color: '#D1D5DB' }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tree.color }}
                      whileHover={{ scale: 1.5 }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Metodologías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl border-2 backdrop-blur"
          style={{
            background: 'linear-gradient(to bottom right, rgba(10, 10, 10, 0.8), rgba(5, 5, 5, 0.8))',
            borderColor: 'rgba(0, 229, 255, 0.3)'
          }}
        >
          <h3 className="font-display text-3xl text-center mb-6" style={{ color: '#00E5FF' }}>
            METODOLOGÍAS & SOFT SKILLS
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Scrum', 'Lean', 'Design Thinking', 'Agile', 'QA Testing', 'Análisis Crítico', 'Adaptabilidad', 'Trabajo en Equipo'].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 rounded-full border-2 font-semibold cursor-pointer"
                style={{
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  borderColor: '#00E5FF',
                  color: '#00E5FF'
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
