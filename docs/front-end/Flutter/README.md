# Flutter

## 环境搭建

### 安装 Flutter SDK

[Flutter SDK 下载](https://flutter.dev/docs/development/tools/sdk/releases)

- 选择`Stable channel（稳定版本）`
- 解压后增加`\Flutter SDK\bin`环境变量
- 执行`flutter --version`即可查看当前 Flutter 版本

### 配置镜像

Windows 环境变量修改：右键`计算机`-`属性`-`高级系统设置`-`高级`-`环境变量`

- `PUB_HOSTED_URL`: `https://pub.flutter-io.cn`
- `FLUTTER_STORAGE_BASE_URL`: `https://storage.flutter-io.cn`

### 开发环境安装插件

安装插件：

- `Flutter`: 为 Flutter 开发准备
- `Dart`: 为 Flutter 开发准备
- `Code Runner`: 点击右上角的按钮快速运行代码

## 基础语法

### main 函数

- 简化 main 函数

  ```dart
  main(){
    print("Hello World");
  }
  ```

- 完整 main 函数，List 列表为命令行参数列表

  ```dart
  void main(List<String> args) {
    print("Hello World");
    print(args);
  }
  ```

### 定义变量

- 明确声明

  ```dart
  数据类型 变量 = 值;

  // Example
  String name = "abc";
  int age = 18;
  double height = 1.88;
  ```

- 类型推导

  ```dart
  var 变量 = 值;

  // Example
  var name = "abc";
  var age = 18;
  var height = 1.88;
  ```

### 定义常量

`final` 声明的常量可以在运行时赋值，而 `const` 声明的常量必须在编译时赋值，一般情况下final用的更多。

- final声明常量

  ```dart
  final 变量 = 值;

  // Example
  final height = 1.88;
  ```

- const声明常量

  ```dart
  const 变量 = 值;

  // Example
  const height = 1.88;
  ```

### 定义动态变量

动态变量可随时改变其数据类型

```dart
dynamic 变量名;

// Example
dynamic height = 1.88;
```

### 特殊运算符

- `??=`：空合并运算符，如果变量为null，才赋值，否则不赋值。

  ```dart
  var name = null;
  name ??= "hello";
  print(name);
  ```

- `??`：空合并运算符，如果变量为null，返回右侧表达式，否则返回左侧表达式。

  ```dart
  var 变量名 = 值 ?? 默认值;

  // Example
  var name = null;
  var temp = name ?? "hello";
  print(temp);
  ```
- 级联运算符

  级联运算符（`..`）可以连续调用多个方法。

  ```dart
  var persion = Persion()
                ..name = "abc"
                ..eat()
                ..run();

  class Persion {
    String name;

    void run() {
      print("running");
    }

    void eat() {
      print("eating");
    }
  }
  ```

### 循环操作

- for 循环

  ```dart
  for (var i = 0; i < 10; i++) {
    print(i);
  }
  ```

- for in 遍历和Set类型

  ```dart
  var names = ["why", "kobe", "curry"];
  for (var name in names) {
    print(name);
  }
  ```

- while 循环

  ```dart
  while (条件) {
    循环体;
  }
  ```

- do 循环

  ```dart
  do {
    循环体;
  } while (条件);
  ```

## 数据类型

- 整数类型

  ```dart
  int 变量名 = 值;

  // Example
  int age = 18;
  ```

- 浮点类型

  ```dart
  double 变量名 = 1.00;
  ```

- 布尔类型

  ```dart
  var 变量名 = true;
  var 变量名 = false;
  ```

- 字符串

  ```dart
  // Example
  var message1 = "Hello World";
  var message2 = 'Hello World';
  var message3 = """
  abc
  cba
  """;
  ```

  字符串和表达式拼接：
  - 提供表达式是一个标识符，那么{}可以省略，直接写标识符即可

  ```dart
  var name = "abc";
  var age = 18;
  var height = 1.88;

  var message = "my name is ${name}, i am ${age} years old, i am ${height} meters tall";
  ```

### 集合

- List 列表

  ```dart
  List<String> 集合名 = ["元素1", "元素2"];
  ```

  - 获取长度

    ```dart
    print(集合名.length);
    ```

    - 添加元素

      ```dart
      集合名.add("元素3");
      print(集合名);
      ```

    - 删除元素

      ```dart
      集合名.remove("元素3");
      print(集合名);
      ```

- Set 集合

  Set 类型不允许重复，一般用来去重

  ```dart
  Set<int> 集合名 = {1, 2, 3, 4};
  print(集合名);
  ```

  - 获取长度

    ```dart
    print(集合名.length);
    ```

  - 添加元素

    ```dart
    集合名.add(5);
    print(集合名);
    ```

  - 删除元素

    ```dart
    集合名.remove(5);
    print(集合名);
    ```

- Map 映射

  ```dart
  Map<String, dynamic> 变量名 = {
    "键1" : "值",
    "键2" : 1
  };
  ```

  - 获取长度

    ```dart
    print(变量名.length);
    ```

## 函数

### 定义

```dart
返回值类型 函数名(参数类型 参数名) {
  // 函数体
  return 返回值;
}

// Example
int add(int a, int b) {
  return a + b;
}
```

### 可选参数

::: tip 提示
只有可选参数才能有默认值
:::

- 位置可选参数

  ```dart
  函数名(参数值)
  函数名(参数值, 参数值)

  返回值类型 函数名([参数类型 参数名, 参数类型 参数名 = 默认值]) {
    // 函数体
    return 返回值;
  }
  ```

  ```dart
  // Example
  sayHello("why", 18, 1.88);

  void sayHello(String name, [int age = 18, double height = 1.00]) {
    print("Hello $name, i am $height meters tall");
  }
  ```

- 命名可选参数

  ```dart
  函数名(参数值)
  函数名(参数值,参数名: 参数值)

  返回值类型 函数名(参数类型 参数名,{参数类型 参数名}) {
    // 函数体
    return 返回值;
  }
  ```

  ```dart
  // Example
  sayHello("why", age: 18, height: 1.88);

  void sayHello(String name, {int age = 18, double height = 1.00}) {
    print("Hello $name, i am $height meters tall");
  }
  ```

### 匿名函数

```dart
test((num1,num2) {
  return num1 + num2;
});

typedef Calculate = int Function(int num1, int num2);
void test(Calculate calc) {
  calc(1, 2);
}
```

### 箭头函数

函数体只有一行时，可以省略大括号和return关键字，直接写表达式即可。

```dart
test(() => print("Hello World"));
```

## 类和对象

Dart 中，所有类都继承自 Object

### 定义

```dart
class 类名 {
  数据类型 属性名;
  void 方法名() {

  }
}
```

### 实例化

```dart
final 实例化名称 = 类名();
实例化名称.方法();
实例化名称.变量 = 值;
```

### 构造方法

```dart
class 类名 {
  类名(数据类型 参数1,[数据类型 参数2]){

  }
}
```

### 命名构造方法

```dart
final 实例化名称 = 类名.构造方法名();

class 类名.构造方法名 {
  类名(数据类型 参数1,[数据类型 参数2]){

  }
}
```

### 常量构造函数

当传入的参数一致时，实例为同一个实例

```dart
main(List<String> args) {
  const p1 = Persion("why");
  const p2 = Persion("why");
  print(identical(p1, p2));
}

class Persion {
  final String name;
  const Persion(this.name);
}
```

### 继承

```dart
class 类名 extends 继承类名 {

}
```

### 抽象类

抽象方法：没有方法定义，没有方法的实现

- 抽象类不能被实例化
- 抽象类中可以定义抽象

```dart
abstract class 类名 {

}
```

### 接口

Dart 中，默认所有的类都是接口

```dart
class 类名 implements 接口名 {

}
```

### 混入

```dart
mixin 混入名 {

}

class 类名 with 混入名{

}
```

## 泛型

### 泛型类

```dart
class 类名<T> {
  T 变量名;
}

//实例化
类名 实例名 = 类名<String>("参数");
类名 实例名 = 类名<int>(1, 2);
```

### 泛型方法

```dart
T 方法名<T>(参数类型<T> 参数名) {

}
```

## 库

导入：`export 'url路径'`

## 创建项目

菜单 New - Flutter Project 或 `flutter create 项目名称`

## 界面

### 自定义组件

继承自 StatelessWidget，没有状态，必须实现 build 方法

```dart
class ContentWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "Hello World",
        textDirection: TextDirection.ltr,
        style: TextStyle(fontSize: 36),
      ),
    );
  }
}
```
