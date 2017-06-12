import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends Component {
    constructor(props) {
      super(props);
      this.state={
          selectedIndex: 0,
          backgroundColor: '#3DCC61',
      }
    }

    //改变RadioGroup状态
    onClick (index) {
  　　this.setState({
        selectedIndex:index,
      });
      console.log(this.state.selectedIndex);
      this.props.onClick(index);
  　}

    render() {
        const { radios } = this.props;
        const { selectedIndex } = this.state;
        return (
                <div>
                   {this.props.radios.map((item,index)=>{
                                <button
                                    key={index}
                                    className="btn btn-success"
                                    type="button"
                                    onClick={this.onClick.bind(this,index)}
                                    style={{backgroundColor: index==selectedIndex?'#35B355':'#3DCC61'}}
                                >{item}
                                </button>
                   })}
                </div>
        );
  }
}

RadioGroup.propTypes = {
  radios: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired,
}
RadioGroup.defaultProps = {
  selectedIndex: 0
};
export default RadioGroup
