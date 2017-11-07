import React from 'react';

const Bio = () => {
  return (
    <div class='lead'>
      <div className='bio-img-container mx-auto my-2'>
        <img 
          alt='ice cave'
          className='img-fluid bio-img m-1'
          src='https://s3.ca-central-1.amazonaws.com/jonnyk-misc/images/ice-cave-close.jpeg'
        />
      </div>

      <p>
        Invoke is about building digital products and brands that people love, and taking care of the full process, from high-level product strategy, to the nitty-gritty development. 
        Your portfolio speaks for itself.
      </p>

      <p>
        This resonates with me because <span className='brag text-info'>{`<brag> `}</span> 
        I enjoy building different kinds of apps and doing everything from designing user stories on Adobe XD to running unit tests on the final product. 
        Some of my favourite projects have been: my <a href='http://www.studywithme.io'> shared pomodoro clock </a>, my 
        <a href='https://www.oxcord.io'> Spotify-connected collaborative jukebox </a> , and my 
        <a href='https://codepen.io/jonnnyk20/full/XaPqrR/'> Dragon Ball Z - themed simon says game. </a>
        Outside of coding, I enjoy hiking, drawing, and language learning, ( I'm fluent in French, English and Spanish). 
        <span className='brag text-info'>{` </ brag>`}</span>
      </p>

      <p>
        Still, programming is my passion. 
        I know I still have a ton to learn, and it would be awesome to do it at place like Invoke, where I can work with an inspiring team, and my skills can contribute to impactful projects. 
        I’d love to be a part of what’s next, and if you and your team feel like I belong, let’s get in touch!
      </p>

      <p>
        Thank you for reading this and have a great day,
      </p>
      <p>
        Jonny Kalambay
        <br />
        778 960 0200
        <br />
        <a href='http://www.jonnykalambay.com'> jonnykalambay.com </a>
      </p>
      <p>
        P.S. In case you're curious, this site was made using Node, React and SASS, and deployed using Heroku and AWS. Here's the repo.
      </p>
    </div>
  );
};

export default Bio;
