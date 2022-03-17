import { ethers } from 'ethers';

export const formatPrice = (price: string, decimals: number): string => {
  return parseFloat(ethers.utils.formatUnits(price, 18)).toFixed(decimals);
};

export function secondsSinceEpoch(d: number) {
  return Math.floor(d / 1000);
}

export function addMinutes(timeStamp: number, minutes: number): number {
  return timeStamp + minutes * 60000;
}

export function addHours(timeStamp: number, hours: number): number {
  return timeStamp + hours * 3600000;
}

export function addDays(timeStamp: number, days: number): number {
  return timeStamp + days * 86400000;
}

export const padMinuteWithZero = (minuteString: string) => {
  return minuteString.length === 1 ? `0${minuteString}` : minuteString;
};

export const hoursAndMinutesToMilliseconds = (timeString: string): number => {
  const hours = timeString.split(':')[0];
  const minutes = timeString.split(':')[1];
  return parseInt(hours) * 3600000 + parseInt(minutes) * 60000;
};

export const getTimeStamp = (hoursAndMinutes: string, date: Date): number => {
  return (
    (date.getTime() + hoursAndMinutesToMilliseconds(hoursAndMinutes)) / 1000
  );
};

export const getTimeStringFromTimestamp = (timestamp: number): string => {
  return new Date(timestamp * 1000).toISOString().split('T')[1].slice(0, 5);
};

export const getDateStringFromTimestamp = (timestamp: number): string => {
  return new Date(timestamp * 1000).toISOString().split('T')[0];
};

export const getDayMontYearFromTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString('default', { month: 'short' });
  return date.getDay() + ' ' + month + ' ' + date.getFullYear();
};

export const toMidnight = (date: Date): Date => {
  return new Date(date.setUTCHours(0, 0, 0, 0));
};

export const shortenAddress = (address?: string): string => {
  if (address) {
    return `${address.slice(0, 6)}...${address.slice(address.length - 5)}`;
  } else {
    return '????';
  }
};
