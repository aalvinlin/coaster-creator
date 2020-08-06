import React from "react";

const TimelineView = ({elements}) => {

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

        let width = height * 2 / 3;

        let farSideX = entranceX + width;
        let farSideY = entranceY - height * 3 / 5;

        let topX = entranceX + width / 2;
        let topY = entranceY - height;

        let nearSideX = entranceX;
        let nearSideY = entranceY - height * 3 / 5;

        let exitX = entranceX + width;
        let exitY = entranceY;

        let pointSequence =
          `
            M ${entranceX},${entranceY}
            C ${entranceX + width / 2},${entranceY} ${farSideX},${farSideY + height / 4} ${farSideX},${farSideY}
            C ${farSideX},${farSideY - height / 4} ${topX + width / 4},${topY} ${topX},${topY}
            C ${topX - width / 4},${topY} ${nearSideX},${nearSideY - height / 4} ${nearSideX},${nearSideY}
            C ${nearSideX},${nearSideY + height / 4} ${exitX - width / 2},${exitY} ${exitX},${exitY}
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
            <Loop entranceX="20" entranceY="450" height="400" />
        </svg>
    );

}

export default TimelineView;