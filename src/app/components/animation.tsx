"use client"
import { TypeAnimation } from 'react-type-animation';

export const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Ivandro Alfredo',
        3000,
        'Software Developer',
        3000,
        'Backend Developer',
        3000,
        'Mobile Developer',
        3000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};