import { 
  UserGroupIcon, 
  CreditCardIcon, 
  CalendarDaysIcon, 
  ChartBarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon 
} from "@heroicons/react/24/outline";

export const iconMap = {
  UserGroupIcon,
  CreditCardIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon
} as const;

export type IconName = keyof typeof iconMap;

export const getIcon = (iconName: string): React.ComponentType<any> => {
  return iconMap[iconName as IconName] || UserGroupIcon;
};