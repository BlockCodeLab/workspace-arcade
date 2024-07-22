import { useLayout, useLocale, useEditor } from '@blockcode/core';
import { Text, MenuItem } from '@blockcode/ui';

export default function WifiMenuItem({ className }) {
  const { createAlert, createPrompt } = useLayout();
  const { getText } = useLocale();
  const { assetList, addAsset } = useEditor();

  let ssid = localStorage.getItem('device.wifi.ssid');
  let password = localStorage.getItem('device.wifi.password');

  const wifiConfig = assetList.find((asset) => asset.id === 'wifi_config');
  if (wifiConfig) {
    ssid = wifiConfig.ssid;
    password = wifiConfig.password;
  }

  return (
    <MenuItem
      className={className}
      label={
        <Text
          id="arcade.menu.device.wifi"
          defaultMessage="Arcade Wi-Fi config"
        />
      }
      onClick={() => {
        createPrompt({
          title: getText('arcade.menu.device.wifi', 'Arcade Wi-Fi config'),
          label: getText('arcade.menu.device.wifiNamePassword', 'Wi-Fi name and password'),
          inputMode: [
            {
              name: 'ssid',
              placeholder: getText('arcade.menu.device.wifiName', 'Wi-Fi name'),
              defaultValue: ssid || '',
            },
            {
              name: 'password',
              placeholder: getText('arcade.menu.device.wifiPassword', 'Wi-Fi password'),
              defaultValue: password || '',
            },
          ],
          content: getText(
            'arcade.menu.device.wifiNote',
            'The Wi-Fi information currently displayed does not represent the configuration in the device, and will not be updated until the next time you download the program.',
          ),
          onClose: () => {
            createAlert(
              {
                mode: 'warn',
                message: getText('arcade.menu.device.wifiCancel', 'Deconfigure Wi-Fi.'),
              },
              1500,
            );
          },
          onSubmit: (wifi) => {
            if (wifi) {
              addAsset({
                id: '_wifi_config',
                type: 'text/x-python',
                ssid: wifi.ssid,
                password: wifi.password,
                content: `ssid = "${wifi.ssid}"\npassword = "${wifi.password}"`,
              });
              localStorage.setItem('device.wifi.ssid', wifi.ssid);
              localStorage.setItem('device.wifi.password', wifi.password);
              createAlert(
                {
                  message: getText('arcade.menu.device.wifiOk', 'The Wi-Fi configuration is saved.'),
                },
                2000,
              );
            }
          },
        });
      }}
    />
  );
}
