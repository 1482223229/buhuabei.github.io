interface seriesOpt {
  name: string;
}
interface listOpt {
  name: string;
  mapValue: number;
  gdpValue: number;
}
const mapValueJson = import("@/assets/json/mapValue.json");

export default function () {
  let mapValueData: any;
  mapValueJson.then((res: any) => {
    mapValueData = { ...res };
  });
  const getJson = async (json: any) => {
    return json.then((res: any) => {
      const seriesData: seriesOpt[] = [];
      res.features.forEach((item: any) => {
        const obj: seriesOpt = {
          name: item.properties.name,
        };
        seriesData.push(obj);
      });
      return {
        seriesData: [...getNewListData(seriesData)],
        responseData: res,
      };
    });
  };

  const getNewListData = (seriesData: seriesOpt[]) => {
    let list: listOpt[] = [];
    list = seriesData.map((item: seriesOpt) => {
      if (mapValueData[item.name]) {
        const opt: listOpt = {
          name: item.name,
          mapValue: mapValueData[item.name].mapValue,
          gdpValue: mapValueData[item.name].gdpValue,
        };
        return opt;
      } else {
        return {
          name: item.name,
          mapValue: parseInt(Math.random() * 500 + 100 + ""),
          gdpValue: parseInt(Math.random() * 500 + 100 + ""),
        };
      }
    });

    return list;
  };
  return {
    getJson,
  };
}
