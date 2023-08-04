
//smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((ele) => observer.observe(ele));

// Front-end
var frontBtn1 = document.getElementById('frontBtn1');
var frontBtn2 = document.getElementById('frontBtn2');
var frontBtn3 = document.getElementById('frontBtn3');
var frontBtn4 = document.getElementById('frontBtn4');
var windowNameFront = document.getElementById('windowNameFront');

var frontProjectDesc = document.getElementById('frontProjectDesc');
frontBtn1.addEventListener('click',function(){frontChangeImg1()});
frontBtn2.addEventListener('click',function(){frontChangeImg2()});
frontBtn3.addEventListener('click',function(){frontChangeImg3()});
frontBtn4.addEventListener('click',function(){frontChangeImg4()});

var logoES = document.getElementById('logoES');
var logoKF = document.getElementById('logoKF');
var logoMGB = document.getElementById('logoMGB');
var logoDL = document.getElementById('logoDL');
function frontChangeImg1() {
    frontProjectDesc.innerHTML='✓ Built Vue components in Nuxt.js apps integrated with Storyblok headless CMS for the company\'s web pages and design system. Ensured seamless responsiveness for both mobile and desktop views, improving the overall user experience.<br>\
    ✓ Testing, identifying, and resolving bugs within the APIs for the company\'s Django and Vue based website.<br>\
    ✓ Engaged in thorough code reviews in different microservices GitHub repositories, and extensively used Git version control and collaborated with team members to fix bugs before version updates.';
    windowNameFront.innerHTML='SWE Intern'
    logoES.style.display="flex"
    logoMGB.style.display="none"
    logoDL.style.display="none"
    logoKF.style.display="none"
}
function frontChangeImg2() {
    frontProjectDesc.innerHTML='✓ Developed a Python library to match data types of CSV file columns before injecting them into the PostgreSQL database. Significantly reduced data injection time by over half, facilitating the successful insertion of more than 200 thousand patient records.<br>\
    ✓  Enhanced ETL pipelines by creating JSON config files and using regex to parse medications from RabbitMQ queues into PostgreSQL for analysis.<br>\
    ✓  Actively participated in discussions related to the lab\'s machine learning data models for research on Postpartum preeclampsia.<br>';
    windowNameFront.innerHTML='Data Engineering'
    logoES.style.display="none"
    logoMGB.style.display="flex"
    logoDL.style.display="none"
    logoKF.style.display="none"
}
function frontChangeImg3() {
    frontProjectDesc.innerHTML='✓ Implemented responsive mobile side menu and shopping cart functionality, integrated lazy loading on scroll and improved site organization on PHP and JavaScript based ecommerce site';
    windowNameFront.innerHTML='Web Dev Intern'
    logoES.style.display="none"
    logoMGB.style.display="none"
    logoDL.style.display="flex"
    logoKF.style.display="none"
}
function frontChangeImg4() {
    frontProjectDesc.innerHTML='✓ Worked with the Korn Ferry Intelligence Cloud <br>\
     team in the development of business solutions for <br>\
      partnered organizations<br>\
    ✓ Extracted and cleaned data of 10,000+ entities in Java and Retool<br>\
    ✓ Created schema models and REST APIs to map entities in large database tables\
    in MySQL<br>\ using Java (Maven Project), Spring controllers, and SQL queries<br>\
    ✓ Visualized and tested accuracy of trained data models in Python and JupyterLab';
    windowNameFront.innerHTML='Data Sci Intern'
    logoES.style.display="none"
    logoMGB.style.display="none"
    logoDL.style.display="none"
    logoKF.style.display="flex"
}

// FullStack

var fullImg = document.getElementById('imgProjectFull');

var fullBtn0 = document.getElementById('fullBtn0');
var fullBtn1 = document.getElementById('fullBtn1');
var fullBtn2 = document.getElementById('fullBtn2');
var fullBtn3 = document.getElementById('fullBtn3');
var fullBtn4 = document.getElementById('fullBtn4');
var fullBtn5 = document.getElementById('fullBtn5');

var logoSolar = document.getElementById('logoSolar')
var logoCoffee = document.getElementById('logoCoffee')
var logoCircles = document.getElementById('logoCircles')
var logoGender = document.getElementById('logoGender')
var logoPomo = document.getElementById('logoPomo')


var windowName = document.getElementById('windowNamefull');
var fullProjectDesc = document.getElementById('fullProjectDesc');
fullBtn0.addEventListener('click',function(){fullChangeImg0()});
fullBtn1.addEventListener('click',function(){fullChangeImg1()});
fullBtn2.addEventListener('click',function(){fullChangeImg2()});
fullBtn3.addEventListener('click',function(){fullChangeImg3()});
fullBtn4.addEventListener('click',function(){fullChangeImg4()});
fullBtn5.addEventListener('click',function(){fullChangeImg5()});


function fullChangeImg0() {
    fullImg.src="video/solar.mov"
    fullProjectDesc.innerHTML='✓ Using photo generative AI api in a Django and Vue app, to allow user interactive image uploads and result presentation.';
    windowName.innerHTML='Solar Snap';

    logoSolar.style.display="flex";
    logoCoffee.style.display="none";
    logoCircles.style.display="none";
    logoGender.style.display="none";
    logoPomo.style.display="none";
}
function fullChangeImg1() {
    fullImg.src="video/coffee-kiosk.mov"
    fullProjectDesc.innerHTML='✓ Brainstorm, design and manage full-stack MERN web app from start to finish.<br>\
    ✓ Use ReactJS for creating reusable UI components (multi-field form elements, pop-up window).<br>\
    ✓ Create REST APIs using Node.js and Express.js to conduct CRUD (Create, Read, Update, Delete) data operations between frontend and MongoDB.<br>\
    ✓ Illustrate visual designs of graphic elements such as the café homepage and coffee images using Adobe Illustrator and Photoshop.';
    windowName.innerHTML='Coffee Kiosk';

    logoSolar.style.display="none";
    logoCoffee.style.display="flex";
    logoCircles.style.display="none";
    logoGender.style.display="none";
    logoPomo.style.display="none";
}
function fullChangeImg2() {
    fullImg.src="video/bookdate.mov"
    fullProjectDesc.innerHTML='✓ Design and code both frontend and backend for the entire full-stack MERN web application.<br>\
    ✓ Implement user authentication using JSON Web Token (JWT) and generate hash code for passwords using bcrypt.js in NodeJS. • Leveraged ReactJS resources for standardizing data access interfaces and declarative routing using react-router-dom.<br>\
    ✓ Access and store data in MongoDB using mongoose schemas and REST APIs.';
    windowName.innerHTML='BookDate';

    logoSolar.style.display="none";
    logoCoffee.style.display="flex";
    logoCircles.style.display="none";
    logoGender.style.display="none";
    logoPomo.style.display="none";
}
function fullChangeImg3() {
    fullImg.src="video/circles.mov"
    fullProjectDesc.innerHTML='<b>Best Game Changer Award for DeisHacks Hackaton</b><br>\ ✓ Web and Mobile interactive social media website model aimed to encourage networking among high school students and mentors in Waltham area by enabling direct messaging<br>\
    ✓ Designed the overall website front-end for fully responsive landing, menu and user profile templates using HTML5, CSS/SASS, Bootstrap and JavaScript<br>\
    ✓ Implemented login system and user profiles using Django.';
    windowName.innerHTML='Circles Social'

    logoSolar.style.display="none";
    logoCoffee.style.display="none";
    logoCircles.style.display="flex";
    logoGender.style.display="none";
    logoPomo.style.display="none";
}
function fullChangeImg4() {
    fullImg.src="video/queer-studies.mov"
    fullProjectDesc.innerHTML='Static blog about Queer Studies created for my Gender and Sexuality class. Pure HTML and CSS';
    windowName.innerHTML='Queer Studies'

    logoSolar.style.display="none";
    logoCoffee.style.display="none";
    logoCircles.style.display="none";
    logoGender.style.display="flex";
    logoPomo.style.display="none";
}
function fullChangeImg5() {
    fullImg.src="video/pomodoro.mov"
    fullProjectDesc.innerHTML='✓ A Generic Pomodoro using React and HTML/CSS. Users can customize their work and rest timings.';
    windowName.innerHTML='Pomodoro'

    logoSolar.style.display="none";
    logoCoffee.style.display="none";
    logoCircles.style.display="none";
    logoGender.style.display="none";
    logoPomo.style.display="flex";
}

// Random
var randomImg = document.getElementById('imgProjectRandom');
var randomAbout = document.getElementById('aboutWindow');
var randomBtn1 = document.getElementById('randomBtn1');
var randomBtn3 = document.getElementById('randomBtn3');

var windowName = document.getElementById('windowNamefull');
var randomProjectDesc = document.getElementById('randomProjectDesc');
randomBtn1.addEventListener('click',function(){randomChangeImg1()});
randomBtn3.addEventListener('click',function(){randomChangeImg3()});


function randomChangeImg1() {
    randomImg.src="video/myan.mov";
    aboutWindow.innerHTML="My Journey";
    randomProjectDesc.innerHTML='Hello, I\'m Su Lei Yadanar, a senior pursuing a major in Computer Science at Brandeis University. I am a Tech Lover, Code Creator, and a Passionist Innovator with a keen interest in AI and machine learning. My goal is to establish a career in technology, driven by my fascination for solving complex problems and creating innovative solutions.<br>\
    Originally from the vibrant city of Yangon in Myanmar, a country rich in culture and traditions, I relocated to the United States in January 2021, just days before a coup shook my homeland. My journey into the world of technology began in fourth grade when I was captivated by the potential of problem-solving and, admittedly, obsessed with robots.<br>\
    I fondly remember crafting my very first \"website\" , a single-page blog about Aztecs for a history class, written in HTML & CSS. As my passion grew, I took it a step further and maintained an educational website, www.sagafield.com, using the Joomla CMS. Here, I shared class notes and other educational content. While my parents supported my enthusiasm, a tech career was not encouraged due to limited opportunities back in Myanmar.<br>\
    During high school, I geared my focus towards life science courses, aspiring to attend medical school. However, my trajectory took an unexpected turn when I enrolled in an introductory computer science course in college. The flame of passion reignited, and my heart was set on a different path. As they say, the heart wants what it wants, and mine was firmly drawn to the world of technology. Now, as a Tech Lover, Code Creator, and a Passionist Innovator, I am driven to make a meaningful impact in the realm of technology.';
}

function randomChangeImg3() {
    randomImg.src="video/hobbies.mov";
    aboutWindow.innerHTML="Interests";
    randomProjectDesc.innerHTML='My interests span a vibrant spectrum, reflecting my love for nature, creativity, and craftsmanship. Trees hold a special place in my heart, their quiet strength and beauty inspiring awe. Hiking fuels my adventurous spirit, leading me to captivating landscapes and new horizons.<br>\
    In the realm of creativity, I find joy in both cooking and drawing. The kitchen becomes my canvas as I blend flavors and textures into culinary art. With a pencil or brush in hand, drawing allows me to translate thoughts and emotions into visual stories.<br>\
    Crocheting adds a meditative touch to my pursuits, threading relaxation into each stitch. These passions, from the outdoors to the artistic, shape my multifaceted identity. I channel the same enthusiasm and ingenuity into my work, drawing inspiration from the rich tapestry of my interests.';
}

