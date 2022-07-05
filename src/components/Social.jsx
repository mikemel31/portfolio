import linkedin from '../assets/img/linkedin.svg.png';
import github from '../assets/img/github.png';
import email from '../assets/img/email.png';
import resume from '../assets/img/resume.png';
import mikeResume from '../assets/mike_melnikov_resume.pdf';

export const Social = () => {

    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/mike-mel/" target="_blank"><img src={linkedin} alt="linkedIn" height={35} width={35} /></a>
            <a href="https://github.com/mikemel31" target="_blank"><img src={github} alt="GitHub" height={35} width={35} /></a>
            <a href={mikeResume} target="_blank"><img src={resume} alt="email" height={35} width={35} /></a>
            <a href="mailto: mihail3197@gmail.com" target="_blank"><img src={email} alt="email" height={35} width={46} /></a>
        </div>
    )
}
