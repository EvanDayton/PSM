import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CursorStyled = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: width 0.3s, height 0.3s, transform 0.1s;
`;

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const links = document.querySelectorAll('a, button');

    const onMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    const onMouseEnterLink = (e) => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    };

    const onMouseLeaveLink = (e) => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    document.addEventListener('mousemove', onMouseMove);
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return <CursorStyled ref={cursorRef} />;
}

export default CustomCursor;