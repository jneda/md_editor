// app
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
  }

  handleMarkdownChange(markdown) {
    this.setState({ markdown: markdown });
  }

  render() {
    return (
      <div>
        <h1>Bonjour tout le monde ! 😙</h1>
        <Editor
          markdown={this.state.markdown}
          onMarkdownChange={this.handleMarkdownChange}
        />
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}

// editor
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onMarkdownChange(event.target.value);
  }

  render() {
    return (
      <textarea
        id="editor"
        onChange={this.handleChange}
        value={this.props.markdown}
      />
    );
  }
}

// preview
class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.markdown);
    const content = marked.parse(this.props.markdown);
    console.log(content);
    return (
      <div id="preview" dangerouslySetInnerHTML={{ __html: content }}></div>
    );
  }
}

// display
const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
