import React from 'react'

const frontLoader = ({when, children}) => {
    if (when) {
        return (
          <div>
            Loading...
          </div>
        );
      }
    
    return children;
}

export default frontLoader


// import React from 'react'

// //loader
// paceOptions = {
//     ajax: true,
//     document: true,
//     eventLag: false
//     };
  
//     Pace.on('done', function() {
  
//     $('#preloader').delay(0).animate({top: '-120%'}, 3800, $.bez([0.19,1,0.22,1]));
  
  
//    });

// const frontLoader = () => {
//     return (
//     <div id="preLoader">
//         <div>
//             Team
//         </div>
//     </div>
//   )
// }

// export default frontLoader