import React from "react";
import { ModalButton } from "./ModalButton";

export class TableComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      rawArticles : props.data.articles,
      data : this.formatData(props.data)
    }
  }

  formatData(rawData){
    const { outcomes, articles } = rawData;
    let lastColumn = 1;
    const matrix = Array(outcomes.length + 1)
                    .fill()
                    .map(()=> Array(articles.length + 1).fill());
    outcomes.forEach((outcome, index) => {
      const articleIds = outcome.articleIds;
      articleIds.forEach(articleId => {
        const article = articles.find(article => article.id === articleId);
        const artifleInfo = `${article.author}, ${article.year}`;
        const column = matrix[0].indexOf(artifleInfo);
        if(column < 0){
          matrix[0][lastColumn] = artifleInfo
          matrix[index+1][lastColumn++] = articleId;
          matrix[index+1][0] = outcome.description;
        } else {
          matrix[index+1][column] = articleId;
          matrix[index+1][0] = outcome.description;
        }        
      });      
    });
    return matrix;
  }

  getArticleInfo(articleId){
    const article = this.state.rawArticles.find(article => article.id === articleId);
    return article.abstract;
  }

  renderAuthorsHeader(){
    const authorsRow = this.state.data[0];
    return (
      <tr>
        {authorsRow.map(author => <th>{author}</th>)}
      </tr>
    );
  }

  renderColumn(column){
    if(typeof column === 'number'){
      const articleInfo = this.getArticleInfo(column);
      return (
        <div>
          <ModalButton abstract={articleInfo}/>
        </div>
        
      );
    }
    return column
  }

  renderRow(row){
    return (
      <tr>
        {row.map(column => <td>{this.renderColumn(column)}</td>)}
      </tr>
    ); 
  }

  renderArticleRows(){
    const articleRows = this.state.data.slice(1);
    return articleRows.map(row => this.renderRow(row));
  }

  render(){
    return (
      <table>
        <thead>
          {this.renderAuthorsHeader()}
        </thead>
        <tbody>
          {this.renderArticleRows()}
        </tbody>
      </table>
    );
  }    
}