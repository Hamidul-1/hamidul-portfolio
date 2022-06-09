import hero from '../assets/svg/achievements/Hero.png';
import react from '../assets/svg/achievements/react.png';
import Javascript from '../assets/svg/achievements/Javascript.png';


export const achievementData = {
    bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    achievements : [
        {
            id : 1,
            title : 'Complete Web Development',
            details : 'Personalized, fun, and interactive learning process. Enjoy our gamified courses to master python, Web development, cyber security, C, C++ course and more.',
            date : 'Still Now',
            field : 'Web Development',
            image : hero
        },
        {
            id : 2,
            title : 'React.js assessment',
            details : 'JavaScript assessment',
            date : 'June 8, 2022',
            field : 'React',
            image : react
        },
        {
            id : 3,
            title : 'JavaScript assessment',
            details : 'JavaScript assessment',
            date : 'June 7, 2022',
            field : 'JavaScript',
            image : Javascript
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/