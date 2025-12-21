export type Locale = "en" | "es";

export const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
        },

        // Home page
        home: {
            greeting: "Hi! My name is",
            title: "Full-Stack Developer in Training",
            roles: [
                "Full-Stack Developer",
                "Frontend Enthusiast",
                "Problem Solver",
                "Tech Explorer",
            ],
            description:
                "Computer Engineering student at UNAM, focused on modern web application development, from the interface to server logic. I'm interested in creating clear, functional, and well-structured software, caring for both user experience and code quality.",
            viewProjects: "View projects",
            aboutMe: "About me",
            contactMe: "Contact me",
        },

        // About page
        about: {
            title: "About me",
            bio: {
                paragraph1:
                    "I'm a Computer Engineering student with interest in full-stack development and building well-designed, functional, and maintainable software. I enjoy working on both frontend and backend, understanding how each part of the system connects to deliver a solid user experience.",
                paragraph2:
                    "I've developed projects using Python (FastAPI), React Native, and JavaScript, as well as working in Linux environments with Docker and Git. I'm especially interested in process automation, clean interface design, and workflow optimization.",
                paragraph3:
                    "Beyond technical skills, I have experience leading teams and solving problems under pressure in real environments, which has helped me develop an organized, responsible, and results-oriented mindset. I seek to keep growing as a developer, constantly learning and participating in projects where technical criteria and real impact matter.",
            },
            education: "Education",
            degree: "Computer Engineering",
            location: "Location",
            city: "Mexico City, Mexico",
            technologies: "Technologies",
        },

        // Projects page
        projects: {
            title: "Projects",
            subtitle:
                "Turning ideas into reality. If you can imagine it, you can program it.",
            featured: "Featured",
            code: "Code",
            demo: "Demo",
            moreProjects: "Want to see more projects?",
            viewGithub: "View GitHub",
            items: {
                "munal-museum": "Interactive virtual tour of the National Art Museum that allows exploring different rooms, navigating between simulated 360° views, and consulting detailed information about the artworks through interactive points of interest.",
                "fruit-classifier": "Real-time fruit classification system using a TCS34725 color sensor and an MLP neural network trained in Python, capable of predicting the detected fruit along with its confidence level.",
                "selenium-automation": "Educational web automation project developed in Python that explores interaction with real dynamic interfaces, including state detection, navigation flow control, and delay handling.",
            },
            titles: {
                "munal-museum": "Virtual Interactive Museum (MUNAL)",
                "fruit-classifier": "Fruit Classifier with Neural Network",
                "selenium-automation": "Web Automation with Selenium",
            },
        },

        // Contact page
        contact: {
            title: "Contact",
            subtitle:
                "Great ideas start with a conversation. If you want to collaborate, share a proposal, or talk about development and technology, write to me. I'm always open to creating something interesting.",
            sendMessage: "Send me a message",
            name: "Name",
            namePlaceholder: "Your name",
            email: "Email",
            emailPlaceholder: "your@email.com",
            message: "Message",
            messagePlaceholder: "Your message...",
            submit: "Send message",
            otherWays: "Other ways to contact",
            emailLabel: "Email",
            emailDesc: "Contact me directly",
            githubDesc: "Check my code",
            linkedinDesc: "Let's connect",
            successTitle: "Message sent!",
            successMessage: "Thanks for contacting me. I'll get back to you as soon as possible.",
            sendAnother: "Send another message",
            errorMessage: "There was an error sending the message. Please try again.",
        },

        // Footer
        footer: {
            designedBy: "Designed & built by me.",
            viewSource: "View source on GitHub",
        },

        // Command Menu
        commandMenu: {
            placeholder: "Type a command or search...",
            noResults: "No results found.",
            navigation: "Navigation",
            social: "Social",
            general: "General",
            copyEmail: "Copy Email",
            actions: {
                select: "Select",
                navigate: "Navigate",
                close: "Close",
            },
        },
    },

    es: {
        // Navigation
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            projects: "Proyectos",
            contact: "Contacto",
        },

        // Home page
        home: {
            greeting: "¡Hola! Mi nombre es",
            title: "Desarrollador Full-Stack en formación",
            roles: [
                "Desarrollador Full-Stack",
                "Entusiasta del Frontend",
                "Solucionador de Problemas",
                "Explorador Tech",
            ],
            description:
                "Estudiante de Ingeniería en Computación en la UNAM, enfocado en el desarrollo de aplicaciones web modernas, desde la interfaz hasta la lógica del servidor. Me interesa crear software claro, funcional y bien estructurado, cuidando tanto la experiencia de usuario como la calidad del código.",
            viewProjects: "Ver proyectos",
            aboutMe: "Sobre mí",
            contactMe: "Contáctame",
        },

        // About page
        about: {
            title: "Sobre mí",
            bio: {
                paragraph1:
                    "Soy estudiante de Ingeniería en Computación con interés en el desarrollo full-stack y en la construcción de software bien diseñado, funcional y mantenible. Disfruto trabajar tanto en el frontend como en el backend, entendiendo cómo cada parte del sistema se conecta para ofrecer una experiencia sólida al usuario.",
                paragraph2:
                    "He desarrollado proyectos usando Python (FastAPI), React Native y JavaScript, además de trabajar en entornos Linux con Docker y Git. Me interesa especialmente la automatización de procesos, el diseño de interfaces claras y la optimización de flujos de trabajo.",
                paragraph3:
                    "Además de lo técnico, tengo experiencia liderando equipos y resolviendo problemas bajo presión en entornos reales, lo que me ha ayudado a desarrollar una mentalidad organizada, responsable y orientada a resultados. Busco seguir creciendo como desarrollador, aprendiendo constantemente y participando en proyectos donde el criterio técnico y el impacto real importen.",
            },
            education: "Educación",
            degree: "Ingeniería en Computación",
            location: "Ubicación",
            city: "Ciudad de México, México",
            technologies: "Tecnologías",
        },

        // Projects page
        projects: {
            title: "Proyectos",
            subtitle:
                "Convirtiendo ideas en realidad. Si lo puedes imaginar, lo puedes programar.",
            featured: "Destacado",
            code: "Código",
            demo: "Demo",
            moreProjects: "¿Quieres ver más proyectos?",
            viewGithub: "Ver GitHub",
            items: {
                "munal-museum": "Recorrido virtual interactivo del Museo Nacional de Arte que permite explorar distintas salas, navegar entre vistas 360° simuladas y consultar información detallada de las obras mediante puntos de interés interactivos.",
                "fruit-classifier": "Sistema de clasificación de frutas en tiempo real utilizando un sensor de color TCS34725 y una red neuronal MLP entrenada en Python, capaz de predecir la fruta detectada junto con su nivel de confianza.",
                "selenium-automation": "Proyecto educativo de automatización web desarrollado en Python que explora la interacción con interfaces dinámicas reales, incluyendo detección de estados, control de flujos de navegación y manejo de delays.",
            },
            titles: {
                "munal-museum": "Museo Interactivo Virtual (MUNAL)",
                "fruit-classifier": "Clasificador de Frutas con Red Neuronal",
                "selenium-automation": "Automatización Web con Selenium",
            },
        },

        // Contact page
        contact: {
            title: "Contacto",
            subtitle:
                "Las buenas ideas empiezan con una conversación. Si quieres colaborar, compartir una propuesta o hablar de desarrollo y tecnología, escríbeme. Siempre estoy abierto a crear algo interesante.",
            sendMessage: "Envíame un mensaje",
            name: "Nombre",
            namePlaceholder: "Tu nombre",
            email: "Email",
            emailPlaceholder: "tu@email.com",
            message: "Mensaje",
            messagePlaceholder: "Tu mensaje...",
            submit: "Enviar mensaje",
            otherWays: "Otras formas de contacto",
            emailLabel: "Email",
            emailDesc: "Contáctame directamente",
            githubDesc: "Revisa mi código",
            linkedinDesc: "Conectemos",
            successTitle: "¡Mensaje enviado!",
            successMessage: "Gracias por contactarme. Te responderé lo antes posible.",
            sendAnother: "Enviar otro mensaje",
            errorMessage: "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.",
        },

        // Footer
        footer: {
            designedBy: "Diseñado y construido por mí.",
            viewSource: "Ver código en GitHub",
        },

        // Command Menu
        commandMenu: {
            placeholder: "Escribe un comando o busca...",
            noResults: "No se encontraron resultados.",
            navigation: "Navegación",
            social: "Social",
            general: "General",
            copyEmail: "Copiar Email",
            actions: {
                select: "Seleccionar",
                navigate: "Navegar",
                close: "Cerrar",
            },
        },
    },
};

// Use a more flexible type that allows string values
type DeepStringify<T> = {
    [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};

export type Translations = DeepStringify<typeof translations.en>;
