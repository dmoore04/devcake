import { Content } from '../../../src/models/content.model';

const content: Content[] = [
  {
    title: 'Head first JavaScript Programming: A brain-friendly guide',
    desc: "Provides information on scripting Web applications with JavaScript, including objects, functions, and the browser's document object model.",
    url: 'https://www.amazon.com/dp/144934013X',
    imgUrl: 'https://m.media-amazon.com/images/I/51qQTSKL2nL._AC_UY500_FMwebp_QL65_.jpg',
    provider: ['Amazon'],
    type: 'book',
    topic: 'javascript',
  },
  {
    title: 'Source Code',
    desc: 'Everything that matters in tech, in just a few minutes. The story of the day, the other news you need to know about, and analysis from the smartest people in the industry. Ready for you every morning.',
    url: 'https://podcasts.apple.com/fr/podcast/source-code/id1497440658',
    imgUrl:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ff/b2/03/ffb203ef-d9cb-4630-8882-a2232ef2e0ce/mza_13795905241203950507.jpg/400x400.png',
    provider: ['Apple Podcasts'],
    type: 'podcast',
    topic: 'coding',
  },
  {
    title: 'Javascript Developer',
    desc: 'JavaScript (JS) is a type of web programming language that is supported across all web browsers and tools, and is the language that gives JavaScript developers control and power to create, enhance and modify websites. About 1/3rd of all developer jobs require some JavaScript knowledge.',
    url: 'https://www.careerexplorer.com/careers/javascript-developer',
    imgUrl:
      'https://res.cloudinary.com/hnpb47ejt/image/upload/c_fill,f_auto,h_160,q_auto,w_160/v1479149791/luqx0yxsish3cgjiaw3c.jpg',
    provider: ['CareerExplorer'],
    type: 'careers',
    topic: 'javascript',
  },
  {
    title: 'Web Application Development with JavaScript and MongoDB',
    desc: 'In this course, you will develop more advanced web application programming skills.',
    url: 'https://www.coursera.org/learn/web-application-development',
    imgUrl:
      'https://s3.amazonaws.com/coursera-course-photos/bf/d0c2f03cf211e5a922adc5eaf6c043/MOOC-4.png',
    provider: ['Coursera'],
    type: 'mooc',
    topic: 'javascript',
  },
  {
    title: 'Programming for the Web with JavaScript',
    desc: undefined,
    url: 'https://www.edx.org/course/programming-web-javascript-pennx-sd4x',
    imgUrl:
      'https://prod-discovery.edx-cdn.org/media/course/image/dc921dbd-434a-4994-acde-1430679bca2e-5897fb1383ad.small.jpg',
    provider: ['edX'],
    type: 'mooc',
    topic: 'javascript',
  },
  {
    title: 'Learn to Code for the Web',
    desc: "Experiment with coding in different programming languagesEver thought about learning how to code? Now's your chance to learn the languages of the future. On this course, you'll be introduced to the basics of code types.",
    url: 'https://www.futurelearn.com/courses/learn-to-code-for-the-web',
    imgUrl:
      'https://ugc.futurelearn.com/uploads/images/a6/2a/thumbnail_a62a5fb9-e83a-43ee-9217-4b941c887150.jpg',
    provider: ['FutureLearn'],
    type: 'mooc',
    topic: 'coding',
  },
  {
    title: 'Data Science with Python online short course',
    desc: 'Discover how to solve business problems using statistical learning as you work through the weekly modules of this online short course. ',
    url: 'https://www.getsmarter.com/courses/za/uct-data-science-with-python-short-course',
    imgUrl:
      'https://cdn.www.getsmarter.com/uploads/course/banner_image/180/UCT-DSS-website-image-1296x432-645e15677f3acc85c4f6bac88895d42c.jpg',
    provider: ['Getsmarter'],
    type: 'distance learning',
    topic: 'python',
  },
  {
    title: 'Learn C++ – Skill up with our free tutorials',
    desc: 'LearnCpp.com is a free website devoted to teaching you how to program in C++. Whether you’ve had any prior programming experience or not, the tutorials on this site will walk you through all the steps to write, compile, and debug your C++ programs, all with plenty of examples.',
    url: 'https://www.learncpp.com/',
    imgUrl:
      'https://picturelo.s3.eu-west-3.amazonaws.com/provider/linkedinlearning/3linkedinlearning.png',
    provider: ['LinkedIn Learning'],
    type: 'mooc',
    topic: 'c++',
  },
  {
    title: 'Why Rust is the Most Loved Language by Developers',
    desc: 'The latest Stack Overflow survey confirms what we already knew here at Mozilla: Rust is the most loved language for developers with 73% of users saying they want to keep working with it.',
    url: 'https://medium.com/mozilla-tech/why-rust-is-the-most-loved-language-by-developers-666add782563',
    imgUrl: 'https://miro.medium.com/1*Hv_ATAMyCJbz4BRn58AX6g.png',
    provider: ['Medium'],
    type: 'article',
    topic: 'rust',
  },
  {
    title: 'Build Your First Web Pages With HTML and CSS',
    desc: 'Learn to create your first web pages using HTML and CSS, the two most important languages on the web. No coding experience required!',
    url: 'https://openclassrooms.com/en/courses/5265446-build-your-first-web-pages-with-html-and-css',
    imgUrl:
      'https://course.oc-static.com/courses/5265446/5265446_teaser_picture_1563195047.jpg%3Fr%3Dpad',
    provider: ['OpenClassrooms'],
    type: 'mooc',
    topic: 'html/css',
  },
  {
    title: 'Design Patterns Using C# and .NET Core',
    desc: 'Design patterns are reusable solutions to common programming problems. They speed up the development process by providing tested, proven development paradigms.',
    url: 'https://www.opensesame.com/c/design-patterns-using-c-and-net-core-15530',
    imgUrl:
      'https://www.opensesame.com/system/files/styles/course_details_main_image/s3/images/9781788625258.png',
    provider: ['OpenSesame'],
    type: 'distance learning',
    topic: 'c#',
  },
  {
    title: 'Java with BlueJ',
    desc: 'This book is Part I of a two-part set that introduces the Java programming language. The text assumes the student will be using the BlueJ development environment and provides some introductory BlueJ material. Our experience has been that BlueJ is easy to learn and provides a good programming environ...',
    url: 'https://open.umn.edu/opentextbooks/textbooks/java-with-bluej',
    imgUrl:
      'https://open.umn.edu/opentextbooks/storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkVCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e297ccc27a275c80cb0c0e2a4b805c40a89ca0b4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lMT1RoNE1qQXdCam9HUlZRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--0d7d5444fd3cef07650424add2baed2238869e12/0000JavWitBlu.png',
    provider: ['Open Textbook Library'],
    type: 'book',
    topic: 'java',
  },
  {
    title: 'How Code School Uses SQL',
    desc: 'By Pluralsight | April 10, 2015, It may not be obvious to all new developers, but SQL is an extremely important language. Almost every application on the web uses a database in some fashion.',
    url: 'https://www.pluralsight.com/blog/software-development/code-school-uses-sql',
    imgUrl:
      'https://www.pluralsight.com/content/dam/pluralsight2/general/brand-photos/environment-overhead-008-hero.jpg',
    provider: ['Pluralsight'],
    type: 'article',
    topic: 'sql',
  },
];

export default content;
