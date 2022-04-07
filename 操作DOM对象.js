// DOM：文档对象模型
// 核心
// 浏览器网页就是一个DOM树形结构
// 添加：添加一个新的DOM节点
// 更新：更新DOM节点
// 获得：遍历DOM节点得到DOM节点
// 删除：删除一个DOM节点

// 获得节点，对应css选择器中的h1标签,id,class
var h1 = document.getElementsByTagName('h1'); 
var id1 = document.getElementById('id1');
var classname1 = document.getElementsByClassName('classname1');

// 更新
id1.innerText = '456'; // 修改文本的值
id1.innerHTML = '<strong>123</strong>'; // 可以解析HTML文本标签
id1.style.color = 'yellow';// 操作css，属性使用 字符串 包裹
id1.style.fontSize = '20px'; // 操作css,字体大小，驼峰命名
id1.style.padding = '2em'; // 操作css,内边距

// 删除节点
// 删除节点的步骤：先通过父节点，再删除自己
var self = document.getElementById('p1');
var father = p1.parentElement;
father.removeChild(self);
// 删除是一个动态过程，子节点的位置时刻在变化着，自动填充前面被删除的子节点
father.removeChild(father.children[0]);
father.removeChild(father.children[0]);
father.removeChild(father.children[0]);

// 创建和插入
// 追加节点
var ida = document.getElementById('ida');
var list = document.getElementById('list');
list.appendChild(ida);
// 创建新节点
var newP = document.createElement('p');
newP.id = 'newP';
newp.innerText = 'hello,js';
// 注意还有：insertBefore,插入到前面
