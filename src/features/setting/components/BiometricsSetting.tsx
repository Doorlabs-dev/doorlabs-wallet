import React, { useEffect, useState } from 'react';
import BiometricsEnableSwitch from '@features/biometrics/components/BiometricsEnableSwitch';
import useBiometrics, { biometricsStore } from '@hooks/useBiometrics';

type Props = {};

const BiometricsSetting = (props: Props) => {
  const [enabled, setEnabled] = useState(false);

  const { supportedTypes } = useBiometrics();

  const onChange = async (enabled: boolean) => {
    setEnabled(enabled);
    await biometricsStore.set(enabled);
  };

  useEffect(() => {
    biometricsStore.get().then((val) => setEnabled(val || false));
  }, []);

  return (
    <BiometricsEnableSwitch
      supportedTypes={supportedTypes}
      enabled={enabled}
      onChange={onChange}
      textSize={18}
    />
  );
};

export default BiometricsSetting;
