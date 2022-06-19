# 重构

源代码重构可以通过重构代码而不修改运行时行为来提高项目的质量和可维护性。 Visual Studio Code 支持重构操作（重构），例如提取方法和提取变量，以从您的编辑器中改进您的代码库。
![refactoring-hero.png](./assets/Refactoring/refactoring-hero.png)
重构由语言服务提供，VS Code 通过 TypeScript 语言服务内置了对 TypeScript 和 JavaScript 重构的支持。

## Code Actions = Quick Fixes and refactorings

在 VS Code 中，代码操作可以为检测到的问题提供重构和快速修复（以绿色曲线突出显示）。当光标位于曲线或选定文本区域时，源代码附近的灯泡会宣布可用的代码操作。单击代码操作灯泡或使用快速修复命令⌘。将显示快速修复和重构。

如果您只想查看没有快速修复的重构，可以使用重构命令 (⌃⇧R)。
>注意：如果您不想在编辑器中看到代码操作灯泡，您可以使用 editor.lightbulb.enable 设置禁用灯泡。您仍然可以通过快速修复命令和⌘打开快速修复。键盘快捷键。

## 重构动作

### 提取方法

选择您要提取的源代码，然后单击装订线中的灯泡或按 (⌘.) 以查看可用的重构。可以将源代码片段提取到新方法中，或者提取到各种不同范围内的新函数中。在提取重构期间，系统将提示您提供一个有意义的名称。

### 提取变量

TypeScript 语言服务提供 Extract 到 const 重构，为当前选定的表达式创建一个新的局部变量：
![ts-extract-local.gif](./assets/Refactoring/ts-extract-local.gif)

## 重命名符号

重命名是与重构源代码相关的常见操作，VS Code 有一个单独的重命名符号命令 (F2)。某些语言支持跨文件重命名符号。按 F2，然后键入所需的新名称并按 Enter。符号的所有用法都将跨文件重命名。
![rename.png](./assets/Refactoring/rename.png)
![code-action-context-menu.png](./assets/Refactoring/code-action-context-menu.png)
