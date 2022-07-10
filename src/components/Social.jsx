import linkedin from '../assets/img/linkedin.svg.png';
import github from '../assets/img/github.png';
import email from '../assets/img/email.png';
import resume from '../assets/img/resume.png';
import mikeResume from '../assets/mike_melnikov_resume.pdf';

export const Social = () => {

    return (
        <div className=" container d-flex justify-content-center border-top">
            <footer className='justify-content-center py-3 my-2'>
            <a className='mx-2' href="https://www.linkedin.com/in/mike-mel/" target="_blank"><img src={linkedin} alt="linkedIn" height={50} width={'auto'} /></a>
            <a className='mx-2' href="https://github.com/mikemel31" target="_blank"><img src={github} alt="GitHub" height={50} width={"auto"} /></a>
            <a className='mx-2' href={mikeResume} target="_blank"><img src={resume} alt="email" height={50} width={'auto'} /></a>
            <a className='mx-0' href="mailto: mihail3197@gmail.com" target="_blank"><img style={{objectFit: 'cover'}} src={email} alt="email" height={50} width={50} /></a>
            </footer>
        </div>
    )
}
