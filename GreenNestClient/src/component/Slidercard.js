import React from 'react'
import Carousel from 'react-grid-carousel'
export const Slidercard = ({ countries, disableClick }) => {

  return <div className="containerMargin"> <Carousel
      cols={4}
      rows={1}
      gap={11}
      hideArrow={false}
      responsiveLayout={[
          {
              breakpoint: 1200,
              cols: 3
          },
          {
              breakpoint: 990,
              cols: 2
          }
      ]}
      mobileBreakpoint={670}
  // arrowRight={<ArrowBtn type="right" />}
  // arrowLeft={<ArrowBtn type="left" />}
  >

      {countries.map((Country, i) => (
          // <Carousel.Item key={i}>
          //     <Country {...country} disableClick={disableClick} />
          // </Carousel.Item>
           <Carousel.Item key={i}>
           <img width="100%" src={Country.image} />
            <h1>{Country.details}</h1>
         </Carousel.Item>
      ))}
  </Carousel>
  </div>
}


// const Slidercard = () => {
//   return (
//     <Carousel cols={2} rows={1} gap={10} loop>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=1" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=2" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=3" />
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* anything you want to show in the grid */}
//       </Carousel.Item>
//       {/* ... */}
//     </Carousel>
//   )
// }
// export default Slidercard;