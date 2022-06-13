# 扩展
通过扩展增强 Visual Studio Code 的功能
## 查看扩展
快捷键：`⇧⌘X`
![extensions-view-icon.png](./assets/ExtensionMarketplace/extensions-view-icon.png)
## 安装扩展

## 工作区推荐的扩展
一组好的扩展可以提高使用特定工作区或编程语言的效率，并且您经常希望与您的团队或同事共享此列表。您可以使用扩展：配置推荐的扩展（工作区文件夹）命令为工作区创建推荐的扩展列表。

在单个文件夹工作区中，该命令会在工作区 .vscode 文件夹中创建一个 extensions.json 文件，您可以在其中添加扩展标识符列表 ({publisherName}.{extensionName})。
```
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}

```
