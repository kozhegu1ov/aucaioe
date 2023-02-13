const divResearch = document.getElementById("section__research-boxCard") ?? ""
const divFaq = document.getElementById("section__maInTeachingFaq-boxCard")
const divProjects = document.querySelector(".section__projects-boxCard") ?? ""
const divWhyChooseUs = document.getElementById("section__whyChooseUs-boxCard") ?? ""

const arrResearchText = [
  {
    title:
      "How reflective teaching manifests in the works of Kyrgyz, English, and Russian language teachers in school # 8.",
    text: `Reflective teaching, which has become a key component of teacher pedagogy, remains an elusive idea, owing to the fact that it can only be achieved when instructors are given the opportunity to expand their professional knowledge and demonstrate reflective teaching practices. The present study is aimed at examining English, Kyrgyz, and Russian language teachers’ reflection in-action, reflection on-action, and their level of reflection and the way. The study was conducted in three phases. In the first phase, data were elicited from 10 language
        teachers using a semi - structured interview. In the second phase, 5 teachers volunteered s among the interviewed teachers and their teaching practices were observed. In the third phase of the study, data were elicited from 5 language teachers using a post - observation
        follow-up conversation. The study data categorized those findings according to Schön’s (1987) concepts of reflection in action and reflection on the action; and Danielson’s (1977) hierarchical levels of reflection. Overall this study was conducted on a sample of 10
        language teachers in Naryn, public secondary school # 8. Keywords: Reflective teaching, teacher reflection, teacher researcher, levels of reflection.
        `,
  },
  {
    title: "The Educational Aspirations of Girls Studying English at Madrasah",
    text: `The study aimed to investigate the motivational factors for learning English among
        "Khayrinso" madrasah students in Uzgen [Osh region, Kyrgyzstan]. Specifically, the study
        analyzed the following factors for Girls choosing the madrasah education: the role of family,
        schooling, social-cultural context. Also, the results present the opportunities that exist for
        English Language Learning for female students in the madrasah context.
        The data for this study was collected and analyzed via mixed-method: quantitative-a
        survey for 30 Uzgen Madrasah English Access Microscholarship Program students and
        qualitative interviews among three madrasah teachers and three female parents who were
        selected through a simple random method.
        Keywords: ELL in Islamic Education, Girls in Madrasah, Access program
        `,
  },
  {
    title:
      "The role of school principal in shaping and upholding school culture at Sapat International Educational Institution",
    text: `For the past 30 years Sapat International Educational Institution has been demonstrating
        tangible successes in the field of education with its students winning prestigious international as well as national Olympiads. Furthermore, being a school network with its branches in seven regions of Kyrgyzstan, Sapat has been offering quality education across the country - not just in the capital city of Bishkek. The current study aimed to examine the Sapat network through the prism of the school culture. Specifically, the study looks at the Sapat school model from the perspective of school principals as the ones who shape and uphold the school culture. The research used qualitative methods and analyzed data collected from in depth interviews with seven Sapat school principals. It was found out that as a school network, Sapat International Educational Institution has a profound school culture. Overwhelming number of principals noted the importance of character education, multilingual education and language as a key to identity. They also viewed teachers as role models, and observed that Turkish culture, residential life and single-gender education played an essential role in establishing a unique Sapat school culture. This study focused primarily on a principal’s role however it would have equally benefited from insights of other stakeholders of school and school culture such as parents, students and teachers. Another limitation was the fact that this research was conducted by an “insider” which might have not elucidated a full range of issues as some of core ideas of Sapat culture might have been simply taken for granted by the participants. Overall the study confirms the unique culture that distinguishes Sapat schools in Kyrgyzstan.
        Keywords: school culture, principal’s role
        `,
  },
  {
    title:
      "Exploring teaching methods and practices for student engagement in online English learning",
    text: `The current research aims to study the types of teaching methods and practices to engage students in learning English online. Specifically, the study will explore the methods which teachers employ to ensure engagement of school students in the online English lessons in Kyrgyzstan during COVID-19 pandemic period and beyond. In conclusion, I offered suggestions and recommendations for improvement of online education at schools in Kyrgyzstan.`,
  },
  {
    title:
      "Implementation of Differentiated Instruction in a Rural Kyrgyz School",
    text: `This paper explores the concepts and techniques for using differentiated instruction in
        English, Kyrgyz, and Russian language classrooms at the primary and secondary education
        levels of rural Kyrgyzstan schools. The topics and concepts explored in this paper are based
        on scholarly articles, peer reviewed journals and qualitative research of my own. My
        qualitative research includes data from interviews with language teachers at a school in rural
        Kyrgyzstan, as well as observations of their lessons. The qualitative data I collected assesses
        currently how, if at all, English, Kyrgyz, and Russian language teachers in rural Kyrgyzstan
        schools use differentiated instruction to better include and engage students in their lessons.
        In addition to the qualitative evidence I collected from interviews and lesson
        observations, this paper also reviews academic literature on the use of differentiated
        instruction and how its use in the classroom differs from more traditional and standardized
        one-size-fits-all teaching methods. This paper aims to serve as a resource for all teachers in
        Kyrgyzstan in search of the most optimal ways to implement differentiated instruction in
        language lessons. This is most true for teachers who work in rural Kyrgyzstan schools where
        resources tend to be most scarce compared to medium and large sized towns and cities.
        Keywords: differentiated instruction, differentiation, inclusive instruction,
        implementation, inclusive learning, “types of differentiated instruction,” secondary
        education, Kyrgyzstan education, “diversity, equity and inclusion (DEI)” rural education,
        methods for teaching diverse learners, heterogenous teaching
        `,
  },
];

const arrProjects = [
  {
    title: "December 2020",
    text: `OSUN MENTORING CERTIFICATE
        The Mentoring Certificate Workshop, includes four seminars on mentoring practice and
        demonstration of mentoring skills by guiding one mentee through two mentoring cycles. Each
        mentoring cycle required viewing a lesson plan and video, providing feedback according to the
        Abridged CLEAR rubric using Google Forms, and using reflective and Growth Mindset methods when
        dialoguing with the mentee.Mentees participated in two Mentoring Cycles, which required them to
        submit a lesson plan and its corresponding recording to a mentor, use the Abridged CLEAR rubric
        to reflect on their practice via Google Forms, and discuss each lesson in order to grow as
        professionals.`,
    imgUrl: "/assets/images/projects.jpeg",
  },
  {
    title: "April-May, 2021",
    text: `For participating in a mentoring workshop, which included four workshops on the practice of
        mentoring and a demonstration of mentoring skills by taking one mentee through two cycles of
        mentoring.
        Each mentoring cycle required viewing a lesson plan and video, providing feedback according to
        an abbreviated CLEAR rubric using Google Forms, as well as using reflection and Developmental
        hinking techniques in dialogue with the mentee..`,
    imgUrl: "/assets/images/projects.jpeg",
  },
  {
    title: "Digital Pedagogy, October, 2020- July, 2021",
    text: `The Supporting Public School Teachers in Digital Pedagogy project of the IOE aims to develop
    public school teachers in Kyrgyzstan with enhanced digital pedagogical skills to improve remote
    and blended instruction in their classrooms and support such improvement among their peers, with
    broader government support. It is a 4-week online professional development and guided practicum
    initiative in English, Kyrgyz, and Russian on digital pedagogy for teachers working in the
    public schools of the country. Instruction included 8 hours of interactive seminars, 6 hours of
    guided practice with a peer mentor, 2 hours of orientation and reflection, and asynchronous
    learning activities.`,
    imgUrl: "/assets/images/projects.jpeg",
  },
  {
    title: "MTP project",
    text: "8 weeks of training for ICT teachers with the Institute of Education at AUCA.",
    imgUrl: "/assets/images/projects.jpeg",
  },
];

const arrWhyChooseUs = [
  {
    title: "Teacher Education",
    text: "The MA in Teaching (MAT) is the flagship graduate degree program of IOE. It is the only teacher education program in Central Asia that offers an American Master’s Degree from Bard College in New York, alongside a graduate degree from Kyrgyz Ministry of Education. This is a blended learning program with a significant focus on school-based mentored practice, innovative student-centered instructional management and enhancement of research skills of candidates.  The program is designed to accommodate both pre-service and in-service teachers.",
    imgUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Professional Development",
    text: "Working with partnering schools, IOE offers customized workshops on school culture and professional learning communities. In addition, the institute offers – in blended learning format – semester-long instructional management mentoring for in-service teachers.",
    imgUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Global Learning",
    text: "Education and Development in a Global Era (EDGE) – is a spring 2019 undergraduate course offering from IOE that is designed to introduce students to some of the key themes and critical issues in international educational development. The course has been designed to act as a platform that brings together comparative perspectives on pressing global challenges to education from a select group of partnering higher education institutions in Europe and North America",
    imgUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Research",
    text: "Recent and on-going research initiatives include: higher education and youth perspectives on sustainable development in Kyrgyzstan, employability and role of soft-skills in Central Asian post-secondary context, politics of private-public partnerships in basic education, and implications of online-mentoring for pre and in-service teacher education programs.",
    imgUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Engagements",
    text: "Education in 21st century is inevitably inter-disciplinary and transcultural. Within AUCA, IOE collaborates with other academic departments and program units to offer a broad range of curricular offering. Externally, IOE engages with partners from Government Agencies, Multilateral Development Organizations, Private Foundations, Schools and Higher Education Institutions –both in Kyrgyzstan and abroad.",
    imgUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const arrFaq = [
  {
    title: "How do I apply?",
    text: "Submit the completed application package by the deadline March 1. See the list of required documents here. Shortlisted candidates will be invited for an interview."
  },
  {
    title: "When do I apply?",
    text: "Applications are accepted from November to March of each year. Academic year begins in June."
  },
  {
    title: "What is a certificate of equivalency?",
    text: "A document issued by the Kyrgyz  Ministry of Education confirming that your degree is equivalent to the Kyrgyz BA degree and that you can apply for a master's. If you graduated outside of Kyrgyzstan, Kazakhstan, Tajikistan, Russia and Belarus, you need to obtain this certificate."
  },
  {
    title: "Do I need to submit any test (TOEFL/IELTS) results?",
    text: "Do I need to submit any test (TOEFL/IELTS) results? It is not required to submit, however, if you have one available please feel free to attached it to your application."
  },
  {
    title: "What type of scholarship is available?",
    text: "IOE is pleased to announce 100% tuition scholarships for public school teachers in partnership with the US Embassy in Bishkek.  IOE also offers IOE Fellowships, which offer qualifying teacher candidates from any school the possibility of a 10-25% tuition scholarship."
  },
  {
    title: "Can I study fully online?",
    text: "No, you are required to come to campus for the summer semester and for 2-3 days for the on site component for fall and spring semesters."
  },
]

const handleOpenDropDownText = (name) => {
  const card = document.getElementById(name);
  card.classList.toggle("dropDownOpen");
};

arrResearchText.map((item, index) => {
  return (divResearch.innerHTML += `<div class="card-dropDownText" id='section__research-card${index}' onClick='handleOpenDropDownText("section__research-card${index}")'>
    <div class="card-dropDownText__boxTop">
        <h4>${item.title}</h4>
        <img src="/assets/images/arrow-down.png" alt="">
    </div>
    <p>
    ${item.text}
    </p>
</div>`);
});

arrFaq.map((item, index) => {
  return (divFaq.innerHTML += `<div class="card-dropDownText" id='section__maInTeachingFaq-card${index}' onClick='handleOpenDropDownText("section__maInTeachingFaq-card${index}")'>
    <div class="card-dropDownText__boxTop">
        <h4>${item.title}</h4>
        <img src="/assets/images/arrow-down.png" alt="">
    </div>
    <p>
    ${item.text}
    </p>
</div>`);
});

arrProjects.slice(0, 2).map((item) => {
  return (divProjects.innerHTML += `<div class="section__projects-card">
    <h4>${item.title}</h4>
    <p>
    ${item.text}
    </p>
    <img src=${item.imgUrl}
        alt="">
</div>`);
});

arrWhyChooseUs.map((item) => {
  return (divWhyChooseUs.innerHTML += `
  <div class="cardInfo">
    <div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
    <img src="${item.imgUrl}" alt="">
  </div>
  `);
});
