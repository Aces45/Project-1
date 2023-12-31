app.component('resume', {
    template:
    /*html*/
    `<div>
        <h1>Steven Jerick G. Ignacio</h1>
        <h3>Software Developer</h3>
        <div class="info">
            <p style="display: flex; gap: 0.5rem; align-items: center;"><i class="fa-solid fa-envelope"></i>
                stevenignacio45@yahoo.com</p>
            <div class="phone">
                <p><i class="fa-solid fa-diamond"></i></p>
                <p style="display: flex; gap: 0.5rem; align-items: center;">
                    <i class="fa-solid fa-phone"></i>
                    +639175444728
                </p>
                <p><i class="fa-solid fa-diamond"></i></p>
            </div>
            <p style="display: flex; gap: 0.5rem; align-items: center;"><i class="fa-solid fa-location-dot"></i>
                Paranaque City, Metro Manila</p>
        </div>
        <hr class="hr-solid" />
        <h5><i class="fa-solid fa-paperclip"></i> EXPERIENCE</h5>
        <hr />
        <div class="flexjustify">
            <strong>PlasticBank</strong>
            <strong>July 2021 - September 2021</strong>
        </div>
        <i class="fa-solid fa-magnifying-glass"></i> Software Quality Assurance
        <ul>
            <li>Plasticbank is a company that aims to reduce the number of plastics in the world’s oceans by having
                users collect plastics and rewarding them through the mobile app, then selling these plastics to
                processors that recycle them into materials to be used for new products.</li>
            <li>As part of the Software Quality Assurance team, I tested features of the company’s mobile and web
                application to ensure that they are working according to specifications.</li>
            <ul>
                <li>Documented the features of some web application pages for future reference.</li>
                <li>Created and performed hundreds of step-by-step test cases to check for errors in app functionality
                    using Jira.</li>
                <li>Created detailed tickets that reported the bugs found in testing.</li>
                <li>Performed sanity testing to ensure that previously tested features are still working as expected.
                </li>
                <li>Communicated with the developers to clarify some issues, as well as demonstrate the discovered bugs.
                </li>
            </ul>
        </ul>
        <h5><i class="fa-solid fa-book-open"></i> EDUCATION</h5>
        <hr />
        <div class="flexjustify">
            <p><strong>De La Salle College of Saint Benilde</strong></p>
            <p style="text-align: right"><strong>April 2022</strong></p>
        </div>
        <div class="flexjustify">
            <p>Bachelor of Science in Information Systems</p>
            <p style="text-align: right">Malate, Manila, Metro Manila </p>
        </div>
        <br />
        <h5><i class="fa-solid fa-screwdriver-wrench"></i> SKILLS & INTERESTS</h5>
        <hr />
        <ul>
            <li><strong>Technical skills:</strong> HTML, CSS, C#(.NET, Entity Framework), PHP (Laravel), JavaScript
                (Vue/Nuxt, NodeJS), Database (MSSQL, MySQL, MongoDB), Jira Software</li>
            <li><strong>Soft skills:</strong> Problem solving, attention to detail, communication, teamwork, project
                management (Agile)</li>
            <li><strong>Interests:</strong> Working out, cooking, technology, PC building, watching on YouTube, digital
                drawing, playing video games, video editing</li>
        </ul>
    </div>`
});