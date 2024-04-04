import { constructTangleLayout } from "@/utils/constructTangleLayout";
import _ from "lodash";
import * as d3 from "d3";
import React from "react";
import ChartItem from "./ChartItem";

const color = d3.scaleOrdinal(d3.schemeDark2);

export const RenderChart = (data, options = {}) => {
  const background_color = "white";
  options.color ||= (d, i) => color(i);

  const tangleLayout = constructTangleLayout(_.cloneDeep(data), options);

  return (
    <svg
      width={tangleLayout.layout.width}
      height={tangleLayout.layout.height}
      style={{ backgroundColor: background_color }}
    >
      <style>
        {`
        text {
          font-family: sans-serif;
          font-size: 10px;
        }
        .node {
          stroke-linecap: round;
        }
        .link {
          fill: none;
        }
        `}
      </style>

      {tangleLayout.bundles.map((b, i) => {
        let d = b.links
          .map(
            (l) => `
          M${l.xt} ${l.yt}
          L${l.xb - l.c1} ${l.yt}
          A${l.c1} ${l.c1} 90 0 1 ${l.xb} ${l.yt + l.c1}
          L${l.xb} ${l.ys - l.c2}
          A${l.c2} ${l.c2} 90 0 0 ${l.xb + l.c2} ${l.ys}
          L${l.xs} ${l.ys}`
          )
          .join("");
        return (
          <React.Fragment key={i}>
            <path
              className="link"
              d={d}
              stroke={background_color}
              strokeWidth="5"
            />
            <path
              className="link"
              d={d}
              stroke={options.color(b, i)}
              strokeWidth="2"
            />
          </React.Fragment>
        );
      })}

      {tangleLayout.nodes.map((n) => (
        <React.Fragment key={n.id}>
          <path
            className="selectable node"
            data-id={n.id}
            stroke="black"
            strokeWidth="8"
            d={`M${n.x} ${n.y - n.height / 2} L${n.x} ${n.y + n.height / 2}`}
          />
          <path
            className="node"
            stroke="white"
            strokeWidth="4"
            d={`M${n.x} ${n.y - n.height / 2} L${n.x} ${n.y + n.height / 2}`}
          />
          <ChartItem n={n} />
          {/* <text className="selectable" data-id={n.id} x={n.x + 4} y={n.y - n.height / 2 - 4} stroke={background_color} strokeWidth="2">
            {n.id}
          </text>
          <text x={n.x + 4} y={n.y - n.height / 2 - 4} style={{ pointerEvents: 'none' }}>
            {n.id}
          </text> */}
        </React.Fragment>
      ))}
    </svg>
  );
};
