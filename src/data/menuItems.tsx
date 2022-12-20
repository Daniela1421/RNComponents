import { MenuItem } from "../interface/appInterfaces";

export const menuItems: MenuItem[]=[
  {
    name: 'Animation 101',
    icon: 'cube-outline', 
    component: 'Animation101Screen'
  }, 
  {
    name: 'Animation 102',
    icon: 'albums-outline', 
    component: 'Animation102Screen'
  },
  {
    name: 'Switches',
    icon: 'toggle-outline', 
    component: 'SwitchScreen'
  }, 
  {
    name: 'TextInputs',
    icon: 'document-text-outline', 
    component: 'TextInputScreen'
  }, 
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline', 
    component: 'PullToRefreshScreen'
  }
]