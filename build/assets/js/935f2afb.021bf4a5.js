"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"documentationSidebar":[{"type":"category","label":"Getting Started","items":[{"type":"category","label":"IDE Support","items":[{"type":"link","label":"JetBrains Rider Setup","href":"/docs/getting-started/ide-support/jetbrains-rider-setup","docId":"getting-started/ide-support/jetbrains-rider-setup"}],"collapsed":true,"collapsible":true,"href":"/docs/getting-started/ide-support/"},{"type":"category","label":"Programming with Avalonia","items":[{"type":"link","label":"The Model-View-ViewModel Pattern \\\\(MVVM\\\\)","href":"/docs/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm","docId":"getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm"},{"type":"link","label":"Controls & Layouts","href":"/docs/getting-started/programming-with-avalonia/controls-and-layouts","docId":"getting-started/programming-with-avalonia/controls-and-layouts"},{"type":"link","label":"Data Binding","href":"/docs/getting-started/programming-with-avalonia/data-binding","docId":"getting-started/programming-with-avalonia/data-binding"},{"type":"link","label":"Graphics & Animations","href":"/docs/getting-started/programming-with-avalonia/graphics-and-animations","docId":"getting-started/programming-with-avalonia/graphics-and-animations"}],"collapsed":true,"collapsible":true,"href":"/docs/getting-started/programming-with-avalonia/"},{"type":"link","label":"Windows","href":"/docs/getting-started/windows","docId":"getting-started/windows"},{"type":"link","label":"UserControls","href":"/docs/getting-started/usercontrols","docId":"getting-started/usercontrols"},{"type":"link","label":"Assets","href":"/docs/getting-started/assets","docId":"getting-started/assets"},{"type":"link","label":"Developer Tools","href":"/docs/getting-started/developer-tools","docId":"getting-started/developer-tools"},{"type":"link","label":"Logging Errors and Warnings","href":"/docs/getting-started/logging-errors-and-warnings","docId":"getting-started/logging-errors-and-warnings"},{"type":"link","label":"Unhandled Exceptions","href":"/docs/getting-started/UnhandledExceptions","docId":"getting-started/UnhandledExceptions"},{"type":"link","label":"Application Lifetimes","href":"/docs/getting-started/application-lifetimes","docId":"getting-started/application-lifetimes"}],"collapsed":true,"collapsible":true,"href":"/docs/getting-started/"},{"type":"category","label":"Data Binding","items":[{"type":"link","label":"The DataContext","href":"/docs/data-binding/the-datacontext","docId":"data-binding/the-datacontext"},{"type":"link","label":"Change Notifications","href":"/docs/data-binding/change-notifications","docId":"data-binding/change-notifications"},{"type":"link","label":"Bindings","href":"/docs/data-binding/bindings","docId":"data-binding/bindings"},{"type":"link","label":"Binding Classes","href":"/docs/data-binding/binding-classes","docId":"data-binding/binding-classes"}],"collapsed":true,"collapsible":true,"href":"/docs/data-binding/"},{"type":"category","label":"Animations","items":[{"type":"link","label":"Keyframe Animations","href":"/docs/animations/keyframe-animations","docId":"animations/keyframe-animations"},{"type":"link","label":"Transitions","href":"/docs/animations/transitions","docId":"animations/transitions"},{"type":"link","label":"PageTransitions","href":"/docs/animations/pageTransitions","docId":"animations/pageTransitions"}],"collapsed":true,"collapsible":true,"href":"/docs/animations/"}],"apiSidebar":[{"type":"link","label":"Avalonia.Animations","href":"/docs/api/Avalonia-Animation/Animators","docId":"api/Avalonia-Animation/Animators"}],"guideSidebar":[{"type":"category","label":"Basics","items":[{"type":"link","label":"Introduction to XAML","href":"/docs/guides/basics/introduction-to-xaml","docId":"guides/basics/introduction-to-xaml"},{"type":"link","label":"Code-behind","href":"/docs/guides/basics/code-behind","docId":"guides/basics/code-behind"},{"type":"link","label":"MVVM Architecture","href":"/docs/guides/basics/mvvm","docId":"guides/basics/mvvm"},{"type":"link","label":"Accessing the UI thread","href":"/docs/guides/basics/accessing-the-ui-thread","docId":"guides/basics/accessing-the-ui-thread"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Deep Dives","items":[{"type":"link","label":"Running your Avalonia app on a Raspberry Pi with Raspbian Lite","href":"/docs/guides/deep-dives/running-on-raspbian-lite-via-drm","docId":"guides/deep-dives/running-on-raspbian-lite-via-drm"},{"type":"link","label":"Running your app on a Raspberry Pi","href":"/docs/guides/deep-dives/running-your-app-on-a-raspberry-pi","docId":"guides/deep-dives/running-your-app-on-a-raspberry-pi"}],"collapsed":true,"collapsible":true}]},"docs":{"animations/index":{"id":"animations/index","title":"\ud83d\udd11 Animations","description":"There are two types of animations in Avalonia:","sidebar":"documentationSidebar"},"animations/keyframe-animations":{"id":"animations/keyframe-animations","title":"Keyframe Animations","description":"Keyframe animations in Avalonia are heavily inspired by CSS Animations. They can be used to animate any number of properties on a control, using any number of keyframes to define the states that each property must pass through. Keyframe animations can run any number of times, in either direction.","sidebar":"documentationSidebar"},"animations/pageTransitions":{"id":"animations/pageTransitions","title":"PageTransitions","description":"PageTransitions are used to render a transition between two views, for example in a Carousel or TransitioningContentControl","sidebar":"documentationSidebar"},"animations/transitions":{"id":"animations/transitions","title":"Transitions","description":"Transitions in Avalonia are also heavily inspired by CSS Animations. They listen to any changes in target property\'s value and subsequently animates the change according to its parameters. They can be defined on any Control via Transitions property:","sidebar":"documentationSidebar"},"api/Avalonia-Animation/Animators":{"id":"api/Avalonia-Animation/Animators","title":"Animators","description":"","sidebar":"apiSidebar"},"api/namespaces":{"id":"api/namespaces","title":"Namespaces","description":""},"authoring-controls/defining-properties":{"id":"authoring-controls/defining-properties","title":"Defining Properties","description":"If you are creating a control, you will want to define properties on your control. You do this by defining AvaloniaPropertys for your control. Avalonia properties consist of two parts: the property definition and the CLR getter/setter for the property."},"authoring-controls/index":{"id":"authoring-controls/index","title":"\u270f Authoring Controls","description":"Learn how to create custom controls.&#x20;"},"authoring-controls/types-of-control":{"id":"authoring-controls/types-of-control","title":"Types of Control","description":"If you want to create your own controls, there are three main categories of control in Avalonia. The first thing to do is choose the category of control that best suits your use-case."},"data-binding/binding-classes":{"id":"data-binding/binding-classes","title":"Binding Classes","description":"In Avalonia, you also can bind classes. Sometimes it could be useful to switch classes depending on some logic, and for those purposes, you can use Binding Classes API. There is the sample usage of Binding Classes. We have two different styles and we want to switch between them depending on MyProperty state.","sidebar":"documentationSidebar"},"data-binding/bindings":{"id":"data-binding/bindings","title":"Bindings","description":"You bind in XAML using the  markup extension. By using bindings \\\\(assuming you\'ve implemented change notifications\\\\) any changes to the data context will automatically be updated in the control.","sidebar":"documentationSidebar"},"data-binding/change-notifications":{"id":"data-binding/change-notifications","title":"Change Notifications","description":"Property Changes","sidebar":"documentationSidebar"},"data-binding/index":{"id":"data-binding/index","title":"\ud83d\udd04 Data Binding","description":"Data binding provides a simple way to get data into your application\'s UI without having to set properties on each control each time a value changes.","sidebar":"documentationSidebar"},"data-binding/the-datacontext":{"id":"data-binding/the-datacontext","title":"The DataContext","description":"The Control.DataContext property describes where controls will look by default for values when binding. The data context will usually be set for top-level controls such as Window and child controls will inherit this data context.","sidebar":"documentationSidebar"},"getting-started/application-lifetimes":{"id":"getting-started/application-lifetimes","title":"Application Lifetimes","description":"Platforms are not created equal. The lifetime management that we are used to in Windows Forms and WPF can work only on desktop-style platforms. AvaloniaUI is a cross-platform framework, so to help your application to be portable, we provide different lifetime models for your application and allow you to control everything manually if platform allows us to do so.","sidebar":"documentationSidebar"},"getting-started/assets":{"id":"getting-started/assets","title":"Assets","description":"Many applications need to include assets such as bitmaps and resource dictionaries within their executable and refer to these assets from XAML.","sidebar":"documentationSidebar"},"getting-started/developer-tools":{"id":"getting-started/developer-tools","title":"Developer Tools","description":"Avalonia has an inbuilt DevTools window which is enabled by calling the attached AttachDevTools() method in a Window constructor. The default templates have this enabled when the program is compiled in DEBUG mode:","sidebar":"documentationSidebar"},"getting-started/ide-support/index":{"id":"getting-started/ide-support/index","title":"IDE Support","description":"JetBrains Rider","sidebar":"documentationSidebar"},"getting-started/ide-support/jetbrains-rider-setup":{"id":"getting-started/ide-support/jetbrains-rider-setup","title":"JetBrains Rider Setup","description":"1. Download and install the .NET SDK of your choice Download .NET \\\\(Linux, macOS, and Windows\\\\) \\\\(microsoft.com\\\\)","sidebar":"documentationSidebar"},"getting-started/index":{"id":"getting-started/index","title":"\ud83d\ude80 Getting Started with Avalonia","description":"Ready to get started with Avalonia? Follow these steps to install the templates and create your first application.","sidebar":"documentationSidebar"},"getting-started/logging-errors-and-warnings":{"id":"getting-started/logging-errors-and-warnings","title":"Logging Errors and Warnings","description":"Avalonia can log warnings and errors using System.Diagnostics.Trace. To enable logging the LogToTrace method call should be present in your Program.cs file:","sidebar":"documentationSidebar"},"getting-started/programming-with-avalonia/controls-and-layouts":{"id":"getting-started/programming-with-avalonia/controls-and-layouts","title":"Controls & Layouts","description":"Controls","sidebar":"documentationSidebar"},"getting-started/programming-with-avalonia/data-binding":{"id":"getting-started/programming-with-avalonia/data-binding","title":"Data Binding","description":"Avalonia includes comprehensive support for binding between controls and to arbitrary .NET objects. Data binding can be set up in XAML or in code and supports:","sidebar":"documentationSidebar"},"getting-started/programming-with-avalonia/graphics-and-animations":{"id":"getting-started/programming-with-avalonia/graphics-and-animations","title":"Graphics & Animations","description":"Graphics","sidebar":"documentationSidebar"},"getting-started/programming-with-avalonia/index":{"id":"getting-started/programming-with-avalonia/index","title":"Programming with Avalonia","description":"Avalonia lets you develop an application using the XAML markup language and C\\\\# \\\\(or another .NET language\\\\) for code. You generally use XAML markup to implement the appearance of an application while using code to implement its behavior.","sidebar":"documentationSidebar"},"getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm":{"id":"getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm","title":"The Model-View-ViewModel Pattern \\\\(MVVM\\\\)","description":"As well as writing code in code-behind, Avalonia supports using the Model-View-ViewModel pattern \\\\(or MVVM\\\\). MVVM is a common way to structure UI applications that separates view logic from application logic in a way that allows your applications to become unit-testable.","sidebar":"documentationSidebar"},"getting-started/UnhandledExceptions":{"id":"getting-started/UnhandledExceptions","title":"Unhandled Exceptions","description":"Avalonia does not offer any mechanism to handle exceptions globally and mark this as handled. The reason is, that one cannot know if the exception has been handled correctly and therefore the application may be in an invalid state. Instead it\'s highly recommend to handle exceptions locally if these can be handled by your application. That said it is still a good idea to log any unhandled exception for further support and debugging.","sidebar":"documentationSidebar"},"getting-started/usercontrols":{"id":"getting-started/usercontrols","title":"UserControls","description":"UserControl represents a \\"view\\" in Avalonia, which is a reusable collection of controls in a predefined layout.","sidebar":"documentationSidebar"},"getting-started/windows":{"id":"getting-started/windows","title":"Windows","description":"Window is the top-level control in Avalonia.","sidebar":"documentationSidebar"},"guides/basics/accessing-the-ui-thread":{"id":"guides/basics/accessing-the-ui-thread","title":"Accessing the UI thread","description":"A Dispatcher provides services for managing work items on a specific thread. In Avalonia you will usually have only one Dispatcher, the one that handles the UI thread. Whenever you need to update the UI from a different thread than the UI thread, you need to access the UI thread via the running Dispatcher.","sidebar":"guideSidebar"},"guides/basics/code-behind":{"id":"guides/basics/code-behind","title":"Code-behind","description":"Window and UserControl files also have an associated code-behind file which usually has the extension .xaml.cs or .axaml.cs and may be displayed collapsed under the XAML file in your editor. Below you can see a MainWindow.xaml file along with its markdown file MainWindow.xaml.cs in Visual Studio:","sidebar":"guideSidebar"},"guides/basics/introduction-to-xaml":{"id":"guides/basics/introduction-to-xaml","title":"Introduction to XAML","description":"Avalonia uses XAML to define user-interfaces. XAML is an XML-based markup language that is used by many UI frameworks.","sidebar":"guideSidebar"},"guides/basics/mvvm":{"id":"guides/basics/mvvm","title":"MVVM Architecture","description":"Understanding the Model-View-ViewModel architectural pattern.","sidebar":"guideSidebar"},"guides/deep-dives/running-on-raspbian-lite-via-drm":{"id":"guides/deep-dives/running-on-raspbian-lite-via-drm","title":"Running your Avalonia app on a Raspberry Pi with Raspbian Lite","description":"This tutorial shows you how to run your Avalonia app on a Raspberry Pi with Raspbian Lite","sidebar":"guideSidebar"},"guides/deep-dives/running-your-app-on-a-raspberry-pi":{"id":"guides/deep-dives/running-your-app-on-a-raspberry-pi","title":"Running your app on a Raspberry Pi","description":"Step 1","sidebar":"guideSidebar"},"intro":{"id":"intro","title":"Tutorial Intro","description":"Let\'s discover Docusaurus in less than 5 minutes."},"tutorial-basics/congratulations":{"id":"tutorial-basics/congratulations","title":"Congratulations!","description":"You have just learned the basics of Docusaurus and made some changes to the initial template."},"tutorial-basics/create-a-blog-post":{"id":"tutorial-basics/create-a-blog-post","title":"Create a Blog Post","description":"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed..."},"tutorial-basics/create-a-document":{"id":"tutorial-basics/create-a-document","title":"Create a Document","description":"Documents are groups of pages connected through:"},"tutorial-basics/create-a-page":{"id":"tutorial-basics/create-a-page","title":"Create a Page","description":"Add Markdown or React files to src/pages to create a standalone page:"},"tutorial-basics/deploy-your-site":{"id":"tutorial-basics/deploy-your-site","title":"Deploy your site","description":"Docusaurus is a static-site-generator (also called Jamstack)."},"tutorial-basics/markdown-features":{"id":"tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features."},"tutorial-extras/manage-docs-versions":{"id":"tutorial-extras/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs."},"tutorial-extras/translate-your-site":{"id":"tutorial-extras/translate-your-site","title":"Translate your site","description":"Let\'s translate docs/intro.md to French."},"welcome":{"id":"welcome","title":"Welcome","description":"Welcome to the documentation for Avalonia, a cross-platform .NET framework for building beautiful, modern graphical user interfaces (GUIs). With Avalonia, you can create native applications for Windows, macOS, Linux, iOS, Android, and WebAssembly, all from a single codebase."}}}')}}]);