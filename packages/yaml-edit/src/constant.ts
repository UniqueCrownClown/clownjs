export const definedData = {
  enable: {
    type: "switch",
    desc: "总开关",
  },
  resourceDef: {
    desc: "resourceDef",
    children: {
      outAdaptors: {
        isSelect: true,
        type: "select",
        desc: "outAdaptors",
        others: {
          multiple: true,
          options: [
            { label: "shortOutAdaptor", value: "shortOutAdaptor" },
            { label: "nioHttpOutAdaptor", value: "nioHttpOutAdaptor" },
          ],
        },
        children: {
          shortOutAdaptor: {
            desc: "shortOutAdaptor",
            isArray: true,
            children: {
              resourceExpr: {
                type: "input",
                desc: "resourceExpr",
                others: {
                  defaultValue: "/out/${serviceCode}",
                  disabled: false,
                },
              },
            },
          },
          nioHttpOutAdaptor: {
            desc: "nioHttpOutAdaptor",
            isArray: true,
            children: {
              resourceExpr: {
                type: "input",
                desc: "resourceExpr",
                others: {
                  defaultValue:
                    "/out/http/${__rf.host}:${__rf.varPort}/${serviceCode}",
                  disabled: false,
                },
              },
              usageType: {
                type: "input",
                desc: "usageType",
                others: {
                  defaultValue: "SND_RCV",
                  disabled: false,
                  isOnce: true,
                },
              },
            },
          },
        },
      },
    },
  },
  rules: {
    isArray: true,
    desc: "规则",
    children: {
      resource: {
        type: "input",
        desc: "资源名",
      },
      enable: {
        type: "input",
        desc: "是否启用",
      },
      grade: {
        type: "select",
        desc: "熔断策略",
        others: {
          options: [
            {
              label: "慢调用比例",
              value: "0",
            },
            {
              label: "异常比例",
              value: "1",
            },
            {
              label: "异常数",
              value: "2",
            },
          ],
          optionRelations: {
            target: "count",
            descRules: {
              "0": "慢调用临界RT",
              "1": "异常比例RT",
              "2": "异常数RT",
            },
          },
        },
      },
      timeWindow: {
        type: "input",
        desc: "处理方式时长",
      },
      count: {
        type: "input",
        desc: "慢调用临界RT",
      },
      minRequestAmount: {
        type: "input",
        desc: "熔断触发最小请求数",
      },
      slowRatioThreshold: {
        type: "input",
        desc: "慢调用比例阈值",
      },
      statIntervalMs: {
        type: "input",
        desc: "统计时长",
      },
    },
  },
};
export const yamlData = {
  enable: true,
  resourceDef: {
    outAdaptors: {
      shortOutAdaptor: [
        {
          resourceExpr: "${serviceCode}",
        },
      ],
      nioHttpOutAdaptor: [
        {
          resourceExpr: "${serviceCode}",
        },
        {
          resourceExpr: "/out/http/${__rf.host}:${__rf.varPort}/${serviceCode}",
          usageType: "SND_RCV",
        },
      ],
    },
  },
  rules: [
    {
      timeWindow: 5,
      statIntervalMs: 10000,
      minRequestAmount: 1,
      resource: "/out/http/0.0.0.0:8010/serviceCode",
      enable: true,
      grade: 1,
      count: 1000,
      slowRatioThreshold: 0.6,
    },
  ],
};
