import { useState } from 'preact/hooks';
import { classNames } from '@blockcode/ui';
import ArcadePlayer from '../arcade-player/arcade-player';
import Toolbar from './toolbar';
import Gamepad from './gamepad';
import styles from './stage.module.css';

export default function Stage({ playing, size, onSizeToggle, onPlay }) {
  const [runtime, setRuntime] = useState(null);

  const handlePlay = () => onPlay(true);
  const handleStop = () => onPlay(false);

  return (
    <div className={styles.stageWrapper}>
      <Toolbar
        onSizeToggle={onSizeToggle}
        stageSize={size}
        playing={playing}
        onPlay={handlePlay}
        onStop={handleStop}
      />

      <div className={classNames(styles.stage, { [styles.smallStage]: size === 'small' })}>
        <ArcadePlayer
          stageSize={size}
          playing={playing}
          onReady={setRuntime}
          onRequestStop={handleStop}
        />
      </div>

      <Gamepad runtime={runtime} />
    </div>
  );
}
