import {List, BarChart, CastConnected, Feedback, LineStyle, Mail, Message, Movie, PermIdentity, Timeline, TrendingUp } from '@material-ui/icons';

const sidebarData = [
  {
  menuTitle:"Dashboard",
  menuItems:[
    {
      title:"Home",
      icon:LineStyle,
      path:"/"
    },
    {
      title:"Analystics",
      icon:Timeline,
      path:"/"
    },
    {
      title:"Sales",
      icon:TrendingUp,
      path:"/sales"
    }
  ]
  },
  {
  menuTitle:"Quick Menu",
  menuItems:[
    {
      title:"Users",
      icon:PermIdentity,
      path:"/users"
    },
    {
      title:"Movies",
      icon:Movie,
      path:"/movies"
    },
    {
      title:"Lists",
      icon:List,
      path:"/lists"
    },
  ]
  },
  {
  menuTitle:"Notification",
  menuItems:[
    {
      title:"Mail",
      icon:Mail,
      path:"/mail"
    },
    {
      title:"Feedback",
      icon:Feedback,
      path:"/feedback"
    },
    {
      title:"Message",
      icon:Message,
      path:"/message"
    }
  ]
  },
  {
  menuTitle:"Staff",
  menuItems:[
    {
      title:"Manage",
      icon:CastConnected,
      path:"/manage"
    }
  ]
  },

  
];

export default sidebarData;