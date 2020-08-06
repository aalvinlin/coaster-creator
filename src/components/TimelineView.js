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

      const Loop = ({entranceX, entranceY, height}) => {

        entranceX = parseInt(entranceX);
        entranceY = parseInt(entranceY);

        let width = height / 2;

        let farSideX = entranceX + width;
        let farSideY = entranceY - height / 2;

        let topX = entranceX + width / 2;
        let topY = entranceY - height;

        let nearSideX = entranceX;
        let nearSideY = entranceY - height / 2;

        let exitX = entranceX + width;
        let exitY = entranceY;

        let pointSequence =
          `
            M ${entranceX},${entranceY}
            Q ${farSideX},${farSideY}
            Q ${nearSideX},${nearSideY}
            Q ${exitX},${exitY}
          `;

        console.log(pointSequence)

        return (
            
          <>
            <path d={pointSequence} fill="none" stroke="red" strokeWidth={5} />
            
            <VertexPoint coordinates={[entranceX, entranceY]} />
            <VertexPoint coordinates={[farSideX, farSideY]} />
            <VertexPoint coordinates={[topX, topY]} />
            <VertexPoint coordinates={[nearSideX, nearSideY]} />
            <VertexPoint coordinates={[exitX, exitY]} />

            {/* <ControlPoint coordinates={controlPointEntranceToRight} />
            <ControlPoint coordinates={controlPointRightToTop} />
            <ControlPoint coordinates={controlPointTopToLeft} />
            <ControlPoint coordinates={controlPointLeftToExit} /> */}
          </>
      );

    }

    return (
        <svg viewBox="0 0 800 800">
            <Loop entranceX="0" entranceY="800" height="400" />
        </svg>
    );

}

export default TimelineView;