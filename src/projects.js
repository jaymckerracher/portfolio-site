const projects = [
    {
        title: 'PlotTwist',
        imgSrc: '/portfolio-site/src/assets/plottwist.png',
        imgAlt: 'PlotTwist',
        imgId: 'plotTwistImg',
        desc: [
            'For the final three weeks of the bootcamp, I worked with a team of five to create an app where users can upload their unwanted books and swap them with other users’ unwanted books. This was my first time working with a larger team and, despite being nervous at first, I enjoyed every second of the collaborative process.',
            'The best part about working with a team was the sense of camaraderie that drove us throughout the project. The majority of the first week was spent planning - leaving us two weeks of development time. We had a lot of features that we wanted to include (some of which were new to all of us, such as a chat functionality) and being able to split the workload and help each other was a big motivation!',
            'That’s not to say we didn’t experience problems during development. Working with new technologies such as React Native and Supabase introduced challenges that we hadn’t anticipated. React Native, while being structurally similar to React.js, was syntactically different enough to slow down progress at first. Utilising new components such as Flatlists and Drawers, while using a different technique to style the app took a while to get used to.',
            'By the end of the three weeks, we had delivered our MVP, along with some extra features. Once logged into the app, users can upload unwanted books to their library. These books can then be seen by other users and a swap request can be made. Utilising the negotiation interface along with the chat can then lead to a fair swap that satisfies both parties.'
        ],
        githubLink: 'https://github.com/jaymckerracher/book-swap-app'
    },
    {
        title: 'NorthCoders News (Back End)',
        imgSrc: '/portfolio-site/src/assets/nc-news-back.png',
        imgAlt: 'NC News Back End',
        imgId: 'NcBackImg',
        desc: [
            'For my first solo project on the NorthCoders bootcamp, I was tasked with creating the back end for my NC News application. I used a range of technologies to complete this task and learnt a lot along the way, both syntactically and conceptually.',
            'I used the Express.js framework to create the application and utilised the MVC (Model, View, Controller) design pattern to manage the different end points. These end points would allow users to utilise the most common HTTP methods, such as getting, posting, patching and deleting data.',
            'Using environment variables, the app could be run in three different environments - the test environment, the development environment and the production environment. By having these different environments, I was able to switch between different data sets. This allowed me to test my code efficiently, as I was manipulating data that would re-seed each time I ran a test. It also meant that once the app was hosted along with its front end counterpart, I could safely run tests without the risk of making changes to users data.',
            'Tables within these databases contained information that would be used for the NC News application, such as user profiles, articles, comments and topics. The models that interact with these tables and make queries would also check that the requests to these end points were valid, such as ensuring that comments are a valid length, for example.',
            'I used a range of different libraries and packages that I hadn’t worked with before, such as the ‘dotenv’ library. This library loads environment variables into a current process, ensuring the security of a database once the project had been uploaded to GitHub.'
        ],
        githubLink: 'https://github.com/jaymckerracher/nc-news',
        hostedLink: 'https://jay-mckerracher-nc-news.onrender.com/api'
    },
    {
        title: 'NorthCoders News (Front End)',
        imgSrc: '/portfolio-site/src/assets/nc-news-front.png',
        imgAlt: 'NC News Front End',
        imgId: 'NcFrontImg',
        desc: [
            'The front end of NC News was built mostly with React. It was my first time using any type of front end technology to build out a project, and I had a lot more fun as the week went on. There was a bit of a learning curve to begin with; there’s a slightly different mindset required when coding in the front end and I definitely struggled during the first couple of days.',
            'Over the course of the week, however, I fount that my mind was starting to adjust. As I got more comfortable using React, I started to think more about UI/UX. Towards the end of the week, I was happily moving around and styling my React elements, thinking about colour schemes, screen layouts and user journeys.',
            'While I’m not a designer by any means, I still had a great time seeing my project come to life. Being able to utilise the API that I had created a few weeks earlier felt great and gave me an insight into how real life applications work.',
            'Since the application allowed user input, I also had to implement features for authentication. For example, if you want to gain access to the app, you have to be a registered user. If a user wants to post a comment, they have to be logged in and the comment has to be a valid length.'
        ],
        githubLink: 'https://github.com/jaymckerracher/fe-nc-news',
        hostedLink: 'https://jaymckerracher-ncnews.netlify.app/'
    },
];

export default projects;