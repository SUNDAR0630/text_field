class TextField {
    constructor(options) {
      this.options = options;
    }
  
    render() {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', this.options.placeholder);
      return input;
    }
  }
  
  export default TextField;
  

// function createTextField(options) {
//     return {
//       render: function() {
//         const input = document.createElement('input');
//         input.setAttribute('type', 'text');
//         input.setAttribute('placeholder', options.placeholder);
//         return input;
//       }
//     };
//   }
  
//   module.exports = createTextField;
  