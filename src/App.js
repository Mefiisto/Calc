import React, { Component } from 'react';
import classes from './App.css';
import Display from './components/Display/Display'
import Buttons from './components/Buttons/Buttons'
import Button from './components/Buttons/Button/Button'

class App extends Component {
  state = {
    evalMasive: [],
    lasActionType: null
  }


  mouseClickHandler = (value, type, minusType = false) => {
    const evalMasive = this.state.evalMasive
    const lasActionType = this.state.lasActionType  
      if(type === 'number') {
        evalMasive.push(value)
        this.setState({
          evalMasive,
          lasActionType: type
        }) 
      } else if(lasActionType === 'operation' && type ==='operation' || (!minusType && lasActionType === 'minusType') ) {
        evalMasive.pop()
        evalMasive.push(value)
        this.setState({
          lasActionType: type
        }) 
      } else if(lasActionType === 'minusType' && evalMasive.length === 1) {

      } else if(minusType) {
        evalMasive.push(value)
        this.setState({
          evalMasive,
          lasActionType: 'minusType'
        })         
      } else if(lasActionType === null && type ==='operation') {
        
      } else {
        evalMasive.push(value)
        this.setState({
          evalMasive,
          lasActionType: type
        }) 
      } 
  }

  onSubmitEval = () => {
    const massive = this.state.evalMasive
    const result = [eval(massive.join(''))]
    if(this.state.evalMasive.length >= 3) {
      this.setState({
        evalMasive: result
      })
    }
  }

  cleanEvalMassive = () => {
    this.setState({
      evalMasive: [],
      lasActionType: null
    })
  }   

  removeLastAction = () => {
    const evalMasive = this.state.evalMasive
    evalMasive.pop()
    this.setState({
      evalMasive,
      lasActionType: 'number'
    })
  }

  render() {
    return (
      <div className={classes.App}>
      <h1>My React Calculator</h1>
        <div className={classes.calculatorWrap}>
          <Display>
            {this.state.evalMasive.join('')}
          </Display>
          
          <Buttons>
            <Button onClick={this.cleanEvalMassive} label='C' />
            <Button onClick={() => this.mouseClickHandler(7, 'number')} label='7' />
            <Button onClick={() => this.mouseClickHandler(4, 'number')} label='4' /> 
            <Button onClick={() => this.mouseClickHandler(1, 'number')} label='1' />
            <Button onClick={() => this.mouseClickHandler(0, 'number')} label='0' />

            <Button onClick={this.removeLastAction} label='CE' />
            <Button onClick={() => this.mouseClickHandler(8, 'number')} label='8' />
            <Button onClick={() => this.mouseClickHandler(5, 'number')} label='5' />
            <Button onClick={() => this.mouseClickHandler(2, 'number')} label='2' />
            <Button onClick={() => this.mouseClickHandler('.', 'operation')} label='.' /> 

            <Button onClick={() => this.mouseClickHandler('/', 'operation')} label='/' />
            <Button onClick={() => this.mouseClickHandler(9, 'number')} label='9' /> 
            <Button onClick={() => this.mouseClickHandler(6, 'number')} label='6' />
            <Button onClick={() => this.mouseClickHandler(3, 'number')} label='3' />
            <Button  label=' ' />

            
            <Button onClick={() => this.mouseClickHandler('*', 'operation')} label='x' />   
            <Button onClick={() => this.mouseClickHandler('-', 'operation', true)} label='-' /> 
            <Button onClick={() => this.mouseClickHandler('+', 'operation')} label='+' />
            <Button onClick={this.onSubmitEval} label='=' height={true} />  

          </Buttons>
        </div>
      </div>
    );
  }
}

export default App;
