# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

![](./src/assets/images/Screenshot.jpg)

### Links

- Solution URL:  [Github repository](https://github.com/memominguez/crowdfunding-product-page)
- Live Site URL:  [Netlify](https://monitor-riser-funding.netlify.app)


## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Front end dev tool

### What I learned

Practiced on Modal display with overlay, and on responsive navigation bar with tailwind css.


- Styling the respnsive menu bar with some dropdown animation
```js
 <ul
    className={`flex flex-col w-[88%] bg-moderate-cyan pt-0 rounded-lg absolute left-[24px] z-10
        xl:top-8 xl:left-[68%]  xl:mt-0 xl:pt-0 xl:flex-row xl:gap-4 xl:items-center xl:bg-transparent
        xl:z-0  transition-all duration-500 ease-in  ${
          menuOpen
            ? "top-20 opacity-100"
            : "top-[-270px] opacity-0 xl:opacity-100"
        }`}
  >

```


- "Overlays" component for creating portal

```js
import { createPortal } from "react-dom";
import Modal from "./Modal";

const mountElement = document.getElementById("overlays");

const Overlays = ({ modalOpen, setModalOpen }) => {
  return createPortal(
    <>{modalOpen && <Modal setModalOpen={setModalOpen} />}</>,
    mountElement
  );
};

export default Overlays;
```


### Continued development


Continue improving my coding skills by developing challenging applications, like this one.


### Useful resources

- [Modal in React JS with Tailwind CSS](https://www.youtube.com/watch?v=nwJK-jo91vA) - Video tuorial. From here, I got an example on displaying a Modal.
- [Modal with React Portals](https://www.youtube.com/watch?v=6uypfDjBQ9Q&t=485s) - Video tutorial. From here I learned on create portals.


## Author

- Website - [Guillermo Dominguez](https://gdominguez-portfolio.netlify.app)
- Frontend Mentor - [@memominguez](https://www.frontendmentor.io/profile/memominguez)



## Acknowledgments


Thanks to all those who share their knowledge, free of charge, through video tutorials in the youtube platform.
