import * as Device from 'expo-device';

export const useDeviceInfo = () => {
  return {
    brand: Device.brand ?? 'Unknown',
    modelName: Device.modelName ?? 'Unknown',
    osName: Device.osName ?? 'Unknown',
    osVersion: Device.osVersion ?? 'Unknown',
  };
};
