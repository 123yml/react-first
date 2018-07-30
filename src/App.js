import React, { Fragment, Component } from 'react'
// import { HeaderOne, HeaderTwo } from './Components'

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            todos: [
                '吃饭',
                '睡觉'
            ],
            inputValue: ''
        }
        this.handleRemoveClick = this.handleRemoveClick.bind(this)
    }

    handleValueChange = (e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }

    handleAddClick = ()=>{
        const { todos, inputValue} = this.state;
        this.setState({
            todos: [...todos, inputValue],
            inputValue: ''
        })
    }

    handleRemoveClick (item){
        const { todos } = this.state;
        todos.splice(todos.indexOf(item), 1);
        this.setState({
            todos
        })
    }

    render(){
        return (
            <Fragment>
                <ul>
                    { 
                        this.state.todos.map(
                            (item, index)=>{
                                return <li key={index}>
                                    { item }
                                    <button onClick={()=>{ this.handleRemoveClick(item) }}>删除</button>
                                    </li>
                            }
                        )
                    }
                </ul>
                <input 
                    type='text'
                    value={ this.state.inputValue }
                    onChange={ this.handleValueChange }
                />
                <button onClick={ this.handleAddClick }>添加</button>
            </Fragment>
        )
    }
}