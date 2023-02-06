import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import { useState } from "react"
import "./feature.scss"
const Feature = () => {
    const array = [ {rate:"negative"},{rate:"positive"},{rate:"positive"}, ]
  return (
    <div className="feature">
        {array.map(el=>
            <div className="featureItem">
            <span className="featureTitle">Revenue</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$2,5</span>
                <span className="featureRate">5 
                {el.rate==="negative"?<ArrowDownward  className={`featureIcon ${el.rate}`} />
                :<ArrowUpward className="featureIcon" />}
                </span>
            </div>
            <div className="featureSubscribtion">
                Compared
            </div>
        </div>
        )}
    </div>
)}

export default Feature