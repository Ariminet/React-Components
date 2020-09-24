import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = (props) => {
  const [slides, setSlides] = useState([
    {
      title: 'First Slide',
      subtitle: 'is it working?',
      image: 'https://picsum.photos/300',
    },
    {
      title: 'Second Slide',
      subtitle: 'ohhh yeah',
      image: 'https://picsum.photos/400',
    },
    {
      title: 'Third Slide',
      subtitle: 'last one! ✨',
      image: 'https://picsum.photos/350',
    },
  ]);
  return (
    <ImageContext.Provider value={[slides, setSlides]}>
      {props.children}
    </ImageContext.Provider>
  );
};
