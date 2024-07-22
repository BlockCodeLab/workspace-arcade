import { classNames, Button } from '@blockcode/ui';

import styles from './gamepad.module.css';

export default function Gamepad() {
  const handleMouseDown = (e) => {};

  return (
    <div className={styles.gamepadWrapper}>
      <div className={styles.buttonsGroup}>
        <div className={styles.joystickX}></div>
        <div className={styles.joystickY}></div>
        <Button
          className={classNames(styles.button, styles.joystick)}
          onMouseDown={handleMouseDown}
        ></Button>
      </div>
      <div className={styles.buttonsGroup}>
        <Button className={classNames(styles.button, styles.fn)}>FN</Button>
        <Button className={classNames(styles.button, styles.a)}>A</Button>
        <Button className={classNames(styles.button, styles.b)}>B</Button>
        <Button className={classNames(styles.button, styles.x)}>X</Button>
        <Button className={classNames(styles.button, styles.y)}>Y</Button>
      </div>
    </div>
  );
}
