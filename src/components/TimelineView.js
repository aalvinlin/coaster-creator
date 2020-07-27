import React from "react";

const TimelineView = ({elements}) => {

      const entrance = [0, 400];
      const controlPointEntranceToRight = [275, 400];

      const right = [300, 200];
      const controlPointRightToTop = [290, 100];
      
      const top = [200, 100];
      const controlPointTopToLeft = [110, 100];
      
      const left = [100, 200];
      const controlPointLeftToExit = [125, 400];
      
      const exit = [400, 400];
      
      const Point = ({coordinates, color}) => {

        let [cx, cy] = coordinates;
        let radius = 10;

        return <ellipse cx={cx} cy={cy} rx={radius} ry={radius} fill={color} />;

      }

      const loop = (
        <>
          <path
            d={`
              M ${entrance}
              Q ${controlPointEntranceToRight} ${right}
              Q ${controlPointRightToTop} ${top}
              Q ${controlPointTopToLeft} ${left}
              Q ${controlPointLeftToExit} ${exit}
              
            `}
            fill="none"
            stroke="red"
            strokeWidth={5} />
          
            <Point coordinates={entrance} color="#666666" />
            <Point coordinates={right} color="#666666" />
            <Point coordinates={top} color="#666666" />
            <Point coordinates={left} color="#666666" />
            <Point coordinates={exit} color="#666666" />

            <Point coordinates={controlPointEntranceToRight} color="#FFCCCC" />
            <Point coordinates={controlPointRightToTop} color="#FFCCCC" />
            <Point coordinates={controlPointTopToLeft} color="#FFCCCC" />
            <Point coordinates={controlPointLeftToExit} color="#FFCCCC" />
          </>
      );

    return (
        <svg viewBox="0 0 800 800">
            {loop}
        </svg>
    );

}

export default TimelineView;