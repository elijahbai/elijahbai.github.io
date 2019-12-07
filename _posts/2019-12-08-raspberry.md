---
layout : post
title: "dht11 buzzer"
date: 2019-12-08
tag: dht11 温湿度检测 buzzer
---

树莓4 + dht11 + python 实现检测温湿度

仓库地址：https://github.com/szazo/DHT11_Python

修改下代码   instance = dht11.DHT11(pin=14)    这里改为pin=17,用BCM编码17的管脚

![](http://www.bigbai.fun/img/B7F0CB44423D3E3DEE42227B1C5BAE13.jpg)

设备连接

设备 | 接地 | 数据  | 电源

-|-|-|-

dht11管脚          |       GND      |          DATA        |         VCC    

树莓4物理引脚    |        9           |           11            |          1

![](http://www.bigbai.fun/img/BAF5F93A1F9E703142C9580FEF9D0047.jpg)

运行结果如下

![](http://www.bigbai.fun/img/20191202145241.png)

- buzzer 蜂鸣器

创建一个python程序

```python
from gpiozero import Buzzer
from time import sleep

buzzer = Buzzer(17)
buzzer.off()    #buzzer低电压触发
sleep(2)
buzzer.on()
```

设备连接，管脚和上面一样，VCC,GND,I/O(物理11/BCM17)

![](http://www.bigbai.fun/img/3A41F4E2257B94E9D224570DB909ABDF.jpg)

运行程序，便会听到di的声音

- linux下安装go

```shell
sudo apt-get install golang
```

检验是否安装好，go version

![](http://www.bigbai.fun/img/20191202140142.png)

有版本号就说明go环境安装 好了
