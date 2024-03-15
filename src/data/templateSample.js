 const sampleTemplateData = {
    "personal_details": {
        id: "personal_details",
        title: "Personal Details",
        detail: {
            city: "New York",
            country: "USA",
            email: "john.doe@example.com",
            firstName: "John",
            jobTitle: "Software Engineer",
            lastName: "Doe",
            phone: "+1 (555) 123-4567",
            state: "NY"
        },
        links: [
            { id: 1, title: "LinkedIn", linkUrl: "https://linkedin.com/in/johndoe" },
            { id: 2, title: "GitHub", linkUrl: "https://github.com/johndoe" }
        ]
    },

    "work_experience": {
        id: "work_experience",
        title: "Work Experience",
        detail: [
            {
                id: 1,
                company: "ABC Corp",
                jobTitle: "Senior Software Engineer",
                startDate: "2018-01-01",
                endDate: "2022-12-31",
                description: "Lead a team of developers in the development of...",
                location: "New York, USA"
            },
            {
                id: 2,
                company: "XYZ Corp",
                jobTitle: "Software Engineer",
                startDate: "2015-06-01",
                endDate: "2017-12-31",
                description: "Contributed to the development of...",
                location: "San Francisco, USA"
            }
        ],
    },

    "projects": {
        id: "projects",
        title: "Projects",
        detail: [
            {
                id: 1,
                name: "Project X",
                position_title:"SWE",
                description: "Developed a web application using React...",
                startDate: "2020-03-01",
                endDate: "2021-05-31",
                project_live_link: "https://example.com/project-x",
                project_code_link: "https://github.com/example/project-x"
            },
            {
                id: 2,
                name: "Project Y",
                description: "Built a RESTful API using Node.js and Express...",
                startDate: "2019-01-01",
                endDate: "2019-12-31",
                project_live_link: "https://example.com/project-y",
                project_code_link: "https://github.com/example/project-y"
            }
        ],
    },

    "education": {
        id: "education",
        title: "Education",
        detail: [
            {
                id: 1,
                institution: "University of ABC",
                degree: "Bachelor of Science in Computer Science",
                startDate: "2011-09-01",
                endDate: "2015-06-30",
                location: "New York, USA"
            }
        ],
    },

    "achievements": {
        id: "achievements",
        title: "Achievements",
        detail: [
            { id: 1, awarded_year: "2020", award_name: "Employee of the Month", awarded_by: "ABC Corp" },
            { id: 2, awarded_year: "2017", award_name: "Hackathon Winner", awarded_by: "XYZ Corp" }
        ],
    },

    "skills": {
        id: "skills",
        title: "Skills",
        detail: ["JavaScript", "React", "Node.js", "HTML/CSS", "Python", "SQL"],
    },

    "other": {
        id: "other",
        title: "Other",
        detail: "Languages: English (Native), Spanish (Intermediate)"
    }
};

export {sampleTemplateData}