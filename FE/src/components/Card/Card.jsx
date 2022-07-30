import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const [percentage, setPercentage ] = useState(0);
  const [compli, setCompli ] = useState(0);
  const [nonCompli, setNonCompli ] = useState(0);
  var compl=0;
  var non_compl=0;
  const func = param?.data?.forEach((prod)=> {
    if(prod.failure_reasons === null){
      compl += 1;
      // setCompli(compl)
    }else{
      non_compl += 1;
      // setCompli(non_compl)
    }
  })
  // setPercentage((compl/ compl+ non_compl)*100)
  // console.log(compl)
  var perc = (compl/(compl+non_compl))*100;
  perc = perc.toFixed(1);
  var total = compl+non_compl;
  // const [percentage, setPercentage ] = React.useState();
  const Png = param.png;
  // var compl=0;
  // var non_compl=0;
  // param?.data?.forEach((prod)=> {
  //   if(prod.failure_reasons === null){
  //     compl += 1;
  //   }else{
  //     non_compl += 1;
  //   }
  // })
  // setPercentage((compl/ compl+ non_compl)*100)

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.compl ? 100-perc : perc}
          text={`${param.compl ? 100-perc : perc}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>{param.compl ? compl : total-compl}</span>
        <span>Current Stats</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  // const data = {
  //   options: {
  //     chart: {
  //       type: "pie",
  //     },
  //     labels: ['A', 'B', 'C', 'D', 'E'],

  //     dropShadow: {
  //       enabled: false,
  //       enabledOnSeries: undefined,
  //       top: 0,
  //       left: 0,
  //       blur: 3,
  //       color: "#000",
  //       opacity: 0.35,
  //     },

  //     fill: {
  //       colors: ["#fff"],
  //       type: "gradient",
  //     },
      
  //   },
  //   series: [44, 55, 41, 17, 15],
  //     labels: ['A', 'B', 'C', 'D', 'E']
  // };

  const [percentage, setPercentage ] = useState(0);
  const [compli, setCompli ] = useState(0);
  const [nonCompli, setNonCompli ] = useState(0);
  var compl=0;
  var non_compl=0;
  const func2 = param?.data?.forEach((prod)=> {
    if(prod.failure_reasons === null){
      compl += 1;
      // setCompli(compl)
    }else{
      non_compl += 1;
      // setCompli(non_compl)

    }
  })
  // setPercentage((compl/ compl+ non_compl)*100)
  // console.log(compl)
  var perc = (compl/(compl+non_compl))*100;
  perc = perc.toFixed(0);
  var nperc = 100-perc;

  return (
    <>
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
        <span>{param.title}</span>
      <div className="pie">
        <Chart options={  {labels: ['Compliant Products', 'Non Complaint Products'], colors:['#E8DD5E', '#E91E63']}} series={[perc*4,nperc*4]} type="pie" height={450} width={450}  />
      </div>
      <span>Current Stats</span>
    </motion.div>
    </>
    
  );
}

export default Card;
