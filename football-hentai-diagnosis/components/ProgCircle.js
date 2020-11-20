
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./ProgCircle.module.scss"
import ProgressProvider from "./ProgressProvider"

const ProgCircle = ({deg}) => {

   const percent = parseInt(deg, 10)

   const circleStyle = buildStyles({
      pathTransitionDuration: 1,
      pathColor: "rgb(0, 119, 255)",
      textColor: "rgb(0, 119, 255)",
      trailColor: 'rgb(0, 238, 255)'
   })

   return (
      <div className={styles.wrap}>
         <ProgressProvider valueStart={0} valueEnd={percent}>
            {
               value => 
                  <CircularProgressbar 
                     value={value} 
                     text={`${value}%`} 
                     styles={circleStyle}
                  />
            }
         </ProgressProvider>
      </div>
   );
};


export default ProgCircle