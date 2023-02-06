import { Visibility } from "@material-ui/icons"

const WidgetSm = ({title}) => {
  return (
    <>
    <span className="widgetTitle">{title}</span>
    <ul className="widgetList">
        <li className="widgetListItems">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <div className="widgetUserContainer">
            <span className="widgetUsername">D Law</span>
            <span className="widgetUserTitle">Engineer</span>
          </div>
          <button className="wdigetButton">
            <Visibility/>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetList">
        <li className="widgetListItems">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <div className="widgetUserContainer">
            <span className="widgetUsername">Transactions+</span>
            <span className="widgetUserTitle">Engineer</span>
          </div>
          <button className="wdigetButton">
            <Visibility/>
            Display
          </button>
        </li>
      </ul>

    </>
  )
}

export default WidgetSm