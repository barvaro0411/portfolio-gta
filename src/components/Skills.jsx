import { 
  SiCsharp, SiDotnet, SiPython, SiDjango, SiPhp, 
  SiReact, SiAngular, SiJavascript, SiHtml5, SiCss3, SiBootstrap,
  SiKotlin, SiAndroid, 
  SiOracle, SiMysql, SiSqlite, SiFirebase,
  SiGit, SiVisualstudiocode, SiPostman, SiAndroidstudio
} from 'react-icons/si'
import { Brain } from 'lucide-react'

const skillTrees = [
  {
    category: 'BACKEND',
    icon: <Code className="w-12 h-12" />,
    skills: [
      { name: 'C#', icon: <SiCsharp /> },
      { name: '.NET', icon: <SiDotnet /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'PHP', icon: <SiPhp /> },
    ],
    color: '#FF6EC7'
  },
  // ... resto con iconos
]

// En el render:
{tree.skills.map((skill, i) => (
  <motion.li key={i} className="flex items-center gap-3">
    <span style={{ color: tree.color }}>{skill.icon}</span>
    {skill.name}
  </motion.li>
))}
