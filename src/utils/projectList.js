import burger from '../burger-project.png';
import mesto from '../mesto-r.png';
import pie from '../Pie-project.png';
import travel from '../travel.png';
import lisa from '../lisa.png';
import learn from '../how-to-learn.png'
import table from '../periodic.png'

export const projectList = [
    {
        name: 'Stellar burgers',
        link: 'https://tanya1621.github.io/react-burgers/',
        description: 'Burger shop. You can open a popup for each ingredient and add it to the cart by dragging. The project is written in React.js with using Redux storage',
        date: 'October 2022',
        img: burger,
        github: 'https://github.com/Tanya1621/react-burgers/tree/master',
        technologies: ['React', 'Redux', 'JS', 'API', 'DnD']

    }, {
        name: 'Mesto-project',
        link: 'https://tanya1621.github.io/mesto-project/',
        description: 'An analog of Instagram. You can add and delete cards with pics and descriptions and change user information. The code is written in vanilla js using OOP. Form validation has been implemented ',
        date: 'July 2022',
        img: mesto,
        github: 'https://github.com/Tanya1621/mesto-project',
        technologies: ['JS', 'OOP', 'API', 'Validation']
    }, {
        name: 'Periodic table',
        link: 'https://tanya1621.github.io/Periodic-table/',
        description: 'Small project that illustrates the periodic table of elements with a molecular mass calculator. Just drop an element in the drop area. The project was created with using React DnD library and Redux Toolkit',
        date: 'November 2022',
        img: table,
        github: 'https://github.com/Tanya1621/Periodic-table',
        technologies: ['JS', 'React', 'Redux Toolkit', 'DnD']
    },
    {
        name: 'Lisa Alert Courses',
        link: 'https://evgenypulnikov.github.io/lisa-alert-courses/',
        description: 'Page with filtration of courses and profile page. Project was developed in a team for a non-profit organisation',
        date: 'April 2022',
        img: lisa,
        github: 'https://github.com/Tanya1621/lisa-alert-courses',
        technologies: ['JavaScript', 'CSS', 'HTML']

    },
    {
        name: 'My-cat',
        link: 'https://tanya1621.github.io/My-cat/',
        description: 'Project dedicated to my cat. Pink buttons and rounded pics are interactive, feel free to push them. Adaptive web design, vanilla js',
        date: 'March 2022',
        img: pie,
        github: 'https://github.com/Tanya1621/My-cat',
        technologies: ['JavaScript', 'CSS', 'HTML']
    },
    {
        name: 'Russian travel',
        link: 'https://tanya1621.github.io/russian-travel/',
        description: 'Landing page about travelling in Russia. Adaptive web design',
        date: 'February 2022',
        img: travel,
        github: 'https://github.com/Tanya1621/russian-travel',
        technologies: ['CSS', 'Adaptive Web Design', 'HTML']

    }, {
        name: 'How to learn',
        link: 'https://tanya1621.github.io/how-to-learn/',
        description: 'My first project. Landing page with useful information for people who want to learn new. Just HTML, CSS and flexbox layout',
        github: 'https://github.com/Tanya1621/how-to-learn',
        date: 'January 2022',
        img: learn,
        technologies: ['HTML', 'CSS']
    }

]