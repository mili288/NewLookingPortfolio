import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Valmir',
  lastName: 'Gojani',
  initials: 'VG', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Full-Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇽🇰',
      text: 'based in Prishtina, Kosovo',
    },
    {
      emoji: '📧📨📩',
      text: 'mili_gojani@hotmail.com',
    },
  ],
  socials: [
    {
      link: 'https://drive.google.com/file/d/1rh3Dx16NrIkVbldS1piqMJoanalOILDK/view?usp=sharing', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-user-circle',
      label: 'resume',
    },
    {
      link: 'https://github.com/mili288',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/valmir-gojani-307306243/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hello my name is Valmir. I'm a fullstack web developer from Kosovo. I mainly use the MERN stack with a focus on React js for front-end and Node js for the backend. I also like messing around with AI technology i think it's fun. And from time to time i like making music :)",
  skills: {
    tools: ['React js', 'Node js', 'MongoDB', 'Express', 'Git', 'JWT', 'Jira'],
    others: ['Basic HTML/CSS', 'Npm', 'AntDesing', 'Sass', 'MUI', 'Axios', 'RestAPI', 'Redux Toolkit', 'GraphQl']
  },
  hobbies: [
    {
      label: 'Music Production',
      emoji: '🎵',
    },
    {
      label: 'Video games',
      emoji: '🎮',
    },
    {
      label: 'Movies',
      emoji: '🎞',
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Redesigned the UI and added new funcionality',
      live: 'https://www.digitalinsuranceagenda.com/dia-tv/video/digital-manager-to-manage-and-control-personal-injury-cases-for-liability-and-accident-insurance/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      image: 'data:image/png;base64,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',
    },
    {
      title: 'Full-Stack Fun Browser Games Website',
      live: 'https://main--dapper-queijadas-d3e2ff.netlify.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/mili288/GameWebsite', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://m.media-amazon.com/images/I/91ZaT+hn9VL.png',
    },
    {
      title: 'E-Commerce Website',
      live: 'https://626cebcbecf39747c6e61ec8--jazzy-syrniki-c2dfaa.netlify.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/mili288/Tony-s-Pizza', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.pinimg.com/originals/1a/ed/e2/1aede2a28d628490aa4fe500bce4df5b.jpg',
    },
    {
      title: 'Full-Stack Valorant Guide Website',
      live: 'https://62835d43f5c0ca4ddbba5ce2--cute-hamster-de0a85.netlify.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/mili288/Valorant-Guide', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://image.winudf.com/v2/image1/ZXUuYmx1ZW5ldHdlYi5iZ2ltYWdlX3ZhbG9yYW50X3NjcmVlbl8wXzE1OTY0MDI0MTZfMDc1/screen-0.jpg?fakeurl=1&type=.jpg',
    },
  ],
};
