```js
const Todo=mongoose.model('todo',TodoSchema,collection);
todo=>name of the mmodel;
Todo=>Model itself;
collection:optional to specify particular collection
```

## Why nodemodules
 - node modules provide an environment for your project to run.
- node modules serve as a self-contained environment for your project, providing all the necessary code and dependencies required for execution. This environment ensures that your project can run consistently and reliably across different environments, contributing to its portability and maintainability

- Replacement in other languages.

| Language | Dependency Management Solution    | Configuration File    | Command(s)              | Package Repository                 |
|----------|----------------------------------|------------------------|-------------------------|------------------------------------|
| JavaScript (Node.js) | npm (Node Package Manager)     | package.json           | npm install <package>  | npm (Node Package Manager) registry |
| Python   | pip                              | requirements.txt       | pip install <package>  | PyPI (Python Package Index)        |
| Ruby     | RubyGems and Bundler             | Gemfile                | bundle install         | RubyGems                           |
| Java     | Maven                            | pom.xml                | mvn install            | Maven Central Repository           |
|          | Gradle                           | build.gradle           | gradle build           | Maven Central Repository           |
| .NET (C#)| NuGet                            | .csproj, packages.config, .NET Core projects: .csproj or .fsproj| dotnet add package <package> | NuGet Gallery             |
| Go (Golang)| go mod                        | go.mod, go.sum         | go mod tidy, go mod download| Go Module Proxy (by default), configurable                      |


```jsx

<input style={{margin:"2px"}}/>
```
first curly braces => to set attribute
second curly braces=> because its an object where we are assigning the key pair values.