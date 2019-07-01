
function whoAmI () {
    return `
    <h2 class="title aboutMe">Who Am I?</h2>
    <div class="bioText">I am a recent MBA Graduate and current Web Development student in the Bloc Web Developer Program. I am looking to combine my business and project
    management skills with web development to work with a great team and help create web and mobile apps that makes life easier for people.<br><br> My ability to understand both the technical
    and business aspects gives me a unique perspective on creating the best end user experience.<br><br>
    Coding and business is what I do for work, but it's not all I do. I am also a podcast host, movie critic, comic book nerd, who played college football, 
    loves basketball and enjoys dinner with my wife and days at the park with my dog.
    <p class="contactMe">Contact Me:</p><br><br>
        <div class="socialIcon">
            <a href="mailto:bmcarr21@me.com"><img src="img/email.png" class="img mail"></a>
            <a href="https://www.linkedin.com/in/brandoncarr21/" target="_blank"><img src="img/linkedin.png" class="img linked"></a>
            <a href="https://github.com/ThatCoolBlackNerd" target="_blank"><img src="img/github.png" class="img git"></a>
            <a href="https://twitter.com/thatcoolblknerd" target="_blank"><img src="img/twitter.png" class="img twitter"></a>
        </div>
    </div>
    <div class="buttonClass">
    <button class="button home">Home</button>
    <button class="button projects">Projects</button>
    </div>
    `
}

function generateBio () {
    $('.container').on('click','.aboutMe', function () {
        $('.container').html(whoAmI);
    });
    $('.container').on('click','.projectMe', function () {
        $('.container').html(whoAmI);
    });
}

function myProjects () {
    return `
    <h2 class="title myProjects">Projects</h2>
    <h3 class="projectTitle">NBA Quiz</h3>
    <div class="projectScreenshot"><img src="img/quizQuestion.PNG" class="quizImg"></div>
    <span class="link"><a href="https://github.com/ThatCoolBlackNerd/NBA-Quiz.git">View Code</a> | <a href="https://thatcoolblacknerd.github.io/NBA-Quiz/">View Project</a></span>
    <p class="skills">Technologies Used - HTML5, CSS, JavaScript, JQuery</p>
    <p class="description"><u>Project Description</u><br><br>
    Are you a real NBA Fan? Test your basketball knowledge with this Web Quiz using JavaScript and JQuery. This app works on any platform, so you can take it at home
    on your computer or on your phone to past time at a restaurant.</p>
    <div class="buttonClass">
    <button class="button home">Home</button>
    <button class="button projectMe">About Me</button>
    </div>
    `
}

function generateProjects () {
    $('.container').on('click','.projects', function () {
        $('.container').html(myProjects);
    });
}

function landingPage () {
    return `
    <h1 class="title">Hello!!</h1>
            <h2 class="headline">I'm Brandon. I am a Fullstack Developer & Projet Manager</h2>
            <div class="buttonClass">
            <button class="button aboutMe">About Me</button>
            <button class="button projects">Projects</button>
            </div>
    `
}

function goHome () {
    $('.container').on('click','.home', function () {
        $('.container').html(landingPage);
    });
}

function runAtStart () {
    generateBio();
    generateProjects();
    goHome();
    myProjects();
    landingPage();
    whoAmI();
}

$(runAtStart);
