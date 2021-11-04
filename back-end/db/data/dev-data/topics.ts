import { Topic } from '../../../src/models/topic.model';

const topics: Topic[] = [
  {
    name: 'JavaScript',
    desc: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm. It has dynamic typing, prototype-based object-orientation and first-class functions.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    slug: 'javascript',
    popularity: 64.96,
  },
  {
    name: 'HTML/CSS',
    desc: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1200px-CSS3_and_HTML5_logos_and_wordmarks.svg.png',
    slug: 'html/css',
    popularity: 56.07,
  },
  {
    name: 'Python',
    desc: 'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    slug: 'python',
    popularity: 48.24,
  },
  {
    name: 'SQL',
    desc: 'Structured Query Language (SQL) is a widely-used programming language for working with relational databases.',
    imgUrl:
      'https://w7.pngwing.com/pngs/286/519/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-azure-sql-data-warehouse-logo-text-logo-microsoft-azure.png',
    slug: 'sql',
    popularity: 47.08,
  },
  {
    name: 'Java',
    desc: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
    slug: 'java',
    popularity: 35.35,
  },
  {
    name: 'Node.js',
    desc: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png',
    slug: 'nodejs',
    popularity: 33.91,
  },
  {
    name: 'Typescript',
    desc: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/64px-Typescript_logo_2020.svg.png',
    slug: 'typescript',
    popularity: 30.19,
  },
  {
    name: 'C#',
    desc: 'C# is a multi-purpose computer programming language suitable for a wide variety of development needs.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/100px-C_Sharp_wordmark.svg.png',
    slug: 'c#',
    popularity: 27.86,
  },
  {
    name: 'Bash/Shell',
    desc: 'Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png',
    slug: 'bash/shell',
    popularity: 27.13,
  },
  {
    name: 'C++',
    desc: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
    slug: 'c++',
    popularity: 24.31,
  },
  {
    name: 'PHP',
    desc: 'PHP is a general-purpose scripting language geared towards web development.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    slug: 'php',
    popularity: 21.98,
  },
  {
    name: 'C',
    desc: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    slug: 'c programming',
    popularity: 21.01,
  },
  {
    name: 'PowerShell',
    desc: 'PowerShell is a task automation and configuration management program from Microsoft, consisting of a command-line shell and the associated scripting language.',
    imgUrl: 'https://cdn.iconscout.com/icon/free/png-256/powershell-3628993-3030218.png',
    slug: 'powershell',
    popularity: 10.75,
  },
  {
    name: 'Go',
    desc: 'Go is a statically typed, compiled programming language designed at Google. Go is syntactically similar to C.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png',
    slug: 'golang',
    popularity: 9.55,
  },
  {
    name: 'Rust',
    desc: 'Rust is a multi-paradigm, high-level, general-purpose programming language designed for performance and safety, especially safe concurrency.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png',
    slug: 'rust programming',
    popularity: 7.03,
  },
  {
    name: 'MongoDB',
    desc: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    imgUrl:
      'https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-05/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png',
    slug: 'mongodb',
    popularity: 27.7,
  },
  {
    name: 'AWS',
    desc: 'Amazon Web Services, Inc. is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
    slug: 'aws',
    popularity: 54.22,
  },
  {
    name: 'Azure',
    desc: 'Microsoft Azure, often referred to as Azure, is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png',
    slug: 'azure',
    popularity: 30.77,
  },
  {
    name: 'GCP',
    desc: 'Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, Google Drive, and YouTube.',
    imgUrl: 'https://www.freecodecamp.org/news/content/images/2020/10/gcp.png',
    slug: 'google cloud',
    popularity: 31.05,
  },
  {
    name: 'React.js',
    desc: 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    slug: 'reactjs',
    popularity: 40.14,
  },
  {
    name: 'Express.js',
    desc: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    slug: 'expressjs',
    popularity: 23.82,
  },
  {
    name: 'AngularJS',
    desc: 'AngularJS is a JavaScript-based open-source front-end web framework for developing single-page applications.',
    imgUrl: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
    slug: 'angularjs',
    popularity: 22.96,
  },
  {
    name: 'Vue.js',
    desc: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
    imgUrl: 'https://avatars.githubusercontent.com/u/6128107?s=280&v=4',
    slug: 'vuejs',
    popularity: 18.97,
  },
  {
    name: 'Django',
    desc: 'Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern.',
    imgUrl: 'https://cdn.freebiesupply.com/logos/thumbs/2x/django-community-logo.png',
    slug: 'django framework',
    popularity: 14.99,
  },
  {
    name: 'NumPy',
    desc: 'NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices.',
    imgUrl:
      'https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png',
    slug: 'numpy',
    popularity: 33.84,
  },
  {
    name: 'Pandas',
    desc: 'pandas is a software library written for the Python programming language for data manipulation and analysis.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png',
    slug: 'pandas library',
    popularity: 28.12,
  },
  {
    name: 'TensorFlow',
    desc: 'TensorFlow is a free and open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png',
    slug: 'tensorflow',
    popularity: 16.53,
  },
  {
    name: '.NET',
    desc: '.NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png',
    slug: 'dotnet',
    popularity: 34.2,
  },
  {
    name: 'Git',
    desc: 'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png',
    slug: 'git',
    popularity: 93.43,
  },
  {
    name: 'Docker',
    desc: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
    imgUrl:
      'https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png?itok=zx0e-vcP',
    slug: 'docker',
    popularity: 48.85,
  },
  {
    name: 'Linux',
    desc: 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
    slug: 'linux',
    popularity: 25.32,
  },
];

export default topics;
