const path = require('path');

module.exports = {
  name : 'word-relay-setting', // 웹팩 설정 환경 이름
  mode : 'development', // 개발용이며 실 서비스로 배포할 때는 'production'으로 변경
  devtool : 'eval',
  resolve : {
    extensions : ['.js', '.jsx']
  },
  entry : {
    app : ['./client'],
  }, // 입력
  module : {
    rules : [{
      test : /\.jsx?/, // js 파일과 jsx 파일에 rule를 적용함.
      loader : 'babel-loader',
      options : {
        presets : ['@babel/preset-env', '@babel/preset-react'],
        plugins : ['@babel/plugin-proposal-class-properties'],
      },
    }],
  },
  output : {
    path : path.join(__dirname, 'dist'), // __dirname : 현재 폴더 경로(F:\자바스크립트 스터디\React\lecture\webgame\wordRelay\dist)
    filename : 'app.js' // 출력할 파일 이름 지정
  }, // 출력
};