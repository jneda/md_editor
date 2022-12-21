// initial markdown
const markdown = `
# Je ne connais pas bien le markdown
Je sais **écrire en gras**, _en italique_, **_les deux à la fois_**, ~~ou en barré~~.

Je sais aussi \`// écrire du code en ligne\`

\`\`\`
function say($what) {
  echo $what;
}
say('ou bien sur plusieurs');
\`\`\`
(mais c'est un peu étrange).

Je connais aussi
- les listes
  - que je peux indenter
    - encore
      - et encore
1. Les listes ordonnées
1. qu'on le veuille
1. ou pas
## Bien entendu
### Toute une gamme
##### De titres
(les marges sont un peu abusées)

Ah oui ! Je sais donner [un lien vers le site toto.com](https://www.toto.com)
 
> et faire une citation ?

(oui)

et montrer l'image d'une loutre
![image d'une loutre](./loutre.jpg)
`;

// app
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
  }

  componentDidMount() {
    this.setState({ markdown: markdown });
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
