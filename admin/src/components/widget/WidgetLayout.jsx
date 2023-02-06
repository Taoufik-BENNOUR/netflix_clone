import { Visibility } from "@material-ui/icons"
import "./widget.scss"
import WidgetLg from "./WidgetLg"
import WidgetSm from "./WidgetSm"
const Widget = ({size}) => {
  return (
    <div className={`widget ${size}`}>
        {size==="small"?<WidgetSm title={"new members"} />:<WidgetLg title={"transactions"} />}
    </div>
  )
}

export default Widget