# 扩展
通过扩展增强 Visual Studio Code 的功能
## 查看扩展
快捷键：`⇧⌘X`
![extensions-view-icon.png](./assets/ExtensionMarketplace/extensions-view-icon.png)
## 安装扩展
## 管理扩展
## 扩展视图过滤器
扩展视图搜索框支持过滤器以帮助您查找和管理扩展。如果您使用了 Show Installed Extensions 和 Show Recommended Extensions 命令，您可能已经看到了诸如 @installed 和 @recommended 之类的过滤器。
此外，还有一些过滤器可让您按受欢迎程度或评级进行排序，并按类别（例如“Linters”）和标签（例如“节点”）进行搜索。您可以通过在扩展搜索框中键入 @ 并浏览建议来查看所有过滤器和排序命令的完整列表：
![extensions-view-icon.png](./assets/ExtensionMarketplace/extension-search-filters.png)
以下是扩展视图过滤器：
- `@builtin` - 显示 VS Code 附带的扩展。按类型（编程语言、主题等）分组。
- `@disabled` - 显示已禁用的已安装扩展。
- `@installed` - 显示已安装的扩展。
- `@outdated` - 显示过时的已安装扩展。市场上有更新的版本。
- `@enabled` - 显示已启用的已安装扩展。扩展可以单独启用/禁用。
- `@recommended` - 显示推荐的扩展。分组为工作区特定用途或一般用途。
- `@category` - 显示属于指定类别的扩展。以下是一些受支持的类别。如需完整列表，请输入 @category 并按照建议列表中的选项进行操作：
- `@category：themes`
- `@category:formatters`
- `@category: linters`
- `@category:snippets`
这些过滤器也可以组合使用。例如：使用`@installed` `@category:themes` 查看所有已安装的主题。
如果没有提供过滤器，扩展视图会显示当前安装和推荐的扩展。

## 工作区推荐的扩展
一组好的扩展可以提高使用特定工作区或编程语言的效率，并且您经常希望与您的团队或同事共享此列表。您可以使用扩展：配置推荐的扩展（工作区文件夹）命令为工作区创建推荐的扩展列表。

在单个文件夹工作区中，该命令会在工作区 .vscode 文件夹中创建一个 extensions.json 文件，您可以在其中添加扩展标识符列表 ({publisherName}.{extensionName})。
```
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}

```
