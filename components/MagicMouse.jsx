// import React, { useState } from "react";
// import styled from "styled-components";

// const Container = styled.section`
//   min-height: 50vh;
//   position: relative;
// `;

// const MagicMouse = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.pageX, y: e.pageY });
//   };

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <Container onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <p>MagicMouse</p>
//       {isHovering && (
//         <div
//           className="magic-mouse"
//           style={{
//             position: "fixed",
//             left: mousePosition.x + "px",
//             top: mousePosition.y + "px",
//             width: "20px",
//             height: "20px",
//             background: "#000",
//             borderRadius: "50%",
//             pointerEvents: "none",
//             transition: "transform 0.2s, opacity 0.2s",
//             mixBlendMode: "difference",
//             zIndex: "9999",
//             transform: "translate(-50%, -50%)",
//             transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
//             transitionDuration: "400ms",
//             willChange: "transform, opacity",
//             opacity: 1,
//           }}
//         />
//       )}
//     </Container>
//   );
// };

// export default MagicMouse;
