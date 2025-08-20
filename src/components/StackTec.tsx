import React from "react";
import "../styles/stackTec.css";

interface TechItem {
  name: string;
  icon: string;
  category: string;
}

const techStack: TechItem[] = [
  { name: "HTML5", icon: "/img/html5-icon.png", category: "Frontend" },
  { name: "CSS3", icon: "/img/css3-icon.webp", category: "Frontend" },
  { name: "Tailwind", icon: "/img/tailwind-icon.png", category: "Frontend" },
  {
    name: "JavaScript",
    icon: "/img/javascript-icon.png",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "/img/typescript-icon.png",
    category: "Frontend",
  },
  { name: "React", icon: "/img/react-icon.webp", category: "Frontend" },
  { name: "Angular", icon: "/img/angular-icon.png", category: "Frontend" },
  { name: "Java", icon: "/img/java-icon.png", category: "Backend" },
  { name: "Node.js", icon: "/img/nodejs-icon.webp", category: "Backend" },
  { name: "C#", icon: "/img/csharp-icon.webp", category: "Backend" },
  { name: "PHP", icon: "/img/php-icon.webp", category: "Backend" },
  { name: "Laravel", icon: "/img/laravel-icon.png", category: "Backend" },
  { name: "Kotlin", icon: "/img/kotlin-icon.png", category: "Mobile" },
  { name: "Java", icon: "/img/java-icon.png", category: "Mobile" },
  { name: "React Native", icon: "/img/react-icon.webp", category: "Mobile" },
  {
    name: "SQL Server",
    icon: "/img/sqlserver-icon.png",
    category: "Bases de Datos",
  },
  { name: "MySQL", icon: "/img/mysql-icon.png", category: "Bases de Datos" },
  { name: "SQLite", icon: "/img/sqlite-icon.png", category: "Bases de Datos" },
  { name: "Oracle", icon: "/img/oracle-icon.png", category: "Bases de Datos" },
    { name: "Mongo DB", icon: "/img/mongo-icon.png", category: "Bases de Datos" },
  { name: "Git", icon: "/img/git-icon.png", category: "Herramientas" },
];

const StackTec: React.FC = () => {
  // Filtrar solo las categorías deseadas
  const filteredCategories = [
    "Frontend",
    "Mobile",
    "Backend",
    "Bases de Datos",
  ];
  const filteredTechStack = techStack.filter((tech) =>
    filteredCategories.includes(tech.category)
  );

  // Agrupar tecnologías por categoría
  const techByCategory = filteredTechStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, TechItem[]>);

  return (
    <div className="stack-tec-container">
      <h1 className="stack-title">Nuestro Stack Tecnológico</h1>
      <p className="stack-description">
        Estas son las tecnologías que utilizamos para crear soluciones
        innovadoras y de alta calidad.
      </p>

      <div className="categories-container">
        {Object.entries(techByCategory).map(([category, technologies]) => (
          <div key={category} className="category">
            <h3 className="category-title">{category}</h3>
            <div className="tech-grid">
              {technologies.map((tech) => (
                <div key={tech.name} className="tech-card">
                  <div className="tech-icon">
                    <img src={tech.icon} alt={tech.name} />
                  </div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackTec;
