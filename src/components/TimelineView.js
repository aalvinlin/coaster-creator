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

      const ControlPoint = ({coordinates}) => {
        return <Point coordinates={coordinates} color="#FFCCCC" />;
      }

      const VertexPoint = ({coordinates}) => {
        return <Point coordinates={coordinates} color="#666666" />;
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
          
            <VertexPoint coordinates={entrance} />
            <VertexPoint coordinates={right} />
            <VertexPoint coordinates={top} />
            <VertexPoint coordinates={left} />
            <VertexPoint coordinates={exit} />

            <ControlPoint coordinates={controlPointEntranceToRight} />
            <ControlPoint coordinates={controlPointRightToTop} />
            <ControlPoint coordinates={controlPointTopToLeft} />
            <ControlPoint coordinates={controlPointLeftToExit} />
          </>
      );

    return (
        <svg viewBox="0 0 800 800">
            {loop}
        </svg>
    );

}

export default TimelineView;