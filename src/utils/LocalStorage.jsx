localStorage.clear();
const employees = [
    {
        "id": 1,
        "name": "Bhavyaraj",
        "email": "employee1@itfirm.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Develop Homepage UI",
                "description": "Create and style the homepage using React.js.",
                "date": "15 Mar 2023",
                "category": "Frontend Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix Navbar Bug",
                "description": "Ensure the navbar remains fixed on scroll.",
                "date": "10 Feb 2024",
                "category": "Frontend Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Improve Page Load Speed",
                "description": "Optimize images and minify CSS & JS files.",
                "date": "22 Jan 2024",
                "category": "Performance Optimization",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
       
    },
    {
        "id": 2,
        "name": "Rohan",
        "email": "employee2@itfirm.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Develop REST API for Users",
                "description": "Create login, registration, and profile APIs using Node.js.",
                "date": "05 Apr 2023",
                "category": "Backend Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix Database Connection Issue",
                "description": "Resolve connection pool issues in PostgreSQL.",
                "date": "19 Feb 2024",
                "category": "Database",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Implement JWT Authentication",
                "description": "Secure API endpoints using JSON Web Tokens.",
                "date": "10 Jan 2024",
                "category": "Security",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        
    },
    {
        "id": 3,
        "name": "Jay Patel",
        "email": "employee3@itfirm.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 3,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Create Responsive Dashboard",
                "description": "Design an admin panel with responsive tables and charts.",
                "date": "18 Jun 2023",
                "category": "Frontend Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Integrate Payment Gateway",
                "description": "Add PayPal and Stripe payment options.",
                "date": "09 Mar 2024",
                "category": "Backend Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Fix Cart Issues",
                "description": "Resolve item duplication issue in the shopping cart.",
                "date": "15 Feb 2024",
                "category": "Frontend Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
       
    },
    {
        "id": 4,
        "name": "Khushi",
        "email": "employee4@itfirm.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Test Login Functionality",
                "description": "Verify login works correctly with valid and invalid inputs.",
                "date": "25 Jan 2024",
                "category": "Quality Assurance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Check Website for Broken Links",
                "description": "Run automated tests to detect broken links.",
                "date": "08 Feb 2024",
                "category": "Quality Assurance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Verify Mobile Responsiveness",
                "description": "Ensure all pages display correctly on mobile devices.",
                "date": "14 Mar 2024",
                "category": "Quality Assurance",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        
    },
    {
        "id": 5,
        "name": "Keya",
        "email": "employee5@itfirm.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Deploy Website on AWS",
                "description": "Set up EC2 and deploy the frontend and backend.",
                "date": "03 Feb 2024",
                "category": "DevOps",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Configure SSL Certificate",
                "description": "Set up HTTPS using Let's Encrypt.",
                "date": "12 Jan 2024",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }, 
            {
                "title": "Implement CI/CD Pipeline",
                "description": "Set up GitHub Actions for automated deployment.",
                "date": "18 Mar 2024",
                "category": "DevOps",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
      
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@itfirm.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    return {
        employees: JSON.parse(localStorage.getItem('employees')) || [],
        admin: JSON.parse(localStorage.getItem('admin')) || [],
    };
}
