'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('./c4b43629b4de3d73a79d27fb0314f46a.js'),c=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:d}=require('react-redux'),e=40;class f extends a.Component{constructor(a){super(a),this.state={biasTop:0}}componentDidMount(){}componentWillUnmout(){}componentWillReceiveProps(a){a.show!=this.props.show&&a.show&&this.props.y+e>document.body.clientHeight&&this.setState({biasTop:-e})}onDelClick(a){a.stopPropagation(),this.props.path&&this.props.cosActions.removeResources(this.props.path),this.props.cosActions.setContextMenu({show:!1})}render(){const b={display:this.props.show?'':'none',left:this.props.x,top:this.props.y+this.state.biasTop};return a.createElement('div',{className:'menu',style:b},a.createElement('div',{className:'menu-item',onClick:this.onDelClick.bind(this)},a.createElement('div',{className:'menu-item-bd'},a.createElement('p',null,'\u5220\u9664')),a.createElement('div',{className:'menu-item-ft'})))}}module.exports=d((a)=>{return _extends({x:0,y:0},a.cos.contextMenu)},(a)=>{return{cosActions:c.bindActionCreators(b,a)}})(f)}(require('lazyload'),require);