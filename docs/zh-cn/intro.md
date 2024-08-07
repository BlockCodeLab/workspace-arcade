![](../_media/3d.png)

这是一款少儿编程教育的硬件产品，非常符合国内目前的小学阶段编程教育（Scratch图形化和Python编程），以往的编程学习在教学过程中逐渐变得模式单一、程序模版化、学生兴趣下滑。这款产品将完全弥补这些不足，提升教学内容的丰富性，程序的多样性和变化性，学生的成就感获得完全提升，并且**完全不改变现在已有的教学内容，完全拿来即用。**

## 产品特性

| 硬件   | 说明                                                                            |
| ------ | ------------------------------------------------------------------------------- |
| 芯片   | **ESP32-S3** Xtensa&copy;**双核 240 MHz** <br /> 8MB SPI flash <br /> 8MB PSRAM |
| 屏幕   | 2.0寸 **320×240** 高清彩屏                                                      |
| 网络   | 802.11b/g/n Wi-Fi <br /> Bluetooth 5                                            |
| 电池   | 800mAh 3.7v 锂电池                                                              |
| 按钮   | 4向摇杆 × 1 <br /> 编程按钮 × 9                                                 |
| 麦克风 | MEMS 麦克风 × 1                                                                 |
| 接口   | Type-C USB × 1 <br /> 2.5mm 耳机口 × 1 <br /> 多功能扩展口 × 1                  |
| 尺寸   | 100mm × 38mm                                                                    |

### 屏幕

**2.0寸** 大屏幕的TFT高清彩色屏幕，支持多达 **65536** 种丰富的颜色（16位色），分辨率达到 **320×240** 像素，可以呈现游戏广阔的舞台，结合 TileMap（敬请期待） 实现庞大的 2D 游戏世界。

### 网络

由 ESP32-S3 带来的强大网络功能，支持 802.11b/g/n Wi-Fi 和 Bluetooth 5，结合网络 AI 服务，轻松实现语音识别（需要板载麦克风）、图像识别（需要扩展摄像头）、家庭自动化等等功能，掌握前沿科技知识，**多台学习机还可以实现多机互联，实现联网互动**。

### 交互

4向编程摇杆：超薄摇杆（**上/下/左/右**）；5个编程按钮：四个标准游戏按钮（**A/B/X/Y**）和一个功能按钮（**Fn**）。通过编程赋予摇杆和按钮不同的功能，实现各种游戏玩法，丰富程序交互能力，更可作为**遥控手柄**通过物联网控制其他设备（敬请期待）。

板载的MEMS麦克风可以实时录音，结合网络就可以进行语音控制、语音识别、AI 对话等功能

### 接口

- 板载 Type-C USB 接口进行充电和程序下载。
- **2.5mm耳机口**，可以连接耳机听音乐或连接传感器模块探测环境数据。
- **多功能扩展口**，实现连接更多的外设硬件模块（敬请期待），可以连接摄像头模块、舵机模块、超声波模块、颜色识别模块……丰富游戏程序的互动方式和功能。

!> 外设硬件模块不定期上新，敬请期待。

## 编写程序

在 [BlockCode Playgrounds](https://make.blockcode.fun/) 使用图形化（Scratch）或 MicroPython 进行编程。

![](_media/icon.png 'MicroPython（左） 和 图形化（右）')

### 图形化（Scratch）

![](_media/scratch.png '图形化')

界面与Scratch完全一样（暂缺“声音”模块，敬请期待），大部分的编程积木模块也都一样，少部分因为硬件特征有所不同（以后缺少的部分会逐步补全，更贴近原版 Scratch 的积木模块和功能），更方便熟悉Scratch的老师进行教学。

扩展模块差异比较大，拥有更多硬件（需要连接相应外设）方面的控制模块和AI模块。

|      | 差异                                                                                                                                                                                                                                |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 舞台 | 宽高比和原版Scratch保持一致，但分辨率有所减小——320×240，x坐标从-160到160，y坐标从-120到120。<br/>不显示变量，变量内容的显示将在新增的“数据监控”（敬请期待）面板中。<br />舞台上需要显示更多文字（或列表）可通过“动画文字”扩展实现。 |
| 造型 | 造型资源只有位图模式，不支持矢量图模式，Scratch 中的造型都可以使用。                                                                                                                                                                |
| 背景 | 除了Scratch中的位图背景，还支持 **TileMap背景**以及**AI背景**。<br/> **TileMap背景**使用瓦片图制作超大的游戏地图；**AI背景**使用生成式AI通过文字来生成一副位图背景。                                                                |
| 声音 | 只能使用wav格式声音文件。（暂时仅在模拟器上能播放声音）                                                                                                                                                                             |
| 积木 | 暂时缺少Scratch中的特效积木、颜色碰撞积木。<br />“日期时间”相关积木改为“时间”扩展添加。<br /> 自制积木暂未提供。（敬请期待）<br /> 舞台也将有运动类积木，以控制**TileMap背景**控制。（敬请期待）                                    |

#### 扩展

通过丰富的扩展实现更多天马行空的想法，扩展涵盖图形、数据、算法、传感器、电机、AI等等多个方面，更多扩展后续将陆续推出。

![](_media/extensions.png '部分扩展展示')

### MicroPython

固件基于最新 MicroPython 1.2x 版本编译，增加了特有的包，更方便开发游戏和小程序。

!> MicroPython 编程平台敬请期待。
