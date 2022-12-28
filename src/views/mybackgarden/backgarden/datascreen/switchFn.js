/* eslint-disable */
export default (item) => {
  const setItem = (option) => {
    for (let key in option) {
      item[key] = option[key];
    }
  };
  // 周口市
  switch (item.name) {
    case "商水县":
      setItem({
        mapValue: 116.21,
        gdpValue: 300.5,
      });
      break;
    case "扶沟县":
      setItem({
        mapValue: 70.52,
        gdpValue: 233.5,
      });
      break;
    case "郸城县":
      setItem({
        mapValue: 131,
        gdpValue: 327.8,
      });
      break;
    case "淮阳区":
      setItem({
        mapValue: 135,
        gdpValue: 270.8,
      });
      break;
    case "西华县":
      setItem({
        mapValue: 90,
        gdpValue: 279.5,
      });
      break;
    case "鹿邑县":
      setItem({
        mapValue: 116,
        gdpValue: 398.9,
      });
      break;
    case "沈丘县":
      setItem({
        mapValue: 123,
        gdpValue: 332.0,
      });
      break;
    case "太康县":
      setItem({
        mapValue: 135.9,
        gdpValue: 372.7,
      });
      break;
    case "川汇区":
      setItem({
        mapValue: 50.5,
        gdpValue: 317.2,
      });
      break;
    case "项城市":
      setItem({
        mapValue: 116.9,
        gdpValue: 374.2,
      });
      break;
  }
  switch (item.name) {
    case "南阳市":
      setItem({
        mapValue: 1002.12,
        gdpValue: 3925.86,
      });
      break;
    case "郑州市":
      setItem({
        mapValue: 956.9,
        gdpValue: 12003,
      });
      break;
    case "周口市":
      setItem({
        mapValue: 880.92,
        gdpValue: 3267.19,
      });
      break;
    case "商丘市":
      setItem({
        mapValue: 727.39,
        gdpValue: 2925.33,
      });
      break;
    case "驻马店市":
      setItem({
        mapValue: 695.55,
        gdpValue: 2859.27,
      });
      break;
    case "洛阳市":
      setItem({
        mapValue: 674.3,
        gdpValue: 5128.4,
      });
      break;
    case "信阳市":
      setItem({
        mapValue: 640.0,
        gdpValue: 2805.68,
      });
      break;
    case "新乡市":
      setItem({
        mapValue: 572.1,
        gdpValue: 3014.51,
      });
      break;
    case "安阳市":
      setItem({
        mapValue: 511.7,
        gdpValue: 2300.5,
      });
      break;
    case "平顶山市":
      setItem({
        mapValue: 496.0,
        gdpValue: 2455.84,
      });
      break;
    case "开封市":
      setItem({
        mapValue: 454.26,
        gdpValue: 2371.83,
      });
      break;
    case "许昌市":
      setItem({
        mapValue: 434.15,
        gdpValue: 3449.2,
      });
      break;
    case "濮阳市":
      setItem({
        mapValue: 361.0,
        gdpValue: 1649.99,
      });
      break;
    case "焦作市":
      setItem({
        mapValue: 353.4,
        gdpValue: 2123.6,
      });
      break;
    case "漯河市":
      setItem({
        mapValue: 262.5,
        gdpValue: 1573.88,
      });
      break;
    case "三门峡市":
      setItem({
        mapValue: 224.65,
        gdpValue: 1450.71,
      });
      break;
    case "鹤壁市":
      setItem({
        mapValue: 160.6,
        gdpValue: 980.97,
      });
      break;
    case "济源市":
      setItem({
        mapValue: 72.9,
        gdpValue: 703.16,
      });
      break;
    default:
      setItem({
        mapValue: parseInt(Math.random() * 500 + 100 + ''),
        gdpValue: parseInt(Math.random() * 1000 + 100 + ''),
      });
      break;
  }
  return item;
};
