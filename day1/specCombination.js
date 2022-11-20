let data = {
  imgs: ['http://qdsc-1312355499.cos.ap-shanghai.myqcloud.com/img/1657863686601_67ef5171.jpeg'],
  thumb: 'http://qdsc-1312355499.cos.ap-shanghai.myqcloud.com/img/1659436130281_252b8194.jpg',
  name: '一号商品一号商品一号商品一号商品一号商品一号商品一号商品一号商品一号商品一号商品',
  price: '1.00',
  market_price: '1.00',
  content: '<p>这里是内容详情</p>',
  spec_name1: '颜色',
  spec_name2: '容量',
  spec_name3: '尺寸',
  specs: [
    {
      id: 1,
      thumb: '',
      price: '123.00',
      inventory: 3,
      attr: '黑;256G;10',
      spec_value1: '黑',
      spec_value2: '256G',
      spec_value3: '10'
    },
    {
      id: 2,
      thumb: 'http://qdsc-1312355499.cos.ap-shanghai.myqcloud.com/img/1659483937386_560ac130.jpg',
      price: '10.00',
      inventory: 0,
      attr: '红;64G;50',
      spec_value1: '红',
      spec_value2: '64G',
      spec_value3: '50'
    },
    {
      id: 3,
      thumb: 'http://qdsc-1312355499.cos.ap-shanghai.myqcloud.com/img/1659484122801_37e1c843.jpg',
      price: '99.00',
      inventory: 0,
      attr: '白;64G;10',
      spec_value1: '白',
      spec_value2: '64G',
      spec_value3: '10'
    },
    {
      id: 4,
      thumb: 'http://qdsc-1312355499.cos.ap-shanghai.myqcloud.com/img/1659484194141_c181b217.jpg',
      price: '1.00',
      inventory: 0,
      attr: '黑;128G;10',
      spec_value1: '黑',
      spec_value2: '128G',
      spec_value3: '10'
    },
    {
      id: 5,
      thumb: 'http://qdsc-1312355499.cos.ap-shanghai.myqcloud.com/img/1659484259896_416679e4.jpg',
      price: '0.01',
      inventory: 89,
      attr: '红;128G;10',
      spec_value1: '红',
      spec_value2: '128G',
      spec_value3: '10'
    },
    {
      id: 6,
      thumb: 'http://qdsc-1312355499.cos.ap-shanghai.myqcloud.com/img/1659490187785_fc3fc483.png',
      price: '1.00',
      inventory: 9,
      attr: '白;256G;20',
      spec_value1: '白',
      spec_value2: '256G',
      spec_value3: '20'
    },
    {
      id: 7,
      thumb: '',
      price: '1.00',
      inventory: 15,
      attr: '黑;32G;20',
      spec_value1: '黑',
      spec_value2: '32G',
      spec_value3: '20'
    },
    {
      id: 8,
      thumb: '',
      price: '1.00',
      inventory: 15,
      attr: '黑;16G;20',
      spec_value1: '黑',
      spec_value2: '16G',
      spec_value3: '20'
    },
    {
      id: 9,
      thumb: 'https://jmcxcx.oss-cn-zhangjiakou.aliyuncs.com/imgs/1661490858025_058a298d.png',
      price: '99.99',
      inventory: 99,
      attr: '测试',
      spec_value1: '黑',
      spec_value2: '256G',
      spec_value3: '呵呵'
    }
  ]
}

// 商品种类
let specList = [
  { title: data.spec_name1, list: getSpecValue(1) },
  { title: data.spec_name2, list: getSpecValue(2) },
  { title: data.spec_name3, list: getSpecValue(3) }
]

// 获取商品列表方法
function getSpecValue (num) {
  let arr = []
  let target = `spec_value${num}`
  for (let i = 0; i < data.specs.length; i++) {
    let item = data.specs[i][target]
    item && arr.push(item)
  }
  return list = Array.from(new Set(arr))
}
console.log(specList)


