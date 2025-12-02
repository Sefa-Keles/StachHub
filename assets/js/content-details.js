const techDetails = {
        html5: `
            <h2>HTML 5</h2>
            <p>HTML, or Hypertext Markup Language, is the standard language for creating webpages. It uses a system of "markup" through tags to structure content, telling a web browser how to display text, images, links, and other media. HTML provides the fundamental structure of a website, and along with CSS for styling and JavaScript for interactivity, forms the basis of almost every web page on the internet. </p>
        `,
        css3: `
            <h2>CSS 3</h2>
            <p>CSS stands for "Cascading Style Sheets.” CSS is used to style the content of a web page by adding design elements like colors, fonts, and spacing. You can use CSS to change the look and feel of any element on a web page, from the overall layout to individual HTML tags.</p>
        `,
        git: `
            <h2>GIT</h2>
            <p>Git is a distributed version control system designed to track changes in source code during software development. It allows multiple developers to work on the same project simultaneously, ensuring that their changes don't conflict with each other.</p>
        `,
        bootstrap3: `
            <h2>BOOTSTRAP 3</h2>
            <p>CSS stands for "Cascading Style Sheets.” CSS is used to style the content of a web page by adding design elements like colors, fonts, and spacing. You can use CSS to change the look and feel of any element on a web page, from the overall layout to individual HTML tags.</p>
        `
        ,
        javascript: `
            <h2>JAVASCRIPT</h2>
            <p>JavaScript is a text-based scripting language or programming language used on both the server-side and client-side to create engaging website elements, fully featured web applications, CLI applications and even web servers. In short, JavaScript is extremely versatile.</p>
        `
        ,
        react: `
            <h2>REACT</h2>
            <p>React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p>
        `
        ,
        redux: `
            <h2>REDUX</h2>
            <p>Redux is a JavaScript library for managing application state consistently across different environments, making code predictable, maintainable, and testable. It works by centralizing an application's state in a single store, which can be updated by dispatching plain objects called "actions". These actions are handled by "reducers," which are functions that calculate the new state, creating a one-way data flow. Redux is often used with libraries like React and is officially recommended to be written using its modern standard, Redux Toolkit. </p>
        `
        ,
        typescript: `
            <h2>TYPESCRIPT</h2>
            <p>TypeScript is an open-source language maintained and developed by Microsoft. Basically, TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor or in your CI/CD pipeline, and write more maintainable code.</p>
        `
        ,
        python: `
            <h2>PYTHON</h2>
            <p>Python is a high-level, versatile, and beginner-friendly programming language that is used to build software, automate tasks, and analyze data. It is known for its simple syntax and high readability, which makes it one of the easiest languages to learn and write. Python is used across many industries for web development, data science, and artificial intelligence.</p>
        `
        ,
        django: `
            <h2>DJANGO FRAMEWORK</h2>
            <p>Django is a high-level, free, and open-source web framework written in Python that allows for the rapid development of secure and maintainable websites. It simplifies common web development tasks, enabling developers to focus on their application's unique features rather than reinventing the wheel. Django is used by major websites like Instagram and provides a robust structure and built-in tools for database-driven applications, such as an optional admin interface and form handling.</p>
        `,
        dotnet: `
            <h2>.NET</h2>
            <p>.NET is a free, cross-platform, open-source developer platform for building many types of applications, including web, mobile, desktop, and games. Developed by Microsoft, it provides a set of tools, libraries, and programming languages like C#, to create secure, reliable, and high-performance software. .NET supports multiple operating systems such as Windows, macOS, and Linux, as well as mobile operating systems like iOS and Android.</p>
        `
        ,
        sql: `
            <h2>SQL</h2>
            <p>Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values. You can use SQL statements to store, update, remove, search, and retrieve information from the database. You can also use SQL to maintain and optimize database performance.</p>
        `
        ,
        postgresql: `
            <h2>POSTGRESQL</h2>
            <p>PostgreSQL is a free, open-source, object-relational database management system known for its reliability, feature robustness, and performance. It is a powerful and advanced database that supports both traditional relational data and non-relational data like JSON, making it suitable for a wide range of applications, from simple web apps to complex data analysis projects. </p>
        `
        ,
        heroku: `
            <h2>HEROKU</h2>
            <p>Heroku is a cloud-based Platform as a Service (PaaS) that allows developers to build, run, and manage applications without worrying about the underlying infrastructure. It is known for a streamlined developer experience, supporting popular programming languages and integrating with tools like Git. Heroku handles complexities like deployment, scaling, and server management, making it easier to get apps to market quickly. It also offers integrated data services, such as managed databases, and tools for collaboration and monitoring.</p>
        `
        ,
        aws: `
            <h2>AWS</h2>
            <p>AWS, or Amazon Web Services, is a comprehensive cloud computing platform that provides on-demand IT services over the internet. It offers a wide range of products and services, such as computing power, storage, and databases, allowing businesses and individuals to avoid the need to manage physical servers and infrastructure. Users pay only for the resources they consume, making it a flexible and cost-effective solution.</p>
        `
    };

    const buttons = document.querySelectorAll('.detail-btn');
    const detailBox = document.querySelector('.tech-detail');

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            const tech = this.dataset.tech;

            detailBox.innerHTML = `
                <div class="detail-card">
                    ${techDetails[tech]}
                </div>
            `;
        });
    });