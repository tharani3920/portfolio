import React, { useEffect, useRef,useState } from 'react';
const TypeWriters = ({ words, wait = 3000 }) => {
  const txtElementRef = useRef(null);
  let txt = '';
  let wordIndex = 0;
  let isDeleting = false;

  const type = () => {
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }

    if (txtElementRef.current) {
      txtElementRef.current.innerHTML = `<span className="typewrite-txt typewrite-txt-color">${txt}</span>`;
    }

    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      typeSpeed = wait;
      isDeleting = true;
    } else if (isDeleting && txt === '') {
      isDeleting = false;
      wordIndex++;
      typeSpeed = 300;
    }

    setTimeout(type, typeSpeed);
  };

  useEffect(() => {
    type();
  }, []); 

  return <span ref={txtElementRef} className="typewrite-txt-type" dangerouslySetInnerHTML={{ __html: '' }} />;
};

const TypeWriter = () => {
 
  return (
    <div>
      <h1 className='typewriter-word'>
        <TypeWriters
          words={[ "Hello EveryBody, I am",]}
          wait={2000}
        />
      </h1>
    </div>
  );
};

export default TypeWriter;
