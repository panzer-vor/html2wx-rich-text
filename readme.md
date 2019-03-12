# Usage:

  ```javascript
  const html2wxml = require('html2wx-rich-text')  // node
  import html2wxml from 'html2wx-rich-text' // browser
  
  const str = '<p>标题</p><div style="color:red;font-size: 16px">内容</div>'
  const nodes = html2wxml(str) // 小程序富文本对象

  // 小程序
  <rich-text nodes="{{nodes}}"></rich-text>