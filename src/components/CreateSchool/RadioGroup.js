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
            <div className="col-lg-10">
                   {this.props.radios.map((item,index)=>{
                     return <div
                                className="radio radio-btn"
                                key={index}
                                style={{backgroundColor: index==selectedIndex?'#35B355':'#3DCC61'}}
                            >
                                <label>
                                    <input
                                        type="button"
                                        value={item}
                                        onClick={this.onClick.bind(this,index)}
                                    />
                                    {item}
                                </label>
                            </div>
                   })}
            </div>
      )
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
