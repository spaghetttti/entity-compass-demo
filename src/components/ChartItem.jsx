"use client"

export default function ChartItem(props) {
  const n = props.n;
  const handleClick = props.toggleSidebar;
  return (
    // <div
    //   // class="chart-item"
    //   // className="background-color: #fff; padding: 4px; margin: 2px; border: 2px solid #ddd;"
    // >
    <a href="/test">
      <text
        onClick={() => {}}
        className="selectable cursor-pointer"
        data-id={n.id}
        x={n.x + 4}
        y={n.y - n.height / 2 - 4}
        stroke={"white"}
        strokeWidth="2"
      >
        {n.id}
      </text>
      <text
        x={n.x + 4}
        y={n.y - n.height / 2 - 4}
        style={{ pointerEvents: "none" }}
      >
        {n.id}
      </text>
    </a>
    // </div>
  );
}
