export const siteConfig = {
    name: "Sebastián Vázquez",
    fullName: "Jesús Sebastián Vázquez Zarco",
    title: "Desarrollador Full-Stack en formación",
    description:
        "Estudiante de Ingeniería en Computación en la UNAM, enfocado en el desarrollo de aplicaciones web modernas, desde la interfaz hasta la lógica del servidor. Me interesa crear software claro, funcional y bien estructurado, cuidando tanto la experiencia de usuario como la calidad del código.",
    university: "Universidad Nacional Autónoma de México",
    faculty: "FES Aragón",
    semester: "6º semestre",
    email: "sebastianvazquez36@aragon.unam.mx",
    links: {
        github: "https://github.com/itsebasvz",
        linkedin: "https://www.linkedin.com/in/jsebastianvz",
    },
};

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "munal-museum",
        title: "Museo Interactivo Virtual (MUNAL)",
        description:
            "Recorrido virtual interactivo del Museo Nacional de Arte que permite explorar distintas salas, navegar entre vistas 360° simuladas y consultar información detallada de las obras mediante puntos de interés interactivos.",
        technologies: ["Vite", "JavaScript", "HTML5", "CSS3", "Bootstrap 5"],
        github: "https://github.com/itsebasvz/munal-interactive-museum",
        demo: "https://itsebasvz.github.io/munal-interactive-museum/",
        featured: true,
    },
    {
        id: "fruit-classifier",
        title: "Clasificador de Frutas con Red Neuronal",
        description:
            "Sistema de clasificación de frutas en tiempo real utilizando un sensor de color TCS34725 y una red neuronal MLP entrenada en Python, capaz de predecir la fruta detectada junto con su nivel de confianza.",
        technologies: ["Python", "scikit-learn", "Machine Learning", "Arduino", "ESP32"],
        github: "https://github.com/itsebasvz/redneuronalrgb",
        featured: true,
    },
    {
        id: "selenium-automation",
        title: "Automatización Web con Selenium",
        description:
            "Proyecto educativo de automatización web desarrollado en Python que explora la interacción con interfaces dinámicas reales, incluyendo detección de estados, control de flujos de navegación y manejo de delays.",
        technologies: ["Python", "Selenium WebDriver", "Tkinter", "Web Automation"],
        github: "https://github.com/itsebasvz/BotInsta",
        featured: true,
    },
];

export const skillCategories = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
    },
    {
        name: "Backend",
        skills: ["Python", "FastAPI"],
    },
    {
        name: "Herramientas & Entorno",
        skills: ["Git", "Docker", "Linux"],
    },
];
