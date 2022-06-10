const path = require('path');

module.exports = {
  name : 'gugudan-settting',
  mode : 'development', // 개발용이며 실 서비스로 배포할 때는 'production'으로 변경
  devtool : 'eval', // 개발용이며 실 서비스로 배포할 때는 'hidden-source-map'으로 변경  
  resolve : {
    extensions : ['.js', '.jsx']
  },
  entry : {
    app : './client',
  }, 
  module : {
    rules : [{
      test : /\.jsx?$/, // js 파일과 jsx 파일에 rule를 적용함. 그리고 $는 붙이지 않아도 됨.
      loader : 'babel-loader',      
      options : {
        presets : ['@babel/preset-env', '@babel/preset-react']
      },
    }],
  },
  output : {
    path : path.join(__dirname, 'dist'), // __dirname : 현재 폴더 경로(F:\자바스크립트 스터디\React\lecture\webgame\gugudan\dist)
    filename : 'app.js',
  }
};