(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[997],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?r.createElement(g,s(s({ref:t},m),{},{components:a})):r.createElement(g,s({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,{b:function(){return r},Z:function(){return n}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return o},Z:function(){return s}});var r=a(2263),n=a(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,s=o.forcePrependBaseUrl,i=void 0!==s&&s,c=o.absolute,l=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(i)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+m:m}(o,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4257:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),s=a(4996),i=["components"],c={id:"frame-processors",title:"Frame Processors",sidebar_label:"Frame Processors"},l=void 0,m={unversionedId:"guides/frame-processors",id:"guides/frame-processors",isDocsHomePage:!1,title:"Frame Processors",description:"What are frame processors?",source:"@site/docs/guides/FRAME_PROCESSORS.mdx",sourceDirName:"guides",slug:"/guides/frame-processors",permalink:"/react-native-vision-camera/docs/guides/frame-processors",editUrl:"https://github.com/mrousavy/react-native-vision-camera/edit/main/docs/docs/guides/FRAME_PROCESSORS.mdx",version:"current",frontMatter:{id:"frame-processors",title:"Frame Processors",sidebar_label:"Frame Processors"},sidebar:"visionSidebar",previous:{title:"Taking Photos/Recording Videos",permalink:"/react-native-vision-camera/docs/guides/capturing"},next:{title:"Overview",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-overview"}},p=[{value:"What are frame processors?",id:"what-are-frame-processors",children:[]},{value:"Interacting with Frame Processors",id:"interacting-with-frame-processors",children:[]},{value:"Technical",id:"technical",children:[]},{value:"Using Frame Processor Plugins",id:"using-frame-processor-plugins",children:[]},{value:"Benchmarks",id:"benchmarks",children:[]},{value:"Performance",id:"performance",children:[]},{value:"ESLint react-hooks plugin",id:"eslint-react-hooks-plugin",children:[]},{value:"Disabling Frame Processors",id:"disabling-frame-processors",children:[]}],u={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",null,(0,o.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"283",height:"535",style:{float:"right"}},(0,o.kt)("image",{href:(0,s.Z)("img/frame-processors.gif"),x:"18",y:"33",width:"247",height:"469"}),(0,o.kt)("image",{href:(0,s.Z)("img/frame.png"),width:"283",height:"535"}))),(0,o.kt)("h3",{id:"what-are-frame-processors"},"What are frame processors?"),(0,o.kt)("p",null,"Frame processors are functions that are written in JavaScript (or TypeScript) which can be used to ",(0,o.kt)("strong",{parentName:"p"},'process frames the camera "sees"'),".\nInside those functions you can call ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugins"),", which are high performance native functions specifically designed for certain use-cases."),(0,o.kt)("p",null,"For example, you might want to create a ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/not-hotdog/id1212457521"},"Hotdog/Not Hotdog detector app")," ",(0,o.kt)("strong",{parentName:"p"},"without writing any native code"),", while still ",(0,o.kt)("strong",{parentName:"p"},"achieving native performance"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  const frameProcessor = useFrameProcessor((frame) => {\n    \'worklet\'\n    const isHotdog = detectIsHotdog(frame)\n    console.log(isHotdog ? "Hotdog!" : "Not Hotdog.")\n  }, [])\n\n  return (\n    <Camera\n      {...cameraProps}\n      frameProcessor={frameProcessor}\n    />\n  )\n}\n')),(0,o.kt)("p",null,"Frame processors are by far not limited to Hotdog detection, other examples include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AI")," for ",(0,o.kt)("strong",{parentName:"li"},"facial recognition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AI")," for ",(0,o.kt)("strong",{parentName:"li"},"object detection")),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("strong",{parentName:"li"},"Tensorflow"),", ",(0,o.kt)("strong",{parentName:"li"},"MLKit Vision")," or other libraries"),(0,o.kt)("li",{parentName:"ul"},"Creating ",(0,o.kt)("strong",{parentName:"li"},"realtime video-chats")," using ",(0,o.kt)("strong",{parentName:"li"},"WebRTC")," to directly send the camera frames over the network"),(0,o.kt)("li",{parentName:"ul"},"Creating scanners for QR codes, Barcodes or even custom codes such as Snapchat's SnapCodes or Apple's AppClips"),(0,o.kt)("li",{parentName:"ul"},"Creating ",(0,o.kt)("strong",{parentName:"li"},"snapchat-like filters"),", e.g. draw a dog-mask filter over the user's face"),(0,o.kt)("li",{parentName:"ul"},"Creating ",(0,o.kt)("strong",{parentName:"li"},"color filters")," with depth-detection")),(0,o.kt)("p",null,"Because they are written in JS, Frame Processors are ",(0,o.kt)("strong",{parentName:"p"},"simple"),", ",(0,o.kt)("strong",{parentName:"p"},"extensible")," and ",(0,o.kt)("strong",{parentName:"p"},"easy to create")," while still maintaining ",(0,o.kt)("strong",{parentName:"p"},"native performance"),". (Frame Processors can run up to ",(0,o.kt)("strong",{parentName:"p"},"1000 times a second"),"!) Also, you can use ",(0,o.kt)("strong",{parentName:"p"},"over-the-air updates")," to tweak the Hotdog detector's sensitivity without pushing a native update."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Frame Processors require ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},(0,o.kt)("strong",{parentName:"a"},"react-native-reanimated"))," 2.2.0 or higher."))),(0,o.kt)("h3",{id:"interacting-with-frame-processors"},"Interacting with Frame Processors"),(0,o.kt)("p",null,"Since Frame Processors run in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/worklets"},(0,o.kt)("strong",{parentName:"a"},"Worklets")),", you can also easily read from, and assign to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/shared-values"},(0,o.kt)("strong",{parentName:"a"},"Shared Values"))," to create smooth, 60 FPS animations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6}","{6}":!0},"// represents position of the cat on the screen \ud83d\udc08\nconst catBounds = useSharedValue({ top: 0, left: 0, right: 0, bottom: 0 })\n\nconst frameProcessor = useFrameProcessor((frame) => {\n  'worklet'\n  catBounds.value = scanFrameForCat(frame)\n}, [catBounds])\n\nconst boxOverlayStyle = useAnimatedStyle(() => ({\n  position: 'absolute',\n  borderWidth: 1,\n  borderColor: 'red',\n  ...catBounds.value\n}), [catBounds])\n\nreturn (\n  <View>\n    <Camera {...cameraProps} frameProcessor={frameProcessor} />\n    // draws a red rectangle on the screen which surrounds the cat\n    <Reanimated.View style={boxOverlayStyle} />\n  </View>\n)\n")),(0,o.kt)("p",null,"And you can also call back to the React-JS thread using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/runOnJS"},(0,o.kt)("inlineCode",{parentName:"a"},"runOnJS")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{9}","{9}":!0},"const onQRCodeDetected = useCallback((qrCode: string) => {\n  navigation.push(\"ProductPage\", { productId: qrCode })\n}, [])\n\nconst frameProcessor = useFrameProcessor((frame) => {\n  'worklet'\n  const qrCodes = scanQRCodes(frame)\n  if (qrCodes.length > 0) {\n    runOnJS(onQRCodeDetected)(qrCodes[0])\n  }\n}, [onQRCodeDetected])\n")),(0,o.kt)("h3",{id:"technical"},"Technical"),(0,o.kt)("h4",{id:"frame-processors"},"Frame Processors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Frame Processors")," are JS functions that will be ",(0,o.kt)("strong",{parentName:"p"},"workletized")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated"),". They are created on a ",(0,o.kt)("strong",{parentName:"p"},"parallel camera thread")," using a separate JavaScript Runtime (",(0,o.kt)("em",{parentName:"p"},'"VisionCamera JS-Runtime"'),") and are ",(0,o.kt)("strong",{parentName:"p"},"invoked synchronously")," (using JSI) without ever going over the bridge. In a ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor")," you can write normal JS code, call back to the React-JS Thread (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"), use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/shared-values"},"Shared Values")," and call ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugins"),"."),(0,o.kt)("h4",{id:"frame-processor-plugins"},"Frame Processor Plugins"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugins")," are native functions (written in Objective-C, Swift, C++, Java or Kotlin) that are injected into the VisionCamera JS-Runtime. They can be ",(0,o.kt)("strong",{parentName:"p"},"synchronously called")," from your JS Frame Processors (using JSI) without ever going over the bridge. Because VisionCamera provides an easy-to-use plugin API, you can easily create a ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugin")," yourself. Some examples include ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/barcode-scanning"},"Barcode Scanning"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/face-detection"},"Face Detection"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/image-labeling"},"Image Labeling"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/text-recognition"},"Text Recognition")," and more."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Learn how to ",(0,o.kt)("a",{parentName:"p",href:"frame-processors-plugins-overview"},(0,o.kt)("strong",{parentName:"a"},"create Frame Processor Plugins")))),(0,o.kt)("h4",{id:"the-frame-object"},"The ",(0,o.kt)("inlineCode",{parentName:"h4"},"Frame")," object"),(0,o.kt)("p",null,"The Frame Processor gets called with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Frame")," object, which is a ",(0,o.kt)("strong",{parentName:"p"},"JSI HostObject"),". It holds a reference to the native (C++) Frame Image Buffer (~10 MB in size) and exposes properties such as ",(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bytesPerRow")," and more to JavaScript so you can synchronously access them. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Frame")," object can be passed around in JS, as well as returned from- and passed to a native ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugin"),". See ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/mrousavy/status/1412300883149393921"},"this")," tweet for more information."),(0,o.kt)("h3",{id:"using-frame-processor-plugins"},"Using Frame Processor Plugins"),(0,o.kt)("p",null,"Frame Processor Plugins are distributed through npm. To install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/vision-camera-image-labeler"},(0,o.kt)("strong",{parentName:"a"},"vision-camera-image-labeler"))," plugin, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i vision-camera-image-labeler\ncd ios && pod install\n")),(0,o.kt)("p",null,"Then add it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js"),". For the Image Labeler, this will be ",(0,o.kt)("inlineCode",{parentName:"p"},"__labelImage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6}","{6}":!0},"module.exports = {\n  plugins: [\n    [\n      'react-native-reanimated/plugin',\n      {\n        globals: ['__labelImage'],\n      },\n    ],\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You have to restart metro-bundler for changes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," file to take effect."))),(0,o.kt)("p",null,"That's it! \ud83c\udf89 Now you can use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const frameProcessor = useFrameProcessor((frame: Frame) => {\n  'worklet'\n  const labels = labelImage(frame)\n  // ...\n}, [])\n")),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/frame-processor-plugin-list"},(0,o.kt)("strong",{parentName:"a"},"Frame Processor community plugins"))," to discover plugins!"),(0,o.kt)("h3",{id:"benchmarks"},"Benchmarks"),(0,o.kt)("p",null,"I have used ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/ml-kit/ios/label-images"},"MLKit Vision Image Labeling")," to label 4k Camera frames in realtime."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fully natively (written in pure Objective-C, no React interaction at all), I have measured an average of ",(0,o.kt)("strong",{parentName:"li"},"68ms")," per call."),(0,o.kt)("li",{parentName:"ul"},"As a Frame Processor Plugin (written in Objective-C, called through a JS Frame Processor function), I have measured an average of ",(0,o.kt)("strong",{parentName:"li"},"69ms")," per call, meaning ",(0,o.kt)("strong",{parentName:"li"},"the Frame Processor API only takes ~1ms longer than a fully native implementation"),", making it ",(0,o.kt)("strong",{parentName:"li"},"the fastest way to run any sort of Frame Processing in React Native"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All measurements are recorded on an iPhone 11 Pro, benchmarked total execution time of the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1385775-captureoutput"},(0,o.kt)("inlineCode",{parentName:"a"},"captureOutput"))," function by using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/corefoundation/1543542-cfabsolutetimegetcurrent"},(0,o.kt)("inlineCode",{parentName:"a"},"CFAbsoluteTimeGetCurrent")),". Running smaller images (lower than 4k resolution) is much quicker and many algorithms can even run at 60 FPS.")),(0,o.kt)("h3",{id:"performance"},"Performance"),(0,o.kt)("p",null,"Frame Processors will be ",(0,o.kt)("strong",{parentName:"p"},"synchronously")," called for each frame the Camera sees and have to finish executing before the next frame arrives, otherwise the next frame(s) will be dropped. For a frame rate of ",(0,o.kt)("strong",{parentName:"p"},"30 FPS"),", you have about ",(0,o.kt)("strong",{parentName:"p"},"33ms")," to finish processing frames. Use ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/cameraprops.cameraprops-1#frameprocessorfps"},(0,o.kt)("inlineCode",{parentName:"a"},"frameProcessorFps"))," to throttle the frame processor's FPS. For a QR Code Scanner, ",(0,o.kt)("strong",{parentName:"p"},"5 FPS")," might suffice."),(0,o.kt)("h3",{id:"eslint-react-hooks-plugin"},"ESLint react-hooks plugin"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"react-hooks ESLint plugin"),", make sure to add ",(0,o.kt)("inlineCode",{parentName:"p"},"useFrameProcessor")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalHooks")," inside your ESLint config. (See ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks#advanced-configuration"},'"advanced configuration"'),")"),(0,o.kt)("h3",{id:"disabling-frame-processors"},"Disabling Frame Processors"),(0,o.kt)("p",null,"The Frame Processor API spawns a secondary JavaScript Runtime which consumes a small amount of extra CPU and RAM. If you're not using Frame Processors at all, you can disable them by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"VISION_CAMERA_DISABLE_FRAME_PROCESSORS")," flag. Inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"project.pbxproj"),", find the ",(0,o.kt)("inlineCode",{parentName:"p"},"GCC_PREPROCESSOR_DEFINITIONS")," parameter and add the flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:"{3}","{3}":!0},'GCC_PREPROCESSOR_DEFINITIONS = (\n  "DEBUG=1",\n  "VISION_CAMERA_DISABLE_FRAME_PROCESSORS=1",\n  "$(inherited)",\n);\n')),(0,o.kt)("p",null,"Make sure to add this to your Debug-, as well as your Release-configuration."),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"-next-section-zooming-or-creating-a-frame-processor-plugin"},"\ud83d\ude80 Next section: ",(0,o.kt)("a",{parentName:"h4",href:"/docs/guides/zooming"},"Zooming")," (or ",(0,o.kt)("a",{parentName:"h4",href:"/docs/guides/frame-processors-plugins-overview"},"creating a Frame Processor Plugin"),")"))}d.isMDXComponent=!0}}]);