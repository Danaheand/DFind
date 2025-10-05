import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../constants/storageKeys';

export function useFirstLaunch() {
  const [loading, setLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const flag = await AsyncStorage.getItem(STORAGE_KEYS.ONBOARDED);
        setIsFirstLaunch(flag !== 'true'); // si no existe, es primera vez
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, isFirstLaunch };
}
