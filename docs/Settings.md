# 设置
## User and Workspace Settings
您可以根据自己的喜好通过各种设置配置 Visual Studio Code。几乎 VS Code 的编辑器、用户界面和功能行为的每个部分都有可以修改的选项。
VS Code 提供了几种不同的设置范围。当您打开一个工作区时，您将至少看到以下两个范围：
- 用户设置 - 全局应用于您打开的任何 VS Code 实例的设置。
- 工作区设置 - 存储在工作区中的设置，仅在工作区打开时应用。
## Settings editor
要修改用户设置，需要使用 `Settings editor`。
打开方式
- On macOS - `Code > Preferences > Settings`
- 命令面板(⇧⌘P) 输入 `Preferences: Open Settings`
- 快捷键 `⌘,`

![settings-search.png](./assets/Settings/settings-search.png)
当您更改设置时，VS Code 会应用对设置的更改。修改后的设置用蓝线表示，类似于编辑器中的修改行。
![settings-modified.png](./assets/Settings/settings-modified.png)
齿轮图标（更多操作... ⇧F9）打开一个上下文菜单，其中包含将设置重置为其默认值以及复制设置 ID 或 JSON 名称-值对的选项。
![more-actions-context-menu.png](./assets/Settings/more-actions-context-menu.png)

## 设置编辑器过滤器

设置编辑器搜索栏有几个过滤器，可以更轻松地管理您的设置。搜索栏右侧是一个带有漏斗图标的过滤器按钮，该按钮提供了一些选项，可以轻松地将过滤器添加到搜索栏。

要检查您配置了哪些设置，搜索栏中有一个@modified 过滤器。如果设置的值与默认值不同，或者如果其值在相应的设置 JSON 文件中明确设置，则会在此过滤器下显示设置。
![modified-filter-settings.png](./assets/Settings/modified-filter-settings.png)
其他过滤选项
![settings-editor-filters.png](./assets/Settings/settings-editor-filters.png)
清除过滤选项：`⌘Z`
![clear-search-input-button.png](./assets/Settings/clear-search-input-button.png)
## extensions settings
已安装的 VS Code 扩展也可以贡献自己的设置，您可以在设置编辑器的扩展部分下查看这些设置。
![cpp-extension-settings.png](./assets/Settings/cpp-extension-settings.png)
## settings.json
设置编辑器是允许您查看和修改存储在 settings.json 文件中的设置值的 UI。
![settings-json-in-editor.png](./assets/Settings/settings-json-in-editor.png)
某些设置只能在 settings.json 中编辑，例如 Workbench: Color Customizations 并在 Settings 编辑器中显示 Edit in settings.json 链接。
![edit-in-settings-json-link.png](./assets/Settings/edit-in-settings-json-link.png)
![color-customization-example.png](./assets/Settings/color-customization-example.png)
## Workspace settings
工作区设置特定于项目，并且可以在项目的开发人员之间共享。工作区设置会覆盖用户设置。
>注意：VS Code“工作区”通常只是你的项目根文件夹。工作区设置以及调试和任务配置存储在 .vscode 文件夹的根目录中。通过称为多根工作区的功能，您还可以在 VS Code 工作区中拥有多个根文件夹。
![settings-editor-workspace-tab.png](./assets/Settings/settings-editor-workspace-tab.png)
工作区设置文件位于根文件夹中的 .vscode 文件夹下。
![settings-json-under-vscode.png](./assets/Settings/settings-json-under-vscode.png)
## 同步设置
您可以使用设置同步功能在您的 VS Code 实例之间共享您的用户设置。此功能允许您在不同机器上的 VS Code 安装中共享设置、键盘快捷键和已安装的扩展。您可以通过设置编辑器右侧的打开设置同步命令或帐户活动栏上下文菜单启用设置同步。
![accounts-context-menu.png](./assets/Settings/accounts-context-menu.png)
