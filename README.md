# Perfect Fit Resumes/CVs
Perfect Fit Resumes/CVs is a web application designed to help job seekers create highly customized resumes and CVs that perfectly align their unique experiences and skills with the specific requirements of each job application. Using advanced Hugging Face Meta Llama 3 API, the platform takes in personal career history, relevant skills, accomplishments, and qualifications to generate tailored documents. These customized resumes and CVs are optimized to successfully pass through automated resume parsers, stand out to hiring managers, and maximize the chances of securing job interviews. 

Final Demo Document: https://docs.google.com/document/d/1ZS103-cMoNJHkti2vNECUs_GlPOZ-jaO4jYbRhm2YII/edit?usp=sharing 

<!-- ## Usage
1. Go in folder src, run the test.py 
```bash
python3 main.py
```
2. go in folder react-app, run
```bash
npm run dev
```
3. go in browser using link: http://localhost:5173/ -->

## Features (highest priority to lowest priority)
1. As a user, I want to match my skills and experiences to specific job descriptions, so I can create a resume that aligns perfectly with each job application. (Story points: 5)
2. As a user, I want to input my resume/cv, so the algorithm can pick out my experiences and skills to match the job (Story points: 3)
3. As a user, I want to input the job details, so the algorithm can adjust the resume/cv accordingly (Story points: 3)
4. As a user, I want to receive my tailored resume/cv, so I can submit it to the job application (Story points: 3)
5. As a user, I want to be able to choose to create a resume, cv, or both, so that that I get exactly what I want (Story points: 1)
6. As a user, I want to be have many different methods of input for my resume/cv, so it is convenient for me (Story points: 4)
7. As a user, I want to export my customized resume and cover letter in multiple formats, so I can meet the requirements of different job applications easily (Story points: 4)
8. As a new user, I want to register a username and password, so that the system remembers my information. (Story points: 4)
9. As a user, I want to be able to view my personal information, so that I know the system has my correct information to create the resume or cover letter. (Story points: 3)
10. As a user, I want to be able to edit my personal information, so that the information is always up to date. (Story points: 3)
11. As a returning user, I want to sign in to my account so that my profile doesn't go to waste after a single use (Story points: 3)
12. As a user without a resume, I want to be able to create a resume with guidance of AI, so that I can have the best resume for my job application. (Story points: 5)
13. As a user, I want to be able to favorite resumes/CVs and cover letter, so I can store view them later and take pointers out of it (User points: 3)
14. As a user, I want to be able to view my list of favorited of resumes/CVs and cover letter, so I can reapply using relevant information and improve them (User points: 3)
15. As a user, I want to be able to remove my favorited resumes/CVs and cover letter from my favorites, so it doesn't clutter up my favorites with outdated resumes/CVs and cover letters (User points: 3)

**Total story points: 50**<br>
**Completed story points: 50**<br>
**Remaing story points: 0**<br>

## Non-functional Requirements
- Safety and security requirement
    - The information are encrypted
    - Aim to not have any information saved once finished its use
- Performance
    - The website should not take more than 5 seconds to load
    - The resume generation should not take more than 10 seconds to complete
- Scalability and maintainability
    - The system should be able to handle 1000+ requests at simultaneously
    - The codebase and tests should be easily maintained and update
- Uptime
    - The website and system should be up and usable 99.9% of the time
- Compatibility
    - Compatible with most major browsers (Chrome, Firefox, Safari, Edge)

## Technologies
* Python
* ReactJS
* SQLite
* Hugging Face Meta Llama 3 API
* Axios/Flasks

## Installation and Usage

### Requirements
- Git
- Node.js
- npm

### 1. Clone the repo
Make sure to replace "username" with your Github username. 
```bash
git clone https://github.com/username/Perfect-Fit-Resumes-CVs.git.
cd Perfect-Fit-Resumes-CVs
```

### 2. Install dependencies
Frontend:
```bash
cd ../react-app
npm install
```

Backend:
```bash
pip install inference-client
pip install python-dotenv
```

### 3. Start backend
```bash
cd ../src
```

Windows:
```bash
python main.py
```

Mac:
```bash
python3 main.py
```

### 4. Start frontend
```bash
cd ../react-app
npm run dev
```

### 5. Access the website on: `http://localhost:5173/`.

## Architecture diagram
![Architecture Diagram](/Burndown/cs179karchitecturefinal.jpg)

## Burndown Chart
![Architecture Diagram](/Burndown/BDC0826.png)

## Database Schema
### Entity Relationship Diagram
![Architecture Diagram](/Burndown/ERD0821.png)
### Schema Graph
![Architecture Diagram](/Burndown/schema0822.png)

## Team Members
* [Minh Ho](https://github.com/mnvho)
* [Xing Shi](https://github.com/xing-coder)
* [Michael Deriss](https://github.com/MichaelJDeriss)
* [Alan Xu-Zhang](https://github.com/Beodrag)
