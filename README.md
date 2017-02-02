# csv-parse-mobile
**NOTE: This project is for mobile devices and can only be viewed on smaller screens, there's a built-in redirect for desktop devices.**


In completing this exercise, I made use of Bootstrap, with its technical rigour and speed it's an obvious choice.

Whilst a variety of methods for parsing the CSV are available, using the Papa Parse CSV parser made the most sense as the minimal lines of code meant less bloat and faster results. Configuring Papa Parse consists of simply modifying the values of the Papa Parse object properties.

I also used jQuery and jQueryUI for similar reasons to Bootstrap, as it is well tested and reliable with less lines of code to sort through when looking for bugs.

Given some desktops are now touch-compatible, there seems to be some disagreement over the best means of identifying user devices from the browser (with touch feature detection no longer reliable). In order to redirect the page for desktop users, I relied upon the mq() method in the Modernizr feature detection library for detecting the max-width of the browser window (in its current state at time of detection). Whilst not full-proof, there's arguably no watertight means currently that I'm aware of which guarantees accurate device detection. Therefore, the Modernizr library seemed the best of current methods for device detection and as another widely used library it has reliable community backing.

In implementing the drag functionality I relied upon jQueryUI as it was the most straightforward solution and offers dependability due to its frequent updates and community support. I did consider using Interactjs, although having not used it in the past and wanting to complete the task efficiently, I stuck with jQuery UI. Whilst testing the site on mobile, the functionality was not completely as expected with scrolling down the page not a smooth experience due to posts being selected. In attempts to solve this I relied upon jQueryUI Touch Punch. Whilst jQueryUI Touch Punch solved the issue of accidental selection of posts upon scrolling, it was too heavy in preventing the default scroll event and needed a conditional statement inserted in order to provide a smoother scrolling experience.

Throughout the build process I relied upon Sass and while this task didn't require heavy amounts of CSS I like the ability to keep related declarations together.
