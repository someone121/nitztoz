import React from 'react';
import './Section.css';

const Section = ({
  children,
  className = '',
  background = 'white',
  padding = 'normal',
  container = 'narrow',
  id,
  ...props
}) => {
  const sectionClasses = [
    'section',
    `section-${background}`,
    `section-${padding}`,
    className
  ].filter(Boolean).join(' ');

  const ContainerComponent = container === 'wide' ? 'div' : 'div';
  const containerClass = container === 'wide' ? 'container' : 'container-narrow';

  return (
    <section className={sectionClasses} id={id} {...props}>
      <ContainerComponent className={containerClass}>
        {children}
      </ContainerComponent>
    </section>
  );
};

export default Section;
