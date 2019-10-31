import React, {Component} from 'react';
import './App.css';
import marked from 'marked';
marked.setOptions({breaks:true})
//const marked = require('marked')
const sample = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      markdown: sample,
      output: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){

  }

  handleChange = function(markdown){
    this.setState({markdown})
    
  }

  render(){
    
    let { markdown } = this.state
    return (
    
      <div className="App">
        <header>
          <h1>Markdown Previewer</h1>
          
        </header>
        <div className="container">
          <div className="left">
              <textarea id="editor" value={markdown} onChange={(event) => this.handleChange(event.target.value)} />
          </div>
          <div className="right">
            <div id="preview-container">
              <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
