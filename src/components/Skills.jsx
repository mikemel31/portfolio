import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.svg';
import react from '../assets/img/react.png';
import express from '../assets/img/express.png';
import nodejs from '../assets/img/nodejs.png';
import bootstrap from '../assets/img/bootstrap.png';
import mongodb from '../assets/img/mongodb.svg';
import git from '../assets/img/git.png';
import webpack from '../assets/img/webpack.png';

export const Skills = () => {
    return (
      <section class="skills" id="skills">
      <h2 class="skill-header">My Top Skills</h2>

      <div class="skills-wrapper">
        <div class="first-set animate__animated animate__pulse">
          <img
            src={html}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={css}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={js}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={react}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={nodejs}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>

        <div class="second-set animate__animated animate__pulse">
          <img
            src={git}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={express}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={mongodb}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={webpack}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={bootstrap}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>
      </div>
    </section>
  )
}
