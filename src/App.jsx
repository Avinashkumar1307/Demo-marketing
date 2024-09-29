import { BrowserRouter } from "react-router-dom";

import { About,Services, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,StarsCanvas, Slider } from "./components";
import Footer from "./components/Footer";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import PreLoader from "./components/PreLoader";
// const App = () => {
//   const [screenLoading, setScreenLoading] = useState(false);

//   useEffect(() => {
//     setScreenLoading(true);
//     setTimeout(() => {
//       setScreenLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <>
//       {
//         screenLoading ? (
//            <div>
//             ZarvisGenix
//            </div>
//         ) : (
//           <BrowserRouter>
//             <div className='relative z-0 bg-primary'>
//               <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//                 <Navbar />
//                 <Hero />
//               </div>
//               <Slider />
//               <About />
//               <Experience />
//               <Tech />
//               <Works />
//               <Feedbacks />
//               <div className='relative z-0'>
//                 <Contact />
//                 <StarsCanvas />
//               </div>
//               <Footer />
//             </div>
//           </BrowserRouter>
//         )
//       }
//     </>
//   );
// }

// export default App;

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate an async operation, e.g., fetching data
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Adjust the timeout to match your actual loading time
//   }, []);

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <BrowserRouter>
//       <div className='relative z-0 bg-primary'>
//       {/* className='bg-hero-pattern bg-cover bg-no-repeat bg-center' */}
//         <div >
//           <Navbar />
//           <Hero />
//         </div>
//         <Slider />
//         <About />
//         <Experience />
//         <Tech />
//         <Works />
//         <Feedbacks />
//         <div className='relative z-0'>
//           <Contact />
//           <StarsCanvas />
//         </div>
//         <Footer/>
//       </div>
//     </BrowserRouter>
//   );
// }

const App = () => {
  return (
      <BrowserRouter>
      <PreLoader />
      <div className='relative z-0 bg-primary'>
      {/* className='bg-hero-pattern bg-cover bg-no-repeat bg-center' */}
        <div >    
          <Navbar />
          <Hero />
        </div>
        <About />
        <Slider />
        <Services />
        <Experience />
        <Tech />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter> 
  );
}

export default App;