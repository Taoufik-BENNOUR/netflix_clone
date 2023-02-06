import React from 'react'

const WidgetLg = ({title}) => {
    const users = ["Pending","Approved","Declined"]
    const Button = ({type})=>{
        return <button className={`widgetButton ${type}`}>{type}</button>
    }
  return (
    <>
        <span className="widgetTitle">{title}</span>
        <table className='widgetTable'>
            <tr className="widgetTr">
                <th className="widgetTh">Cutomer</th>
                <th className="widgetTh">Date</th>
                <th className="widgetTh">Amount</th>
                <th className="widgetTh">Status</th>
            </tr>
            {users.map(el=>
                            <tr className="widgetTr">
                            <td className="widgetUser">
                                 <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <span className="widgetUsername">Snow</span>
                            </td>
                            <td className="widgetDate">2 jan 2222</td>
                            <td className="widgetAmount">$2</td>
                            <td className="widgetStatus"><Button type={el}/></td>
                        </tr>
                )}
        </table>
    </>
  )
}

export default WidgetLg