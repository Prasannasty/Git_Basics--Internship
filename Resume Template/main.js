class ProjectsSection {
    constructor(projects, containerId) {
        this.projects = projects;
        this.container = document.getElementById(containerId);
    }

    render() {
        this.projects.forEach(project => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="project-title">${project.title}</span> | ${project.stack} ${project.github ? `<br><a href="${project.github}">Github</a>` : ""}`;
            const ul = document.createElement('ul');
            project.details.forEach(detail => {
                const detailLi = document.createElement('li');
                detailLi.textContent = detail;
                ul.appendChild(detailLi);
            });
            li.appendChild(ul);
            this.container.appendChild(li);
        });
    }
}

class SkillsSection {
    constructor(skills, containerId) {
        this.skills = skills;
        this.container = document.getElementById(containerId);
    }

    render() {
        this.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            this.container.appendChild(li);
        });
    }
}

class ActivitiesSection {
    constructor(activities, containerId) {
        this.activities = activities;
        this.container = document.getElementById(containerId);
    }

    render() {
        this.activities.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = activity;
            this.container.appendChild(li);
        });
    }
}

const projects = [
    {
        title: "Virtual Wardrobe",
        stack: "Spring Boot, React, Spring Security, MySQL, AWS",
        github: "#",
        details: [
            "Developed a full-stack web app for a virtual wardrobe where users can upload and manage clothing images.",
            "Implemented Spring Security for secure authentication and AWS S3 for image storage.",
            "Designed a React frontend to help users view, select outfits, and get clothing recommendations.",
            "Built a community page for selling, renting, and donating clothes, with a contact feature.",
            "Conducted integration testing with JUnit to validate the interaction between different components of the application."
        ]
    },
    {
        title: "Newsify",
        stack: "React, News API",
        github: "",
        details: [
            "Developed a React-based application that fetches and displays news articles from the News API.",
            "Enabled users to choose news categories for personalized content.",
            "Designed a user-friendly interface to display news headlines and links to full articles.",
            "Utilized React hooks for state management and lifecycle operations."
        ]
    }
];

const technicalSkills = [
    "Languages: Java, SQL, HTML, CSS, JavaScript",
    "Frameworks: Spring Boot, React.js (Beginner)",
    "Database: MySQL",
    "Concepts: Object-Oriented Programming, Data Structures and Algorithms"
];

const activities = [
    "Participated in a state-level hackathon organized by Google Developer Student Clubs (GDSC).",
    "Represented my school in the state-level chess competition.",
    "Secured 1st place in a subdivision-level volleyball competition as part of my team."
];

// Render sections when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsSection(projects, 'projects-list').render();
    new SkillsSection(technicalSkills, 'skills-list').render();
    new ActivitiesSection(activities, 'activities-list').render();
});